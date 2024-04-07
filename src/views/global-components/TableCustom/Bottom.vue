<script>
  export default {
    name: "CustomTableBottom",
    props: {
      itemsPerPage: {
        type: Number,
        default: 10
      },
      totalItems: {
        type: Number,
        default: 0
      },
      selectedPage: {
        type: Number,
        default: 1
      },
      pageCount: {
        type: Number,
        default: 1
      },
      totalPages: {
        type: Number,
        default: 1
      }
    },
    data () {
      return {
        itemsPerPageData: this.itemsPerPage,
        selectedPageData: this.selectedPage,
        itemsOptions: [10, 20, 30, 40, 50],
        pageOptions: [1, 2]
      }
    }
  }
</script>

<template>
  <div>
    <v-divider class="mb-6"/>

    <div class="d-flex align-center">
      <!-- ITEMS SETUP -->
      <v-responsive
          class="mx-auto"
          max-width="90"
      >
        <v-select
            v-model="itemsPerPageData"
            :items="itemsOptions"
            variant="outlined"
            density="compact"
            hide-details="auto"
        ></v-select>
      </v-responsive>
      <div class="text-subtitle-2 ml-4 font-weight-light">events per page ({{totalItems}} in total)</div>

      <v-spacer/>

      <!-- PAGES SETUP -->
      <v-responsive class="mx-auto" max-width="90">
        <v-select
            v-model="selectedPageData"
            :items="pageOptions"
            variant="outlined"
            density="compact"
            hide-details="auto"
        ></v-select>
      </v-responsive>
      <div class="text-subtitle-2 ml-4 font-weight-light">of {{ totalPages }} pages</div>

      <v-btn class="ml-4" color="grey" density="comfortable" icon="mdi-chevron-double-left" flat variant="outlined" style="border-radius: 4px"/>
      <v-btn class="ml-4" color="grey" density="comfortable" icon="mdi-chevron-left" flat variant="outlined" style="border-radius: 4px"/>
      <v-btn class="ml-4" color="grey-lighten-1" density="comfortable" icon="mdi-chevron-right" flat variant="outlined" style="border-radius: 4px"/>
      <v-btn class="ml-4" color="grey-lighten-1" density="comfortable" icon="mdi-chevron-double-right" flat variant="outlined" style="border-radius: 4px"/>
    </div>
  </div>
</template>

<style lang="scss" scoped>
  .v-divider {
    margin: 0 -20px;
  }
</style>