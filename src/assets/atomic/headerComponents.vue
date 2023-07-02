<template>
  <nav class="navbar navbar-expand-lg navbar-light bg-light">
    <div class="container-fluid">
      <a class="navbar-brand title" href="#">OpenKitchen</a>
      <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent"
        aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse" id="navbarColor01">
        <ul class="navbar-nav me-auto mb-2 mb-lg-0">
          <li class="nav-item">
            <img src="public/icons/house.svg" class="icon">
            <a class="nav-link active" aria-current="page" href="#">ホーム</a>
          </li>
          <li class="nav-item">
            <img src="public/icons/bookmark.svg" class="icon">
            <a class="nav-link" href="#">ブックマーク</a>
          </li>
          <li class="nav-item">
            <img src="public/icons/message.svg" class="icon">
            <a class="nav-link" href="#">メッセージ</a>
          </li>
          <li class="nav-item">
            <img src="public/icons/notification.svg" class="icon">
            <a class="nav-link" href="#">通知</a>
          </li>
        </ul>
        <form class="d-flex">
          <input class="form-control me-2" type="search" placeholder="Search" aria-label="Search">
          <button class="btn btn-outline-dark" type="submit">Search</button>
        </form>
      </div>
    </div>
  </nav>
</template>

<style scoped>
/*@import url("https://cdn.jsdelivr.net/npm/bootstrap-icons@1.8.0/font/bootstrap-icons.css");*/
.navbar {
  background-color: rgb(234, 231, 227) !important;
  padding-top: 0.5rem;
  padding-bottom: 0.5rem;
}

.title {
  font-weight: 600;
  font-style: italic;
  margin-left: 20px;
}

.nav-item {
  display: flex;
  margin: 0 12px;
}

a:hover {
  background-color: rgba(0, 0, 0, 0);
}

[aria-current="page"] {
  font-weight: 600;
}</style>