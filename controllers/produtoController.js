const produtoModel = require('../models/produtoModel');

class produtoController {

    async listar(req, res){        
        const produtos = await produtoModel.find({});
        res.json(produtos);
    }

    async buscarPorId(req, res){ 
        const id = req.params.id;
        const produto = await produtoModel.findOne({'codigo': id});
        res.json(produto);
    }

    async salvar(req, res){ 
        const produto = req.body;

        const obj = await produtoModel.findOne({}).sort({'codigo': -1});        
        produto.codigo = obj == null ? 1 : obj.codigo + 1;

        const resultado = await produtoModel.create(produto);
        res.json(resultado);
    }

    async atualizar(req, res){
       const codigo = req.params.id;
       const produto = req.body;
       const _id = (await produtoModel.findOne({'codigo':codigo}))._id;       
       await produtoModel.findByIdAndUpdate(String(_id), produto);
       res.send("Conteúdo atualizado!");
     }

    async excluir(req, res){
        const codigo = req.params.id;
        const _id = (await produtoModel.findOne({'codigo':codigo}))._id;
        await produtoModel.findByIdAndDelete(String(_id));
        res.send('Conteúdo excluído!');
     }

}

module.exports = new produtoController();
