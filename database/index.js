// const mysql = require('mysql');
const mysql = require('mysql2');

const connection = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: '',
  database: 'cowsDB',
});

connection.connect((err) => {
  if (err) {
    console.log(err);
  } else {
    console.log('Connected to MySQL!')
  }
});
// Your Database Queries Here!!

let getAll = () => {
  var query = `SELECT * FROM cows`
  return connection.promise().query(query)
}
let createQuery = (cowsName, cowsDesc) => {
  let queryString = `INSERT INTO cows (name, description) VALUES (?,?)`
  let queryArgs = [cowsName, cowsDesc]
    return connection.promise().query(queryString, queryArgs)
}


// Don't forget to export your functions!

module.exports = {
get: getAll,
create: createQuery
};
