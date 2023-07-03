<script setup lang="ts">
import headerComponents from "@/assets/atomic/home/headerComponents.vue"
import leftSideBarComponents from "@/assets/atomic/home/leftSideBarComponents.vue"
import mainContentComponents from "@/assets/atomic/home/mainContentComponents.vue"
import rightSideBarComponents from "@/assets/atomic/home/rightSideBarComponents.vue"

import Peer from "peerjs";

const myID = localStorage.getItem("myHash");
const peer = new Peer(myID as string);

peer.on('open', (peerId) => {
  console.log('接続が確立しました');

  // 認証用
  const authFor = peer.connect(myID + "TARGET");
  console.log(myID + "TARGET")
  authFor.on('open', () => {
    console.log('相手に接続しました (authFor)');
  });
  authFor.on('error', (error) => {
    console.error('Error connecting to peer:', error);
  });
});

peer.on('connection', (connection) => {
  console.log('相手に接続しました (connection)');

  connection.on('data', (data) => {
    const receivedData = JSON.parse(data as string);
    console.log('受信データ:', data);
    localStorage.setItem(receivedData.username, receivedData.hash);
  });
});

peer.on('error', (error) => {
  console.error('PeerJSエラー:', error);
});
</script>

<template>
  <div class="holy-grail">
    <header>
      <headerComponents />
    </header>
    <main class="holy-grail__main">
      <!-- Left sidebar -->
      <aside class="holy-grail__left d-none d-lg-block" style="overflow-y: scroll;height: calc(100vh - 50px);">
        <leftSideBarComponents />
      </aside>

      <!-- Main content -->
      <article class="holy-grail__middle" style="width:55%;overflow-y: scroll;height: calc(100vh - 50px);">
        <mainContentComponents />
      </article>

      <!-- Right sidebar -->
      <nav class="holy-grail__right d-none d-lg-block" style="overflow-y: scroll;height: calc(100vh - 50px);">
        <rightSideBarComponents />
        <rightSideBarComponents />
        <rightSideBarComponents />
      </nav>
    </main>
    <footer></footer>
  </div>
</template>

<style scoped>
.holy-grail {
  display: flex;
  flex-direction: column;
  background-color: #fff;
}

.holy-grail__main {
  /* Take the remaining height */
  flex-grow: 1;

  /* Layout the left sidebar, main content and right sidebar */
  display: flex;
  flex-direction: row;
}

.holy-grail__left {
  width: 25%;
}

.holy-grail__middle {
  /* Take the remaining width */
  flex-grow: 1;
}

.holy-grail__right {
  width: 20%;
}

@media (prefers-color-scheme: dark) {
  .holy-grail{
    filter: invert(1) hue-rotate(180deg);
  }
}
</style>