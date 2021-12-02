<template>
  <form @submit="submit(fields)">
    <div class="o-logo text-white">OFFLINE</div>
    <div class="font-open-sans text-lg text-white">mode</div>

    {{alerts}}

    <Input
      v-model="fields.name.value"
      id="name"
      color="white"
      icon="at"
      autofocus
      placeholder="name"
      autocomplete
    />
    <Btn color="accent" @click="submit(fields)">Done</Btn>
  </form>
</template>

<script lang="ts">
import {Options} from 'vue-class-component';
import Btn from 'quasar-app-extension-offline-ui/src/components/Btn/Btn.vue';
import Input from 'quasar-app-extension-offline-ui/src/components/Input/Input.vue';
import {Form, IFields} from 'src/utility/form';

@Options({
  components: {Btn, Input}
})
export default class TheSignInStandardForm extends Form {
  fields: IFields = {
    name: {
      value: '',
      validator() { return typeof this.value === 'string' && this.value.length > 2 ? ['foo']: null; }
    }
  }
};
</script>
