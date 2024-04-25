<template>
	<el-table class="rounded-10px" v-model="selectedIps" stripe :data="tableListStore.tableList" border>
		<el-table-column type="selection" width="40" />
    <el-table-column prop="query" label="IP" width="200"> 
			<template #default="slot">
				 <FlagResolver :name="slot.row.data?.countryCode"></FlagResolver>
				{{ baseFormatter(slot.row.data?.query || slot.row?.query )}}
			</template>
		</el-table-column>

    
		<el-table-column sortable label="Country">
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
import { usetableListStore } from '~/store';
import { ref } from 'vue';
import FlagResolver from '~/components/Icons/FlagResolver.vue';

const baseFormatter = ( val?: string ) => {
	return val || '---'
}

const tableListStore = usetableListStore()
const selectedIps = ref([])
</script>