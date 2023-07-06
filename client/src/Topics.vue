<template>
  <div>
    <h1>Topics</h1>
    <p>This is the Topics section! You can pick which topic board you want to talk in from the choices below.</p>
    <hr>
    <div class="card mb-3">
      <h3 class="card-header"><a href="#/boards/gaming" class="card-link">/gaming</a></h3>
      <div style="text-align: center;">
        <img src = "../images/gameController.png" alt="Controller"/>
      </div>
      <div class="card-body">
        <p class="card-text">This topic board is for all things gaming related! Post to this board for all game topics.
        </p>
      </div>
      <div class="card-footer text-muted">
        Last post was (add from message last message created on this board)
      </div>
    </div>
    <div class="card mb-3">
      <h3 class="card-header"><a href="#/boards/cooking" class="card-link">/cooking</a></h3>
      <div style="text-align: center;">
        <img src = "../images/foodCooking.png" alt="cooking"/>
      </div>
      <div class="card-body">
        <p class="card-text">This topic board is for the cooking enthusiasts looking for other recipes to make dishes or meals!
        </p>
      </div>
      <div class="card-footer text-muted">
        Last post was (add from message last message created on this board)
      </div>
    </div>
    <div class="card mb-3">
      <h3 class="card-header"><a href="#/boards/pets" class="card-link">/pets</a></h3>
      <div style="text-align: center;">
        <img src = "../images/petImage.png" alt="cooking"/>
      </div>
      <div class="card-body">
        <p class="card-text">This topic board is for posting your pet related things like pet food, toys, or breeds.
        </p>
      </div>
      <div class="card-footer text-muted">
        Last post was (add from message last message created on this board)
      </div>
    </div>
    <div class="card mb-3">
      <h3 class="card-header"><a href="#/boards/worldNews" class="card-link">/worldNews</a></h3>
      <div style="text-align: center;">
        <img src = "../images/worldIcon.png" alt="world"/>
      </div>
      <div class="card-body">
        <p class="card-text">This topic board is for all the topics happening in the news, discuss current events here and give others respect.
        </p>
      </div>
      <div class="card-footer text-muted">
        Last post was (add from message last message created on this board)
      </div>
    </div>
  </div>
</template>

<style>
.mb-3 {
  margin-top: 30px;
  margin-left: 100px;
  margin-right: 100px;
}
img{
  width: 100px;
  height: 100px;
}
</style>