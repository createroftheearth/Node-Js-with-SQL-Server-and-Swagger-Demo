"use strict";

const register = async ({ sql, getConnection }) => {
  // read in all the .sql files for this folder
  const sqlQueries = "Select * from UserM where Id= @userId";

  const getEvents = async userId => {
    // get a connection to SQL Server
    const cnx = await getConnection();

    // create a new request
    const request = await cnx.request();

    // configure sql query parameters
    request.input("userId", sql.Int, userId);
    // return the executed query
    return request.query(sqlQueries);
  };

  return {
    getEvents
  };
};

module.exports = { register };
