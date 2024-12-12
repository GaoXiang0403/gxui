<!--
 * @Author: xiang.gao 57524479+GaoXiang0403@users.noreply.github.com
 * @Date: 2024-12-03 14:17:38
 * @LastEditors: xiang.gao 57524479+GaoXiang0403@users.noreply.github.com
 * @LastEditTime: 2024-12-04 14:20:26
 * @FilePath: /gxui/components/gx/button.vue
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
-->
<template>
  <button
    ref="_refEle"
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
import type { ButtonProps } from "~/utils/types";

const _refEle = ref<HTMLButtonElement>();

withDefaults(defineProps<ButtonProps>(), {
  type: "primary",
  size: "large",
  nativeType: "button",
});

defineExpose({
  refEle: _refEle,
});
</script>

<style scoped lang="scss"></style>
