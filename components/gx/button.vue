<!--
 * @Author: xiang.gao 57524479+GaoXiang0403@users.noreply.github.com
 * @Date: 2024-12-03 14:17:38
 * @LastEditors: xiang.gao 57524479+GaoXiang0403@users.noreply.github.com
 * @LastEditTime: 2024-12-03 17:56:25
 * @FilePath: /gxui/components/gx/button.vue
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
-->
<template>
  <button
    class="gx-button"
    :class="{
      [`gx-button--${type}`]: type,
      [`gx-button--${size}`]: size,
      'is-plain': plain,
      'is-round': round,
      'is-circle': circle,
      'is-disabled': disabled,
      'is-loading': loading,
    }"
    :disabled="disabled"
    :autofocus="autofocus"
    :type="nativeType"
  >
    <slot></slot>
  </button>
</template>

<script setup lang="ts">
import type { ButtonProps } from "~/utils";

defineOptions({
  name: "GxButton",
});

withDefaults(defineProps<ButtonProps>(), {
  nativeType: "button",
});
</script>

<style scoped lang="scss"></style>
