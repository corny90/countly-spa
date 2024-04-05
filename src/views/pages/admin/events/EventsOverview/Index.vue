<script>
  import CardEventSimple from "./CardEventSimple.vue";
  import CardEventWithTotal from "./CardEventWithTotal.vue";
  export default {
    name: "EventsOverview",
    components: {
      CardEventSimple,
      CardEventWithTotal
    }
  }
</script>

<template>
  <v-layout class="events-overview">
    <v-parallax :src="require('/src/assets/media/bg.jpg')"></v-parallax>

    <v-container class="v-container--fluid">
      <v-row no-gutters>

        <v-col cols="12" sm="12">
          <v-card class="mt-5 elevation-0 bg-transparent">
            <v-card-item class="pa-3">
              <div class="text-h6 mb-1">Top Events By Count In The Last 30 Days</div>
            </v-card-item>
          </v-card>
        </v-col>

        <v-col cols="12" sm="4">
          <card-event-simple title="Total Event Count" :event-number="349.260" :percentage-change="30.3"/>
        </v-col>

        <v-col cols="12" sm="4">
          <card-event-simple title="Events Per User" :event-number="247.9" :percentage-change="22.2"/>
        </v-col>

        <v-col cols="12" sm="4">
          <card-event-simple title="Events Per Session" :event-number="32.5" :percentage-change="-4.5"/>
        </v-col>

        <v-col cols="12" sm="4">
          <card-event-with-total title="Total Event Count" :event-number="349.260" :percentage-change="30.3" :percentage-counting="94.3"/>
        </v-col>

        <v-col cols="12" sm="4">
          <card-event-with-total title="Events Per User" :event-number="247.9" :percentage-change="22.2" :percentage-counting="5.1"/>
        </v-col>

        <v-col cols="12" sm="4">
          <card-event-with-total title="Events Per Session" :event-number="32.5" :percentage-change="-4.5" :percentage-counting="0.3"/>
        </v-col>

      </v-row>

      <v-row no-gutters>
        <v-col cols="12" sm="12">
          <v-sheet class="ma-2 pa-2">
            Events Metrics
          </v-sheet>
        </v-col>
      </v-row>

      <v-row no-gutters>
        <v-col cols="12" sm="12">
          <v-sheet class="ma-2 pa-2">
            Monitor Events
          </v-sheet>
        </v-col>
      </v-row>
    </v-container>

  </v-layout>

</template>

<style lang="scss">
  .events-overview {
    height: 100vh;

    .v-parallax {
      height: 100%;
      width: 100%;
      position: absolute;
    }
  }
</style>