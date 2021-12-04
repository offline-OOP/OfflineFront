<template>
  <div>
    <slot name="search"/>
    <slot name="filter"/>
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
