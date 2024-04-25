<template>
	<el-tooltip
	class="box-item"
	:content="tooltopText"
	placement="top"
	>
	<div :class="`${statusBgMap[status]}`" class="size-40px flex justify-center flex-items-center">
			<Loading  v-if="status === 'loading'"> </Loading>
			<Cross v-if="status === 'fail'"> </Cross>
			<Check class="" v-if="status === 'success'"> </Check>
		</div>
		</el-tooltip>
</template>
<script lang='ts' setup>
import { loadingStatuses } from '~/store';
import Check from './Icons/Check.vue';
import Cross from './Icons/Cross.vue';
import Loading from './Icons/Loading.vue';
import { computed } from 'vue';

const props = defineProps<{
	status: loadingStatuses
}>()

const statusTextMap: Record<loadingStatuses, string> = {
	'fail': 'Не успешно',
	'loading': 'Загрузка...',
	'success': 'Успешно загружено',
}

const statusBgMap: Record<loadingStatuses, string> = {
	'fail': 'hover:bg-#F8E8E8',
	'loading': 'hover:bg-#F8F3E8',
	'success': 'hover:bg-#E9F8E8',
}

const tooltopText = computed( () => {
	return statusTextMap[props.status]
})
</script>