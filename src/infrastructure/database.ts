import mysql from "mysql2";

const port = 3333
export const con = mysql.createConnection({
    host: 'host.docker.internal',
    // host: "mysql",
    user: 'mysql',
    password: 'mysql',
    port: port
});