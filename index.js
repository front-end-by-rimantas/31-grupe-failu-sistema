const data = require('./lib/data.js');

const initialDataPetras = { name: 'Petras', age: 99 };
// data.create('users', 'petras', initialDataPetras, (err, msg) => {
//     console.log(err, msg);
//     console.log('Sekantys zingsniai po bandymo sukurti faila....');
// });

// data.create('books', 'du-gaideliai', { text: 'Baltus zirnius kule' }, (err, msg) => {
//     console.log(err, msg);
//     console.log('Sekantys zingsniai po bandymo sukurti faila....');
// });

// pirminis perskaitymas
data.read('users', 'petras', (err, content) => {
    const fileData = JSON.parse(content);
    console.log('READ 1:', fileData);

    // prie Petro objekto prideti megsta spalva: red
    data.update('users', 'petras', { ...initialDataPetras, favoriteColor: 'red' }, (err, msg) => {
        console.log('UPDATE 1:', err, msg);

        // dar karta perskaitom
        data.read('users', 'petras', (err, content) => {
            const fileData = JSON.parse(content);
            console.log('READ 2:', fileData);
        })
    })
})

