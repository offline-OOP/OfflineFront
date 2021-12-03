<template>
  <form @submit.prevent="submit({email, password, nickname})">

    <Input
      v-model="nickname.value"
      id="nickname"
      type="text"
      color="white"
      icon="at"
      autofocus
      :placeholder="$t('user.appName')"
      autocomplete
    />

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
      v-model="password.value"
      id="password"
      type="password"
      color="white"
      icon="lock"
      autofocus
      :placeholder="$t('user.password')"
      autocomplete
    />

    <Btn color="accent">{{ $t('global.done')}}</Btn>
  </form>
</template>

<script lang="ts">
import {Options} from 'vue-class-component';
import Btn from 'quasar-app-extension-offline-ui/src/components/Btn/Btn.vue';
import Input from 'quasar-app-extension-offline-ui/src/components/Input/Input.vue';
import Form from 'src/form';
import EmailValidator from 'src/form/validators/EmailFieldValidator';
import NicknameFieldValidator from 'src/form/validators/NicknameFieldValidator';
import PasswordFieldValidator from 'src/form/validators/PasswordFieldValidator';
import IField from 'src/form/IField';

@Options({
  components: {Btn, Input}
})
export default class TheSignUpCredentialForm extends Form {
  email: IField = {
    value: '',
    validator: EmailValidator
  };
  nickname: IField = {
    value: '',
    validator: NicknameFieldValidator
  };
  password: IField = {
    value: '',
    validator: PasswordFieldValidator
  }
};
</script>
