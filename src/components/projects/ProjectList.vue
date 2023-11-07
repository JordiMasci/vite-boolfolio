<script>
import ProjectCard from "./ProjectCard.vue";

export default {
  data() {
    return {
      title: "Projects List",
    };
  },

  props: {
    projects: Array,
  },

  components: { ProjectCard },
};
</script>

<template>
  <div class="container">
    <h2>{{ title }}</h2>
    <div class="row row-cols-3 g-4">
      <ProjectCard v-for="project in projects" :project="project" :key="project.id"/>
       
    </div>
  </div>
</template>

<style lang="scss" scoped></style>
