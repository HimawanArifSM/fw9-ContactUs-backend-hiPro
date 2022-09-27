const db = require('../helpers/db');

exports.createContactUs=(data, cb)=>{
    const q = 'INSERT INTO contactus (fullname, email, messages) VALUES ($1, $2, $3) RETURNING *';
    const val = [data.fullname, data.email, data.messages]
    console.log(val);
    db.query(q, val, (err, res)=>{
      console.log(err);
      if(res){
        cb(err, res.rows);
      }else{
        cb(err);
      }
    });
}

exports.getContactUs=(cb) => {
    db.query('SELECT * FROM contactus ORDER BY id DESC', (err, res)=>{
        cb(err, res.rows);
    });
}