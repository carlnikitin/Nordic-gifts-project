<template>
  <div>
      <h1>Tellijate andmed</h1><br />

        <table class="table table-hover">
            <thead>
            <tr>
              <th>Name</th>
              <th>Email</th>
              <th>Number</th>
              <th>Body</th>
              <th>Actions</th>
            </tr>
            </thead>
            <tbody>
                <tr v-for="post in posts" :key="post._id">
                  <td>{{ post.name }}</td>
                  <td>{{ post.email }}</td>
                  <td>{{ post.number }}</td>
                  <td>{{ post.body }}</td>
                  <td><router-link :to="{name: 'edit', params: { id: post._id }}" class="edit-button btn btn-primary">Edit</router-link></td>
                  <td><button class="delete-button btn btn-danger" @click.prevent="deletePost(post._id)">Delete</button></td>
                </tr>
            </tbody>
        </table>
  </div>
</template>

<script>
  export default {
      data() {
        return {
          posts: []
        }
      },
      created() {
      let uri = 'http://localhost:4000/posts';
      this.axios.get(uri).then(response => {
        this.posts = response.data;
      });
    },
    methods: {
      deletePost(id)
      {
        let uri = `http://localhost:4000/posts/delete/${id}`;
        this.axios.delete(uri).then(response => {
          this.posts.splice(this.posts.indexOf(id), 1);
        });
      }
    }
  }
</script>

<style>
.delete-button {
  background-color: #E64B4B ;
}

.edit-button {
  background-color: #4B94E6;
}

/* unvisited link */
.delete-button:link {
  background-color: #E64B4B;
}

/* visited link */
.delete-button:visited {
  background-color: #E64B4B;
}

/* mouse over link */
.delete-button:hover {
  background-color: #E64B4B;
}

/* selected link */
.delete-button:active {
  background-color: #E64B4B;
}

/* unvisited link */
.edit-button:link {
  background-color: #4B94E6;
}

/* visited link */
.edit-button:visited {
  background-color: #4B94E6;
}

/* mouse over link */
.edit-button:hover {
  background-color: #4B94E6;
}

/* selected link */
.edit-button:active {
  background-color: #4B94E6;
}
</style>