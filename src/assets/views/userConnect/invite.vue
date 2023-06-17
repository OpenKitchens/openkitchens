<script setup lang="ts">
import headerTitle from "@/assets/atomic/headerTitle.vue"
import ButtonNomal from "@/assets/atomic/ButtonNomal.vue"
import ButtonRed from "@/assets/atomic/ButtonRed.vue"

import { useRoute } from "vue-router";
import Peer from "peerjs";
import { ref } from "vue";

const route = useRoute();

//urlのクエリからデータを取得し、背景の画像を取得する。
const backgroundImage = ref("url("+route.query.backgroundImage+")")
//urlのクエリからデータを取得し、ユーザーアイコンを取得する。
const userIcon = ref(route.query.userIcon)
//urlのクエリからデータを取得し、ユーザーネームを取得する。
const userName = ref(route.query.userName)

//urlのクエリからデータを取得して相手の接続IDを保持する。
const targetID = String(route.query.id)

//peerの接続
const peer = new Peer(targetID+"1");

//接続を開始
peer.on('open', (peerId) => {
  console.log('接続が確立しました');

  peer.on('connection', (connect) => {
    console.log('相手に接続しました');

    connect.on('data', (data) => {
      console.log('Received data:', data);
    });
  });


  const connect = peer.connect(targetID);

  connect.on('open', () => {
    console.log('相手に接続しました');

    //相手に自分の作成したアカウントの接続用ID(hash)を教える
    connect.send("wakuwaku");
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
  <div class="background"></div>
  <section>
    <headerTitle />
    <div class="content">
      <div class="field">
        <h1>招待されました!</h1>
        <p>まだアカウントを作成していないようですね。アカウントを作成し<span class="truthText">Truth!</span>しましょう</p>
        <div class="UI">
          <label for="username">username</label>
          <input name="username" type="text">
          <label for="password">password</label>
          <input name="password" type="password">
          <div class="ScreenControl">
            <ButtonRed>拒否</ButtonRed>
            <ButtonNomal>Next!</ButtonNomal>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped>
.background{
  background-image: v-bind(backgroundImage);
  background-repeat: no-repeat;
  background-position:center bottom;
  background-size:cover;

  width: 100vw;
  height: 100vh;
  z-index: 0;
  filter: blur(4px);
}
section{
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  z-index: 0;
  
  background-color: rgba(0, 0, 0, 0.5);
  text-align: center;
}
headerTitle{
  z-index: 1;
}
.content{
  width: 50vw;
  height: 80vh;
  background-color: #111;
  border-radius: 10px;
  border: solid 1px #333;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
}
.field{
  position: relative;
  top: 40%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 50vw;
}
.UI{
  position: relative;
  left: 50%;
  transform: translateX(-50%);
  width: 25vw;
}
label{
  text-align: left;
  color: #888;
  margin-top: 30px;
  margin-bottom: 5px;
}
input{
  width: inherit;
  height: 40px;
}
.ScreenControl{
  margin: 30px 10px;
}
</style>
