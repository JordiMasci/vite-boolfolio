<script>
import ProjectCard from "../components/projects/ProjectCard.vue";
import axios from "axios";

export default {
  data() {
    return {
      title: "Dettaglio Carta Progetto",
      project: null,
    };
  },
//   methods: {
//     fetchProject(id) {
//       // Ottieni il progetto specifico usando l'id
//       axios
//         .get(`http://127.0.0.1:8000/api/projects/${id}`)
//         .then((response) => {
//           this.project = response.data.data;
//         })
//         .catch((error) => {
//           console.error("Error fetching project:", error);
//         });
//     },
//   },

//   created() {
//     const projectId = this.$route.params.id;
//     this.fetchProject(projectId);
//   },

  components: { ProjectCard },
};
</script>

<template>
  <h1>{{ title }}</h1>
  <p>{{ this.$route.params.id }}</p>
  <!-- <ProjectCard :project="project" /> -->
</template>

<style lang="scss" scoped></style>
