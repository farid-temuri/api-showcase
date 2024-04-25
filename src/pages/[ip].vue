
<template>
  <div v-loading="pageStore.isLoading">
    <el-empty v-if="typeof pageStore.fetchedData === 'string'" :description="pageStore.fetchedData" />
    <div v-else class="pt-80px max-w-600px">
      <div class="flex justify-between flex-items-center py-1" v-for="key in  pageStore.fetchedDataMapKeys">
        <div>
          <ElTag :type="'info'">
            {{ key }}
          </ElTag>
          
        </div>
        <div>
          <ElTag :size="'large'" :type="'success'">
            {{ pageStore.fetchedData[key] }}
          </ElTag>
      </div>
      </div>
    </div>
  </div>
</template>

<script lang='ts' setup>
import { useRoute } from 'vue-router/auto';
import { useIpPageStore } from '../store'
const route = useRoute()
const pageStore = useIpPageStore()

if ( route.params.ip ) {
  pageStore.fetch( route.params.ip )
}

</script>
