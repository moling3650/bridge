<template>
  <div id="End">
    <page page-name="End" no-loop autoplay @ended="$router.push({ name: 'navigation', query: { loop: true } })"/>
  </div>
</template>

<script>
export default {
  name: 'End',
}
</script>
