<template>
  <nav class="navbar navbar-expand-lg bg-body-tertiary" style="width: 100vw!important;">
    <div class="container-fluid mx-w-1080">
      <a class="navbar-brand fw-bold mx-4 text-shadow-title" href="/">Atlantis屋台</a>
      <div class="navbar-collapse d-none d-lg-block">
        <ul class="navbar-nav">
          <li class="nav-item">
            <router-link to="/" class="nav-link">Home</router-link>
          </li>
          <li class="nav-item">
            <router-link to="/event" class="nav-link">Festival</router-link>
          </li>
          <li class="nav-item">
            <router-link to="/season" class="nav-link">Season</router-link>
          </li>
          <li class="nav-item">
            <router-link to="/node" class="nav-link">Node</router-link>
          </li>
          <li class="nav-item">
            <router-link to="/implant" class="nav-link">Implant</router-link>
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

.mx-w-1080{
  max-width: 1340px;
}
</style>