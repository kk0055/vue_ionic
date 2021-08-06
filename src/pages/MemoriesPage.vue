<template>
  <base-layout page-title="All Memories">
    <template v-slot:actions-end>
      <ion-button router-link="/memories/add">
        <ion-icon slot="icon-only" :icon="add"></ion-icon>
      </ion-button>
    </template>
    <memories-list :memories="memories"></memories-list>
  </base-layout>
</template>

<script>
import { IonButton, IonIcon } from "@ionic/vue";

export default {
  components: {
    IonButton,
    IonIcon
  }
}
</script>