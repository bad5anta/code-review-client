<template>
  <b-row >
    <b-col cols="12" v-if="pending.length > 0" class="card-block">
      <b-card title="Pending Reviews" sub-title="Last 20 entries">
        <b-table stacked="md" :items="pending" :fields="fields">
          <template slot="createdAt" slot-scope="row">
            {{ new Date(row.item.createdAt).toLocaleString() }}
          </template>
          <template slot="files" slot-scope="row">
            {{ row.item.changes.length }}
          </template>
          <template slot="actions" slot-scope="row">
            <b-button variant="success" size="sm" :to="{ name: 'viewDiff', params: { diffId: row.item.id } }">
              Review
            </b-button>
          </template>
        </b-table>
        <div slot="footer">
          <b-button to="/pending" variant="primary" >View all</b-button>
        </div>
      </b-card>
    </b-col>
    <b-col cols="12" v-if="finished.length > 0" class="card-block">
      <b-card title="Finished Reviews" sub-title="Last 20 entries">
        <b-table stacked="md" :items="finished" :fields="fields">
          <template slot="createdAt" slot-scope="row">
            {{ new Date(row.item.createdAt).toLocaleString() }}
          </template>
          <template slot="files" slot-scope="row">
            {{ row.item.changes.length }}
          </template>
          <template slot="actions" slot-scope="row">
            <b-button variant="primary" size="sm" :to="{ name: 'viewDiff', params: { diffId: row.item.id } }">
              View {{row.item.comments.length === 1 ? 'comment' : 'comments' }} <b-badge variant="light">{{ row.item.comments.length }}</b-badge>
            </b-button>
          </template>
        </b-table>
        <div slot="footer">
          <b-button to="/finished" variant="primary" >View all</b-button>
        </div>
      </b-card>
    </b-col>
  </b-row >
</template>

<script>
import { diffs } from '@/services/api';

export default {
  data() {
    return {
      fields: [
        { key: 'author', label: 'Author' },
        { key: 'reviewer', label: 'Reviewer' },
        { key: 'createdAt', label: 'Created' },
        { key: 'files', label: 'Files' },
        { key: 'technology', label: 'Technology' },
        { key: 'actions', label: 'Actions' },
      ],
      finished: [],
      pending: [],
    };
  },
  created() {
    this.loadData();
  },
  methods: {
    async loadData() {
      const data = await diffs.index();
      this.finished = data.slice(0, 19);
      this.pending = data.slice(0, 19);
    },
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.card-block {
  margin: 24px 0;
}
</style>
