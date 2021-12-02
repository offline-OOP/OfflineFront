<template>
  <div style="width: 100vw; height: 100vh">
    MainList
  </div>
</template>

<script lang="ts">
import {Vue, Options} from 'vue-class-component';
import Alert from 'quasar-app-extension-offline-ui/src/components/Alert/Alert.vue';

@Options({
  components: {Alert}
})
export default class MainListPage extends Vue {

};
</script>
