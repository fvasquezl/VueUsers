<template>
   <table class="table table-hover" id="users_table">
  <thead>
    <tr>
      <th>Id</th>
      <th>Namesssss</th>
      <th>Email</th>
      <th>Created At</th>
      <th>Actions</th>
    </tr>
  </thead>
  <tbody>
    
    <tr v-for="(user, index) in users">
      <th scope="row">{{ user.id }}</th>
      <td>{{ user.name }}</td>
      <td>{{ user.email }}</td>
      <td>{{ user.created_at }}</td>
      <td>
           <button class="btn btn-info">
              <i class="fas fa-pencil-alt"></i>
          </button>

          <button class="btn btn-danger"
          v-on:click="deleteUser(index)">
              <i class="fas fa-trash-alt"></i>
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
           
           deleteUser(index){
               Swal.fire({
                title: 'Are you sure?',
                text: "You won't be able to revert this!",
                icon: 'warning',
                showCancelButton: true,
                confirmButtonColor: '#3085d6',
                cancelButtonColor: '#d33',
                confirmButtonText: 'Yes, delete it!'
                }).then((result) => {
                if (result.value) {                   
                    this.$delete(this.users, index);
                   
                   axios.delete('users/'+ user.id).then(response=>{
                    
                    Swal.fire(
                    'Deleted!',
                    response.data.msg,
                    'success'
                    )
                  })
                }
                })
           } 
        }
    }
</script>
