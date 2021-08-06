<template>
  <ion-page>
    <ion-header>
      <ion-toolbar>
        <ion-buttons >
          <ion-back-button
           
          ></ion-back-button>
        </ion-buttons>
        <ion-title></ion-title>
        <ion-buttons >
        
        </ion-buttons>
      </ion-toolbar>
    </ion-header>
    <ion-content>
      <slot />
    </ion-content>
  </ion-page>
</template>

<script>
import {
  IonPage,
  IonHeader,
  IonToolbar,
  IonTitle,
  IonContent,
  IonBackButton,
  IonButtons,
} from "@ionic/vue";
export default {
  props: ["pageTitle", "pageDefaultBackLink"],
  components: {
    IonPage,
    IonHeader,
    IonToolbar,
    IonTitle,
    IonContent,
    IonBackButton,
    IonButtons,
  },
};
</script>