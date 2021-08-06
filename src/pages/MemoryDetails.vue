<template>
  <div>
      <base-layout
    :page-title="loadedMemory ? loadedMemory.title : 'Loading...'"
    page-default-back-link="/memories"
  >
    </base-layout>
  </div>
</template>

<script>
export default {
  
}
</script>