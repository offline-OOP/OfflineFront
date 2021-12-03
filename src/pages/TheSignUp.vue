<template>
  <Page page-class="bg-primary" footer-class="w-full">
    <template #header>
      <div class="o-logo text-white">{{ $t('global.appName')}}</div>
      <div class="font-open-sans text-lg text-white">{{ $t('auth.signUp')}}</div>
    </template>
    <TheSignUpPersonalityForm @form-submit="personalityUpdate"/>
    <TheSignUpCredentialForm @form-submit="credentialUpdate"/>
    <TheSignUpEndMessage/>
    <template #footer>
      <Stepper class="no-wrap" color="info" :count="3" :step="2"/>
    </template>
  </Page>
</template>

<script lang="ts">
import {Vue, Options} from 'vue-class-component';
import Alert from 'quasar-app-extension-offline-ui/src/components/Alert/Alert.vue';
import Stepper from 'quasar-app-extension-offline-ui/src/components/Stepper/Stepper.vue';
import Page from 'quasar-app-extension-offline-ui/src/components/Page/Page.vue';
import TheSignUpPersonalityForm from 'components/TheSignUpPersonalityForm.vue';
import ISerializedFields from 'src/form/ISerializedFields';
import TheSignUpCredentialForm from 'components/TheSignUpCredentialForm.vue';
import TheSignUpEndMessage from 'components/TheSignUpEndMessage.vue';

@Options({
  components: {
    TheSignUpEndMessage, TheSignUpCredentialForm, TheSignUpPersonalityForm,
    Alert, Page, Stepper
  }
})
export default class SignUpPage extends Vue {
  personality: ISerializedFields | null = null
  credential: ISerializedFields | null = null

  personalityUpdate (fields : ISerializedFields): void {
    this.personality = fields;
  }

  credentialUpdate (fields : ISerializedFields): void {
    this.credential = fields;
  }
  // TODO: SignUp
  signUp (): void {

  }
};
</script>
