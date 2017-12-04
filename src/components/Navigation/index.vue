<template>
  <div>
    <b-navbar toggleable="md" type="dark" variant="info">

      <b-navbar-toggle target="nav_collapse"></b-navbar-toggle>

      <b-navbar-brand to="/pending">Such CodeReview</b-navbar-brand>

      <b-collapse is-nav id="nav_collapse">

        <b-navbar-nav>
          <b-nav-item to="/pending">Pending reviews</b-nav-item>
          <b-nav-item to="/my">My reviews</b-nav-item>
          <b-nav-text @click="eventBusEmit('upload-modal-on')">Upload diff</b-nav-text>
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
    };
  },
  methods: {
    eventBusEmit(eventName) {
      EventBus.$emit(eventName);
    },
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
