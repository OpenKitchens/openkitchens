<script setup lang="ts">
import headerComponents from "@/assets/atomic/home/headerComponents.vue";
import leftSideBarComponents from "@/assets/atomic/home/leftSideBarComponents.vue";
import mainContentComponents from "@/assets/atomic/home/mainContentComponents.vue";
import rightSideBarComponents from "@/assets/atomic/home/rightSideBarComponents.vue";
import { reactive } from "vue";
import Peer from "peerjs";

//初期データの格納
localStorage.setItem(
  "myBio",
  "Laravel(PHP)とGCPが好きなWebエンジニア。けど業務で使うのはJava/Kotlin系とReact。発言は個人の意見であり組織を代表しません。"
);
localStorage.setItem(
  "myIcon",
  "https://lh3.googleusercontent.com/a/AAcHTtfJxAxhupV-gaBkzvK52gbXss-IRzj8uk88IIg-aI5fYA=s96-c"
);
localStorage.setItem(
  "myHeader",
  "https://assets.moguravr.com/uploads/2021/09/202109211455137000.jpg"
);
localStorage.setItem(
  "servers",
  `[{"emoji": "🐈‍⬛", "title": "GitHubの民", "badge": 512},{"emoji": "🎙", "title": "雑談サーバー", "badge": 367},{"emoji": "🍳", "title": "OpenKitchen開発部", "badge": 292},{"emoji": "🇯🇵", "title": "鯖の和風煮込み", "badge": 32},{"emoji": "🍕", "title": "飯テロ製作委員会", "badge": 16},{"emoji": "🍔", "title": "私立バーガーショップ", "badge": 12}]`
);
localStorage.setItem(
  "friends",
  `[{"image": "https://lh3.googleusercontent.com/a/AAcHTtfJxAxhupV-gaBkzvK52gbXss-IRzj8uk88IIg-aI5fYA=s96-c","title": "OpenKitchens"},{"image": "https://www.nhk-character.com/wp/wp-content/uploads/2021/02/main_george.jpg","title": "おさるのジョージ"},{"image": "https://static.wikia.nocookie.net/discord/images/e/e6/Mee6.png","title": "Dirt君"}]`
);

const myName = localStorage.getItem("myName");
const myIcon = localStorage.getItem("myIcon");
const myHeader = localStorage.getItem("myHeader");
const myBio = localStorage.getItem("myBio");
const myID = localStorage.getItem("myHash");
//@ts-ignore
let friends = JSON.parse(localStorage.getItem("friends"));
//@ts-ignore
let servers = JSON.parse(localStorage.getItem("servers"));

const peer = new Peer(myID as string);

const UI = reactive({
  myName: myName,
  myHash: myID,
  myIcon: myIcon,
  myHeader: myHeader,
  myBio: myBio,
  friends: friends,
  servers: servers,
});

