<script>
import ProjectCard from '../components/projects/ProjectCard.vue'

export default {
  data() {
   return {
     title: "Dettaglio Carta Progetto"
   }
 },

 components: {ProjectCard},

};
</script>

<template>
   <h1>{{ title }}</h1>
   <!-- <ProjectCard/> -->
</template>

<style lang="scss" scoped></style>