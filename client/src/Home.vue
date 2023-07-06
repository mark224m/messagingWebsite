<template>
  <div id="app" class="col-8 mx-auto">
    <form @submit.prevent="addMessage">
      <div v-if="error" class="alert alert-dismissible alert-warning">
        <button type="button" class="close" data-dismiss="alert">&times;</button>
        <h4 class="alert-heading">Error!</h4>
        <p class="mb-3">{{ error }}</p>
      </div>
      <div class="form-group">
        <label for="username">Username</label>
        <input v-model="message.username" type="text" class="form-control" id="username" required>
      </div>
      <div class="form-group">
        <label for="subject">Subject</label>
        <input v-model="message.subject" type="text" class="form-control" id="subject" placeholder="Enter a Subject"
          required>
      </div>
      <div class="form-group">
        <label for="message" class="form-label">Message</label>
        <textarea v-model="message.message" class="form-control" id="message" rows="3"></textarea>
      </div>
      <button type="submit" class="btn btn-primary">Add Message</button>
    </form>
    <h1>Global Board</h1>
    <hr>
    <div class="list-unstyled" v-for="message in reversedMessages" :key="message._id">
      <li class="media">
        <img v-if="message.imageURL" class="mr-3" :src="message.imageURL" :alt="message.subject">
        <div class="media-body">
          <h4 class="mt-0 mb-1">{{ message.username }}</h4>
          <h5 class="mt-0 mb-1">{{ message.subject }}</h5>
          {{ message.message }}
          <br />
          <small>{{ message.created }}</small>
        </div>
      </li>
      <hr>
    </div>
  </div>
</template>
  
<script>
const API_URL = 'https://mb-backend-c109f952ed09.herokuapp.com/messages'

export default {
  name: 'app',
  data: () => ({
    error: '',
    messages: [],
    message: {
      username: 'Anonymous',
      subject: '',
      message: '',
    },
  }),
  computed: {
    reversedMessages() {
      return this.messages.slice().reverse();
    }
  },
  mounted() {
    fetch(API_URL).then(response => response.json()).then(result => {
      this.messages = result;
    });
  },
  methods: {
    addMessage() {
      console.log(this.message);
      fetch(API_URL, {
        method: 'POST',
        body: JSON.stringify(this.message),
        headers: {
          'content-type': 'application/json'
        }
      }).then(response => response.json()).then(result => {
        if (result.details) {
          console.log("error here");
          const error = result.details.map(detail => detail.message).join(' ');
          this.error = error;
        }
        else {
          this.messages.push(result);
        }
      });
    }
  }
}
</script>

<style>
.app {
  margin-top: 100px;
}
</style>