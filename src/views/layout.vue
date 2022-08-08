<template>

  <div class="layoutStyle">
    <h1>Layout</h1>
    <navigation />
     <router-view/>
  </div>
</template>

<script>
import navigation from '@/components/navigation.vue'
export default {
    name: 'layout',
    component: {
        navigation
    }
}
</script>

<style>
.layoutStyle {
    background-color: chocolate;
}
</style>