<!--
 * @Author: xiang.gao 57524479+GaoXiang0403@users.noreply.github.com
 * @Date: 2024-01-15 16:22:43
 * @LastEditors: xiang.gao 57524479+GaoXiang0403@users.noreply.github.com
 * @LastEditTime: 2024-12-03 19:14:00
 * @FilePath: /nuxt-sass/pages/Dashboard.vue
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
-->
<template>
  <main>
    <div class="grid grid-cols-12 gap-4">
      <GxButton round size="large" disabled>Button</GxButton>
    </div>
  </main>
</template>

<script setup lang="ts"></script>

<style scoped lang="scss">
@use "@/assets/scss/layout" as *;

.card {
  background-color: #000;

  @include respond-to(mobile) {
    background-color: red;
  }
}
</style>
