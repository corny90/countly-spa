<script>
  import TableCustomBottom from "./Bottom.vue";
  import TableCustomTop from "./Top.vue";

  export default {
    name: "TableCustom",
    components: {
      TableCustomBottom,
      TableCustomTop
    },
    props: {
      headers: {
        type: {},
        default: null
      },
      dataItems: {
        type: {},
        default: null
      }
    },
    data () {
      return {
        selectedPage: 1,
        totalPages: 2,

        itemsPerPage: 10,
        totalItems: 15,
      }
    }
  }
</script>

<template>
  <v-card class="card-event-with-total ma-3 pa-5 elevation-3 rounded-lg">

    <v-data-table
        :headers="headers"
        :items="dataItems"
        density="comfortable"
        :items-per-page="itemsPerPage"
    >
      <template v-slot:top>
        <table-custom-top/>
      </template>
      <template v-slot:bottom>
        <table-custom-bottom
            :items-per-page="itemsPerPage"
            :total-items="totalItems"
            :selected-page="selectedPage"
            :total-pages="totalPages"/>
      </template>

    </v-data-table>
  </v-card>
</template>

<style lang="scss">
@import "../../../assets/scss/Variables";
.card-event-with-total {
  .v-table {
    .v-table__wrapper {
      margin: 0 -20px;
    }
    table {
      thead {
        th {
          text-transform: uppercase;
          &:first-child {
            padding-left: 20px;
          }
          &:last-child {
            padding-right: 20px;
            text-align: right;
            .v-data-table-header__content {
              justify-content: flex-end;
              span {
                order: 1;
              }
              //flex-direction: row-reverse;
            }
          }
        }
      }
      tbody {
        tr {
          td {
            border: none !important;
            &:first-child {
              padding-left: 20px;
              font-weight: 500;
            }
            &:last-child {
              padding-right: 20px;
              text-align: right;
            }
          }
          &:nth-of-type(even) {
            background-color: rgba(245,245,245,0.5);
          }
          &:hover {
            background-color: rgba(245,245,245,1);
          }
        }
      }
    }
  }
}
</style>