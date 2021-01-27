const Yup = require('yup');
const { findOne } = require('../models/Product');
const Product = require('../models/Product');
class ProductController{
    async store(req,res){
        const schema = Yup.object().shape({
            title: Yup.string().required(),
            description: Yup.string().required(),
            price: Yup.number().positive().required(),
            category: Yup.string().required(),
        });
    
        if (!(await schema.isValid(req.body))) {
            return res.status(400).json({ error: 'insira os valores requeridos' });
        }

        const existProduct = await findOne({title:req.body.title});
        if(existProduct){
            return res.json('não é possível cadastrar o produto, este já encontra-se cadastrado.');
        }
        try{
            const product = await Product.create(req.body);
            return res.json(product);
        }catch(e){
            return res.status(400).json(e);
        }
    }
    async index(req,res) {
        const products = await Product.find().populate({
            path: 'category',
            select: 'title',
          });
        if(products.length===0){
            return res.json('lista vazia');
        }
        return res.json(products);
    }
    async show(req,res) {
        const products = await Product.find({ title: /${req.query.title}/i, category: req.query.category }).populate({
            path: 'category',
            select: 'title',
          });
        if(products.length===0){
            return res.json('lista vazia');
        }
        return res.json(products);
    }
    async update(req,res) {
        const schema = Yup.object().shape({
            title: Yup.string().required(),
            description: Yup.string().required(),
            price: Yup.number().positive().required(),
            category: Yup.string().required(),
        });
        if (!(await schema.isValid(req.body))) {
            return res.status(400).json({ error: 'insira os valores requeridos' });
        }
        const existProduct = await findOne({title:req.body.title});
        const {id}= req.params;
        const edit = await Product.findByIdAndUpdate(id,req.body,{new: true});
        return res.json(edit);
    }
    async destroy(req,res) {
        const {id}= req.params;
        await Product.findOneAndDelete(id);
        return res.json('produto deletado');
    }

}
module.exports = new ProductController();