import {  cardEventSimple, cardEventWithTotal, tableHeaders, tableItems } from './data';

// STATE
const state = {
    cardEventSimple: cardEventSimple,
    cardEventWithTotal: cardEventWithTotal,
    tableHeaders: tableHeaders,
    tableItems: tableItems,
};

// GETTERS
const getters = {
  cardEventSimple: state => () => {
    return state.cardEventSimple;
  },
  cardEventWithTotal: state => {
      return state.cardEventWithTotal;
  },
  tableHeaders: state => {
      return state.tableHeaders;
  },
  tableItems: state => {
      return state.tableItems;
  }
};

// ACTIONS
const actions = {
};

// MUTATIONS
const mutations = {
};

export default {
  state,
  getters,
  actions,
  mutations,
};
