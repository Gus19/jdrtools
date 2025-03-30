<script setup lang="ts">
  import { RouterView } from 'vue-router'
  import Header from "@/components/layout/Header.vue";
  import Footer from "@/components/layout/Footer.vue";
  import {onErrorCaptured, ref} from "vue";
  const env = import.meta.env;

  const error = ref<any>({
    show: false,
    message: null,
    stack: null
  });

  onErrorCaptured((e) => {
    error.value.message = e.message;
    error.value.stack = e.stack?.split('\n')[0];
    error.value.show = true;
    if(env.DEV) {
      console.error(e);
    }
    return false;
  });

  const clipboard = () => {
    navigator.clipboard.writeText(`${error.value.message}\n${error.value.stack}`);
  }
</script>

<template>
  <Header />

  <main class="container-fluid container-xxl d-flex flex-column my-2">
    <router-view />
  </main>

  <div v-if="error.show" class="modal fade modal-lg show d-block">
    <div class="modal-dialog">
      <div class="modal-content">
        <div class="modal-body">
          <p class="text-center">There is an error ...</p>
          <p class="error m-0 text-danger">
            {{ error.message }}
          </p>
          <p v-if="error.stack" class="stack m-0 text-danger">
            {{ error.stack }}
          </p>

          <p class="text-center pt-2">
            Please check or
            <a :href="env.VITE_GITHUB" target="_blank"><i class="fa-brands fa-github"></i> Open an issue</a>
            <button type="button" class="ms-2 btn btn-sm mw btn-secondary" @click="clipboard">
              <i class="fa-regular fa-clipboard" />
              Copy error
            </button>
          </p>

          <div class="text-center">
            <button type="button" class="btn btn-sm mw btn-outline-secondary" @click="error.show = false">
              <i class="fa-solid fa-xmark" />
              Close
            </button>
          </div>
        </div>
      </div>
    </div>
  </div>
  <div v-if="error.show" class="modal-backdrop fade show"></div>

  <Footer />
</template>

<style scoped>
  .error {
    white-space: pre;
  }
  .stack {
    overflow: auto
  }
</style>