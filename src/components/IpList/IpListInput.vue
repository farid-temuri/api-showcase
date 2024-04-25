<template>
	<div>
		<ElInput type="textarea" class="w-620px block" placeholder="Введите IP адреса" v-model="tableListStore.textareaModel" rows="5">
			</ElInput>
		<ElButton class="mt-20px" @click="tableListStore.fetchTextarea" type="primary">Отправить</ElButton>
	</div>
</template>
<script lang='ts' setup>
import { usetableListStore } from '~/store';

const tableListStore = usetableListStore()

setTimeout( () => {
	
	tableListStore.textareaModel = `7.7.7.7
	8.8.8.8
	24.48.0.1
	195.16.32.227
	asdasd
	`
	tableListStore.fetchTextarea()
}, 10);
	


</script>