<template>
  <div class="mt-80px">
    <IpListInput v-if="!tableListStore.showTable"/>
    <IpListTable v-else></IpListTable>
  </div>
</template>

<script lang='ts' setup>
import { usetableListStore } from '~/store';
import IpListInput from '../components/IpList/IpListInput.vue';
import IpListTable from '../components/IpList/IpListTable.vue';


const tableListStore = usetableListStore()

</script>