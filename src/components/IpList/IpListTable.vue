<template>
	<el-table class="rounded-10px" v-model="selectedIps" stripe :data="tableListStore.tableList" border @cell-dblclick="doubleclick">
		<el-table-column type="selection" width="40" />
    <el-table-column prop="query" label="IP" width="200"> 
			<template #default="slot">
				 <FlagResolver :name="slot.row.data?.countryCode"></FlagResolver>
				{{ baseFormatter(slot.row.data?.query || slot.row?.query )}}
			</template>
		</el-table-column>

    
		<el-table-column label="Country">
			<template #default="slot">
				{{ baseFormatter(slot.row.data?.country)}}
			</template>
		</el-table-column>
		<el-table-column label="City/Town"> 
			<template #default="slot">
				{{baseFormatter(slot.row.data?.city)}}
			</template>
		</el-table-column>
    <el-table-column width="65"> 
			<template #default="slot">
				<cell-status :status="slot.row.status"></cell-status>
			</template>
		</el-table-column>
  </el-table>
</template>
<script lang='ts' setup>
import { IpTableList, usetableListStore } from '~/store';
import { ref } from 'vue';
import FlagResolver from '~/components/Icons/FlagResolver.vue';
import { useRouter } from 'vue-router/auto';

const baseFormatter = ( val?: string ) => {
	return val || '---'
}

const tableListStore = usetableListStore()
const selectedIps = ref( [] )
const router = useRouter()
const doubleclick = ( ip: { query: string } & IpTableList ) => {
	const resolverIp = ip.data?.query || ip.query
	router.push( { name: '/[ip]', params: { ip: resolverIp } })
}
</script>