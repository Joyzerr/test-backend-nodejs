const Category = require('../models/Category');

class CategoryController{
    async store(req,res){
        const category = await Category.create(req.body);
        return res.json(category);
    }
    async index(req,res) {
        const categories = await Category.find();
        return res.json(categories);
    }
    async show(req,res) {
        const categories = await Category.findById(req.params.id);
        return res.json(categories);
    }
    async update(req,res) {
        const {id}= req.params;
        const edit = await Category.findByIdAndUpdate(id,req.body,{new: true});
        return res.json(edit);
    }
    async destroy(req,res) {
        const {id}= req.params;
        await Category.findOneAndDelete(id);
        return res.json('categoria deletado');
    }

}
module.exports = new CategoryController();