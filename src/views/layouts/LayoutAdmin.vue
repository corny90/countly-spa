<script>
  import { defineComponent } from 'vue';
  import TopAppBar from "@/views/components/TopAppBar.vue";

  export default defineComponent({
    name: "LayoutAdmin",

    components: {
      TopAppBar
    }
  });
</script>

<template>
  <v-layout class="layout-page">
    <TopAppBar/>

    <v-main>
      <router-view/>
    </v-main>
  </v-layout>
</template>

<style lang="scss">
  .layout-page {
    height: 100vh;
  }
</style>