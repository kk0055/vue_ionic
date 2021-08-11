<template>
  <base-layout page-title="All Memories">
  <!-- v-slotでBaseLayoutから+ボタン取得 -->
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
import { add } from "ionicons/icons";

import MemoriesList from "../components/memories/MemoriesList.vue";
export default {
  components: {
    IonButton,
    IonIcon,
    MemoriesList
  },
    data() {
    return { add };
  },
computed: {
  memories() {
    //store/index.jsから取得
    return this.$store.getters.memories;
  }
}
}
</script>