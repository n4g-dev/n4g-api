const knex = require('./knex');


knex('suppliers').update({ birthDate: '1980-11-12' }).then((res) => {
    console.log(res);
});


/*
knex('organizations').first().then((res) => {
    console.log(res);
});
*/
