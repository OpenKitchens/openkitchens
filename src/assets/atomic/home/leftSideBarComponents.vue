<script setup lang="ts">
import { ref } from "vue";

defineProps<{
  myName: String;
  myHash: String;
  myHeader: String;
  myIcon: String;
  myBio: String;
  servers: Object[];
  friends: Object[];
}>();
</script>

<template>
  <div class="card" style="width: calc(100% - 10px); margin: 5px">
    <img :src="myHeader" class="card-img-top" />
    <div class="card-body">
      <img :src="myIcon" class="rounded-circle user-image" />
      <div class="contents">
        <h5 class="card-title">{{ myName }}</h5>
        <p class="card-text">{{ myBio }}</p>
      </div>
    </div>
  </div>

  <div class="card" style="width: calc(100% - 10px); margin: 5px">
    <div class="card-header">自分のサーバー</div>
    <ul class="list-group list-group-flush" v-for="server in servers">
      <li
        class="list-group-item d-flex justify-content-between align-items-start"
      >
        <div class="ms-2 me-auto">
          <span class="emoji">{{ server.emoji }}</span>
          {{ server.title }}
        </div>
        <span class="badge bg-primary rounded-pill">{{ server.badge }}</span>
      </li>
    </ul>
  </div>

  <div class="card" style="width: calc(100% - 10px); margin: 5px">
    <div class="card-header">フレンド</div>
    <ul class="list-group list-group-flush" v-for="friend in friends">
      <li class="list-group-item">
        <img :src="friend.image" class="rounded-circle other-icon" />
        {{ friend.title }}
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
  top: calc(12vw - 35px);
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
}
</style>
