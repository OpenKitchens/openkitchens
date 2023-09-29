<template>
  <div class="card mt-3 card-border">
    <h5 class="card-header fw-bold pt-3 pb-3">参加中のイベント</h5>
    <div class="d-flex">
      <img src="/assets/season.png" class="event-icon rounded-pill">
      <div class="event-name ms-0 p-2">
        <h5 class="fw-bold mb-0">Atlantis 秋祭り</h5>
        <span class="badge bg-success">開催中!</span>
      </div>
    </div>
    <div class="d-flex">
      <img src="/assets/openRate.png" class="event-icon rounded-pill">
      <div class="event-name ms-0 p-2">
        <h5 class="fw-bold mb-0">Atlantis サーバーバトル</h5>
        <span class="badge bg-warning">準備中!</span>
      </div>
    </div>
  </div>
</template>


<style scoped>
@media (prefers-color-scheme: dark) {

  .card,
  .card-header {
    background-color: rgb(24, 24, 24) !important;
    color: rgb(243, 245, 247);
    border-color: rgba(243, 245, 247, 0.05) !important;
  }

  .add-emoji {
    background-color: rgb(24, 24, 24) !important;
    border-color: rgba(243, 245, 247, 0.2) !important;
  }

  .emoji {
    background-color: rgb(24, 24, 24) !important;
    border-color: rgba(243, 245, 247, 0.2) !important;
    color: rgb(243, 245, 247);
  }
}

.card {
  /*box-shadow: rgba(140, 149, 159, 0.15) 0px 3px 6px 0px;*/
  background-color: #fffefb;
  /*border-color: rgb(216, 222, 228);*/
  border-color: rgba(0, 0, 0, 0.07);
  border-radius: 15px;
}

.card-header {
  border-radius: 15px 15px 0 0;
  background-color: #fffefb;
  border-color: rgba(0, 0, 0, 0.07);
}

.event-icon {
  width: 65px;
  height: 65px;
  margin: 15px;
  /*box-sizing: content-box;*/
  animation: expansion 1s infinite alternate;
}

.event-name {
  margin: 15px;
}

@keyframes expansion {
  0% {
    border: solid 1px #6f6f6f83;
  }

  100% {
    border: solid 5px #6f6f6f17;
  }
}
</style>