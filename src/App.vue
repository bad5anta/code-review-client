<template>
  <div id="app">
    <router-view/>
  </div>
</template>

<script>

export default {
  name: 'app',
  data() {
    return {
      users: [],
      diffs: [],
      stacks: [],
    };
  },
  mounted() {

  },
};
</script>

<style>
</style>
