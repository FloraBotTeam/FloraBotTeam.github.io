<script setup>
import {VPTeamPage,VPTeamPageTitle,VPTeamMembers} from 'vitepress/theme'
import members from './.vitepress/theme/data/member.ts' // luyanci:还不如直接写进来…
</script>



<VPTeamMembers size="small" :members="members" />


