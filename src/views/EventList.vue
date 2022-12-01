<template>
  <div class="events">
    <h4>Events for Good</h4>
    <EventCard v-for="event in events" :key="event.id" :event="event" />
  </div>
</template>

<script>
import EventService from '@/services/EventService';
import EventCard from '@/components/EventCard.vue';
export default {
  name: 'EventList',

  components: {
    EventCard,
  },
  created() {
    EventService.getEvents()
      .then((res) => {
        this.events = res.data;
      })
      .catch((err) => {
        console.log(err);
      });
  },
  data() {
    return {
      events: [],
    };
  },
};
</script>

<style scoped>
.events {
  display: flex;
  flex-direction: column;
  align-items: center;
}
</style>
