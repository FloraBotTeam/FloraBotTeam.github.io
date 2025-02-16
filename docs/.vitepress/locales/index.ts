import { defineConfig } from "vitepress";
import zh_cn from "./zh-cn"

export default defineConfig({
  locales: {
    root:{
        label: '简体中文',
        description: zh_cn.description,
        lang: zh_cn.lang,
        themeConfig: zh_cn.themeConfig
    }
}
});