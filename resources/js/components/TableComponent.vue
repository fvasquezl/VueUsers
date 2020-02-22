<template>
   <table class="table table-hover" id="users_table">
  <thead>
    <tr>
      <th>Id</th>
      <th>Name</th>
      <th>Email</th>
      <th>Created At</th>
      <th>Actions</th>
    </tr>
  </thead>
  <tbody>
    <tr v-for="user in users" :key="user.id">
      <th scope="row">{{ user.id }}</th>
      <td>{{ user.name }}</td>
      <td>{{ user.email }}</td>
      <td>{{ user.created_at }}</td>
      <td>
          <a href="#" class="btn btn-info btn-sm">Edit</a>
          <button 
          class="btn btn-danger btn-sm"
          v-on:click="deleteUser(user.id)">
                del
              <!-- <i class="fa fa-trash"></i> -->
          </button>
          
      </td>
    </tr>
  </tbody>
</table>
</template>

<script>
    import datatables from 'datatables.net-bs4';
    
    export default {
        mounted() {
           this.getUsers();
        },
        data() {
            return {
                users:[]
            }
        },
        methods:{
            mytable(){
                $(function(){
                    $('#users_table').DataTable();
                });
            },
            getUsers(){
               let urlUsers = 'users';
               axios.get(urlUsers).then(response=>{
                   this.users = response.data;
                   this.mytable();
               });
           },
           deleteUser(id){
               //this.users.$remove(user)
               this.users.splice(id, 1);
               axios.delete('users/'+ id).then(response=>{
                   console.log(response.data.msg)
               })
           } 
        }
    }
</script>
