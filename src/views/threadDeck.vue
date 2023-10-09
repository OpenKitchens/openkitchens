<script setup lang="ts">
import navBar from "@/components/Deck/navBar.vue"
</script>

<template>
  <navBar class="float w-100 border-bottom" style="top:0;left:0" />

  <section class="mt-5 pt-5 pb-0 position-relative"
    style="background-image: url(https://files.mike.works/courses/17/course_banner_17_fbshare.png?v=63661806214); background-repeat: no-repeat; background-size: cover; background-position: center center;height: 30vh;">
  </section>
  <div class="container mt-5">
    <div class="row justify-content-center">
      <div class="col-md-8">
        <h2 class="mb-4 fw-bold">【JS】モダンなJavaScript構文を書いていくスレ</h2>
        <div class="d-flex">
          <img src="https://lh3.googleusercontent.com/a/ACg8ocLNxUa91eJmBHgyjw4Ud-3EvNHnHcXAc9dsz1kgo8OY0g=s576-c-no"
            class="avatar-icon rounded-pill">
          <div class="avatar-name ms-0">
            <h6 class="fw-bold mb-0">Openkitchen</h6>
            <p class="rate">2023, 10月9に屋台でオーダー</p>
          </div>
        </div>

        <div id="aahub">
          ChatGPTにコードリーディングをしてもらっていると「これは伝統的な書き方ですが、もっと現代風の書き方がありますよ」といった旨を言われて悲しくなってしまった。
        </div>

        <div class="card card-border mt-4 mb-4">
          <ul class="list-group list-group-flush card-border">
            <li class="list-group-item">
              <div class="d-flex">
                <img
                  src="https://lh3.googleusercontent.com/a/ACg8ocLNxUa91eJmBHgyjw4Ud-3EvNHnHcXAc9dsz1kgo8OY0g=s576-c-no"
                  class="avatar-icon rounded-pill mt-2" style="margin-left:0;">
                <div>
                  <div class="mt-2 ms-0">
                    <h6 class="fw-bold mb-1">Openkitchen</h6>
                  </div>
                  <p>
                    伝統的<br>
                    <span class="code">const elementById = document.getElementById('myId');</span><br>
                    モダン<br>
                    <span class="code">const elementById = document.querySelector('#myId');</span>
                  </p>
                </div>
              </div>
            </li>
            <li class="list-group-item">
              <div class="d-flex">
                <img
                  src="https://lh3.googleusercontent.com/a/ACg8ocLNxUa91eJmBHgyjw4Ud-3EvNHnHcXAc9dsz1kgo8OY0g=s576-c-no"
                  class="avatar-icon rounded-pill mt-2" style="margin-left:0;">
                <div>
                  <div class="mt-2 ms-0">
                    <h6 class="fw-bold mb-1">Openkitchen</h6>
                  </div>
                  <p>
                    伝統的<br>
                    <span class="code">const elementById = document.getElementById('myId');</span><br>
                    モダン<br>
                    <span class="code">const elementById = document.querySelector('#myId');</span>
                  </p>
                </div>
              </div>
            </li>
            <li class="list-group-item">
              <div class="d-flex">
                <img
                  src="https://lh3.googleusercontent.com/a/ACg8ocLNxUa91eJmBHgyjw4Ud-3EvNHnHcXAc9dsz1kgo8OY0g=s576-c-no"
                  class="avatar-icon rounded-pill mt-2" style="margin-left:0;">
                <div>
                  <div class="mt-2 ms-0">
                    <h6 class="fw-bold mb-1">Openkitchen</h6>
                  </div>
                  <p>
                    伝統的<br>
                    <span class="code">const elementById = document.getElementById('myId');</span><br>
                    モダン<br>
                    <span class="code">const elementById = document.querySelector('#myId');</span>
                  </p>
                </div>
              </div>
            </li>

            <li class="list-group-item">
              <div class="input-group mt-2 mb-2 mx-1" style="width: 99%;">
                <span class="input-group-text" id="addon-wrapping">@</span>
                <input type="text" class="form-control" placeholder="テキストを入力" aria-describedby="button-addon2" />
                <button class="btn btn-outline-secondary" type="button" id="button-addon2">
                  リプライ
                </button>
              </div>
            </li>
          </ul>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
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

.rate {
  color: #717171;
}

#aahub {
  white-space: pre-wrap !important;
  word-wrap: break-word !important;
}

.code {
  font-family: Menlo, Consolas, 'DejaVu Sans Mono', monospace;
  font-size: 12px;
  padding: 5px 7px;
  border-radius: 5px;
  border: solid 1px rgba(56, 138, 253, 0.393);
  color: rgb(47, 129, 247);
  background-color: rgba(56, 139, 253, 0.1);
  display: inline-block;
  position: relative;
  top: -1px;
}

.float {
  position: fixed;
  z-index: 2;
  overflow-y: scroll;
}

@media (prefers-color-scheme: dark) {
  .input-group-text {
    background-color: rgb(48, 48, 48) !important;
    color: rgb(243, 245, 247) !important;
    border-color: rgba(243, 245, 247, 0.05) !important;
  }
  .form-control{
    background-color: rgb(34, 34, 34) !important;
    color: rgb(243, 245, 247) !important;
    border-top: solid 1px rgba(243, 245, 247, 0.116) !important;
    border-bottom: solid 1px rgba(243, 245, 247, 0.116) !important;
    border-left: solid 1px rgba(243, 245, 247, 0.046) !important;
  }
}
</style>