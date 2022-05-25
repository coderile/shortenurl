const ShortURL = require('../models/url.model')
const shortid = require('shortid')
const createHttpError = require('http-errors')
const helers = require('../helper/url.helper')
const urlController= {
    "shortUrl":async(req,res,next)=>{
        try{
            const url = req.body.url
            if(!helers.isValidURL(url)){
                res.json({"message":"Please include http"})
                throw createHttpError.BadRequest('Please enter valid url')
            }
            if(!url){
                res.json({"message":"Please enter valid url as body"})
                throw createHttpError.BadRequest('Please enter valid url')
            }
            const ifUrlExist = await ShortURL.findOne({url})
            if (ifUrlExist){
                res.json({'short_url': `http://localhost:8999/${ifUrlExist.shortId}`})
                return
            }
            const shortUrl = new ShortURL({"url":url, "shortId": shortid.generate()})
            const result = await shortUrl.save()
            res.json({
                "short_url":`http://localhost:8999/${result.shortId}`
            })
    
        }catch(error){
            next(error)
        }
    },
    "originalUrl":async(req,res,next)=>{
        try{
            const shortId = req.params.shortid
            const result = await ShortURL.findOne({shortId})
            if (!result){
                res.send(`<h1>Entered url is not correct</h1>`)
                throw createHttpError.NotFound()
            }
            res.redirect(result.url)
            }catch(err){
                next(err)
            }
    }
}

module.exports = urlController