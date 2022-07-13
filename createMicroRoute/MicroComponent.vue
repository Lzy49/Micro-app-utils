<template>
  <micro-app class="micro-wrap" :name='microInfo.name' :url='microInfo.url' keep-alive :baseroute="microInfo.baseroute">
  </micro-app>
</template>
<script setup lang="ts">
import { ref } from 'vue';
import {useRoute} from 'vue-router'
import { microsView } from './index'
const route = useRoute();
const microInfo = ref();
if (route.meta.microName) {
  microInfo.value = microsView[route.meta.microName]
}
</script>

<style>
.micro-wrap {
  width: 100vw;
  height: 100vh
}
</style>