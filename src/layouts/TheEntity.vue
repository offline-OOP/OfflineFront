<template>
  <div style="width: 100vw; height: 100vh">
    <router-view/>
  </div>
</template>

<script lang="ts">
import {Vue, Options} from 'vue-class-component';
import Alert from 'quasar-app-extension-offline-ui/src/components/Alert/Alert.vue';

@Options({
  components: {Alert}
})
export default class EntityPage extends Vue {

};
</script>
