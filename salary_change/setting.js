require("dotenv").config();
const {
    DB_USER,
    DB_PASSWORD,
    DB_HOST,
    DB_PORT,
    DB_NAME,
    MYSQL_ROOT_USER,
    MYSQL_ROOT_PASSWORD,
    MYSQL_DATABASE
} = process.env;

module.exports = {
    mysql: {
        DB_USER,
        DB_PASSWORD,
        DB_HOST,
        DB_PORT,
        DB_NAME,
        MYSQL_ROOT_USER,
        MYSQL_ROOT_PASSWORD,
        MYSQL_DATABASE
    }
}