<template>
  <div class="dashboard">
  </div>
</template>

<script>

export default {
  name: 'HelloWorld',
  data() {
    return {
      diff: {
        json: {},
        comments: [
          {
            position: null, // will define format later
            text: '', // comment text
          },
        ],
        createdAt: (new Date()).getTime(),
        reviewer: null, // USER included or id
        status: 'new', // Also can be 'done'
        technology: 'ReactJS', // Any
      },
    };
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
