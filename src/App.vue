<script>
import ProjectList from "./components/projects/ProjectList.vue";
import axios from "axios";

export default {
  data() {
    return {
      title: "Hello world",
      projects: [],

      api: {
        baseUrl: "http://127.0.0.1:8000/api/projects",
      },
    };
  },

  components: { ProjectList },

  methods: {
    fetchProjects(uri = this.api.baseUrl) {
      axios.get(uri).then((response) => {
        this.projects = response.data.data;
      });
    },
  },

  created() {
    this.fetchProjects();
  },
};
</script>

<template>
  <h1>{{ title }}</h1>

  <ProjectList :projects="projects"/>
</template>

<style lang="scss" scoped></style>
