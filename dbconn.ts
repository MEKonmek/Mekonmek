import mysql from "mysql";

export const conn = mysql.createPool({
  connectionLimit: 10,
  // host: "localhost",
  // user: "demo",
  // password: "abc123",
  // database: "konmek",

  host: "sql6.freemysqlhosting.net",
  user: "sql6689839",
  password: "nsactyFaH1",
  database: "sql6689839",
  

});