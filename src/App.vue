<template>
  <div id="app">
    <router-view :key="$route.fullPath" />
  </div>
</template>

<script>

</script>

<style lang="scss">

  html, body {
    margin: 0;
    padding: 0;
  }

</style>
