<template>
  <Page page-class="bg-primary">
    <template #header>
      <div class="o-logo text-white">{{$t('global.appName')}}</div>
      <div class="font-open-sans text-lg text-white">{{$t('auth.signIn')}}</div>
    </template>
    <TheSignInStandardForm @form-submit="login"/>
  </Page>
</template>

<script lang="ts">
import {Vue, Options} from 'vue-class-component';
import Alert from 'quasar-app-extension-offline-ui/src/components/Alert/Alert.vue';
import Page from 'quasar-app-extension-offline-ui/src/components/Page/Page.vue';
import TheSignInStandardForm from 'components/TheSignInStandardForm.vue';

@Options({
  components: {TheSignInStandardForm, Alert, Page}
})
export default class SignInPage extends Vue {
  // TODO: SignIn
  signIn (): void {

  }
};
</script>
