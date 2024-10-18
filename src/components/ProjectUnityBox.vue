<script lang="ts">
import {defineComponent} from 'vue'
import ProjectU from "./ProjectU.vue";
import {Project} from "../interface/types.ts";

export default defineComponent({
  name: "ProjectUnityBox",
  components: {ProjectU},
  props: {
    projectList: {
      type: Array as () => Project[],
      required: true
    }
  }
})
</script>

<template>
  <div id="BoxBody">
    <img src="@/assets/svg_icon/Unity-icon.svg" alt="unity-icon" width="25px" height="25px" />
    <label>Unity Projects</label>
    <table>
      <tr v-for="item in projectList" ><td>
        <project-u :url="item.url" :icon_url="item.icon_url" :name="item.name" :date="item.date" :author="item.author?item.author:'null'" :background_url="item.background_photo_url"/>
      </td></tr>
    </table>
  </div>
</template>

<style scoped>
#BoxBody{
  padding: 0.1rem;
  margin: 5px;
  background-color: #7E7D8E;
  color: #fff;
  min-width: 250px;
  max-width: 768px;
  width: 45%;
  border: 4px solid var(--NFSW-card-border);
  border-radius: 10px 10px 0 0;
  overflow: hidden;
}
table{
  width: 100%;
  background-color: var(--NFSW-bankground-color);
}
@media (max-width: 768px) {
  #BoxBody{
    width: 100%;
  }
}
</style>