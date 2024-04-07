<script>
  import { mapGetters } from 'vuex'

  import CardEventSimple from "../../../global-components/CardEventSimple.vue";
  import CardEventWithTotal from "../../../global-components/CardEventWithTotal.vue";
  import CardSectionTitle from "../../../global-components/CardSectionTitle.vue";
  import CardEventsTableMetrics from "@/views/global-components/TableCustom/Index.vue";
  import CardChart from "../../../global-components/CardChart.vue";

  export default {
    name: "EventsOverview",
    components: {
      CardChart,
      CardEventSimple,
      CardEventWithTotal,
      CardSectionTitle,
      CardEventsTableMetrics
    },
    data () {
      return {
        interval: [],
        value: 0,
      }
    },
    computed: {
      ...mapGetters({
        cardEventSimple: 'cardEventSimple',
        cardEventWithTotal: 'cardEventWithTotal',
        dataTable: 'dataTable',
        dataChartA: 'dataChartA',
        dataChartB: 'dataChartB'
      })
    },
    beforeUnmount () {
      this.interval.forEach(interval => clearTimeout(interval));
    },
    mounted () {
      this.updateValue();
    },
    methods: {
      updateValue() {
        const getRandomInterval = () => Math.floor(Math.random() * 9000) + 1000;

        // Set an interval for cardEventSimple updates
        setInterval(() => {
          this.$store.dispatch('updateCardEventSimple');
        }, getRandomInterval());

        // Set another interval for cardEventWithTotal updates
        setInterval(() => {
          this.$store.dispatch('updateCardEventWithTotal');
        }, getRandomInterval());

        // Set an interval for dataChart updates
        setInterval(() => {
          this.$store.dispatch('updateDataChartA');
        }, getRandomInterval());

        setInterval(() => {
          this.$store.dispatch('updateDataChartB');
        }, getRandomInterval());
      }
    }
  }
</script>

<template>
  <v-layout class="events-overview">
    <v-container class="v-container--fluid">
      <v-row no-gutters>

        <v-col cols="12" sm="12">
          <card-section-title title="Top Events By Count In The Last 30 Days"/>
        </v-col>

        <v-col cols="12" md="4" v-for="(item, index) in cardEventSimple" :key="index">
          <card-event-simple :title="item.title" :event-number="item.eventNumber" :percentage-change="item.percentageChange"/>
        </v-col>

        <v-col cols="12" md="4" v-for="(item, index) in cardEventWithTotal" :key="index">
          <card-event-with-total :title="item.title" :event-number="item.eventNumber" :percentage-change="item.percentageChange" :percentage-counting="item.percentageCounting"/>
        </v-col>

      </v-row>

      <v-row no-gutters>

        <v-col cols="12" sm="12">
          <card-section-title title="Events Metrics"/>
        </v-col>

        <v-col cols="12">
          <card-events-table-metrics :headers="dataTable.headers" :data-items="dataTable.items"/>
        </v-col>

      </v-row>

      <v-row no-gutters>

        <v-col cols="12" sm="12">
          <card-section-title title="Monitor Events">
            <v-btn prepend-icon="mdi-calendar-month" class="elevation-3 rounded-lg shadow-light">
              <template v-slot:prepend>
                <v-icon color="grey-darken-1"></v-icon>
              </template>
              <span class="text-light-blue">Nov 23, 2023 - Mar 21, 2024</span>
            </v-btn>

            <v-btn prepend-icon="mdi-cog" class="ml-4 elevation-3 rounded-lg shadow-light">
              <template v-slot:prepend>
                <v-icon color="grey-darken-1"></v-icon>
              </template>
              <span class="text-light-blue">Configure events</span>
            </v-btn>
          </card-section-title>
        </v-col>

        <v-col cols="12" md="6">
          <card-chart :dataChart="dataChartA"/>
        </v-col>

        <v-col cols="12" md="6">
          <card-chart :dataChart="dataChartB"/>
        </v-col>

      </v-row>
    </v-container>

  </v-layout>

</template>

<style lang="scss" scoped>
  .events-overview {
    height: 100%;
    overflow: auto !important;
    background-image: url('/src/assets/media/bg.jpg');

    .v-parallax {
      height: 100%;
      width: 100%;
      position: fixed;
    }
  }
</style>