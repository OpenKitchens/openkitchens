<script setup lang="ts">
import timeLine from "@/components/Deck/timeLine.vue"
import eventCrayons from "@/components/Deck/eventCrayons.vue"
import openRate from "@/components/Deck/openRate.vue"
import navBar from "@/components/Deck/navBar.vue"
import userProfil from "@/components/Deck/userProfil.vue"
</script>

<template>
  <navBar class="float w-100 border-bottom" style="top:0;left:0" />
  <div class="row m-0 mt-5 mx-w-1080 mx-auto">
    <div class="col-md-3 mt-4 px-0">
      <div>
        <userProfil />
      </div>
    </div>
    
    <div class="col-md-6 mt-4">
      <timeLine />
      <timeLine />
      <timeLine />
      <timeLine />

      <div class="mb-5"></div>
    </div>
    <div class="col-md-3 mt-4 px-md-0">
      <div>
        <eventCrayons />
        <openRate />
      </div>
    </div>
  </div>
</template>

<style scoped>
ul {
  list-style: none;
  padding-left: 15px;
}

.col-md-1 {
  flex: 0 0 auto;
  width: 2.08888888%;
}

.float {
  position: fixed;
  z-index: 2;
  overflow-y: scroll;
}

.h-100 {
  height: calc(100vh - 62px) !important;
}

.mx-w-1080{
  max-width: 1340px;
}
</style>