const mysql = require("mysql2");
const xlsx = require("xlsx");

const db = mysql.createConnection({
  host: "127.0.0.1",
  user: "root",
  password: "GQ$e&1YEYQbp",
  database: "admission",
});

db.connect((err) => {
  if (err) {
    console.error("Error connecting to the database:", err.message);
    return;
  }
  console.log("Connected to the database");

  const workbook = xlsx.readFile("data.xlsx");
  const worksheet = workbook.Sheets[workbook.SheetNames[0]];
  const data = xlsx.utils.sheet_to_json(worksheet);
  console.log(data);

  const sql =
    "INSERT INTO `data` (`user_name`, `user_email`,`user_phone`,`user_city`) VALUES ?";

  const values = data.map((row) => [
    row.name,
    row.email,
    row.phone_no,
    row.city,
  ]);
  console.log(values);

  // Execute the SQL query
  db.query(sql, [values], (err, result) => {
    if (err) {
      console.error("Error inserting data:", err.message);
    } else {
      console.log("Data inserted successfully");
    }

    // Close the database connection
    db.end((err) => {
      if (err) {
        console.error("Error closing the database connection:", err.message);
      }
    });
  });
});
