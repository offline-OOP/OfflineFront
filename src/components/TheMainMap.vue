<template>
  <Map class="h-screen w-screen">
    <template #controller>

      <MapController class="mr-3 mb-4" v-model="controller" color="white" @me="showMe"/>
      <div class="w-full bg-white p-">
        <template v-if="controller === 'search'">
          <slot name="search"/>
        </template>

        <template v-if="controller === 'filter'">
          <slot name="filter"/>
        </template>
      </div>
    </template>


  </Map>
</template>

<script lang="ts">
import {Vue, Options} from 'vue-class-component';
// import Alert from 'quasar-app-extension-offline-ui/src/components/Alert/Alert.vue';
import Map from 'quasar-app-extension-offline-ui/src/components/Map/Map.vue';
import MapController from 'quasar-app-extension-offline-ui/src/components/Map/MapController.vue';
import MapMarker from 'quasar-app-extension-offline-ui/src/components/Map/MapMarker.vue';

@Options({
  components: {Map, MapController, MapMarker}
})
export default class MainMapPage extends Vue {
  controller = ''

  showMe () {
    return null;
  }
};
</script>
