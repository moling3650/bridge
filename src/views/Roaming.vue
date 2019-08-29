<template>
  <div id="Roaming">
    <page page-name="Roaming" no-loop autoplay can-skip @ended="$router.push({ name: 'navigation', query: { loop: true } })"/>
  </div>
</template>

<script>
export default {
  name: 'Roaming',
}
</script>
