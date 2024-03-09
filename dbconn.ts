import mysql from "mysql";

export const conn = mysql.createPool({
  connectionLimit: 10,
  host: "localhost",
  user: "demo",
  password: "abc123",
  database: "konmek",

  //  host: "aemandko_65011212079",
  // user: "Kongnapa",
  // password: "LqPfV95nnJ",
  // database: "sql6689818",

});