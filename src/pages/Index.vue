<template>
  <div style="width: 100vw; height: 100vh">
    <Test>
      test 2
    </Test>

    <Alert icon="at">
      <template #header>OKey</template>
      test 3
    </Alert>
  </div>
</template>

<script lang="ts">
import { Vue, Options } from 'vue-class-component'
import Alert from 'quasar-app-extension-offline-ui/src/components/Alert/Alert.vue'
import Test from 'components/Test'
@Options({
  components: {Alert, Test}
})
export default class PageIndex extends Vue {

};
</script>
