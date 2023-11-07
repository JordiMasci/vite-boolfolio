<script>
import ProjectList from "../components/projects/ProjectList.vue";

export default {
  data() {
    return {
      title: "Hello world",
    };
  },

  components: { ProjectList },
};
</script>

<template>
  <h1>{{ title }}</h1>
</template>

<style lang="scss" scoped></style>
