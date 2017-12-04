<template>
  <b-col cols="12" class="card-block comment-item">
    <b-card>
      <div v-if="editable">
        <b-form-group>
          <b-form-textarea v-model="commentText"
                           placeholder="Enter something"
                           :rows="3"
                           :max-rows="6">
          </b-form-textarea>
        </b-form-group>
        <b-button variant="success">Save</b-button>
      </div>
      <div v-else>
        <h3>{{data.author}}</h3>
        <p>{{data.text}}</p>
      </div>
    </b-card>
  </b-col>
</template>

<script>
  export default {
    props: ['data'],
    data() {
      return {
        commentText: '',
        editable: true,
      };
    },
  };
</script>

<style>
  .comment-item {
    margin: 1rem 0;
  }
</style>
