<template>
  <div>
    <div class="font-open-sans text-white text-lg">
      {{$t('auth.messages.verifyAccount')}}
    </div>


    <router-link to="/sign-in">
      <Btn color="accent">{{ $t('auth.signIn')}}</Btn>
    </router-link>
  </div>
</template>

<script lang="ts">
import {Options, Vue} from 'vue-class-component';
import Btn from 'quasar-app-extension-offline-ui/src/components/Btn/Btn.vue';


@Options({
  components: {Btn}
})
export default class TheSignUpEndForm extends Vue {
};
</script>
