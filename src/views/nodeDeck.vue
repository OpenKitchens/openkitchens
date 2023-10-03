<script setup lang="ts">
import contribution from "@/components/Deck/contributionNode.vue"
import navBar from "@/components/Deck/navBar.vue"
</script>

<template>
  <navBar class="float w-100 border-bottom" style="top:0;left:0" />

  <div class="row">
    <div class="col-md-2"></div>
    <div class="col-md-8">
      <div class="container mt-5 p-5">
        <div class="container pt-5">
          <h4 class="fw-bold">コウケン値 Express</h4>
          <div class="row px-3">
            <div class="card col-md-8 p-0" style="border-radius: 5px 0 0 5px;">
              <div class="card-body">
                <contribution />
              </div>
            </div>
            <div class="card col-md-4" style="border-radius: 0 5px 5px 0;border-left: none;">
              <div class="card-body">
                <div class="d-flex">
                  <img
                    src="https://lh3.googleusercontent.com/a/ACg8ocLNxUa91eJmBHgyjw4Ud-3EvNHnHcXAc9dsz1kgo8OY0g=s576-c-no"
                    class="avatar-icon rounded-pill">
                  <div class="avatar-name ms-0">
                    <h6 class="fw-bold mb-0">Openkitchen</h6>
                    <small class="rate">2000XP</small>
                  </div>
                </div>
                <span class="code">issue/@openkitchen</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      <section class="bg-mode p-5">
        <div class="container">
          <h4 class="fw-bold">自分のノード</h4>
          <div class="card text-center mt-3">
            <h7 class="card-header fw-bold">
              Your node
            </h7>
            <ul class="list-group list-group-flush">
              <li class="list-group-item"><span class="code">issue/atlantis/public/myThread</span> <img
                  src="icon/download.svg" class="pb-1 px-2 plugin-img">Finderで開く
                <span class="badge rounded-pill text-bg-purple badge-right">Express 4</span>
              </li>
              <li class="list-group-item"><span class="code">auth/@moyasi/emp-record</span> <img src="/icon/download.svg"
                  class="pb-1 px-2 plugin-img">Finderで開く
                <span class="badge rounded-pill text-bg-purple badge-right">Express 7</span>
              </li>
              <li class="list-group-item"><span class="code">auth/@moyasi/emp-record</span> <img src="/icon/download.svg"
                  class="pb-1 px-2 plugin-img">Finderで開く
                <span class="badge rounded-pill text-bg-purple badge-right">Express 12</span>
              </li>
              <li class="list-group-item"><span class="code">auth/atlantis/server</span> <img src="/icon/download.svg"
                  class="pb-1 px-2 plugin-img">Finderで開く
                <span class="badge rounded-pill text-bg-purple badge-right">Express 6</span>
              </li>
            </ul>
          </div>
        </div>
      </section>

      <section class="bg-mode p-5">
        <div class="container">
          <h4 class="fw-bold">接続しているノード </h4>
          <div class="card text-center mt-3">
            <h7 class="card-header fw-bold">
              connected node
            </h7>
            <ul class="list-group list-group-flush">
              <li class="list-group-item"><span class="code">issue/atlantis/server</span></li>
              <li class="list-group-item"><span class="code">auth/@moyasi/emp-record</span></li>
              <li class="list-group-item"><span class="code">auth/@moyasi/emp-record</span></li>
            </ul>
          </div>
        </div>
      </section>

      <section class="bg-mode p-5">
        <div class="container">
          <h4 class="fw-bold">参加しているサーバー </h4>
          <div class="card text-center mt-3">
            <h7 class="card-header fw-bold">
              connected server
            </h7>
            <ul class="list-group list-group-flush">
              <li class="list-group-item">atlantis<span class="code badge-right server-code">auth/server:atlantis</span></li>
              <li class="list-group-item">マイクラサーバー<span class="code badge-right server-code">auth/server:maikurasa-ba-</span></li>
              <li class="list-group-item">ボードゲームatlantis<span class="code badge-right server-code">auth/server:bo-doge-muatlantis</span></li>
            </ul>
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
    </div>
    <div class="col-md-2"></div>
  </div>
</template>

<style scoped>
.float {
  position: fixed;
  z-index: 2;
  overflow-y: scroll;
}


@media (prefers-color-scheme: dark) {
  .card-header {
    background-color: rgb(33, 33, 33);
    border-color: rgb(52, 52, 52) !important;
  }

  .card {
    border-color: rgb(52, 52, 52) !important;
  }

  .list-group-item {
    background-color: rgba(33, 37, 41, 0.03);
    border-color: rgb(52, 52, 52) !important;
    color: rgb(125, 133, 144) !important;
  }
}

.list-group,
.card-header {
  text-align: left;
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

.text-bg-purple {
  color: #fff;
  background-color: rgb(137, 87, 229);
  font-size: 15px;
}

.badge-right {
  position: absolute;
  right: 10px;
}

.server-code{
  top: 5px;
}

.contributions {
  display: flex;
  flex-wrap: wrap;
}

.contribution-day {
  width: 14px;
  height: 14px;
  margin: 3px;
  border: solid 0.5px #65656540;
  border-radius: 2px;
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

@media (prefers-color-scheme: dark) {
  .plugin-img {
    filter: invert(100%);
  }
}
</style>