<template>
  <b-col cols="12" class="card-block">
    <b-card>
      <h4 class="card-title">Created by {{item.author}}
        <span v-if="item.status === 'done'" reviewed by <b>{{item.reviewer}}</b>
        </span>
      </h4>
      <h6 class="card-subtitle mb-2 text-muted">Created {{date}}</h6>
      <p><b-badge>{{item.technology}}</b-badge></p>
      <b-button :to="cardLink" variant="primary" v-if="item.status === 'done'">View diff</b-button>
      <b-button :to="cardLink" variant="primary" v-if="item.status === 'new'">Add review</b-button>
    </b-card>
  </b-col>
</template>

<script>
export default {
  props: ['item'],
  data() {
    return {
      date: new Date(this.item.createdAt).toLocaleString(),
      cardLink: `/diff/${this.item.id}`,
    };
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.card-block {
  margin-top: 18px;
}
</style>
