<script setup lang="ts">
import headerTitle from "@/assets/atomic/headerTitle.vue"
import { ref, watch } from "vue"
import Peer from "peerjs"
import { useRoute } from "vue-router"
import { useRouter } from "vue-router";

const route = useRoute()
const router = useRouter()

const username = ref("")
const password = ref("")
const hashData = ref("")
const inviteCode = ref("")
const descriptionText = ref("おや? まだアカウントを作成していませんか?")
const showCopiedMessage = ref(false);
const statusCard = ref(true)

// hashDataを変更する関数
const updateHashData = (newData: string) => {
  hashData.value = newData
}

const login = async () => {
  const result = await sha256(username.value + password.value)
  updateHashData(result)
  localStorage.setItem("myName", username.value)
  localStorage.setItem("myHash", result)
  statusCard.value = false
  descriptionText.value = "ようこそOpenKitchenの世界へ"
  inviteCode.value = "invite?id="+result+"&backgroundImage=https://ocl-steinberg-live.steinberg.net/_storage/asset/178442/storage/PNG_extra-large_5500px/178442-extra-large.png"
}

async function sha256(variable: string) {
  const message = variable
  const encoder = new TextEncoder()
  const data = encoder.encode(message)
  const hashBuffer = await crypto.subtle.digest("SHA-256", data)
  const hashArray = Array.from(new Uint8Array(hashBuffer))
  const hashHex = hashArray.map((byte) => byte.toString(16).padStart(2, "0")).join("")
  return hashHex
}

const backgroundImage = ref("url(" + route.query.backgroundImage + ")")
const targetID = String(route.query.id)

const peer = new Peer(targetID + "TARGET")
console.log(targetID + "TARGET")

peer.on("open", (peerId) => {
  console.log("接続が確立しました")

  peer.on("connection", (connect) => {
    console.log("相手に接続しました")

    connect.on("data", (data) => {
      console.log("Received data:", data)
    })
  })

  const connect = peer.connect(targetID)

  // hashDataの変更を監視する
  watch(hashData, (newValue) => {
    console.log("hashDataが変更されました:", newValue)

    const sendData = {
      username: username.value,
      hash: newValue
    }
    // 相手に自分の作成したアカウントの接続用ID(hash)を教える
    connect.send(JSON.stringify(sendData))
  })

  connect.on("open", () => {
    console.log("相手に接続しました")
  })

  connect.on("error", (error) => {
    console.error("Error connecting to peer:", error)
  })
})

peer.on("error", (error) => {
  console.error("PeerJSエラー:", error)
})

const copyToClipboard = () => {
  const input = document.createElement("input");
  input.value = inviteCode.value;
  document.body.appendChild(input);
  input.select();
  document.execCommand("copy");
  document.body.removeChild(input);
  showCopiedMessage.value = true;
  setTimeout(() => {
    showCopiedMessage.value = false;
  }, 2000);
};

function goToHome () {
  router.push("/");
}
</script>

<template>
  <div class="background">
    <div style="background-color: #0000003f;">
      <headerTitle />
      <div class="login-container scheme-mode">
        <div class="card fadeUp">
          <div class="card-body">
            <h1 class="card-title text-center">招待されました!</h1>
            <p class="text-center">{{ descriptionText }}</p>
            <div v-if="statusCard" class="box fadeIn">
              <form @submit.prevent="login">
                <div class="input-group mb-3">
                  <input type="text" class="form-control" placeholder="ユーザー名を入力" aria-label="Recipient's username"
                    aria-describedby="basic-addon2" v-model="username">
                  <span class="input-group-text scheme-mode-disable" id="basic-addon2">@open</span>
                </div>
                <div class="mb-3">
                  <input type="password" id="password" class="form-control" v-model="password" placeholder="パスワードを入力"
                    required>
                </div>
                <button type="submit" class="btn btn-primary w-100">その先の向こうへ</button>
              </form>
            </div>
            <div v-else class="box fadeIn">
              <label for="inviteCodeInput" class="form-label">招待コード</label>
              <div class="input-group mb-3">
                <input type="text" class="form-control" aria-describedby="button-addon2" v-model="inviteCode" id="inviteCodeInput">
                <button class="btn btn-outline-secondary" type="button" id="button-addon2"
                  @click="copyToClipboard">Clip!</button>
              </div>
              <button type="submit" class="btn btn-primary w-100" @click="goToHome">さぁ、始めよう</button>
              <div v-if="showCopiedMessage" class="alert alert-success mt-2">
                コピーしました
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
.background {
  background-image: v-bind(backgroundImage);
  background-repeat: no-repeat;
  background-position: center bottom;
  background-size: cover;
  position: fixed;
  width: 100vw;
  height: 100vh;
  z-index: 0;
}

.login-container {
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100vh;
}

.card {
  max-width: 500px;
  width: 100%;
  border: none;
  border-radius: 10px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
  background-color: #ebebeb;
}

.card-body {
  padding: 50px 70px;
}

.card-title {
  font-size: 24px;
  font-weight: bold;
  margin-bottom: 20px;
}

input {
  background-color: #e4e4e4;
}

p {
  margin-bottom: 4rem;
}

.input-group-text {
  background-color: #c9c9c9;
}

*:focus {
  outline: none;
  box-shadow: none;
}

.fadeIn{
animation-name:fadeInAnime;
animation-duration:1s;
animation-fill-mode:forwards;
opacity:0;
}

@keyframes fadeInAnime{
  from {
    opacity: 0;
  }

  to {
    opacity: 1;
  }
}

.fadeUp{
animation-name:fadeUpAnime;
animation-duration:0.5s;
animation-fill-mode:forwards;
opacity:0;
}

@keyframes fadeUpAnime{
  from {
    opacity: 0;
  transform: translateY(100px);
  }

  to {
    opacity: 1;
  transform: translateY(0);
  }
}
</style>
