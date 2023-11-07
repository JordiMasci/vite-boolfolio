<script>
export default {
  data() {
    return {
      title: "Hello world",
    };
  },

  props: {
    project: Object,
  },
};
</script>

<template>
  <div class="col">
    <div class="card h-100">
      <div class="card-body">
          <h4 class="card-title">{{ project.title }}</h4>
          <hr>
        <p>{{ project.content }}</p>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped></style>
