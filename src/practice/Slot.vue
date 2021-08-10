<template>
  <div class="mycom">
    <!-- 読み込まれない -->
   <p>name:<slot>Slot child</slot></p>
       <!-- 読み込まれる -->
  <p>name: Slot child</p>
    <p>nm slot:<slot name="nm">slot name child</slot></p>
    <p>address slot:<slot name="add">KL</slot></p>


  </div>
</template>