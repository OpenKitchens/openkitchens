<template>
  <div class="card" style="width: calc(100% - 10px);margin: 5px">
    <img src="https://assets.moguravr.com/uploads/2021/09/202109211455137000.jpg" class="card-img-top" alt="...">
    <div class="card-body">
      <img src="https://lh3.googleusercontent.com/a/AAcHTtfJxAxhupV-gaBkzvK52gbXss-IRzj8uk88IIg-aI5fYA=s96-c"
        class="rounded-circle user-image">
      <div class="contents">
        <h5 class="card-title">MOYASI</h5>
        <p class="card-text">Hi there <span class="emoji">👋</span></p>
      </div>
    </div>
  </div>

  <div class="card" style="width: calc(100% - 10px);margin: 5px">
    <div class="card-header">
      自分のサーバー
    </div>
    <ul class="list-group list-group-flush">
      <li class="list-group-item d-flex justify-content-between align-items-start">
        <div class="ms-2 me-auto">
          <span class="emoji">🐈‍⬛</span> GitHubの民
        </div>
        <span class="badge bg-primary rounded-pill">14</span>
      </li>
      <li class="list-group-item d-flex justify-content-between align-items-start">
        <div class="ms-2 me-auto">
          <span class="emoji">🎙</span> 雑談サーバー
        </div>
        <span class="badge bg-primary rounded-pill">314</span>
      </li>
      <li class="list-group-item d-flex justify-content-between align-items-start">
        <div class="ms-2 me-auto">
          <span class="emoji">🍳</span> OpenKitchen開発部
        </div>
        <span class="badge bg-primary rounded-pill">4</span>
      </li>
      <li class="list-group-item d-flex justify-content-between align-items-start">
        <div class="ms-2 me-auto">
          <span class="emoji">🇯🇵</span> 鯖の和風煮込み
        </div>
        <span class="badge bg-primary rounded-pill">3</span>
      </li>
      <li class="list-group-item d-flex justify-content-between align-items-start">
        <div class="ms-2 me-auto">
          <span class="emoji">🍕</span> 飯テロ製作委員会
        </div>
        <span class="badge bg-primary rounded-pill">54</span>
      </li>
      <li class="list-group-item d-flex justify-content-between align-items-start">
        <div class="ms-2 me-auto">
          <span class="emoji">🍔</span> 私立バーガーショップ
        </div>
        <span class="badge bg-primary rounded-pill">14</span>
      </li>
    </ul>
  </div>

  <div class="card" style="width: calc(100% - 10px);margin: 5px">
    <div class="card-header">
      フレンド
    </div>
    <ul class="list-group list-group-flush">
      <li class="list-group-item">
        <img src="https://lh3.googleusercontent.com/a/AAcHTtfJxAxhupV-gaBkzvK52gbXss-IRzj8uk88IIg-aI5fYA=s96-c"
          class="rounded-circle other-icon">
        OpenKitchens
      </li>
      <li class="list-group-item">
        <img src="https://www.nhk-character.com/wp/wp-content/uploads/2021/02/main_george.jpg"
          class="rounded-circle other-icon">
        おさるのジョージ
      </li>
      <li class="list-group-item">
        <img src="https://static.wikia.nocookie.net/discord/images/e/e6/Mee6.png" class="rounded-circle other-icon">
        Dirt君
      </li>
    </ul>
  </div>
</template>

<style scoped>
@import url("./style.css");
.user-image {
  width: 70px;
  height: 70px;
  position: absolute;
  border: solid 2px #ffffff;
  bottom: 80px;
}

.thread-icon {
  width: 50px;
  height: 50px;
  margin-right: 10px;
}

.contents {
  margin-top: 30px;
}

.other-icon {
  width: 35px;
  height: 35px;
}
</style>