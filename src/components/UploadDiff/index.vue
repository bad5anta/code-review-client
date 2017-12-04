<template>
  <div class="upload-diff">
    <dropzone
      id="uploadDropzone"
      url="https://httpbin.org/post"
      ref="uploadDropzone"
      :use-custom-dropzone-options="true"
      :dropzone-options="uploadDropzoneOptions"
    ></dropzone>
    <b-form-select v-model="technology" :options="technologiesList">
    </b-form-select>
    <b-button @click="">Upload</b-button>
  </div>
</template>

<script>
  import Dropzone from 'vue2-dropzone';
  import { Diff2Html } from 'diff2html';

  export default {
    components: {
      Dropzone,
    },
    data() {
      return {
        diffJSON: null,
        technology: null,
        technologiesList: ['React', 'Rails', 'Vue'],
        uploadDropzoneOptions: {
          autoProcessQueue: false,
          uploadMultiple: false,
          maxFiles: 1,
        },
      };
    },
    methods: {
      uploadDiff() {
        const { files } = this.$refs.uploadDropzone.dropzone;

        if (!files.length) {
          return;
        }

        const reader = new FileReader();
        reader.onload = (diffContent) => {
          const outputJSON = Diff2Html.getJsonFromDiff(diffContent);
          console.log('outputJSON', diffContent);
          console.log('outputJSON', outputJSON);
        };

        reader.readAsText(files[0]);
      },
    },
  };
</script>
