<template>
  <Page page-class="bg-background-default bg-no-repeat bg-cover">
    <h1 class="o-logo text-white">{{$t('global.appName')}}</h1>

    <router-link to="/sign-in">
      <Btn color="white">{{$t('auth.signIn')}}</Btn>
    </router-link>
    <router-link to="/sign-up">
      <Btn color="white" outlined>{{$t('auth.signUp')}}</Btn>
    </router-link>

    <p class="font-montserrat font-light text-sm text-white">{{$t('global.rightsReserved')}}</p>
  </Page>
</template>

<script lang="ts">
import {Vue, Options} from 'vue-class-component';
import Page from 'quasar-app-extension-offline-ui/src/components/Page/Page.vue';
import Btn from 'quasar-app-extension-offline-ui/src/components/Btn/Btn.vue';


@Options({
  components: {Page, Btn}
})
export default class WelcomePage extends Vue {};
</script>
