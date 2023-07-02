<script setup lang="ts">
import headerComponents from "@/assets/atomic/headerComponents.vue"
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
  <div class="scheme-mode box">
    <headerComponents />
  </div>
</template>

<style scoped>
.box{
  width: 100vw;
  height: 100vh;
  background-color: #fff;
}
</style>