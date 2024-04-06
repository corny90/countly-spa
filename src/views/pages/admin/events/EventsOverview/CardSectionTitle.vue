<script>
  export default {
    name: "TopEventsCard",
    props: {
      title: {
        type: String,
        default: "Demo Title"
      }
    }
  }
</script>

<template>
  <v-card class="mt-5 elevation-0 bg-transparent">
    <v-card-item class="pa-3">
      <div class="text-h6 mb-1">{{ title }}</div>
    </v-card-item>
  </v-card>
</template>