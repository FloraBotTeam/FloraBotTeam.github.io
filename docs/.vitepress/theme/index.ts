import  DefaultTheme  from "vitepress/theme"
import "simple-icons-font/font/simple-icons.min.css"
import "remixicon/fonts/remixicon.css"
import "./style/index.css"; 
import './style/vp-code-group.css';
import { inBrowser,useRoute } from "vitepress";
import busuanzi from "busuanzi.pure.js";
import { NolebaseInlineLinkPreviewPlugin } from "@nolebase/vitepress-plugin-inline-link-preview/client";
import '@nolebase/vitepress-plugin-inline-link-preview/client/style.css';
import { NolebaseGitChangelogPlugin } from '@nolebase/vitepress-plugin-git-changelog/client'
import '@nolebase/vitepress-plugin-git-changelog/client/style.css'
import { NolebaseEnhancedReadabilitiesMenu, NolebaseEnhancedReadabilitiesScreenMenu } from "@nolebase/vitepress-plugin-enhanced-readabilities";
import '@nolebase/vitepress-plugin-enhanced-readabilities/client/style.css'
import { NolebaseHighlightTargetedHeading } from "@nolebase/vitepress-plugin-highlight-targeted-heading/client";
import '@nolebase/vitepress-plugin-highlight-targeted-heading/client/style.css'
import DataPanel from "./components/DataPanel.vue";
import Confetti from "./components/Confetti.vue";
import Linkcard from "./components/Linkcard.vue"
import ArticleMetadata from "./components/ArticleMetadata.vue"
import { h } from "vue";
import 'viewerjs/dist/viewer.min.css';
import imageViewer from 'vitepress-plugin-image-viewer';
import vImageViewer from 'vitepress-plugin-image-viewer/lib/vImageViewer.vue';


export default {
    extends: DefaultTheme,
    Layout: () => {
      return h(DefaultTheme.Layout,null ,{
        'nav-bar-content-after': () => h(NolebaseEnhancedReadabilitiesMenu),
        'nav-screen-content-after': () => h(NolebaseEnhancedReadabilitiesScreenMenu),
        'layout-top': () => [h(NolebaseHighlightTargetedHeading),]
      })
    },
    enhanceApp({ app, router }) {
      app.component("DataPanel", DataPanel);//注册全局组件
      app.component("Confetti", Confetti); //注册全局组件
      app.component('Linkcard' , Linkcard); //注册全局组件
      app.component('ArticleMetadata' , ArticleMetadata); //注册全局组件
      app.component('vImageViewer',vImageViewer)
      app.use(NolebaseInlineLinkPreviewPlugin);
      app.use(NolebaseGitChangelogPlugin);
      if (inBrowser) {
        router.onAfterRouteChanged = () => {
          busuanzi.fetch();
        };
      }
    },
    setup() {
      const route = useRoute();
      imageViewer(route);
    }
}
