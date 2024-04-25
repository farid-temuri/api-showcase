<template>
  <el-config-provider namespace="ep">
    <div id="main-app">
      <TheHeader/>
      <div class="box-border mx-auto px-100px w-1240px">
        <RouterView :key="$route.path"></RouterView>
      </div>
    </div>
  </el-config-provider>
</template>