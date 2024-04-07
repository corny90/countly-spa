import {  cardEventSimple, cardEventWithTotal, dataTable, dataChartA, dataChartB } from './data';

// STATE
const state = {
    cardEventSimple: cardEventSimple,
    cardEventWithTotal: cardEventWithTotal,
    dataTable: dataTable,
    dataChartA: dataChartA,
    dataChartB: dataChartB
};

// GETTERS
const getters = {
    cardEventSimple: state => state.cardEventSimple,
    cardEventWithTotal: state => state.cardEventWithTotal,
    dataTable: state => state.dataTable,
    dataChartA: state => state.dataChartA,
    dataChartB: state => state.dataChartB
};

// MUTATIONS
const mutations = {
    UPDATE_CARD_EVENT_SIMPLE(state, payload) {
        state.cardEventSimple = state.cardEventSimple.map((item, index) => {
            if (index === payload.index) {
                return { ...item, ...payload.data };
            }
            return item;
        });
    },
    UPDATE_CARD_EVENT_WITH_TOTAL(state, payload) {
        state.cardEventWithTotal = state.cardEventWithTotal.map((item, index) => {
            if (index === payload.index) {
                return { ...item, ...payload.data };
            }
            return item;
        });
    },
    UPDATE_DATA_CHART_A(state, payload) {
        state.dataChartA.header.eventNumber = payload.eventNumber;
        state.dataChartA.header.percentageChange = payload.percentageChange;
        state.dataChartA.series[0].data = payload.seriesDataA;
    },
    UPDATE_DATA_CHART_B(state, payload) {
        state.dataChartB.header.eventNumber = payload.eventNumber;
        state.dataChartB.header.percentageChange = payload.percentageChange;
        state.dataChartB.series[0].data = payload.seriesDataB;
    }
};

// ACTIONS
const actions = {
    updateCardEventSimple({ commit }) {
        state.cardEventSimple.forEach((item, index) => {
            const data = {
                percentageChange: parseFloat((Math.random() * 200 - 100).toFixed(1)),
                eventNumber: Math.floor(Math.random() * 10001) / 10,
            };
            commit('UPDATE_CARD_EVENT_SIMPLE', { index, data });
        });
    },
    updateCardEventWithTotal({ commit }) {
        state.cardEventWithTotal.forEach((item, index) => {
            const data = {
                percentageChange: parseFloat((Math.random() * 200 - 100).toFixed(1)),
                eventNumber: Math.floor(Math.random() * 10001) / 10,
                percentageCounting: parseFloat((Math.random() * 100).toFixed(1)),
            };
            commit('UPDATE_CARD_EVENT_WITH_TOTAL', { index, data });
        });
    },
    updateDataChartA({ commit }) {
        const eventNumber = parseFloat((Math.random() * 1000).toFixed(3));
        const percentageChange = parseFloat((Math.random() * 200 - 100).toFixed(1));
        const seriesDataA = state.dataChartA.series[0].data.map(() => Math.floor(Math.random() * 100));
        commit('UPDATE_DATA_CHART_A', { eventNumber, percentageChange, seriesDataA });
    },
    updateDataChartB({ commit }) {
        const eventNumber = parseFloat((Math.random() * 1000).toFixed(3));
        const percentageChange = parseFloat((Math.random() * 200 - 100).toFixed(1));
        const seriesDataB = state.dataChartB.series[0].data.map(() => Math.floor(Math.random() * 100));
        commit('UPDATE_DATA_CHART_B', { eventNumber, percentageChange, seriesDataB });
    }
};

export default {
  state,
  getters,
  actions,
  mutations,
};
