<script setup lang="ts">
import timeLine from "@/components/Deck/timeLine.vue"
import eventCrayons from "@/components/Deck/eventCrayons.vue"
import openRate from "@/components/Deck/openRate.vue"
import navBar from "@/components/Deck/navBar.vue"
import userProfil from "@/components/Deck/userProfil.vue"
</script>

<template>
  <navBar class="float w-100 border-bottom" style="top:0;left:0" />
  <div class="row m-0 mt-5">
    <div class="sm-none col-md-3">
      <div class="float col-md-3 h-100 mt-3">
        <userProfil />
      </div>
    </div>
    
    <div class="sm-none col-md-6 mt-4">
      <h5 class="fw-bold mt-2">TimeLine</h5>

      <timeLine />
      <timeLine />
      <timeLine />
      <timeLine />

    </div>
    <div class="sm-none col-md-3 mt-5" style="padding-left: 0;">
      <div class="mx-auto float w-25 m-2 h-100" style="padding-right: 10px;">
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
</style>