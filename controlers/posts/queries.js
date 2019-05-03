const {posts} = require('../../models/post');

const getPosts = ()=>{
    return posts;
}

const updatePost = (id, data) => {
    const index = posts.findIndex(post=> post.id === id);
   
   // console.log(index);

   posts[index].name = data.name;
   posts[index].email = data.email;
   
    return posts;
  };

 
  const createPost = (data) => {
       posts.push ({
         id: data.id,
         name: data.name,
         email: data.email
        })

        return posts;
      };

 const deletePost = (data) => {
  posts.pop ({
    id: data.id,
    name: data.name,
    email: data.email
   })
   return posts;
      };



module.exports = {getPosts, updatePost, createPost, deletePost};




