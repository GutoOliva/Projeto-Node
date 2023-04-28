const clienteModel = require('../models/clienteModel');

class ControllerCliente {
    
    async listar(req, res){        
        const clientes = await clienteModel.find({});
        res.json(clientes);
    }

    async buscarPorId(req, res){ 
        const id = req.params.id;
        const cliente = await clienteModel.findOne({'codigo': id});
        res.json(cliente);
    }
    
    async salvar(req, res){ 
        const cliente = req.body;

        const obj = await clienteModel.findOne({}).sort({'codigo': -1});        
        cliente.codigo = obj == null ? 1 : obj.codigo + 1;

        const resultado = await clienteModel.create(cliente);
        res.json(resultado);
    }
    
    async atualizar(req, res){
       const codigo = req.params.id;
       const cliente = req.body;
       const _id = (await clienteModel.findOne({'codigo':codigo}))._id;       
       await clienteModel.findByIdAndUpdate(String(_id), cliente);
       res.send("Conteúdo atualizado!");
    }

    async excluir(req, res){
        const codigo = req.params.id;
        const _id = (await clienteModel.findOne({'codigo':codigo}))._id;
        await clienteModel.findByIdAndDelete(String(_id));
        res.send('Conteúdo excluído!');
    }
}

module.exports = new ControllerCliente();
