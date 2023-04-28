const pedidoModel = require('../models/pedidoModel');

class PedidoController {

    async listar(req, res){        
        const pedidos = await pedidoModel.find({});
        res.json(pedidos);
    }

    async buscarPorId(req, res){ 
        const id = req.params.id;
        const pedido = await pedidoModel.findOne({'codigo': id});
        res.json(pedido);
    }
    
    async salvar(req, res){ 
        const pedido = req.body;

        const obj = await pedidoModel.findOne({}).sort({'codigo': -1});        
        pedido.codigo = obj == null ? 1 : obj.codigo + 1;

        const resultado = await pedidoModel.create(pedido);
        res.json(resultado);
    }

    async atualizar(req, res){
       const codigo = req.params.id;
       const pedido = req.body;
       const _id = (await pedidoModel.findOne({'codigo':codigo}))._id;       
       await pedidoModel.findByIdAndUpdate(String(_id), pedido);
       res.send("Conteúdo atualizado!");
     }

    async excluir(req, res){
        const codigo = req.params.id;
        const _id = (await pedidoModel.findOne({'codigo':codigo}))._id;
        await pedidoModel.findByIdAndDelete(String(_id));
        res.send('Conteúdo excluído!');
     }

}

module.exports = new PedidoController();
