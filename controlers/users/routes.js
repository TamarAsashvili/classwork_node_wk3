const routes = require('express').Router();
const {getList, updateItem, createItem, deleteItem} = require ('./handler');

routes.get('/', getList);
routes.put('/:id', updateItem);
routes.post('/', createItem);
routes.delete('/:id', deleteItem);


module.exports = {
    routes:routes,

}
