<script>
// import MyComponent from "./components/MyComponent. vue!";

export default {
  props: {
    project: Object,
  },
};
</script>

<template>
  <nav class="navbar navbar-expand-lg bg-body-tertiary">
    <div class="container-fluid">
      <a class="navbar-brand" href="#">Navbar</a>
      <button
        class="navbar-toggler"
        type="button"
        data-bs-toggle="collapse"
        data-bs-target="#navbarNav"
        aria-controls="navbarNav"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse" id="navbarNav">
        <ul class="navbar-nav">
          <li class="nav-item">
            <router-link :to="{name: 'homepage'}">
              <span class="nav-link active" aria-current="page">Home</span>
            </router-link>
          </li>
          <li class="nav-item">
            <router-link :to="{name: 'blog'}">
              <span class="nav-link active" aria-current="page">Blog</span>
            </router-link>
          </li>
          <li class="nav-item">
            <router-link v-if="project && project.id" :to="{ name: 'detail', params: { id: project.id } }">
              <span class="nav-link active" aria-current="page">Dettaglio</span>
            </router-link>
          </li>
        </ul>
      </div>
    </div>
  </nav>
</template>

<style lang="scss" scoped></style>
