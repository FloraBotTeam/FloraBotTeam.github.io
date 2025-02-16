<script setup>
import {VPTeamPage,VPTeamPageTitle,VPTeamMembers} from 'vitepress/theme'
import members from '。/.vitepress/theme/data/member.ts'
</script>



<VPTeamMembers size="small" :members="members" />


