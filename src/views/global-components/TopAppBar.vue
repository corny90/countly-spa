<script>
  export default {
    name: "TopAppBar"
  }
</script>

<template>
  <v-app-bar :elevation="2" class="pl-3 pr-4">
    <v-app-bar-title class="font-weight-bold text-grey-darken-1">Events Overview</v-app-bar-title>

    <template v-slot:append>
      <v-app-bar-title class="text-subtitle-2 text-grey-lighten-1 ma-0">Updated 15 hours ago</v-app-bar-title>
    </template>
  </v-app-bar>
</template>