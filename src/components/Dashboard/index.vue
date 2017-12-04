<template>
  <div class="dashboard">
    <upload-diff></upload-diff>
  </div>
</template>

<script>
  import UploadDiff from '@/components/UploadDiff';

export default {
  name: 'HelloWorld',
  components: {
    UploadDiff,
  },
  data() {
    return {
      msg: 'Welcome to Your Vue.js App',
    };
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
