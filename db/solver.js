const config = require('../knexfile.js');


const olddb = require('knex')(config.development);
const newdb = require('knex')(config.new);


const table = 'transactions';

/*
olddb(table).then((results) => {
    console.log(`Found ${results.length} ${table}`);
    newdb.transaction((tr) => {
        return newdb.batchInsert(table, results, 300)
        .transacting(tr)
    })
    .then(() => { console.log(`Successfully inserted ${table}`); })
    .catch((error) => console.error(error));
});

*/