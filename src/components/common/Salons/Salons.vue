<template lang="pug">
div(:class='$style.container')
  div(:class='$style.salonsList')
    Salon(v-for='salon in list', :salon='salon')

  div(:class='$style.salonsMap')
    #map(:class='$style.map')
</template>

<script>
import { onMounted } from 'vue';
import Salon from '@Components/common/Salons/Salon';
export default {
  components: {
    Salon,
  },
  props: {
    list: Array,
  },
  setup() {
    const fetchMap = () => {
      async function init() {
        const myMap = new ymaps.Map(
            'map',
            {
              center: [59.939095, 30.315868],
              zoom: 10,
            },
            {
              searchControlProvider: 'yandex#search',
            }
          ),
          objectManager = new ymaps.ObjectManager({
            // Чтобы метки начали кластеризоваться, выставляем опцию.
            clusterize: true,
            // ObjectManager принимает те же опции, что и кластеризатор.
            gridSize: 32,
          });

        // Чтобы задать опции одиночным объектам и кластерам,
        // обратимся к дочерним коллекциям ObjectManager.
        objectManager.objects.options.set('preset', 'islands#greenDotIcon');
        objectManager.clusters.options.set(
          'preset',
          'islands#greenClusterIcons'
        );
        myMap.geoObjects.add(objectManager);

        await fetch('data/salon.json')
          .then((response) => response.json())
          .then((data) => {
            objectManager.add(data);
          });
      }

      ymaps.ready(init);
    };
    onMounted(() => {
      setTimeout(() => {
        fetchMap();
      }, 1000);
    });
  },
};
</script>

<style lang="scss" module src="@Scss/components/Salons.scss">
</style>