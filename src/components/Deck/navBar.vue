<template>
  <nav class="navbar navbar-expand-lg bg-body-tertiary">
    <div class="container-fluid">
      <a class="navbar-brand fw-bold mx-4" href="#">Atlantis屋台</a>
      <div class="navbar-collapse">
        <ul class="navbar-nav">
          <li class="nav-item">
            <a class="nav-link active" aria-current="page" href="#">Home</a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="#">Festival</a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="#">Season</a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="#">Node</a>
          </li>
        </ul>
      </div>
      <img src="https://lh3.googleusercontent.com/a/ACg8ocLNxUa91eJmBHgyjw4Ud-3EvNHnHcXAc9dsz1kgo8OY0g=s576-c-no"
        alt="Bootstrap" class="avatar-icon rounded-pill mx-4">
    </div>
  </nav>
</template>
<style scoped>
@media (prefers-color-scheme: dark) {
  .navbar {
    background-color: #252525ff !important;
    border-color: #3d3d3d !important;
  }

  .nav-link {
    color: #d4d4d4;
  }

  .active {
    color: #fff !important;
  }

  .navbar-brand {
    color: #fff !important;
  }
}

.avatar-icon {
  width: 45px;
  height: 45px;
}
</style>