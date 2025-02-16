<script setup>
import {VPTeamPage,VPTeamPageTitle,VPTeamMembers} from 'vitepress/theme'
import members from './.vitepress/data/members.ts'
</script>



<VPTeamMembers size="small" :members="members" />


