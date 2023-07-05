<script setup lang="ts">
import { ref } from "vue";

defineProps<{
  topThread: {
    background: string;
    icon: string;
    title: string;
    preview: string;
  };
  threadList: {
    title: string;
    user: string;
    icon: string;
    serverEmoji: string;
    server: string;
    link: string;
    badge: number;
  }[];
}>();
</script>

<template>
  <div
    class="card text-white bg-dark topCard d-lg-none"
    style="margin-top: 5px; border: solid 1px #eee"
  >
    <img :src="topThread.background" class="card-img" style="opacity: 0.5" />
    <div class="card-img-overlay mx-auto">
      <img
        :src="topThread.icon"
        class="rounded-circle other-icon mx-auto d-block"
        style="margin-bottom: 5px"
      />
      <h4 class="card-title text-center">
        {{ topThread.title }}
      </h4>
    </div>
  </div>

  <div class="card d-none d-lg-block" style="width: 100%; margin-top: 5px">
    <img :src="topThread.background" class="card-img-top" />
    <div class="card-body">
      <h5 class="card-text">{{ topThread.title }}</h5>
      <p class="card-text">{{ topThread.preview }}</p>
      <div style="display: flex">
        <span class="emoji">{{ topThread.serverEmoji }}</span>
        {{ topThread.server }}
      </div>
    </div>
  </div>

  <ol class="list-group list-group" style="margin-top: 5px">
    <li
      class="list-group-item d-flex justify-content-between align-items-start"
      v-for="thread in threadList"
    >
      <img :src="thread.icon" class="rounded-circle thread-icon" />
      <div class="ms-2 me-auto">
        <div class="fw-bold threadBold">
          {{ thread.title }}
        </div>
        <span class="emoji">{{ thread.serverEmoji }}</span> {{ thread.server }}
      </div>
      <span class="badge bg-primary rounded-pill">{{ thread.badge }}</span>
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

.threadBold {
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
}

@media (max-width: 960px) {
  .card-img-overlay {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    width: 70vw;
  }
  .threadBold {
    width: calc(55vw - 20px);
  }
}
</style>
