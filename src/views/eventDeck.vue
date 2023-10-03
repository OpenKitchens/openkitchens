<script setup lang="ts">
import eventCard from "@/components/Event/eventCard.vue"
import navBar from "@/components/Deck/navBar.vue"
</script>

<template>
  <navBar class="float w-100 border-bottom" style="top:0;left:0" />
  <section class="mt-5 pt-5 pb-0 position-relative"
    style="background-image: url(/assets/event.png); background-repeat: no-repeat; background-size: cover; background-position: bottom center;">
    <div class="bg-overlay bg-dark opacity-8"></div>
    <div class="container">
      <div class="pt-5">
        <div class="row position-relative">
          <div class="col-xl-8 col-lg-10 mx-auto pt-sm-5 text-center mb-5">
            <h1 class="text-white">お祭りを探そう</h1>
            <p class="text-white">お祭りに参加してオリジナルステッカーやテーマスタイルを入手しよう</p>
            <div class="mx-auto bg-mode shadow rounded p-4">
              <div class="mx-auto bg-mode shadow rounded p-4">
                <h5 class="mb-3 text-start mx-5 px-5 text-white">祭りIDまたはキーワード</h5>
                <form class="row g-3 justify-content-center">
                  <div class="col-md-7">
                    <div class="input-group">
                      <input class="form-control form-control-lg me-1 pe-5" type="text" placeholder="探す">
                    </div>
                  </div>
                  <div class="col-md-2 d-grid">
                    <a class="btn btn-lg btn-primary" href="#">Search</a>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>

  <section class="bg-mode py-5">
    <div class="container pt-5">
      <h4>自分が参加しているサーバーのお祭り </h4>
      <div class="row flex-nowrap w-100" style="overflow-x: scroll;">
        <eventCard />
        <eventCard />
        <eventCard />
        <eventCard />
        <eventCard />
        <eventCard />
      </div>
    </div>
  </section>

  <section class="bg-mode py-5">
    <div class="container pt-5">
      <h4>人気のワールドお祭り </h4>
      <div class="row flex-nowrap w-100" style="overflow-x: scroll;">
        <eventCard />
        <eventCard />
        <eventCard />
        <eventCard />
        <eventCard />
        <eventCard />
      </div>
    </div>
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
</style>