import { defineStore } from 'pinia'
import { computed, ref } from 'vue'
import { ipRepository } from '~/api/repository'
import { IpSuccessResult, handleRes } from '~/api/repository/ip.entity'

type loadingStatuses = 'loading' | 'success' | 'fail'

type IpTableList = {
	data?: IpSuccessResult,
	status: loadingStatuses,
}

export const usetableListStore = defineStore( 'tableList', () => {
	const tableList = ref <Map<string,IpTableList>>( new Map() )
	
	const setIdData = ( query: string, status: loadingStatuses, data?: IpSuccessResult ) => {
		const oldval = tableList.value.get(query)
		if ( !oldval ) return
		
		oldval.status = status
		if ( data ) {
			oldval.data = data
		}
	}

	const fetch = async (query:string) => {
		tableList.value.set(
		query,
			{
				status: 'loading',
			}
		)
		const res = await ipRepository.getByIp( query )
		
		const { error, success } = handleRes( res )
		
		if ( error ) {
			setIdData(query,'fail')
		} else {
			setIdData(query,'success',success)
		}
	}
	
	const textareaModel = ref('')
	const idToFetch = computed( () => {
		return new Set( textareaModel.value.split( '\n' ).filter((query:string)=>query.length))
	} )
	
	const fetchTextarea = () => {
		idToFetch.value.forEach( ( query ) => {
			fetch(query)
		})		
	}
	return {
		tableList,
		fetch,
		textareaModel,
		fetchTextarea,
		idToFetch
	}
}
)