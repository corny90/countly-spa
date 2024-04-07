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
  <v-card class="pa-3 mt-5 elevation-0 bg-transparent">
    <v-sheet class="bg-transparent d-flex align-center">
      <v-card-item class="pa-0">
        <div class="text-h4 mb-1 text-grey-darken-1">{{ title }}</div>
      </v-card-item>
      <v-spacer/>
      <slot></slot>
    </v-sheet>
  </v-card>
</template>