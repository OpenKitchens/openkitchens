<template>
  <div class="card mt-3 card-border">
    <div class="card-body">
      <img src="/assets/moyasi.png" class="w-100 rounded">
    </div>
    <div class="d-flex">
      <img src="https://lh3.googleusercontent.com/a/ACg8ocLNxUa91eJmBHgyjw4Ud-3EvNHnHcXAc9dsz1kgo8OY0g=s576-c-no"
        class="avatar-icon rounded-pill">
      <div class="avatar-name ms-0">
        <h6 class="fw-bold mb-0">Openkitchen</h6>
        <small class="time">2023,9,18</small>
      </div>
    </div>
    <div class="card-body pt-0">
      <h4 class="card-title mt-0 mb-3 fw-bold">OpenKitchen NextSeason</h4>
      トップユーザーによるOpen議会Start<br>
    </div>
    <div class="card-body pt-0">
      <button type="button" class="btn btn-light rounded-pill add-emoji border ms-2 ">😀</button>
      <button type="button" class="btn btn-light rounded-pill emoji border ms-2">❤️<span>2</span></button>
    </div>
  </div>
</template>
<style scoped>
@media (prefers-color-scheme: dark) {
  .emoji {
    background-color: rgb(24, 24, 24) !important;
    border-color: rgba(243, 245, 247, 0.2) !important;
    color: rgb(243, 245, 247) !important;
  }
  .add-emoji{
    border-color: rgba(243, 245, 247, 0.2) !important;
  }
}

.avatar-icon {
  width: 45px;
  height: 45px;
  margin: 15px;
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

.time{
  color: #717171;
}
</style>
