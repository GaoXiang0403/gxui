<!--
 * @Author: xiang.gao 57524479+GaoXiang0403@users.noreply.github.com
 * @Date: 2024-12-06 13:49:08
 * @LastEditors: xiang.gao 57524479+GaoXiang0403@users.noreply.github.com
 * @LastEditTime: 2024-12-12 18:46:36
 * @FilePath: /gxdemo/components/gx/collapse/item.vue
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
-->
<template>
  <div
    class="gx-collapse-item"
    :class="{ 'is-disabled': disabled, 'is-active': isActive }"
  >
    <div
      :id="`collapse-item-header-${name}`"
      class="gx-collapse-item__header"
      :class="{ 'is-disabled': disabled, 'is-active': isActive }"
      @click="handleClick"
    >
      <slot name="title">{{ title }}</slot>
    </div>
    <div
      :id="`collapse-item-content-${name}`"
      class="gx-collapse-item__content"
    >
      <div class="gx-collapse-item__content__inner">
        <div class="gx-collapse-item__content__inner__box">
          <slot></slot>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import type { CollapseItemProps } from "~/utils/types";

const props = withDefaults(defineProps<CollapseItemProps>(), {
  title: "",
});

const collapseContext = inject(CollapseContextKey);

const isInCollapse = inject("isInGxCollapse");

const handleClick = () => {
  if (props.disabled) return 0;
  collapseContext?.handleItemClick(props.name);
};

const isActive = computed(() => {
  return collapseContext?.activeNames.value.includes(props.name);
});

onMounted(() => {
  if (!isInCollapse) {
    throw new Error("CollapseItem must be used inside Collapse");
  }
});
</script>

<style scoped lang="scss">
.gx-collapse-item {
  &.is-active {
    .gx-collapse-item__content {
      grid-template-rows: 1fr;
    }
  }
  &__header {
    @apply flex items-center justify-between;
    height: var(--gx-collapse-header-height);
    line-height: var(--gx-collapse-header-height);
    background-color: var(--gx-collapse-header-bg-color);
    color: var(--gx-collapse-header-text-color);
    cursor: pointer;
    font-size: var(--gx-collapse-header-font-size);
    font-weight: 500;
    transition: border-bottom-color var(--gx-transition-duration);
    outline: none;
    // border-bottom: 1px solid var(--gx-collapse-border-color);
    &.is-disabled {
      color: var(--gx-collapse-disabled-text-color);
      cursor: not-allowed;
      background-image: none;
    }
    &.is-active {
      border-bottom-color: transparent;
    }
  }
  &__content {
    @apply grid grid-rows-[0fr] transition-[grid-template-rows] duration-500 ease-out;
    &__inner {
      will-change: height;
      background-color: var(--gx-collapse-content-bg-color);
      overflow: hidden;
      font-size: var(--gx-collapse-content-font-size);
      color: var(--gx-collapse-content-text-color);
      border-bottom: 1px solid var(--gx-collapse-content-border-color);
      overflow: hidden;
      &__box {
        padding-bottom: 25px;
      }
    }
  }
}
</style>
