<script>
function toggleButton(element) {
  element.classList.toggle("active");
}
</script>

<template>
  <nav class="navbar navbar-expand navbar-light bg-light">
    <div class="container-fluid">
      <div class="collapse navbar-collapse" id="navbarColor01">
        <ul class="navbar-nav me-auto mb-2 mb-lg-0">
          <li class="nav-item">
            <a class="nav-link active" aria-current="page" href="#">
              <img src="public/icons/house.svg" class="icon" />
              <p class="d-none d-lg-block">ホーム</p>
            </a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="#">
              <img src="public/icons/bookmark.svg" class="icon" />
              <p class="d-none d-lg-block">ブックマーク</p>
            </a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="#">
              <img src="public/icons/message.svg" class="icon" />
              <p class="d-none d-lg-block">メッセージ</p>
            </a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="#">
              <img src="public/icons/notification.svg" class="icon" />
              <p class="d-none d-lg-block">通知</p>
            </a>
          </li>
        </ul>
        <div class="d-flex">
          <input
            class="form-control me-2 d-none d-lg-block"
            type="search"
            placeholder="Search"
            aria-label="Search"
          />
          <button
            type="button"
            class="btn btn-dark"
            data-bs-toggle="modal"
            data-bs-target="#threadPOST"
          >
            POST
          </button>
        </div>
      </div>
    </div>
  </nav>

  <!--メッセージの作成-->
  <div
    class="modal fade"
    id="threadPOST"
    tabindex="-1"
    aria-labelledby="threadPOSTLabel"
    aria-hidden="true"
  >
    <div class="modal-dialog">
      <div class="modal-content">
        <div class="modal-header">
          <h5 class="modal-title" id="threadPOSTLabel">スレッドを投稿</h5>
          <button
            type="button"
            class="btn-close"
            data-bs-dismiss="modal"
            aria-label="Close"
          ></button>
        </div>
        <div class="modal-body">
          <form>
            <div class="mb-3">
              <label for="recipient-name" class="col-form-label">Title</label>
              <input type="text" class="form-control" id="recipient-name" />
            </div>
            <div class="mb-3">
              <label for="recipient-name" class="col-form-label"
                >ヘッダー画像</label
              >
              <input type="text" class="form-control" id="recipient-name" />
            </div>

            <div class="input-group mb-3">
              <label class="input-group-text" for="inputGroupSelect01">
                Server
              </label>
              <select class="form-select" id="inputGroupSelect01">
                <option selected>自分のサーバーを選択</option>
                <option value="1">🍔 openkitchen開発部</option>
                <option value="2">🐈‍⬛ GitHubの民</option>
                <option value="3">🎙 雑談サーバー</option>
              </select>
            </div>

            <input
              type="radio"
              name="typeOpen"
              value="1"
              id="private"
              checked
            />
            <label for="private" class="label">
              <div class="mb-3">
                <ol class="list-group list-group">
                  <li
                    class="list-group-item d-flex justify-content-between align-items-start clickable"
                  >
                    <img src="icons/private.svg" class="private" />
                    <div class="ms-2 me-auto">
                      <div
                        class="form-check-label fw-bold"
                        for="flexCheckDefault"
                      >
                        プライベート
                      </div>
                      <div>
                        スレッドを立てる対象サーバー内でのみ閲覧できます。
                      </div>
                    </div>
                  </li>
                </ol>
              </div>
            </label>

            <input type="radio" name="typeOpen" value="2" id="public" />
            <label for="public" class="label">
              <div class="mb-3">
                <ol class="list-group list-group">
                  <li
                    class="list-group-item d-flex justify-content-between align-items-start clickable"
                  >
                    <img src="icons/public.svg" class="private" />
                    <div class="ms-2 me-auto">
                      <div
                        class="form-check-label fw-bold"
                        for="flexCheckDefault"
                      >
                        パブリック
                      </div>
                      <div>
                        スレッドがすべての世界対象ユーザーに共有されます。
                      </div>
                    </div>
                  </li>
                </ol>
              </div>
            </label>

            <div class="mb-3">
              <label for="message-text" class="col-form-label"
                >メッセージ</label
              >
              <textarea class="form-control" id="message-text"></textarea>
            </div>
          </form>
        </div>
        <div class="modal-footer">
          <button
            type="button"
            class="btn btn-secondary"
            data-bs-dismiss="modal"
          >
            閉じる
          </button>
          <button type="button" class="btn btn-primary darkButton">投稿</button>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
/*@import url("https://cdn.jsdelivr.net/npm/bootstrap-icons@1.8.0/font/bootstrap-icons.css");*/
.navbar {
  background-color: rgb(234, 231, 227) !important;
  padding-top: 0rem;
  padding-bottom: 0rem;
  border-bottom: solid 1px #d4d4d4;
  height: 50px;
}

.title {
  font-weight: 600;
  font-style: italic;
  margin-left: 20px;
}

.nav-link {
  display: flex;
  margin: 0 12px;
}

a:hover {
  background-color: rgba(0, 0, 0, 0);
}

[aria-current="page"] {
  font-weight: 600;
}

.nav-link p {
  margin: 5px;
}

.icon {
  display: block;
}

.mb-2 {
  margin-bottom: 0rem !important;
}

.private {
  width: 35px;
  margin: 5px;
}

input[type="radio"] {
  display: none;
}

input[type="radio"]:checked + label .list-group-item {
  background-color: #cce5ff !important;
  border-color: #7386dd !important;
}

@media (prefers-color-scheme: dark) {
  .navbar {
    background-color: rgb(44, 41, 37) !important;
    border-bottom: solid 1px #444;
  }

  p {
    filter: invert(1) hue-rotate(180deg);
  }

  input {
    background-color: rgb(34, 31, 27);
    border: solid 1px rgb(84, 81, 77);
    color: #fff !important;
  }

  input:focus {
    background-color: rgb(54, 51, 47);
    border: solid 1px rgb(64, 61, 57);
    color: #fff !important;
  }

  input::placeholder {
    color: #fff !important;
  }

  button {
    background-color: #fff;
    color: #000;
  }

  img {
    filter: invert(1) hue-rotate(180deg);
  }

  .modal-content {
    background-color: rgb(34, 31, 27) !important;
    border: solid 1px rgb(55, 55, 55) !important;
    color: #fff;
  }
  .modal-header {
    background-color: rgb(34, 41, 27) !important;
    border-color: rgb(54, 51, 47) !important;
  }
  .modal-footer {
    border-color: rgb(55, 55, 55) !important;
  }
  textarea,
  .form-select {
    background-color: rgb(34, 31, 27) !important;
    border: solid 1px rgb(84, 81, 77) !important;
    color: #fff !important;
  }
  .input-group-text {
    background-color: rgb(74, 71, 67) !important;
    border: solid 1px rgb(84, 81, 77) !important;
    color: #fff !important;
  }
  .darkButton {
    background-color: #0b5ed7;
    border-color: #0a58ca;
    color: #fff;
  }
  .btn-secondary {
    background-color: #2e2e2e;
    border-color: #333333;
    color: #fff;
  }
  .list-group-item {
    background-color: rgb(44, 41, 37) !important;
    border: solid 1px rgb(54, 51, 47) !important;
    color: #fff;
  }
  input[type="radio"]:checked + label .list-group-item {
    background-color: #252b47 !important;
    border-color: #3e4f99 !important;
  }
}
</style>
