const knex = require('knex');
const moment = require('moment');

const { client, connection } = require('../config/default.js').postgres;
const localconnection = require('../config/default.js').localdb;

const db = knex({ client, connection });
const localdb = knex({ client: localconnection.client, connection: localconnection.connection });

let supplierYields = require('../../NewDocs/yields.json');
for(let key in supplierYields) {
    supplierYields[key]['2016'] = parseInt(supplierYields[key]['2016']);
    supplierYields[key]['2017'] = parseInt(supplierYields[key]['2017']);
}
suppliers = JSON.parse(suppliers);

// console.log(suppliers.length);
/*
db('suppliers').(2).then((sups) => {
    console.log(sups);
});
*/

//console.log(supplierYields)

const table = "transactions";
/*
localdb('transactions').insert({ date: '2016-06-25',
    payment: 'paid',
    cost: 0,
    amountPaid: 0,
    productId: 4,
    supplierId: 1317,
    collectorId: 3,
    currencyId: 1,
    yield: 1,
    status: 'delivered' }
).returning('*').then((col) => {
    console.log(col)
}) */


db('suppliers')
    .then((rows) => {
        let trans = [];
        console.log(rows.length);
        for(let i = 0; i < rows.length; i++) {
            const row = rows[i];
            const transaction = {
                date: '2016-06-25',
                payment: 'paid',
                cost: 0,
                amountPaid: 0,
                productId: row.productId,
                supplierId: row.id,
                collectorId: 3,
                currencyId: 1,
                yield: supplierYields[row.membershipCode]['2016'] !== "" ? supplierYields[row.membershipCode]['2016'] : 0,
                status: 'delivered'
            };
            const transaction2 = {
                date: '2017-06-25',
                payment: 'paid',
                cost: 0,
                amountPaid: 0,
                productId: row.productId,
                supplierId: row.id,
                collectorId: 3,
                currencyId: 1,
                yield: supplierYields[row.membershipCode]['2017'] !== "" ? supplierYields[row.membershipCode]['2017'] : 0,
                status: 'delivered'
            };
            trans[trans.length] = transaction;
            trans[trans.length] = transaction2;
        }

        // console.log(trans[0])


        db.batchInsert('transactions', trans, 50)
            .then(function() {
                console.log('SUCCESS WITH transactions');
            })
            .catch(function(error) {
                console.error(error);
            });
    })
    .catch((err) => {
        console.log(err);
    });
