<!--
 * @Author: xiang.gao 57524479+GaoXiang0403@users.noreply.github.com
 * @Date: 2024-01-15 16:22:43
 * @LastEditors: xiang.gao 57524479+GaoXiang0403@users.noreply.github.com
 * @LastEditTime: 2024-12-12 19:12:55
 * @FilePath: /nuxt-sass/pages/Dashboard.vue
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
-->
<template>
  <main class="@container">
    <div class="grid grid-cols-12 gap-4">
      <GxButton round size="large" disabled>Button</GxButton>
      <GxTooltip placement="bottom" content="This is a tooltip" trigger="click">
        <GxButton>Click Me</GxButton>
      </GxTooltip>
      <GxTooltip placement="bottom" content="This is a tooltip">
        <GxButton>Hover Me</GxButton>
      </GxTooltip>
      <GxCollapse v-model="activeNames">
        <GxCollapseItem
          v-for="item in collapse"
          :key="item"
          :name="item"
          title="Title"
        >
          <div>Content | {{ item }}</div>
        </GxCollapseItem>
      </GxCollapse>
      <article
        class="transition-all relative isolate z-10 flex w-full max-w-80 justify-self-center [transform-style:_preserve-3d] [transform:rotateX(51deg)_rotateZ(43deg)] flex-col justify-end overflow-hidden rounded-2xl bg-gray-900 px-8 pt-80 pb-8 shadow-xl duration-500 hover:-translate-y-4 hover:[transform:rotateX(49deg)__rotateZ(38deg)] hover:shadow-2xl"
      >
        <img
          src="https://images.unsplash.com/photo-1496128858413-b36217c2ce36?ixlib=rb-4.0.3&amp;ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&amp;auto=format&amp;fit=crop&amp;w=3603&amp;q=80"
          alt=""
          class="absolute inset-0 -z-10 size-full object-cover"
        />
        <div
          class="absolute inset-0 -z-10 bg-gradient-to-t from-gray-900 via-gray-900/40"
        ></div>
        <div
          class="absolute inset-0 -z-10 rounded-2xl ring-1 ring-gray-900/10 ring-inset"
        ></div>
        <div
          class="flex flex-wrap items-center gap-y-1 overflow-hidden text-sm/6 text-gray-300"
        >
          <time datetime="2020-03-16" class="mr-8">Mar 16, 2020</time>
          <div class="-ml-4 flex items-center gap-x-4">
            <svg
              view-box="0 0 2 2"
              class="-ml-0.5 size-0.5 flex-none fill-white/50"
            >
              <circle r="1" cx="1" cy="1"></circle>
            </svg>
            <div class="flex gap-x-2.5">
              <img
                src="https://images.unsplash.com/photo-1519244703995-f4e0f30006d5?ixlib=rb-1.2.1&amp;ixid=eyJhcHBfaWQiOjEyMDd9&amp;auto=format&amp;fit=facearea&amp;facepad=2&amp;w=256&amp;h=256&amp;q=80"
                alt=""
                class="size-6 flex-none rounded-full bg-white/10"
              />
              Michael Foster
            </div>
          </div>
        </div>
        <h3 class="mt-3 text-lg/6 font-semibold text-white">
          <span class="absolute inset-0"></span>
          Boost your conversion rate
        </h3>
      </article>
    </div>
  </main>
</template>

<script setup lang="ts">
const activeNames = ref([]);
const collapse = ref(["name", "age"]);
</script>

<style scoped lang="scss">
@use "@/assets/scss/layout" as *;

.card {
  background-color: #000;

  @include respond-to(mobile) {
    background-color: red;
  }
}
</style>
