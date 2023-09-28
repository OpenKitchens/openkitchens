<template>
  <nav class="navbar navbar-expand-lg bg-body-tertiary">
    <div class="container-fluid">
      <a class="navbar-brand fw-bold mx-4" href="#">@tlantis</a>
      <div class="navbar-collapse">
        <ul class="navbar-nav">
          <li class="nav-item">
            <a class="nav-link active" aria-current="page" href="#">Home</a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="#">festival</a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="#">Season</a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="#">node</a>
          </li>
        </ul>
      </div>
    </div>
  </nav>
</template>
<style scoped>
@media (prefers-color-scheme: dark) {
  .navbar {
    background-color: #252525ff !important;
    border-color: #3d3d3d !important;
  }
  .nav-link{
    color: #d4d4d4;
  }
  .active{
    color: #fff !important;
  }
  .navbar-brand{
    color: #fff !important;
  }
}
</style>