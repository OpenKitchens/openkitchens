<script setup lang="ts">
import headerTitle from "@/assets/atomic/headerTitle.vue"
import Peer from "peerjs";

//自分のIDをcookieに保存しておく(即ちhashなり)
const myID = "76eef435-a899-4a8b-bec1-14d7db0cc345"
const peer = new Peer(myID);

peer.on('open', (peerId) => {
  console.log('接続が確立しました');

  peer.on('connection', (connect) => {
    console.log('相手に接続しました');

    connect.on('data', (data) => {
      console.log('Received data:', data);
    });
  });

  const connect = peer.connect(myID+"1");

  connect.on('open', () => {
    console.log('相手に接続しました');
  });

  connect.on('error', (error) => {
    console.error('Error connecting to peer:', error);
  });
});

peer.on('error', (error) => {
  console.error('PeerJSエラー:', error);
});

</script>

<template>
  <div>
    <headerTitle />
  </div>
</template>

<style scoped>
</style>