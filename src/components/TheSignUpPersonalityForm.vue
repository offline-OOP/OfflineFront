<template>
  <form @submit.prevent="submit({name, birthday})">

    <Input
      v-model="name.value"
      id="name"
      type="text"
      color="white"
      icon="account"
      autofocus
      :placeholder="$t('user.name.item')"
      autocomplete
    />

    <Input
      v-model="birthday.value"
      id="birthday"
      color="white"
      type="date"
      icon="user-calendar"
      autofocus
      :placeholder="$t('user.birthday')"
      autocomplete
    />

    <Btn color="accent">{{ $t('global.next')}}</Btn>
  </form>
</template>

<script lang="ts">
import {Options} from 'vue-class-component';
import Btn from 'quasar-app-extension-offline-ui/src/components/Btn/Btn.vue';
import Input from 'quasar-app-extension-offline-ui/src/components/Input/Input.vue';
import Form from 'src/form';
import NameFieldValidator from 'src/form/validators/NameFieldValidator';
import BirthdayFieldValidator from 'src/form/validators/BirthdayFieldValidator';
import IField from 'src/form/IField';

@Options({
  components: {Btn, Input}
})
export default class TheSignUpPersonalityForm extends Form {
  name: IField = {
    value: '',
    validator: NameFieldValidator
  };
  birthday: IField = {
    value: '',
    validator: BirthdayFieldValidator
  }
};
</script>
