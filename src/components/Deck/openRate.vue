<template>
  <div class="card mt-3">
    <h5 class="card-header fw-bold pt-3 pb-3">貢献レート</h5>
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
</template>


<style scoped>
@media (prefers-color-scheme: dark) {

  .card,
  .card-header{
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

.add-emoji {
  padding: 3px;
  width: 30px;
  height: 30px;
  background-color: #fffbf4;
}

.emoji {
  padding: 3px 6px;
  height: 30px;
  font-size: 12px;
  background-color: #fffbf4;
}

.emoji span {
  padding: 4px;
}

.rate{
  color: #717171;
}
</style>