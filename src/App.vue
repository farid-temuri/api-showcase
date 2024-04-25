<template>
  <el-config-provider namespace="ep">
    <div id="main-app">
      <TheHeader/>
      <div class="box-border mx-auto px-100px w-1240px">
        <div>
          <ElInput type="textarea" class="w-620px mt-80px block" placeholder="Введите IP адреса" v-model="tableListStore.textareaModel" rows="5">
          </ElInput>
          <ElButton class="mt-20px" @click="tableListStore.fetchTextarea" type="primary">Отправить</ElButton>
            {{ tableListStore.tableList }}
          </div>
      </div>
    </div>
  </el-config-provider>
</template>

<script lang='ts' setup>
import { usetableListStore } from './store';

const tableListStore = usetableListStore()

</script>