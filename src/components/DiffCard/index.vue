<template>
  <b-col cols="12" class="card-block">
    <b-card>
      <h4 class="card-title">Created by {{item.author}}
        <span v-if="item.status === 'done'"> reviewed by <b>{{item.reviewer}}</b>
        </span>
      </h4>
      <h6 class="card-subtitle mb-2 text-muted">Created {{date}}</h6>
      <p class="card-badge"><b-badge>{{item.technology}}</b-badge></p>
      <div v-if="item.changes.length < 20">
        <p>File list:</p>
        <b-list-group>
          <b-list-group-item :key="index" v-for="(item, index) in item.changes" class="file-line">
            <span v-if="item.addedLines > 0" class="added-lines">+ {{item.addedLines}}</span>
            <span v-if="item.deletedLines > 0" class="removed-lines">- {{item.deletedLines}}</span>
            <span class="file-name">{{item.oldName}}</span>
            <span v-if="item.isDeleted" class="tag deleted-tag">DELETED</span>
            <span v-else-if="item.isNew" class="tag added-tag">ADDED</span>
            <span v-else class="tag changed-tag">CHANGED</span>
          </b-list-group-item>
        </b-list-group>
      </div>
      <div v-else>
        <p>Modified more than 20 files</p>
      </div>
      <div slot="footer">
        <b-button :to="cardLink" variant="primary" v-if="item.status === 'done'">View full</b-button>
        <b-button :to="cardLink" variant="primary" v-if="item.status === 'new'">Add review</b-button>
      </div>
    </b-card>
  </b-col>
</template>

<script>
import DiffFile from '@/components/DiffFile';

export default {
  components: {
    DiffFile,
  },
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
@import '../../../node_modules/diff2html/dist/diff2html.css';

.card-badge {
  position: absolute;
  top: 20px;
  font-size: 20px;
  right: 10px;
}
.card-block {
  position: relative;
  margin: 24px 0;
}

.tag {
  display: flex;
  font-size: 10px;
  margin-left: 5px;
  padding: 0 2px;
  background-color: #fff;
  border: 1px solid #000;
}

.file-line {
  display: flex;
  padding: 4px 8px;
  align-items: center;
}

.changed-tag {
  color: #d0b44c;
  border-color: #d0b44c;
}

.deleted-tag {
  color: #dc3545;
  border-color: #dc3545;
}

.added-tag {
  color: #28a745;
  border-color: #28a745;
}

.file-name {
  margin-left: 8px;
}

.added-lines {
  font-size: 14px;
  color: #28a745;
}

.removed-lines {
  font-size: 14px;
  color: #dc3545;
}
</style>
