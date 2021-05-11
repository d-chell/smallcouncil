<template>
  <v-card
    class="mx-auto"
    max-width="400"
  >
    <v-toolbar
      color="white"
      dark
    >

      <v-toolbar-title>Agenda</v-toolbar-title>

      <v-spacer></v-spacer>

    </v-toolbar>

    <v-list
      flat
      subheader
      three-line
    >
      <v-subheader>Type (7days, today)</v-subheader>

      <v-list-item-group
        v-model="settings"
        multiple
        active-class=""
      >
        <v-list-item>
          <template v-slot:default="{ active }">
            <v-list-item-action>
              <v-checkbox :input-value="active"></v-checkbox>
            </v-list-item-action>

            <v-list-item-content>
              <v-list-item-title>test</v-list-item-title>
              <v-list-item-subtitle>due date</v-list-item-subtitle>
            </v-list-item-content>
          </template>
        </v-list-item>

      </v-list-item-group>
    </v-list>
  </v-card>
</template>
<script>
  export default {
    data () {
      return {
        settings: [],
      }
    },
  }
</script>
