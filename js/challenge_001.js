// DESAFIO

//Crie uma lista de reuniões fora de ordem. Então, reorganize para que apareça em sequência
//para o usuário

// R: Eu gostaria de realizar este exercício simulando um ambiente mais real o possível, 
// por isso, decidi utilizar o moment js para auxiliar no controle de datas e horários

// R2: Em um segundo momento, eu decidi adicionar o módulo readline para simular uma
// entrada de dado do usuário.

const moment = require('moment');
const readline = require('readline');
const leitor = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

moment.locale('pt-br');

var meetings = [
    '2020-08-10 08:30',
    '2020-08-12 09:30',
    '2020-08-10 13:00',
    '2020-10-15 10:15',
    '2021-01-12 14:30',
    '2020-08-13 08:00',
    '2020-08-13 10:30',
];

function printCalendar (calendar){
    var newCalendar = [];
    calendar.sort()
    for (var i = 0; i < calendar.length ; i++){
        newCalendar.push(moment(calendar[i]).format('DD/MMM/YYYY    HH:mm'))
    }
    return console.table(newCalendar);
};

function calendar () {

    leitor.question('Gostaria de inseir um evento futuro ? (y/n)\n', (answer) => {
           
        if (answer.match(/^y(es)?$/i)){
            let date;
            leitor.question('Insira uma data com o seguinte formato YYYY-MM-DD\n', (newDate) => {
                
                date = newDate;

                leitor.question('E a hora? HH:MM\n', (newTime) => {

                    date = (date + " " + newTime);
                    meetings.push(date);

                    leitor.question('Posso mostrar a sua agenda?\n', (answer) =>{
                        if (answer.match(/^y(es)?$/i)){
                            printCalendar(meetings)
                        } else {
                            console.log('Ok, até a próxima!');
                            leitor.close
                        }
                    });
                });
            });
        } else {
            console.log('Ok, até a próxima!');
            leitor.close
        };
    });

    return;

};

calendar();