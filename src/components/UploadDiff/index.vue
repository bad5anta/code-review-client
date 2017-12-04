<template>
  <b-modal v-model="showUploadModal" :hide-header="true" @ok="uploadDiff">
    <div class="upload-diff">
      <dropzone
        id="uploadDropzone"
        ref="uploadDropzone"
        :use-custom-dropzone-options="true"
        :options="uploadDropzoneOptions"
      ></dropzone>
      <b-form-select v-model="technology" :options="getStacks"></b-form-select>
    </div>
  </b-modal>
</template>

<script>
  import Dropzone from 'vue2-dropzone';
  import { Diff2Html } from 'diff2html';
  import EventBus from '@/event-bus';

  export default {
    components: {
      Dropzone,
    },
    data() {
      return {
        modalEvent: 'upload-modal',
        showUploadModal: false,
        diffJSON: null,
        technology: null,
        uploadDropzoneOptions: {
          url: 'https://httpbin.org/post',
          autoProcessQueue: false,
          uploadMultiple: false,
          maxFiles: 1,
        },
      };
    },
    computed: {
      getStacks() {
        const stacks = this.$store.state.stacks;
        return Object.keys(stacks).map(stack_id => {
          const stack = stacks[stack_id];
          return { value: stack.id, text: stack.attributes.name };
        });
      },
    },
    mounted() {
      EventBus.$on(`${this.modalEvent}-on`, this.onModalShow);
      EventBus.$on(`${this.modalEvent}-off`, this.onModalHide);
    },
    beforeDestroy() {
      EventBus.$off(`${this.modalEvent}-on`, this.onModalShow);
      EventBus.$off(`${this.modalEvent}-off`, this.onModalHide);
    },
    methods: {
      onModalShow() {
        this.showUploadModal = true;
      },
      onModalHide() {
        this.showUploadModal = false;
      },
      uploadDiff() {
        const { files } = this.$refs.uploadDropzone.dropzone;

        if (!files.length) {
          return;
        }

        const reader = new FileReader();
        reader.onload = (diffContent) => {
          const { result } = diffContent.target;
          const outputJSON = Diff2Html.getJsonFromDiff(result);

          const diff = {
            code_changes: JSON.stringify(outputJSON),
            stack_id: this.technology,
          };

          this.$store.dispatch('uploadDiff', diff);
        };

        reader.readAsText(files[0]);
      },
    },
  };
</script>
