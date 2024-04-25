import { defineStore } from 'pinia'
import { computed, ref } from 'vue'
import { ipRepository } from '~/api/repository'
import { IpSuccessResult, handleRes } from '~/api/repository/ip.entity'

export type loadingStatuses = 'loading' | 'success' | 'fail'

export type IpTableList = {
	data?: IpSuccessResult,
	status: loadingStatuses,
}

export const useIpPageStore = defineStore( 'IpPage', () => {
	const fetchedData = ref<IpSuccessResult | 'loading' | 'not-found'>('loading')
	const isLoading = ref(false)

	const fetchedDataMapKeys = computed( () => {
		if ( typeof fetchedData.value === 'object' ) {
			return Object.keys( fetchedData.value)
		}
		return []
	})

	const fetch = async (query:string) => {
		isLoading.value = true
		try {
			const res = await ipRepository.getByIp( query )
			
			const { error, success } = handleRes( res )
			
			if ( error ) {
				fetchedData.value = 'not-found'
			} else {
				fetchedData.value = success
			}
		} catch (error) {
			fetchedData.value = 'not-found'
		}
		isLoading.value = false
	}
	
	

	return {
		fetch,
		fetchedData,
		fetchedDataMapKeys,
		isLoading
	}
}
)