const {users} = require('../../models/user');

const getUsers = ()=>{
    return users;
}

const updateUser = (id, data) => {
    const index = users.findIndex(user=> user.id === id);
   
   // console.log(index);

   users[index].name = data.name;
   users[index].email = data.email;
   
    return users;
  };

 
  const createUser = (data) => {
       users.push ({
         id: data.id,
         name: data.name,
         email: data.email
        })

        return users;
      };

 const deleteUser = (data) => {
  users.pop ({
    id: data.id,
    name: data.name,
    email: data.email
   })
   return users;
      };



module.exports = {getUsers, updateUser, createUser, deleteUser};




