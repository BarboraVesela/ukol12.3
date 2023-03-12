
  ///////// UKOL
   
  /* const parseDate = (date) => {
        return {
            day: Number(date.slice(0,2)),
            month: Number(date.slice(3,5)),
            year: Number(date.slice(6,10)),
        }
    }

    console.log(parseDate('03.04.2023'))


    let day = prompt('Zadej den:');
    let month = prompt('Zadej mesic: ');
    let year = prompt('Zadej rok: ');

   */
   
// Format 

    const formatDate = ({day,month,year}) => {
    
        return(document.body.innerHTML += 'Datum je: ' + day.padStart(2,'0') + '.' + month.padStart(2,'0') + '.' + year)
    }

    let zadani = {
        day:prompt('Zadej den: '),
        month:prompt('Zadej mesic: '),
        year:prompt('Zadej rok: '),
    }

    const {day, month, year} = zadani

    formatDate(zadani)

    
// Zaokrouhlovni 
const round = (number) => {
    const integer = Math.trunc(number);
    const float = number - integer;

    if (Math.abs(float) === 0.5) {
        if (integer % 2 === 0){
                return integer
            } else {
                return integer + 2 * float
            }
        }
        return console.log(Math.round(number))
}

round(prompt('Enter a number: '))