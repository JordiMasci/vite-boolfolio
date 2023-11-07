<script>
import ProjectList from "./components/projects/ProjectList.vue";
import Navbar from "./components/Navbar.vue";


export default {
  data() {
    return {
      title: "Hello world",
      
    };
  },

  components: { ProjectList, Navbar },

  
};
</script>

<template>
  <div class="container">
    <h1>{{ title }}</h1>
    <Navbar/>
    <router-view></router-view>
  </div>

  <!-- <ProjectList :projects="projects"/> -->
</template>

<style lang="scss" scoped></style>
