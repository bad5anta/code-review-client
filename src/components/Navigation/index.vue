<template>
  <div>
    <b-navbar toggleable="md" type="dark" variant="info" sticky>

      <b-navbar-toggle target="nav_collapse"></b-navbar-toggle>

      <b-navbar-brand to="/dashboard">Such CodeReview</b-navbar-brand>

      <b-collapse is-nav id="nav_collapse">

        <b-navbar-nav>
          <b-nav-item to="/pending">Pending reviews</b-nav-item>
          <b-nav-item to="/finished">Finished reviews</b-nav-item>
          <b-nav-text @click="eventBusEmit('upload-modal-on')">Upload diff</b-nav-text>
        </b-navbar-nav>

        <!-- Right aligned nav items -->
        <b-navbar-nav class="ml-auto">

          <b-nav-item-dropdown right>
            <!-- Using button-content slot -->
            <template slot="button-content">
              <em>{{email}}</em>
            </template>
            <b-dropdown-item to="/login" @click="clearUser">Signout</b-dropdown-item>
          </b-nav-item-dropdown>
        </b-navbar-nav>

      </b-collapse>
    </b-navbar>
    <b-container>
      <router-view/>
    </b-container>
    <upload-diff></upload-diff>
  </div>
</template>

<script>
import UploadDiff from '@/components/UploadDiff';
import EventBus from '@/event-bus';

export default {
  components: {
    UploadDiff,
  },
  data() {
    return {
      email: localStorage.getItem('email') || 'User',
    };
  },
  methods: {
    eventBusEmit(eventName) {
      EventBus.$emit(eventName);
    },
    clearUser() {
      localStorage.removeItem('token');
    },
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
