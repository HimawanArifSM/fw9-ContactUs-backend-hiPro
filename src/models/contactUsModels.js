const db = require('../helpers/db');
const {LIMIT_DATA}=process.env;

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

// exports.getContactUs=(cb) => {
//     db.query('SELECT * FROM contactus ORDER BY id DESC', (err, res)=>{
//         cb(err, res.rows);
//     });
// }

exports.getContactUs = (search_by, keyword, sortBy, sorting, limit=parseInt(LIMIT_DATA), offset=0,cb)=>{
  db.query(`SELECT * FROM contactus WHERE ${search_by} ILIKE '%${keyword}%' ORDER BY ${sortBy} ${sorting} limit $1 offset $2`, [limit, offset], (err, res)=>{
    // console.log(res);
    cb(err, res.rows);
  });
};

//count users
exports.countGetContactUs = (search_by, keyword, cb)=>{
  db.query(`SELECT * FROM contactus WHERE ${search_by} ILIKE '%${keyword}%'`, (err, res)=>{
    cb(err, res.rowCount);
  });
};

exports.getDetailContactUs = (id, cb)=>{
  const q = 'SELECT * FROM contactus WHERE id=$1';
  const val = [id];
  // console.log(id);
  db.query(q, val, (err, res)=>{
    console.log(res.rows[0]);
    cb(err, res.rows[0]);
  });
};

exports.deleteDetailContactUs = (id, cb)=>{
  const q = 'DELETE FROM contactus WHERE id=$1';
  const val = [id];
  // console.log(id);
  db.query(q, val, (err, res)=>{
    // console.log(res.rows[0]);
    cb(err, res);
  });
};