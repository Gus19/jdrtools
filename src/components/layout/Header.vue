<script setup lang="ts">
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
<!--        <div class="offcanvas offcanvas-start" tabindex="-1" id="offcanvasNavbar">-->
<!--          <div class="offcanvas-header justify-content-center">-->
<!--            <button type="button" class="btn-close" data-bs-dismiss="offcanvas" aria-label="Close"></button>-->
<!--          </div>-->
<!--          <div class="offcanvas-body">-->
<!--            <ul class="navbar-nav flex-grow-1">-->

<!--              <li class="nav-item dropdown">-->
<!--                <a class="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">-->
<!--                  Archives-->
<!--                </a>-->
<!--                <ul class="dropdown-menu bg-body-secondary" aria-labelledby="navbarDropdown">-->
<!--                  <li>-->
<!--                    <router-link to="/characters" class="dropdown-item" activeClass="active">-->
<!--                      Personnages-->
<!--                    </router-link>-->
<!--                  </li>-->
<!--                  <li>-->
<!--                    <router-link to="/cones" class="dropdown-item" activeClass="active">-->
<!--                      Cônes-->
<!--                    </router-link>-->
<!--                  </li>-->
<!--                  <li>-->
<!--                    <router-link to="/relics" class="dropdown-item" activeClass="active">-->
<!--                      Reliques-->
<!--                    </router-link>-->
<!--                  </li>-->
<!--                </ul>-->
<!--              </li>-->
<!--            </ul>-->
<!--            <hr class="m-0"/>-->
<!--          </div>-->
<!--        </div>-->
      </div>
    </nav>
  </header>
</template>

<style scoped>

</style>