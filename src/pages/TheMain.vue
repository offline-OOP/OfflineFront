<template>
  <Page
    page-class="relative"
    :content-class="contentClass"
    footer-class="absolute bottom-0 w-full z-10"
  >
    <component :is="mode === 'map'? 'TheMainMap': 'TheMainList'">
      <template #search>
        <Search v-model="search"/>
      </template>

      <template #filter>
        <ChipGroup>
          <template #header>
            {{$t('filter.searchType')}}
          </template>
        </ChipGroup>
      </template>
    </component>

    <template #footer>
      <Navigation class="shadow-md">
        <NavigationItem
          icon="time-history"
          to="/story"
        >
          {{ $tc('story.item', 2) }}
        </NavigationItem>
        <NavigationItem
          icon="check-in"
          to="/event/new"
        >
          {{ $t('global.create') }}
        </NavigationItem>
        <NavigationItem
          icon="notification"
          to="/notify"
        >
          {{ $t('notify.section') }}
        </NavigationItem>
        <template #end>
          <Switcher
            color="accent"
            v-model="mode"
            @update:model-value="switchMode"
          />
        </template>
      </Navigation>
    </template>
  </Page>
</template>

<script lang="ts">
import {Vue, Options} from 'vue-class-component';
import Page from 'quasar-app-extension-offline-ui/src/components/Page/Page.vue';
import Switcher from 'quasar-app-extension-offline-ui/src/components/Switcher/Switcher.vue';
import Navigation from 'quasar-app-extension-offline-ui/src/components/Navigation/Navigation.vue';
import NavigationItem from 'quasar-app-extension-offline-ui/src/components/Navigation/NavigationItem.vue';
import TheMainMap from 'components/TheMainMap.vue';
import TheMainList from 'components/TheMainList.vue';
import Search from 'quasar-app-extension-offline-ui/src/components/Search/Search.vue';
import Chip from 'quasar-app-extension-offline-ui/src/components/Chip/Chip.vue';
import ChipGroup from 'quasar-app-extension-offline-ui/src/components/Chip/ChipGroup.vue';

@Options({
  components: {
    TheMainList,
    TheMainMap,
    Page,
    Switcher,
    Navigation,
    NavigationItem,
    Search,
    Chip,
    ChipGroup
  }
})
export default class MainPage extends Vue {
  mode = 'map';
  search = '';

  get contentClass () {
    if (this.mode === 'list')
      return 'p-4';
    else
      return '';
  }

  switchMode () {
    return null;
  }
};
</script>
