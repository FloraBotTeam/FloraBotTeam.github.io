import { defineConfig } from "vitepress";
import en_us from "./en-us"
import zh_cn from "./zh-cn"

export default defineConfig({
  locales: {
    root:{
        label: '简体中文',
        description: zh_cn.description,
        lang: zh_cn.lang,
        themeConfig: zh_cn.themeConfig
    },
    "en-us":{
        label: 'English(US)',
        description: en_us.description,
        lang: en_us.lang,
        themeConfig: en_us.themeConfig
    }
    },
}
);