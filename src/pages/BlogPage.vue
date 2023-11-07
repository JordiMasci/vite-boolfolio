<script>
import ProjectList from "../components/projects/ProjectList.vue";
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

  components: { ProjectList },
};
</script>

<template>
  <ProjectList :projects="projects"/>
</template>

<style lang="scss" scoped></style>
