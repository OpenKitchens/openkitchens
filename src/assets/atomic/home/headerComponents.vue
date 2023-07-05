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
        <form class="d-flex">
          <input
            class="form-control me-2 d-none d-lg-block"
            type="search"
            placeholder="Search"
            aria-label="Search"
          />
          <button class="btn btn-dark" type="submit">POST</button>
        </form>
      </div>
    </div>
  </nav>
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

@media (prefers-color-scheme: dark) {
  .navbar {
    background-color: rgb(44, 41, 37) !important;
    border-bottom: solid 1px #444;
  }
  p {
    color: #fff;
  }
  input {
    background-color: rgb(54, 51, 47);
    border: solid 1px rgb(64, 61, 57);
    color: #fff;
  }
  button {
    background-color: #fff;
    color: #000;
  }
  img {
    filter: invert(1) hue-rotate(180deg);
  }
}
</style>
