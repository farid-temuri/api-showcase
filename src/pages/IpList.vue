<template>
<div>
	<div>
          <ElInput type="textarea" class="w-620px mt-80px block" placeholder="Введите IP адреса" v-model="tableListStore.textareaModel" rows="5">
          </ElInput>
          <ElButton class="mt-20px" @click="tableListStore.fetchTextarea" type="primary">Отправить</ElButton>
            {{ tableListStore.tableList }}
        </div>
</div>
</template>

<script lang='ts' setup>
import { usetableListStore } from '~/store';


const tableListStore = usetableListStore()

</script>