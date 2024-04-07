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
      }
    }
  }
</script>

<template>
  <v-card class="card-event-simple ma-3 pa-5 elevation-3 rounded-lg shadow-light">

    <v-sheet class="bg-transparent d-flex align-center">
      <v-card-item class="pa-0">
        <div class="text-caption text-grey-darken-1">{{ title }} <v-icon class="mb-1" color="grey-darken-1" icon="mdi-help-circle" size="small"></v-icon></div>
        <div class="text-h4 text-grey-darken-2 font-weight-bold d-flex align-center">
          {{ eventNumber }}
        </div>
      </v-card-item>

      <v-spacer/>

      <v-sheet class="bg-transparent d-flex align-center">
        <v-icon v-if="percentageChange > 0" style="font-size: 35px;" class="gradient-text-positive" icon="mdi-arrow-up-circle" size="x-small"></v-icon>
        <v-icon v-else style="font-size: 35px;" class="gradient-text-negative" icon="mdi-arrow-down-circle" size="x-small"></v-icon>
        <span v-if="percentageChange > 0" class="text-h4 ml-2 font-weight-bold gradient-text-positive">{{ percentageChange }}%</span>
        <span v-else class="text-h4 ml-2 font-weight-bold gradient-text-negative">{{ percentageChange }}%</span>
      </v-sheet>
    </v-sheet>

  </v-card>
</template>

<style lang="scss" scoped>
  @import "../../assets/scss/Variables";
  .card-event-simple {
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
  }
</style>