/*
 * @Author: xiang.gao 57524479+GaoXiang0403@users.noreply.github.com
 * @Date: 2024-12-01 14:51:53
 * @LastEditors: xiang.gao 57524479+GaoXiang0403@users.noreply.github.com
 * @LastEditTime: 2024-12-05 16:20:21
 * @FilePath: /gxui/tailwind.config.ts
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
import { Config } from "tailwindcss/tailwind-config";
// import plugin from "tailwindcss/plugin";

export default <Partial<Config>>{
  darkMode: "media",
  // plugins: [
  //   plugin(function ({ addComponents, theme }) {
  //     addComponents({
  //       ".card": {
  //         backgroundColor: theme("colors.white"),
  //         borderRadius: theme("borderRadius.lg"),
  //         padding: theme("spacing.6"),
  //         boxShadow: theme("boxShadow.xl"),
  //         "&-header": {
  //           padding: theme("spacing.6"),
  //         },
  //       },
  //     });
  //   }),
  // ],
  content: [
    "./pages/**/*.{vue,js,ts,jsx,tsx}",
    "./components/**/*.{vue,js,ts,jsx,tsx}",
    "content/**/*.md",
  ],
};
