const response = require('../helpers/standardRespons');

const contactUsModels = require('../models/contactUsModels')

exports.createContactUs = (req, res)=>{
    contactUsModels.createContactUs( req.body, (err, results)=>{
        console.log(err);
        if(err){
        return response(res, `Failed to send ${err.message}`, null,null,400);
        }
        else{
        return response(res, 'Succesfully send your message', results[0]);
        }
    });
};

exports.getContactUs = (req, res)=>{
    contactUsModels.getContactUs((err, results) =>{
        return response(res, 'list all contact us', results);
    });
};