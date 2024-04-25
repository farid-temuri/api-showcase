import { defineStore } from 'pinia'
import { computed, ref } from 'vue'
import { ipRepository } from '~/api/repository'
import { IpSuccessResult, handleRes } from '~/api/repository/ip.entity'

export type loadingStatuses = 'loading' | 'success' | 'fail'

type IpTableList = {
	data?: IpSuccessResult,
	status: loadingStatuses,
}

export const usetableListStore = defineStore( 'tableListMap', () => {
	const tableListMap = ref <Map<string,IpTableList>>( new Map() )
	const showTable = ref( false )
	const textareaModel = ref( '' )

	const tableList = computed( () => {
		const res: Array<{query:string}&IpTableList> = []
		tableListMap.value.forEach( ( val, key ) => {
			res.push( { ...val,query:key })
		} )
		return res
	})
	
	const setIdData = ( query: string, status: loadingStatuses, data?: IpSuccessResult ) => {
		const oldval = tableListMap.value.get(query)
		if ( !oldval ) return
		
		oldval.status = status
		if ( data ) {
			oldval.data = data
		}
	}

	const fetch = async (query:string) => {
		tableListMap.value.set(
		query,
			{
				status: 'loading',
			}
		)
		try {
			const res = await ipRepository.getByIp( query )
			
			const { error, success } = handleRes( res )
			
			if ( error ) {
				setIdData(query,'fail')
			} else {
				setIdData(query,'success',success)
			}
		} catch (error) {
			setIdData(query,'fail')
		}
	}
	
	const idToFetch = computed( () => {
		return new Set( textareaModel.value.split( '\n' ).filter((query:string)=>query.length))
	} )
	
	const fetchTextarea = () => {
		showTable.value = true
		idToFetch.value.forEach( ( query ) => {
			fetch(query)
		} )
	}


	return {
		tableListMap,
		fetch,
		textareaModel,
		fetchTextarea,
		idToFetch,
		showTable,
		tableList
	}
}
)