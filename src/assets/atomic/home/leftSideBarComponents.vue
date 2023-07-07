<script setup lang="ts">
defineProps<{
  myName: string;
  myHash: string;
  myHeader: string;
  myIcon: string;
  myBio: string;
  servers: { emoji: string; title: string; badge: string }[];
  friends: { title: string; image: string }[];
}>();
</script>

<template>
  <div class="card" style="width: calc(100% - 10px); margin: 5px">
    <img :src="myHeader" class="card-img-top" />
    <div class="card-body">
      <img :src="myIcon" class="rounded-circle user-image" />
      <div class="UI">
        <button type="button" class="rounded-pill UI-child p-0">
          <img src="icons/private.svg" style="width: 20px; height: 20px" />
          <span class="d-none d-lg-inline">匿名MODE</span>
        </button>
        <button
          type="button"
          class="btn btn-primary rounded-circle p-0 UI-child"
          style="width: 2rem; height: 2rem"
        >
          <img
            src="icons/settings.svg"
            style="width: 20px; height: 20px; padding: 1px 1px !important"
          />
        </button>
      </div>
      <div class="contents">
        <h5 class="card-title">{{ myName }}</h5>
        <p class="card-text">{{ myBio }}</p>
      </div>
    </div>
  </div>

  <div class="card" style="width: calc(100% - 10px); margin: 5px">
    <div class="card-header">自分のサーバー</div>
    <ul class="list-group list-group-flush">
      <li
        class="list-group-item d-flex justify-content-between align-items-start"
        v-for="server in servers"
      >
        <div class="ms-2 me-auto ellipsis">
          <span class="emoji">{{ server.emoji }}</span>
          {{ server.title }}
        </div>
        <span class="badge bg-primary rounded-pill">{{ server.badge }}</span>
      </li>
    </ul>
  </div>

  <div class="card" style="width: calc(100% - 10px); margin: 5px">
    <div class="card-header">フレンド</div>
    <ul class="list-group list-group-flush">
      <li class="list-group-item" v-for="friend in friends">
        <img :src="friend.image" class="rounded-circle other-icon" />
        <span class="ellipsis">{{ friend.title }}</span>
      </li>
    </ul>
  </div>
</template>

<style scoped>
@import url("./style.css");
.user-image {
  width: 75px;
  height: 75px;
  position: absolute;
  border: solid 2px #ffffff;
  top: calc(12vw - 35px);
}
.UI {
  position: absolute;
  top: calc(12vw + 5px);
  left: 100px;
  display: block;
}

.UI-child {
  background-color: #000;
  /*border: solid 1px #aaa;*/
  border: none;
  padding: 5px 10px !important;
  color: #fff;
  margin-left: 5px;
  font-size: 15px;
}

.UI-child img {
  filter: invert(1) hue-rotate(180deg);
}

.card-img-top {
  height: 12vw;
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
  margin-right: 10px;
}
</style>
