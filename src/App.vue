<template>
  <div id="app" v-if="isReady">
    <router-view/>
  </div>
</template>

<script>
  import { mapState, mapActions } from 'vuex';

export default {
  name: 'app',
  mounted() {
    this.getAppReady();
  },
  methods: {
    ...mapActions([
      'getAppReady',
    ])
  },
  computed: {
    users() {
      return this.$store.state.users;
    },
    isReady() {
      return this.$store.state.ready;
    },
  },
};
</script>

<style>
</style>
