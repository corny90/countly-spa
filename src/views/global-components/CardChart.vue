<script>
  export default {
    name: "CardChart",
    props: {
      dataChart: {}
    }
  }
</script>

<template>
  <v-card class="ma-3 pa-5 elevation-3 rounded-lg shadow-light">

    <v-sheet class="bg-transparent d-flex align-center">
      <v-card-item class="pa-0">
        <div class="text-h6 mb-1 text-grey-darken-1">{{ dataChart.header.title }}</div>
      </v-card-item>

      <v-spacer/>

      <v-sheet class="bg-transparent align-center d-flex">
        <span v-if="dataChart.header.percentageChange > 0" class="text-h6 mr-2 gradient-text-positive">{{ dataChart.header.percentageChange }}%</span>
        <span v-else class="text-h6 mr-2 font-weight-bold gradient-text-negative">{{ dataChart.header.percentageChange }}</span>

        <v-icon v-if="dataChart.header.percentageChange > 0" style="font-size: 35px;" class="gradient-text-positive" icon="mdi-arrow-up-circle" size="x-small"></v-icon>
        <v-icon v-else style="font-size: 35px;" class="gradient-text-negative" icon="mdi-arrow-down-circle" size="x-small"></v-icon>

        <span class="text-h5 ml-2 font-weight-bold text-grey-darken-1">{{ dataChart.header.eventNumber }}</span>
      </v-sheet>
    </v-sheet>

    <apexchart
        :options="dataChart.options"
        :series="dataChart.series"
        height="200"
    ></apexchart>
  </v-card>
</template>

<style scoped lang="scss">
  .vue-apexcharts {
    min-height: auto !important;
    margin-bottom: -20px;
  }
</style>