const timeLine = reactive({
  topThread: {
    background:
      "https://static.reuters.com/resources/r/?m=02&d=20230704&t=2&i=1637745003&r=LYNXMPEJ63024&w=1600",
    title: "米メタ、ツイッターのような対話アプリ「Threads」発表へ",
    preview:
      "[３日 ロイター] - 米メタ・プラットフォームズは対話アプリ「Threads（スレッズ）」の立ち上げを計画している。\n新アプリは同社の写真共有アプリ、インスタグラムのテキストベースの会話アプリで、６日に発表される予定。ユーザーはインスタグラムでフォローしているアカウントをそのまま引き継ぐことができ、ユーザー名も変わらない。\nツイッター運営会社はここ数日、閲覧数の制限や「TweetDeck（ツイートデック）」の認証制度導入など、さまざまな制限を発表している。\n",
    user: "9e61633c0c104a64d719e53871538f73688291d3ffd02dff5f55e3ae7de093d0",
    icon: "https://static.wikia.nocookie.net/discord/images/e/e6/Mee6.png",
    link: "9e61633c0c104a64d719e53871538f73688291d3ffd02dff5f55e3ae7de093d0/米メタ、ツイッターのような対話アプリ「Threads」発表へ",
    serverEmoji: "🎙",
    server: "雑談サーバー",
  },
  threadList: [
    {
      title: "【VRChat】自鯖のリンク貼ってけ",
      user: "52d16e3c0c104a64d719e58871538f73988291d3ffd02dff5f55e3ae7de093d0",
      icon: "https://lh3.googleusercontent.com/a/AAcHTtfJxAxhupV-gaBkzvK52gbXss-IRzj8uk88IIg-aI5fYA=s96-c",
      serverEmoji: "🍔",
      server: "openkitchen開発部",
      link: "52d16e3c0c104a64d719e58871538f73988291d3ffd02dff5f55e3ae7de093d0/【VRChat】自鯖のリンク貼ってけ",
      badge: 512,
    },
    {
      title: "あ、Github落ちた…",
      user: "12d6e63c0c10ea64d779e58871538f73978291d3ffd72dff5f75e3ae7de07370",
      icon: "https://static.wikia.nocookie.net/discord/images/e/e6/Mee6.png",
      serverEmoji: "🐈‍⬛",
      server: "GitHubの民",
      link: "12d6e63c0c10ea64d779e58871538f73978291d3ffd72dff5f75e3ae7de07370/あ、Github落ちた…",
      badge: 287,
    },
    {
      title: "【悲報】GitHubサーバーダウン...",
      user: "52d16e3c0c104a64d719e58871538f73988291d3ffd02dff5f55e3ae7de093d0",
      icon: "https://neconeconews.com/wp-content/uploads/popcat1_close.png",
      serverEmoji: "🎙",
      server: "雑談サーバー",
      link: "52d16e3c0c104a64d719e58871538f73988291d3ffd02dff5f55e3ae7de093d0/【悲報】GitHubサーバーダウン...",
      badge: 114,
    },
    {
      title: "【organization】ワクワク参加レポジトリ",
      user: "65a1e340c104a64d719e58871538f73988291d3ffd02dff5f55e3ae7de093d0",
      icon: "https://upload.wikimedia.org/wikipedia/commons/c/c9/Finder_Icon_macOS_Big_Sur.png",
      serverEmoji: "🐈‍⬛",
      server: "GitHubの民",
      link: "65a1e340c104a64d719e58871538f73988291d3ffd02dff5f55e3ae7de093d0/【organization】ワクワク参加レポジトリ",
      badge: 71,
    },
  ],
});

peer.on("open", (peerId) => {
  console.log("接続が確立しました");

  // 認証用
  const authFor = peer.connect(myID + "TARGET");
  console.log(myID + "TARGET");
  authFor.on("open", () => {
    console.log("相手に接続しました (authFor)");
  });
  authFor.on("error", (error) => {
    console.error("Error connecting to peer:", error);
  });
});

peer.on("connection", (connection) => {
  console.log("相手に接続しました (connection)");

  connection.on("data", (data) => {
    const receivedData = JSON.parse(data as string);
    console.log("受信データ:", data);
    localStorage.setItem(receivedData.username, receivedData.hash);
  });
});

peer.on("error", (error) => {
  console.error("PeerJSエラー:", error);
});
</script>

<template>
  <div class="holy-grail">
    <header>
      <headerComponents />
    </header>
    <main class="holy-grail__main">
      <!-- Left sidebar -->
      <aside
        class="holy-grail__left d-none d-lg-block"
        style="overflow-y: scroll; height: calc(100vh - 50px)"
      >
        <leftSideBarComponents
          :myName="(UI.myName as string)"
          :myHash="(UI.myHash as string)"
          :myHeader="(UI.myHeader as string)"
          :myIcon="(UI.myIcon as string)"
          :myBio="(UI.myBio as string)"
          :friends="UI.friends"
          :servers="UI.servers"
        />
      </aside>

      <!-- Main content -->
      <article
        class="holy-grail__middle"
        style="width: 55%; overflow-y: scroll; height: calc(100vh - 50px)"
      >
        <mainContentComponents
          :topThread="timeLine.topThread"
          :threadList="timeLine.threadList"
        />
      </article>

      <!-- Right sidebar -->
      <nav
        class="holy-grail__right d-none d-lg-block"
        style="overflow-y: scroll; height: calc(100vh - 50px)"
      >
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
  .holy-grail {
    filter: invert(1) hue-rotate(180deg);
  }
}
</style>
