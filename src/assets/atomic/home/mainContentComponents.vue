<template>
  <div
    class="card text-white bg-dark"
    style="margin-top: 5px; border: solid 1px #eee"
  >
    <img
      src="https://media.loom-app.com/gizmodo/dist/images/2023/06/07/230607_vision_pro_column_1.jpg?w=1280"
      class="card-img"
      style="opacity: 0.5; height: 100%"
    />
    <div class="card-img-overlay">
      <img
        src="https://static.wikia.nocookie.net/discord/images/e/e6/Mee6.png"
        class="rounded-circle other-icon mx-auto d-block"
        style="margin-bottom: 5px"
      />
      <h4 class="card-title text-center">
        Vision Proを体験した人たちの感想を見て、僕はちょっと凹んでいる…
      </h4>
      <p class="card-text text-center d-none d-lg-block">
        悔しい…。 Vision
        Proを体験してる現地勢のツイート見てちょっと凹んでいます。今のところ国内でVision
        Proを触れているのは一部のITジャーナリストやメディアの数人程度。ギズモード・ジャパンでも綱藤さんが触ってきました。
      </p>
      <p class="card-text">Last updated 3 mins ago</p>
    </div>
  </div>

  <ol class="list-group list-group" style="margin-top: 5px">
    <li
      class="list-group-item d-flex justify-content-between align-items-start"
    >
      <img
        src="https://lh3.googleusercontent.com/a/AAcHTtfJxAxhupV-gaBkzvK52gbXss-IRzj8uk88IIg-aI5fYA=s96-c"
        class="rounded-circle thread-icon"
      />
      <div class="ms-2 me-auto">
        <div class="fw-bold">【VRChat】自鯖のリンク貼ってけ</div>
        <span class="emoji">🍔</span> openkitchen開発部
      </div>
      <span class="badge bg-primary rounded-pill">514</span>
    </li>
    <li
      class="list-group-item d-flex justify-content-between align-items-start"
    >
      <img
        src="https://static.wikia.nocookie.net/discord/images/e/e6/Mee6.png"
        class="rounded-circle thread-icon"
      />
      <div class="ms-2 me-auto">
        <div class="fw-bold">あ、Github落ちた…</div>
        <span class="emoji">🐈‍⬛</span> GitHubの民
      </div>
      <span class="badge bg-primary rounded-pill">297</span>
    </li>
    <li
      class="list-group-item d-flex justify-content-between align-items-start"
    >
      <img
        src="https://neconeconews.com/wp-content/uploads/popcat1_close.png"
        class="rounded-circle thread-icon"
      />
      <div class="ms-2 me-auto">
        <div class="fw-bold">【悲報】GitHubサーバーダウン...</div>
        <span class="emoji">🎙</span> 雑談サーバー
      </div>
      <span class="badge bg-primary rounded-pill">114</span>
    </li>
    <li
      class="list-group-item d-flex justify-content-between align-items-start"
    >
      <img
        src="https://upload.wikimedia.org/wikipedia/commons/c/c9/Finder_Icon_macOS_Big_Sur.png"
        class="rounded-circle thread-icon"
      />
      <div class="ms-2 me-auto">
        <div class="fw-bold">【organization】ワクワク参加レポジトリ</div>
        <span class="emoji">🐈‍⬛</span> GitHubの民
      </div>
      <span class="badge bg-primary rounded-pill">72</span>
    </li>
  </ol>
</template>
<style scoped>
@import url("./style.css");
.other-icon {
  width: 35px;
  height: 35px;
}

.thread-icon {
  width: 50px;
  height: 50px;
  margin-right: 10px;
}

.card-img-overlay {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 40vw;
}

.card-img {
  height: 100%;
}

@media (max-width: 960px) {
  .card-img-overlay {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    width: 70vw;
  }
}
</style>
