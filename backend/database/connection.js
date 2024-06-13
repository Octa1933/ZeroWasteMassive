const mysql = require("mysql2/promise");

const config = {
  host: "localhost",
  user: "root",
  password: "user1234",
  database: "zerowaste",
};

const pool = mysql.createPool(config);

async function getConnection() {
  const connection = await pool.getConnection();
  return connection;
}

module.exports = {
  query: async (sql, params) => {
    const connection = await getConnection();
    try {
      const [results] = await connection.execute(sql, params);
      return results;
    } finally {
      connection.release();
    }
  },
};
