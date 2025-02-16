---
layout: page
gitChangelog: false
---
<script setup>
import {VPTeamPage,VPTeamPageTitle,VPTeamMembers} from 'vitepress/theme'

const members= [
  {
    avatar: 'https://github.com/AEBC08.png',
    name: 'AEBC08',
    title: '项目发起者/主要开发者',
    links:[
      { icon:'github',link:'https://github.com/AEBC08'}
    ]
  },
  {
    avatar: 'https://github.com/luyanci.png',
    name: 'luyanci',
    title: '文档维护者',
    links:[
      { icon:'github',link:'https://github.com/luyanci'}
    ]
  },
  {
    avatar: 'https://github.com/wuchang325.png',
    name: 'Wuchang325',
    title: '文档维护者/前端开发者',
    links:[
      { icon:'github',link:'https://github.com/wuchang325'}
    ]
  },
]

</script>

<VPTeamPage>
    <VPTeamPageTitle>
    <template #title>
        FloraBot 团队成员
    </template>
    </VPTeamPageTitle>
    <VPTeamMembers size="small" :members="members" />
</VPTeamPage>



