<template>
  <div class="mycom">
    <!-- 親側のスロットコンテンツが表示される -->
   <p>name:<slot>Slot child</slot></p>
       <!-- 読み込まれる -->
  <p>name: Slot child</p>
  <!-- 名前付きslot -->
    <p>nm slot:<slot name="nm">slot name child</slot></p>
    <p>address slot:<slot name="add">KL</slot></p>


  </div>
</template>