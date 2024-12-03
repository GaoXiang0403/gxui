<!--
 * @Author: xiang.gao 57524479+GaoXiang0403@users.noreply.github.com
 * @Date: 2024-05-06 14:33:02
 * @LastEditors: xiang.gao 57524479+GaoXiang0403@users.noreply.github.com
 * @LastEditTime: 2024-12-02 13:47:11
 * @FilePath: /nuxt-tailwindcss/components/color-mode/view-transition.vue
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
-->
<script lang="ts" setup>
const colorMode = useColorMode();

const changeThemeTransition = (e: PointerEvent) => {
  if (document.startViewTransition) {
    const transition = document.startViewTransition!(() => {
      toggleTheme();
    });
    const x = e.clientX,
      y = e.clientY;
    const targetRadius = Math.hypot(
      Math.max(x, window.innerWidth - x),
      Math.max(y, window.innerHeight - y)
    );
    transition.ready.then(() => {
      document.documentElement.animate(
        {
          clipPath: [
            `circle(0% at ${x}px ${y}px)`,
            `circle(${targetRadius}px at ${x}px ${y}px)`,
          ],
        },
        {
          duration: 1000,
          pseudoElement: "::view-transition-new(root)",
        }
      );
    });
  } else {
    toggleTheme();
  }
};

const toggleTheme = () => {
  if (colorMode.value === "light") {
    colorMode.value = "dark";
  } else {
    colorMode.value = "light";
  }
};

const getThemeIcon = computed(() => {
  if (colorMode.value === "dark") {
    return "i-ph-moon-duotone";
  }
  return "i-ph-sun-duotone";
});
</script>
<template>
  <UButton
    variant="outline"
    :icon="getThemeIcon"
    @click="changeThemeTransition"
  ></UButton>
</template>
