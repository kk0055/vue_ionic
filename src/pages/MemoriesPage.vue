<template>
  <div>
    <ion-page>  
     <ion-header>   
       <ion-toolbar>  
       <ion-title>All memories </ion-title>
         </ion-toolbar>
       </ion-header> 
       <ion-content> 
         <ion-list> 
           <ion-item> Max </ion-item>
           <ion-item> Max </ion-item>
          
         </ion-list> 
      </ion-content> 
    </ion-page>
  </div>
</template>

<script>
import {IonPage, IonHeader, IonToolbar, IonList, IonItem, IonTitle, IonContent} from '@ionic/vue'
export default {
  components: {
    IonPage,
    IonHeader,
    IonToolbar,
    IonTitle,
    IonContent,
    IonList,
    IonItem
  }
}
</script>