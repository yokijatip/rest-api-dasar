const dbPool = require("../config/database");

const getAllUsers = () => {

    // Variabel SQL Query
    const SQLQuery = 'SELECT * FROM users';

    // return dbpool, karena tidak digunakan secara langsung jadi hapus aja callback nya
    return dbPool.execute(SQLQuery);
}

module.exports = {
    getAllUsers
}