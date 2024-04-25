<template>
	<div class="w-full bg-#F2F0F0">
	<div class=" box-border mx-auto px-100px w-1240px h-100px py-26px box-border flex flex-items-center flex-justify-between">
		<div class="  font-600 font-size-24px text-#0E2E3B">
			IP-PN.COM
		</div>
		<div class="max-w-460px w-full">
			<ElInput class="h-48px" placeholder="95.213.138.174" v-model="searchStr">
				<template #prefix>
        <el-icon class="color-#494949"><search /></el-icon>
      </template>
			</ElInput>
		</div>
		<div class="flex font-500 gap-32px text-#494949">
			<div>Documentation</div>
			<div>Contacts</div>
			<div class="font-600 text-#0E2E3B">Log in</div>
		</div>
	</div>
</div>

</template>
<script lang='ts' setup>
import { ref } from 'vue';
import { Search } from '@element-plus/icons-vue'

const searchStr = ref()

</script>