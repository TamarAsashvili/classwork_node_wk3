const {getUsers, updateUser, createUser, deleteUser} = require ('./queries');

const getList = (req, res) => {
    const users = getUsers()
    res.json({
        data:users
    })
}


const updateItem = (req, res) => {
    const users = updateUser(req.params.id, req.body);
   res.json({
   data:users
    })
  };


  const createItem = (req, res) => {
    const users = createUser(req.body)

   res.json({
   data:users
    })
  };

 
  const deleteItem = (req, res) => {
    const users = deleteUser(req.body)

   res.json({
   data:users
    })
  };

 
module.exports = {
      getList,
      updateItem,
      createItem,
      deleteItem
    };