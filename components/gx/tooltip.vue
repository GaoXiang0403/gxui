<!--
 * @Author: xiang.gao 57524479+GaoXiang0403@users.noreply.github.com
 * @Date: 2024-12-05 16:33:06
 * @LastEditors: xiang.gao 57524479+GaoXiang0403@users.noreply.github.com
 * @LastEditTime: 2024-12-06 18:40:00
 * @FilePath: /gxdemo/components/gx/tooltip.vue
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
-->
<template>
  <div class="gx-tooltip">
    <div ref="triggerNode" class="gx-tooltip-trigger" v-on="event">
      <slot></slot>
    </div>
    <div ref="popperNode" class="gx-tooltip-popper" v-if="isTooltipVisible">
      <slot name="content">
        {{ content }}
      </slot>
    </div>
  </div>
</template>

<script setup lang="ts">
import type { Instance } from "@popperjs/core";
import type { TooltipProps, TooltipEmits } from "~/utils/types";

const props = withDefaults(defineProps<TooltipProps>(), {
    placement: "top",
    trigger: "hover",
  }),
  emits = defineEmits<TooltipEmits>(),
  popperNode = ref<HTMLDivElement>(),
  triggerNode = ref<HTMLDivElement>(),
  isTooltipVisible = ref(false),
  popperInstance = ref<Instance>();

const toggle = () => {
  isTooltipVisible.value = !isTooltipVisible.value;
  emits("visible-change", isTooltipVisible.value);
};

const toggleTooltip = (visible: boolean) => {
  return () => {
    isTooltipVisible.value = visible;
    emits("visible-change", isTooltipVisible.value);
  };
};

let event = reactive<Record<string, any>>({});
const attachEvents = () => {
  if (props.trigger === "hover") {
    event["mouseenter"] = toggleTooltip(true);
    event["mouseleave"] = toggleTooltip(false);
  } else if (props.trigger === "click") {
    event["click"] = toggle;
  }
};

watch(
  () => isTooltipVisible.value,
  (newValue) => {
    if (newValue && popperNode.value && triggerNode.value) {
      const { placement } = props;
      popperInstance.value = createPopper(triggerNode.value, popperNode.value, {
        placement,
      });
    } else {
      popperInstance.value?.destroy();
    }
  },
  { flush: "post" }
);

watch(
  () => props.trigger,
  (newValue, oldValue) => {
    if (newValue !== oldValue) {
      event = {};
      attachEvents();
    }
  }
);

onMounted(() => {
  attachEvents();
});
</script>

<style scoped lang="scss"></style>
