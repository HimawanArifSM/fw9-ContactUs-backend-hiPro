const response = require('../helpers/standardRespons');
const {LIMIT_DATA}=process.env;
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

// exports.getContactUs = (req, res)=>{
//     contactUsModels.getContactUs((err, results) =>{
//         return response(res, 'list all contact us', results);
//     });
// };

exports.getContactUs = (req, res)=>{
    const {seacrhBy='fullname', keyword='', sortBy='id', sorting='desc', limit=parseInt(LIMIT_DATA), page=1}= req.query;
  
    const offset = (page - 1) * limit;
  
    contactUsModels.getContactUs(seacrhBy ,keyword, sortBy, sorting, limit, offset, (err, results)=>{
        // console.log(err);
        // console.log(res);
        if(results.length<1){
            return res.redirect('/404');
        }
        const pageInfo = {};
        contactUsModels.countGetContactUs(seacrhBy, keyword, (err, totalData)=>{
            pageInfo.totalData= totalData;
            pageInfo.totalPage= Math.ceil(totalData/limit);
            pageInfo.currentPage= parseInt(page);
            pageInfo.nextPage= pageInfo.currentpage < pageInfo.totalpage ? pageInfo.currentpage + 1 : null;
            pageInfo.prevpage= pageInfo.currentpage > 1 ? pageInfo.currentpage - 1 : null;
            return response(res, 'list all feedback', results, pageInfo);
        });
    });
};

exports.getDetailContactUs = (req, res)=>{
    const {id}=req.params;
    contactUsModels.getDetailContactUs(id, (err, results)=>{
        return response(res, 'detail feedback', results);
    });
};

exports.deleteContactUs = (req, res)=>{
    const {id}=req.params;
    contactUsModels.deleteDetailContactUs(id, (err, results)=>{
        return response(res, 'delete success');
    });
};