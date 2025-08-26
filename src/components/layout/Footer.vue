<script setup lang="ts">
  const env = import.meta.env;
</script>

<template>
  <footer class="bg-body-secondary p-2-5 mt-auto">
    <div class="container">
      <p class="text-muted">
        Developed by <a :href="env.VITE_GITHUB" target="_blank"><i class="fa-brands fa-github"></i> {{ env.VITE_ADMIN }}</a>. All resources are the property of Wizards of the Coast.
        <router-link to="/privacy">
          Privacy Policy
        </router-link>
        <br /><b>Disclaimer:</b> This tools is intended as an easily-accessible digital reference for products you already own. Please ensure you only access content in accordance with your local laws.
      </p>
    </div>
  </footer>
</template>