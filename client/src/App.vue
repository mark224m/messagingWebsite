<template>
  <div>
    <nav class="navbar navbar-expand-lg bg-primary" data-bs-theme="dark">
      <div class="container-fluid">
        <a class="navbar-brand" href="#">Communication Center</a>
        <button class="navbar-toggler" data-bs-toggle="collapse" data-bs-target="#navbarToggle" aria-controls="navbarColor01" aria-expanded="false" aria-label="Toggle navigation">
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="navbar-collapse collapse" id="navbarColor01" style="">
          <ul class="navbar-nav me-auto">
            <li class="nav-item">
              <a class="nav-link active" href="#/">Home
                <span class="visually-hidden">(current)</span>
              </a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="#/topics">Topics</a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
    <router-view></router-view>
  </div>
</template>

<style>
h4 {
  color: rgb(233, 57, 121);
}

[data-bs-theme="dark"] {
  --bs-body-color: #f8c5d4;
}

.form-control {
  color: rgb(233, 57, 121);
}

.btn {
  margin-top: 10px;
  margin-bottom: 30px;
}
</style>
