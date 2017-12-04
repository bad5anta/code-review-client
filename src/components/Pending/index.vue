<template>
  <b-row >
    <diff-card :key="index" :item="item" v-for="(item, index) in diffs"/>
  </b-row>
</template>

<script>
import { diffs } from '@/services/api';
import DiffCard from '@/components/DiffCard';

export default {
  components: {
    DiffCard,
  },
  data() {
    return {
      loading: false,
      diffs: null,
    };
  },
  created() {
    this.getData();
  },
  methods: {
    async getData() {
      this.loading = true;
      const data = await diffs.index();
      this.loading = false;
      this.diffs = data.filter(({ status }) => status === 'new');
    },
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
