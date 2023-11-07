<script>
import ProjectList from "./components/projects/ProjectList.vue";
import Navbar from "./components/Navbar.vue";


export default {
  data() {
    return {
      title: "Progetti Boolean",
      
    };
  },

  components: { ProjectList, Navbar },

  
};
</script>

<template>
  <div class="container">
    <Navbar />
    <h1 class="my-5">{{ title }}</h1>
    <router-view></router-view>
  </div>

</template>

<style lang="scss" scoped></style>
