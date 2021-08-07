<template>
  <base-layout page-title="All Memories">
    <template v-slot:actions-end>
      <ion-button router-link="/memories/add">
        <ion-icon  :icon="add"></ion-icon>
      </ion-button>
    </template>
    <ion-list v-for="memory in memories" :key="memory.id" 
    :router-link="`/memories/${memory.id}`">
    {{ memory.title }}
    </ion-list>
    <!-- <memories-list :memories="memories"></memories-list> -->
  </base-layout>
</template>

<script>
import { IonList, IonButton, IonIcon } from "@ionic/vue";

export default {
  components: {
    IonButton,
    IonIcon,
    IonList
  },
computed: {
  memories() {
    return this.$store.getters.memories;
  }
}
}
</script>