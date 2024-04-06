<script>
  import CardEventSimple from "./CardEventSimple.vue";
  import CardEventWithTotal from "./CardEventWithTotal.vue";
  import CardSectionTitle from "./CardSectionTitle.vue";
  export default {
    name: "EventsOverview",
    components: {
      CardEventSimple,
      CardEventWithTotal,
      CardSectionTitle
    },
    data () {
      return {
        cardEventSimple: [
          { title: "Total Event Count", eventNumber: 349.260, percentageChange: 30.3 },
          { title: "Events Per User", eventNumber: 247.9, percentageChange: 22.2 },
          { title: "Events Per Session", eventNumber: 32.5, percentageChange: -4.5 }
        ],
        cardEventWithTotal: [
          { title: "Total Event Count", eventNumber: 349.260, percentageChange: 30.3, percentageCounting: 94.3 },
          { title: "Events Per User", eventNumber: 247.9, percentageChange: 22.2, percentageCounting: 5.1 },
          { title: "Events Per Session", eventNumber: 32.5, percentageChange: -4.5, percentageCounting: 0.3 }
        ],
        interval: {},
        value: 0,
      }
    },
    beforeUnmount () {
      this.interval.forEach(interval => clearTimeout(interval));
    },
    mounted () {
      this.updateValue();
    },
    methods: {
      updateValue() {
        // Function to get a random interval between 1 second and 10 seconds
        const getRandomInterval = () => Math.floor(Math.random() * 9000) + 1000;

        // Update simple events with random intervals
        this.cardEventSimple.forEach((item, index) => {
          const updateFunction = () => {
            item.percentageChange = parseFloat((Math.random() * 200 - 100).toFixed(1));
            item.eventNumber = Math.floor(Math.random() * 10001) / 10;
            this.interval[index] = setTimeout(updateFunction, getRandomInterval());
          };
          updateFunction();
        });

        // Update events with total with random intervals
        this.cardEventWithTotal.forEach((item, index) => {
          const updateFunction = () => {
            item.percentageChange = parseFloat((Math.random() * 200 - 100).toFixed(1));
            item.eventNumber = Math.floor(Math.random() * 10001) / 10;
            item.percentageCounting = parseFloat((Math.random() * 100).toFixed(1));
            this.interval[index] = setTimeout(updateFunction, getRandomInterval());
          };
          updateFunction();
        });
      }
    }
  }
</script>

<template>
  <v-layout class="events-overview">
    <v-parallax :src="require('/src/assets/media/bg.jpg')"></v-parallax>

    <v-container class="v-container--fluid">
      <v-row no-gutters>

        <v-col cols="12" sm="12">
          <card-section-title title="Events Overview"/>
        </v-col>

        <v-col cols="12" sm="4" v-for="(item, index) in cardEventSimple" :key="index">
          <card-event-simple :title="item.title" :event-number="item.eventNumber" :percentage-change="item.percentageChange"/>
        </v-col>

        <v-col cols="12" sm="4" v-for="(item, index) in cardEventWithTotal" :key="index">
          <card-event-with-total :title="item.title" :event-number="item.eventNumber" :percentage-change="item.percentageChange" :percentage-counting="item.percentageCounting"/>
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