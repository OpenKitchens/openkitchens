<script setup lang="ts">
import navBar from "@/components/Deck/navBar.vue"
</script>

<template>
  <navBar class="float w-100 border-bottom" style="top:0;left:0" />
  <section class="mt-5 pt-5 pb-0 position-relative header-image"
    style="background-image: url(assets/season-thumbnail.png); background-repeat: no-repeat; background-size: cover; background-position: center center;height: 70vh;">
    <div class="bg-overlay bg-dark opacity-8"></div>
    <div class="container">
      <div class="pt-5">
        <div class="row position-relative">
          <div class="col-xl-8 col-lg-10 mx-auto pt-sm-5 text-center mb-5">
            <h4 class="card-text"><span class="badge rounded-pill bg-light" style="color: black">今のシーズン</span></h4>
            <h1 class="text-white fw-bold">ビジネスインターネットからの逃亡</h1>
            <p class="card-text text-white">いつからインターネットはビジネスの場になったのだろうか。</p>
            <p class="card-text text-white">消費するものと消費されるもの、虐げられるものと虐げるもの</p>
            <p class="card-text text-white">鬱陶しい自己顕示欲と承認欲求が渦巻くこの世界からの避難所</p>
          </div>
        </div>
      </div>
    </div>
  </section>
  <section class="mt-5 pt-3 row">
    <div class="col-md-1"></div>
    <div class="col-md-3">
      <div class="card card-border w-auto m-1 mb-3 mx-3 mx-md-0">
        <div class="card-body">
          <h4 class="card-title fw-bold">Implant</h4>
          <h6 class="card-subtitle mb-4 mt-2" style="color: #7f7f7f;">インストールが推奨されるインプラント</h6>
          <p class="mb-4 small mt-3">6個の拡張インプラント - 200EMP</p>

          <div class="card pt-3 px-2 scroll">
            <p><img src="/icon/plugin.svg" class="pb-1 px-2 plugin-img">シーズンテーマ</p>
            <p><img src="/icon/plugin.svg" class="pb-1 px-2 plugin-img">イベントチケット</p>
            <p><img src="/icon/plugin.svg" class="pb-1 px-2 plugin-img">記憶のカケラ 1</p>
            <p><img src="/icon/plugin.svg" class="pb-1 px-2 plugin-img">記憶のカケラ 2</p>
            <p><img src="/icon/plugin.svg" class="pb-1 px-2 plugin-img">システムパッチソフトウエア</p>
            <p><img src="/icon/plugin.svg" class="pb-1 px-2 plugin-img">ブラックウォールチケット</p>
          </div>
          <button class="btn btn-primary w-100 mt-3">All install</button>

        </div>
      </div>
    </div>
    <div class="col-md-7">
      <div class="card card-border w-auto m-1 mx-3 mx-md-0">
        <div class="card-body">
          <h4 class="card-title fw-bold">Genius</h4>
          <h6 class="card-subtitle mb-2 mt-2" style="color: #7f7f7f;">アトランティスウォール会議に参加可能な5人のランナー</h6>
          <div class="scroll">
            <div class="d-flex">
              <img src="https://lh3.googleusercontent.com/a/ACg8ocLNxUa91eJmBHgyjw4Ud-3EvNHnHcXAc9dsz1kgo8OY0g=s576-c-no"
                class="avatar-icon rounded-pill">
              <div class="avatar-name ms-0">
                <h6 class="fw-bold mb-0">Openkitchen</h6>
                <small class="rate">2000XP</small>
              </div>
            </div>
            <div class="d-flex">
              <img src="https://lh3.googleusercontent.com/a/ACg8ocLNxUa91eJmBHgyjw4Ud-3EvNHnHcXAc9dsz1kgo8OY0g=s576-c-no"
                class="avatar-icon rounded-pill">
              <div class="avatar-name ms-0">
                <h6 class="fw-bold mb-0">Openkitchen</h6>
                <small class="rate">2000XP</small>
              </div>
            </div>
            <div class="d-flex">
              <img src="https://lh3.googleusercontent.com/a/ACg8ocLNxUa91eJmBHgyjw4Ud-3EvNHnHcXAc9dsz1kgo8OY0g=s576-c-no"
                class="avatar-icon rounded-pill">
              <div class="avatar-name ms-0">
                <h6 class="fw-bold mb-0">Openkitchen</h6>
                <small class="rate">2000XP</small>
              </div>
            </div>
            <div class="d-flex">
              <img src="https://lh3.googleusercontent.com/a/ACg8ocLNxUa91eJmBHgyjw4Ud-3EvNHnHcXAc9dsz1kgo8OY0g=s576-c-no"
                class="avatar-icon rounded-pill">
              <div class="avatar-name ms-0">
                <h6 class="fw-bold mb-0">Openkitchen</h6>
                <small class="rate">2000XP</small>
              </div>
            </div>
            <div class="d-flex">
              <img src="https://lh3.googleusercontent.com/a/ACg8ocLNxUa91eJmBHgyjw4Ud-3EvNHnHcXAc9dsz1kgo8OY0g=s576-c-no"
                class="avatar-icon rounded-pill">
              <div class="avatar-name ms-0">
                <h6 class="fw-bold mb-0">Openkitchen</h6>
                <small class="rate">2000XP</small>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="col-md-1"></div>
  </section>
  <section class="mt-5">
    <footer class="footer">
      <div class="container">
        <h4 class="card-subtitle mb-2 mt-2 fw-bold" style="color: #7f7f7f;">Atlantis屋台</h4>
        <h6 class="card-subtitle mb-2 mt-2" style="color: #7f7f7f;">Atlantis屋台 - moyasiの❤️によって作られました</h6>
      </div>
    </footer>
  </section>
</template>

<style scoped>
.float {
  position: fixed;
  z-index: 2;
  overflow-y: scroll;
}

@media (prefers-color-scheme: dark) {
  .plugin-img {
    filter: invert(100%);
  }
}

.avatar-icon {
  width: 45px;
  height: 45px;
  margin: 15px;
  /*box-sizing: content-box;*/
  animation: expansion 1s infinite alternate;
}

.avatar-name {
  margin: 15px;
}

.bg-dark::before {
  position: absolute;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  background: black;
  content: "";
  opacity: 0.3;
}
</style>