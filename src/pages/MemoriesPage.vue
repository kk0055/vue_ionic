<template>
  <base-layout page-title="All Memories">
    <template v-slot:actions-end>
      <ion-button router-link="/memories/add">
        <ion-icon  :icon="add"></ion-icon>
      </ion-button>
    </template>
    <ion-list v-for="memory in memories" :key="memory.id" 
    :route-link="`/memories/${memory.id}`">
    {{ memory.title }}
    </ion-list>
    <!-- <memories-list :memories="memories"></memories-list> -->
  </base-layout>
</template>

<script>
import { ionList, IonButton, IonIcon } from "@ionic/vue";

export default {
  components: {
    IonButton,
    IonIcon,
    ionList
  },
  data() {
    return {
      memories: [
        {id: '1', 
        image: 'https://images.pexels.com/photos/4913371/pexels-photo-4913371.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500',
        title: 'A trip into the mountains',
        description: 'It was a really nice trip' 
        },
         {id: 'm2', 
         image:'https://images.pexels.com/photos/4913371/pexels-photo-4913371.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500',
        title: 'A trip into the mountains',
        description: 'It was a really nice trip' 
        }
      ]
    }
  }
}
</script>