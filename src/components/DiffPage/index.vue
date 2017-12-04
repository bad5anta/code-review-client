<template>
  <div class="dashboard">
    <p><b>Author:</b> Pupkin</p>
    <p><b>Reviewer:</b> Pupkin</p>
    <p><b>Date:</b> date</p>
    <p><b>Status:</b> new</p>
    <p><b>Technology:</b> ReactJS</p>

    <div id="diff-holder" v-for="(jsonDiffElement, fileIndex) in diff">
      <diff-file :fileElement="jsonDiffElement" :fileIndex="fileIndex" />
    </div>
  </div>
</template>

<script>
import DiffFile from '@/components/DiffFile';

export default {
  components: {
    DiffFile,
  },
  data() {
    return {
    };
  },
  computed: {
    diff() {
      const diff = this.$store.state.diffs[this.$route.params.diffId];
      console.log('diff', diff);
      return JSON.parse(diff.attributes.codeChanges);
    },
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style>
  #diff-holder {
    margin-top: 2rem;
  }

  .dashboard {
    padding-top: 2rem;
  }
</style>
