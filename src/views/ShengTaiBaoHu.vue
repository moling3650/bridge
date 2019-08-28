<template>
  <div id="ShengTaiBaoHu">
    <page page-name="ShengTaiBaoHu" autoplay can-skip>
      <template slot-scope="{ isLoop }">
        <nav-bar v-show="isLoop" back-and-next/>
        <dot v-show="isLoop" :style="{ marginTop: '22%', right: '34%' }" text="保护海豚"/>
        <dot v-show="isLoop" :style="{ marginTop: '20%', right: '16%' }" text="生态保护"/>
      </template>
    </page>
  </div>
</template>

<script>
export default {
  name: 'ShengTaiBaoHu',
}
</script>
