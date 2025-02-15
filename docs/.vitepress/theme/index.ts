import  DefaultTheme  from "vitepress/theme"
import "simple-icons-font/font/simple-icons.min.css"
import "remixicon/fonts/remixicon.css"
import "./style/index.css"; 
import './style/vp-code-group.css';
import { inBrowser } from "vitepress";
import busuanzi from "busuanzi.pure.js";
import { NolebaseInlineLinkPreviewPlugin } from "@nolebase/vitepress-plugin-inline-link-preview/client";
import '@nolebase/vitepress-plugin-inline-link-preview/client/style.css';
import DataPanel from "./components/DataPanel.vue";
import Confetti from "./components/Confetti.vue";
import Linkcard from "./components/Linkcard.vue"
import ArticleMetadata from "./components/ArticleMetadata.vue"



export default {
    extends: DefaultTheme,
    enhanceApp({ app, router }) {
      app.component("DataPanel", DataPanel);//注册全局组件
      app.component("Confetti", Confetti); //注册全局组件
      app.component('Linkcard' , Linkcard); //注册全局组件
      app.component('ArticleMetadata' , ArticleMetadata); //注册全局组件
      app.use(NolebaseInlineLinkPreviewPlugin);
      if (inBrowser) {
        router.onAfterRouteChanged = () => {
          busuanzi.fetch();
        };
      }
    }
}