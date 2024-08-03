<script setup lang="ts">
const dev: boolean = import.meta.env.DEV;
</script>

<template>
  <header>
    <nav class="navbar navbar-expand-lg bg-body-secondary p-1 shadow-sm fixed-top">
      <div class="container g-1 flex-nowrap justify-content-start">
        <a class="btn btn-light-transparent me-2 d-lg-none" data-bs-toggle="offcanvas" data-bs-target="#offcanvasNavbar">
          <i class="fas fa-bars"></i>
        </a>
        <router-link to="/" class="navbar-brand pe-2">
          JDR Tools
        </router-link>
        <div class="offcanvas offcanvas-start" tabindex="-1" id="offcanvasNavbar">
          <div class="offcanvas-header justify-content-center">
            <button type="button" class="btn-close" data-bs-dismiss="offcanvas" aria-label="Close"></button>
          </div>
          <div class="offcanvas-body">
            <ul class="navbar-nav flex-grow-1">
              <li class="nav-item" v-if="dev">
                <router-link to="/builder" class="nav-link" activeClass="active">
                  Character Builder
                </router-link>
              </li>
              <li class="nav-item">
                <router-link to="/changelog" class="nav-link" activeClass="active">
                  Changelog
                </router-link>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </nav>
  </header>
</template>

<style scoped>

</style>