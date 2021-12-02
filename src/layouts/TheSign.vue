<template>
  <Page page-class="bg-primary">
    <router-view/>
  </Page>
</template>

<script lang="ts">
import {Vue, Options} from 'vue-class-component';
import Page from 'quasar-app-extension-offline-ui/src/components/Page/Page.vue';

@Options({
  components: {Page}
})
export default class SignPage extends Vue { };
</script>
