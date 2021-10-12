/*
Failu sistemos CRUD

C - create (sukurti)
R - read (perksaityti)
U - update (atnaujinti)
D - delete (istrinti)

*/

const data = {};

data.create = (dir, fileName, content) => {
    console.log('Kuriamas failas...');
}

data.read = (dir, fileName) => {
    console.log('Skaitomas failas...');
}

data.update = (dir, fileName, content) => {
    console.log('Atnaujinamas failas...');
}

data.delete = (dir, fileName) => {
    console.log('Trinamas failas...');
}

module.exports = data;