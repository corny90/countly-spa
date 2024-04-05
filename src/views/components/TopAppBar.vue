<script>
  export default {
    name: "TopAppBar.vue"
  }
</script>

<template>
  <v-app-bar :elevation="2" class="pl-3 pr-3">
    <v-app-bar-title>Events Overview</v-app-bar-title>

    <template v-slot:append>
      <v-app-bar-title class="text-subtitle-2 ma-0">Updated 15 hours ago</v-app-bar-title>
    </template>
  </v-app-bar>
</template>