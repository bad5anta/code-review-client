
<template>
  <div class="dashboard">
    <li v-for="(item, index) in diffs">
      <b-card title="Card Title"
        :key="item.id"
        img-src="https://lorempixel.com/600/300/food/5/"
        img-alt="Image"
        img-top
        tag="article"
        style="max-width: 20rem;"
        class="mb-2">
        <p class="card-text">
          Some quick example text to build on the card title and make up the bulk of the card's content.
        </p>
        <b-button href="#" variant="primary">Go somewhere</b-button>
      </b-card>
    </li>
  </div>
</template>

<script>
import { diffs } from '@/services/api';

export default {
  name: 'HelloWorld',
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
      this.diffs = data;
    },
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
