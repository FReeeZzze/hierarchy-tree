import Vue from "vue";
import Vuex from "vuex";
import { SET_CITIES, SET_HEAP, SET_CITIZENS } from "./mutation-types";
Vue.use(Vuex);

const store = new Vuex.Store({
  state: {
    heap: {},
    cities: [],
    citizens: [],
  },
  mutations: {
    [SET_CITIES](state, payload) {
      state.cities = payload;
    },
    [SET_CITIZENS](state, payload) {
      state.citizens = payload;
    },
    [SET_HEAP](state, payload) {
      if (payload.name && payload.value) {
        state.heap[payload.name] = payload.value;
      } else {
        state.heap = payload;
      }
    },
  },
  getters: {
    itemInHeap: (state) => (item) => {
      const existsItem = state.heap[item];
      return existsItem ? existsItem : [];
    },
    filterCityById: (state) => (id) => {
      return state.cities.filter((c) => c.id === id || c._id === id);
    },
  },
  actions: {
    setHeap({ commit }, payload) {
      commit(SET_HEAP, payload);
    },
    setCities({ commit }, payload) {
      commit(SET_CITIES, payload);
    },
    setCitizens({ commit }, payload) {
      commit(SET_CITIZENS, payload);
    },
  },
});

export default store;
