<script setup lang="ts">
import timeLine from "@/components/Deck/timeLine.vue"
import eventCrayons from "@/components/Deck/eventCrayons.vue"
import openRate from "@/components/Deck/openRate.vue"
import navBar from "@/components/Deck/navBar.vue"
</script>

<template>
  <navBar class="float w-100 border-bottom" style="top:0;left:0" />
  <div class="row m-0 mt-5">
    <div class="sm-none col-md-1"></div>
    <div class="sm-none col-md-3">
      <div class="float col-md-3">
        <div class="mx-auto w-75">
          <img src="https://lh3.googleusercontent.com/a/ACg8ocLNxUa91eJmBHgyjw4Ud-3EvNHnHcXAc9dsz1kgo8OY0g=s576-c-no"
            class="rounded-pill w-100 w-100 d-block mt-5">
          <h3 class="mt-5 fw-bold">@ Openkitchen</h3>
          <p>Openkitchenシステム開発者</p>
          <div class="d-flex">
            <img src="/icon/coffee.svg" width="19" class="icon">
            <p class="m-2">TruthXP - 2000XP</p>
          </div>
          <div class="d-flex">
            <img src="/icon/shop.svg" width="19" class="icon">
            <p class="m-2">github Repository</p>
          </div>
          <button type="button" class="btn btn-dark mt-3 mb-3 w-100">Edit profile</button>

          <p class="mt-3 fw-bold mb-2">server</p>
          <ul class="custom-list-unstyled">
            <p>🚀 Openkitchen公式</p>
          </ul>
          <ul class="custom-list-unstyled">
            <p>🔨 デベロッパーチーム</p>
          </ul>
          <ul class="custom-list-unstyled">
            <p>🕹️ Arcade Times</p>
          </ul>
          <ul class="custom-list-unstyled">
            <p>📺 Watch Party</p>
          </ul>
          <ul class="custom-list-unstyled">
            <p>🎙️ 雑談サーバー</p>
          </ul>
        </div>
      </div>
    </div>
    <div class="sm-none col-md-5 mt-4">
      <h5 class="fw-bold mt-1">TimeLine</h5>

      <timeLine />
      <timeLine />
      <timeLine />
      <timeLine />

    </div>
    <div class="sm-none col-md-3 mt-5">
      <div class="float">
        <eventCrayons />
        <openRate />
      </div>
    </div>
    <div class="sm-none col-md-1"></div>
  </div>
</template>

<style scoped>
ul {
  list-style: none;
  padding-left: 15px;
}

.col-md-1 {
  flex: 0 0 auto;
  width: 4.166666665%;
}

.float {
  position: fixed;
  z-index: 2;
}
</style>