const express = require("express");
const xlsx = require("xlsx");
const mssql = require("mssql");
const app = express();

// Set up connection to SQL server
const config = {
  user: "username",
  password: "password",
  server: "server_name",
  database: "database_name",
};

app.post("/transfer-data", (req, res) => {
  // Load data from Excel file
  const workbook = xlsx.readFile("data.xlsx");
  const sheetName = workbook.SheetNames[0];
  const worksheet = workbook.Sheets[sheetName];
  const data = xlsx.utils.sheet_to_json(worksheet);

  sql
    .connect(config)
    .then((pool) => {
      // Insert data into SQL server
      for (let row of data) {
        pool
          .request()
          .input("column1", mssql.VarChar, row["column1"])
          .input("column2", mssql.VarChar, row["column2"])
          .input("column3", mssql.VarChar, row["column3"])
          .input("column4", mssql.VarChar, row["column4"])
          .query(
            "INSERT INTO table_name (column1, column2, column3, column4) VALUES (@column1, @column2, @column3, @column4)"
          );
      }
      res.status(200).send("Data transferred successfully");
    })
    .catch((err) => {
      console.error(err);
      res.status(500).send("An error occurred while transferring data");
    });
});

app.listen(3000, () => {
  console.log("Server listening on port 3000");
});
