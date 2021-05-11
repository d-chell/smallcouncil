<template>
  <v-app>
    <v-main>
      <div stlye="display: flex;">
        <div style="width: 20%; float: left;">
          <Tasks/>
        </div>
        <div style="display: inline-flex; flex:1; width: 80%;">
          <Calendar/>
        </div>


      </div>
    </v-main>
  </v-app>
</template>
<script>
import Calendar from './components/Calendar';
import Tasks from './components/taskList';

export default {
  name: 'App',

  components: {
    Calendar,
    Tasks,
  },

  data: () => ({
    //
  }),
};
</script>
