import { createStore } from 'vuex';
import EventService from '@/services/EventService';

export default createStore({
  state: {
    user: 'Elisha Benjamin',
    events: [],
    event: {},
  },
  getters: {},
  mutations: {
    SET_EVENTS: (state, events) => {
      state.events = events;
    },
    SET_EVENT: (state, event) => {
      state.event = event;
    },
    ADD_EVENT: (state, event) => {
      state.events.push(event);
    },
  },
  actions: {
    fetchEvents: ({ commit }) => {
      return EventService.getEvents()
        .then((res) => {
          commit('SET_EVENTS', res.data);
        })
        .catch((err) => {
          throw err;
        });
    },
    fetchEvent: ({ commit, state }, id) => {
      const eventExist = state.events.find((event) => event.id == id);

      if (eventExist) {
        commit('SET_EVENT', eventExist);
      } else {
        return EventService.getEvent(id)
          .then((res) => {
            commit('SET_EVENT', res.data);
          })
          .catch((err) => {
            throw err;
          });
      }
    },
    addEvent: ({ commit }, event) => {
      return EventService.postEvent(event)
        .then(() => {
          commit('ADD_EVENT', event);
        })
        .catch((err) => {
          throw err;
        });
    },
  },
  modules: {},
});
