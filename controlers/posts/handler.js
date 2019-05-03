const {getPosts, updatePost, createPost, deletePost} = require ('./queries');

const getList = (req, res) => {
    const posts = getPosts()
    res.json({
        data:posts
    })
}


const updateItem = (req, res) => {
    const posts = updatePost(req.params.id, req.body);
   res.json({
   data:posts
    })
  };


  const createItem = (req, res) => {
    const posts = createPost(req.body)

   res.json({
   data:posts
    })
  };

 
  const deleteItem = (req, res) => {
    const posts = deletePost(req.body)

   res.json({
   data:posts
    })
  };

 
module.exports = {
      getList,
      updateItem,
      createItem,
      deleteItem
    };