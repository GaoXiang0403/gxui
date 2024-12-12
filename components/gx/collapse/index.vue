<!--
 * @Author: xiang.gao 57524479+GaoXiang0403@users.noreply.github.com
 * @Date: 2024-12-06 13:48:48
 * @LastEditors: xiang.gao 57524479+GaoXiang0403@users.noreply.github.com
 * @LastEditTime: 2024-12-12 18:47:52
 * @FilePath: /gxdemo/components/gx/collapse/index.vue
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
-->
<template>
  <div class="gx-collapse">
    <slot></slot>
  </div>
</template>

<script setup lang="ts">
import type {
  CollapseProps,
  CollapseItemName,
  CollapseEmits,
} from "~/utils/types";

const activeNames = defineModel<CollapseItemName[]>("modelValue", {
  default: [],
});

const props = withDefaults(defineProps<CollapseProps>(), {
  accordion: true,
});

const emits = defineEmits<CollapseEmits>();

const handleItemClick = (name: CollapseItemName) => {
  if (props.accordion) {
    activeNames.value = activeNames.value.includes(name) ? [] : [name];
  } else {
    activeNames.value = activeNames.value.includes(name)
      ? activeNames.value.filter((n) => n !== name)
      : [...activeNames.value, name];
  }
  emits("change", activeNames.value);
};

watch(activeNames, (newVal) => {
  if (newVal && newVal.length > 0 && newVal.length > 1 && props.accordion) {
    throw new Error("accordion only support one active item");
  }
});

provide(CollapseContextKey, {
  activeNames,
  handleItemClick,
});

provide("isInGxCollapse", true);
</script>

<style scoped lang="scss">
.gx-collapse {
  --gx-collapse-border-color: var(--gx-border-color-light);
  --gx-collapse-header-height: 48px;
  --gx-collapse-header-bg-color: var(--gx-fill-color-blank);
  --gx-collapse-header-text-color: var(--gx-text-color-primary);
  --gx-collapse-header-font-size: 13px;
  --gx-collapse-content-bg-color: var(--gx-fill-color-blank);
  --gx-collapse-content-text-color: var(--gx-text-color-primary);
  --gx-collapse-content-font-size: 13px;
  --gx-collapse-disabled-text-color: var(--gx-disabled-text-color);
  --gx-collapse-content-border-color: #e8e8e8;
  // border-top: 1px solid var(--gx-collapse-border-color);
  // border-bottom: 1px solid var(--gx-collapse-border-color);
}
</style>
