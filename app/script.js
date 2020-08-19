const firstRow = 'мама мыла раму';
const secondRow = 'собака друг человека';

function getRow(firstRow, secondRow) {
    let current = '';
    let total = 0;
    for (let i = 0; i < arguments.length; i++) {
        let summ = 0;

        for (let q = 0; q < arguments[i].length; q++) {

            if (arguments[i].charAt(q) === 'а' ) {
                summ++;
            }

            if (summ > total) {
                total = summ;
                current = arguments[i];
            }
        }
    }
    return alert(current.toUpperCase()) ;
}

console.log(getRow(firstRow, secondRow));
