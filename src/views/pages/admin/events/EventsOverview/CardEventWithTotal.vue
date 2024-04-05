<script>
  export default {
    name: "TopEventsCard",
    props: {
      title: {
        type: String,
        default: "Demo Title"
      },
      eventNumber: {
        type: Number,
        default: 0
      },
      percentageChange: {
        type: Number,
        default: 0
      },
      percentageCounting: {
        type: Number,
        default: 0
      }
    }
  }
</script>

<template>
  <v-card class="card-event-with-total ma-3 pa-5 elevation-3 rounded-lg">

    <v-sheet class="bg-transparent d-flex align-center">
      <v-card-item class="pa-0">
        <div class="text-caption text-grey-darken-1">{{ title }}</div>
        <div class="text-h4 text-grey-darken-2 font-weight-bold d-flex align-center">
          {{ eventNumber }}

          <!-- Percentage Change -->
          <v-icon v-if="percentageChange > 0" style="font-size: 25px; margin-left: 10px" class="gradient-text-positive" icon="mdi-arrow-up-circle" size="x-small"></v-icon>
          <v-icon v-else style="font-size: 25px; margin-left: 10px" class="gradient-text-negative" icon="mdi-arrow-down-circle" size="x-small"></v-icon>
          <span v-if="percentageChange > 0" class="text-h5 ml-2 gradient-text-positive">{{ percentageChange }}</span>
          <span v-else class="text-h5 ml-2 gradient-text-negative">{{ percentageChange }}</span>
        </div>
      </v-card-item>

      <v-spacer/>

      <v-progress-circular
          :model-value="percentageCounting"
          :rotate="360"
          :size="70"
          :width="3"
          color="teal-lighten-3"
          class="text-center"
      >

        <template v-slot:default>
          <b class="text-grey-darken-1">{{ percentageCounting }}%</b>
          <span class="text-grey-darken-1">of total</span>
        </template>
      </v-progress-circular>
    </v-sheet>

  </v-card>
</template>

<style lang="scss">
@import "src/assets/scss/Variables";
  .card-event-with-total {
    .v-progress-circular {
      .v-progress-circular__content {
        flex-direction: column;
        line-height: 1;
        b {
          font-size: 1.2rem;
        }
        span {
          font-size: 0.8rem;
        }
      }
    }
    &.elevation-3 {
      box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.15) !important;
    }
  }
</style>