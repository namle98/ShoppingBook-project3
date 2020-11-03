const model = require ('./model')
const mongoose = require('mongoose')

const handlers = {
    async create(req, res, next){
        try{
            let data = req.body
            let item = await model.create(data)
            res.json(item)
        }
        catch(err){
            next(err)
        }
    },
    async findMany(req, res, next){
        try{
            let items = await model.find({})
            res.json(items)
        }catch(err){
            next(err)
        }
    }
}

module.exports = handlers