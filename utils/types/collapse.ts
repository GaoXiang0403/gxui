/*
 * @Author: xiang.gao 57524479+GaoXiang0403@users.noreply.github.com
 * @Date: 2024-12-06 13:24:59
 * @LastEditors: xiang.gao 57524479+GaoXiang0403@users.noreply.github.com
 * @LastEditTime: 2024-12-07 21:08:52
 * @FilePath: /gxdemo/utils/types/collapse.ts
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */

import type { InjectionKey } from "vue";

export type CollapseModel = {
  modelValue: CollapseItemName[];
};

export type CollapseProps = {
  accordion?: boolean;
};

export interface CollapseItemProps {
  name: CollapseItemName;
  title?: string;
  disabled?: boolean;
}
export type CollapseItemName = string | number;

export interface CollapseContext {
  activeNames: Ref<CollapseItemName[]>;
  handleItemClick: (name: CollapseItemName) => void;
}

export interface CollapseEmits {
  (e: "change", value: CollapseItemName[]): void;
}

export const CollapseContextKey: InjectionKey<CollapseContext> =
  Symbol("CollapseContext");
