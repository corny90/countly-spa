<script>
  export default {
    name: "CustomTableTop",
    data () {
      return {
        search: ''
      }
    }
  }
</script>

<template>
  <div>
    <v-card-title class="d-flex align-center pa-0">

      <v-responsive class="mx-auto" max-width="200">
        <v-text-field
            v-model="search"
            density="compact"
            label="Search"
            append-inner-icon="mdi-magnify"
            variant="outlined"
            flat
            hide-details
            single-line
            wid
        ></v-text-field>
      </v-responsive>

      <v-spacer></v-spacer>

      <v-btn class="ml-4" color="grey" density="comfortable" icon="mdi-download" flat variant="outlined" style="border-radius: 4px"/>

    </v-card-title>

    <v-divider class="mt-5"/>
  </div>
</template>

<style lang="scss" scoped>
  .v-divider {
    margin: 0 -20px;
  }
</style>