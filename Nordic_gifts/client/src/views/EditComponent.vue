<template>
  <div>
    <h1>Muuda, kustuta</h1>
    <form class="margin" @submit.prevent="updatePost">
     <button class="edit-button btn btn-primary button" @click.prevent="Back()">Tagasi</button>
      <div class="row">
        <div class="col-md-6">
          <div class="form-group">
            <label>Nimi </label>
            <input type="text" class="form-control" v-model="post.name">
          </div>
        </div>
        </div>
        <div class="row">
          <div class="col-md-6">
            <div class="form-group">
              <label>E-mail </label>
              <input class="form-control" v-model="post.email">
            </div>
          </div>
        </div>
        <div class="row">
          <div class="col-md-6">
            <div class="form-group">
              <label>Telefon </label>
              <input class="form-control" v-model="post.number">
            </div>
          </div>
        </div>
        <div class="form-group">
          <button class="btn btn-primary button">Muuda</button>
          <button class="delete-button btn btn-danger" @click.prevent="deletePost(post._id)">Kustuta</button>
        </div>
    </form>
  </div>
</template>

<script>
    export default {

      data() {
        return {
          post: {}
        }
      },
      created() {
        let uri = `/posts/edit/${this.$route.params.id}`;
        this.$http.get(uri).then((response) => {
            this.post = response.data;
        });
      },
      methods: {
        updatePost() {
          let uri = `/posts/update/${this.$route.params.id}`;
          this.$http.post(uri, this.post).then(() => {
            this.$router.push({name: 'posts'});
          });
        },
        deletePost(id){
        let uri = `/posts/delete/${this.$route.params.id}`;
        this.$http.delete(uri, this.post).then(response => {
          this.$router.push({name: 'posts'});
        });
      },
        Back() {
        this.$router.push({name: 'posts'});
      }
      }
    }
</script>

<style>
.margin {
  margin-top: 5em;
}
/*Edit button*/
.button {
  background-color: #FF9F7F;
  margin-left: 15px;
}
.button:hover {
  background-color: #FF9F7F;
}
h1 {
  margin-left: 15px;
}
</style>