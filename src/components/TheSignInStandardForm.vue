<template>
  <form @submit.prevent="submit({email, password})">
    <Input
      v-model="email.value"
      id="email"
      type="email"
      color="white"
      icon="mail"
      autofocus
      :placeholder="$t('user.email')"
      autocomplete
    />

    <Input
      v-model="password"
      id="password"
      color="white"
      icon="lock"
      type="password"
      autofocus
      :placeholder="$t('user.password')"
      autocomplete
    />

    <Btn color="accent">{{$t('auth.signIn')}}</Btn>
  </form>
</template>

<script lang="ts">
import {Options} from 'vue-class-component';
import Btn from 'quasar-app-extension-offline-ui/src/components/Btn/Btn.vue';
import Input from 'quasar-app-extension-offline-ui/src/components/Input/Input.vue';
import Form from 'src/form';
import EmailValidator from 'src/form/validators/EmailFieldValidator';
import IField from 'src/form/IField';

@Options({
  components: {Btn, Input}
})
export default class TheSignInStandardForm extends Form {
  email: IField = {
    value: '',
    validator: EmailValidator
  };
  password = ''
};
</script>
