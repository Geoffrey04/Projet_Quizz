// Array of questions and answers
var tbl_questions = [
    {
        Question: "1.Au début de la série, qui est sur le trône de fer ?",
        Reponse1: "Aegon le conquérant",
        Reponse2: "Aerys le roi fou",
        Reponse3: "Robert Baratheon",
        Reponse4: "Tywin Lannister ",
        correct: "Robert Baratheon"

    },
    {
        Question: "2.Quel dragon de Daenerys 'meurt' face au marcheurs blancs ?",
        Reponse1: "Shenron",
        Reponse2: "Rhaegal",
        Reponse3: "Drogon",
        Reponse4: "Viserion",
        correct: "Viserion",

    },
    {
        Question: "3.En épousant Drogo, Daenerys devient :",
        Reponse1: "Reine",
        Reponse2: "Duchesse",
        Reponse3: "Mère des dragons",
        Reponse4: "Khaleesi",
        correct: "Khaleesi",

    },
    {
        Question: "4.Comment s'appellent les dragons de Daenerys ?",
        Reponse1: "Aeryon, Drago et Visery",
        Reponse2: "Drogon, Rhaegal et Viserion",
        Reponse3: "Joffrey, Balon et Robon",
        Reponse4: "Khal, Rhaegon et Viseral",
        correct: "Drogon, Rhaegal et Viserion",

    },
    {
        Question: "5.Qui est accusé(e) d'avoir tué Joffrey Baratheon ?",
        Reponse1: "Sansa Stark",
        Reponse2: "Tyrion Lannister",
        Reponse3: "Varys",
        Reponse4: "Petyr Baelish ",
        correct: "Tyrion Lannister",
    },
    {
        Question: "6.Qui monte sur le trône de fer après Joffrey ?",
        Reponse1: "Myrcella",
        Reponse2: "Tommen",
        Reponse3: "Stannis",
        Reponse4: "Cersei",
        correct: "Tommen",

    },
    {
        Question: "7.Qui retient Theon Greyjoy en otage et le torture sans cesse?",
        Reponse1: "les Karstark",
        Reponse2: "On ne sait pas",
        Reponse3: "Willos Tyrell",
        Reponse4: "Ramsay Bolton",
        correct: "Ramsay Bolton",

    },
    {
        Question: "8.Quels sont les véritables noms du Limier et de son frère la Montagne ?",
        Reponse1: "Sandor et Gregor Clegane",
        Reponse2: "Cendar et Grégoire Clegane",
        Reponse3: "Ragor et Vycell Clegane",
        Reponse4: "Ragnarok et Canvas Cleagan",
        correct: "Sandor et Gregor Clegane",
    },
    {
        Question: "9.Quelles sont les deux seules matières permettant de tuer les marcheurs blancs ? ",
        Reponse1: "l'acier forgé dans un volcan et de la glace éternelle",
        Reponse2: "L'Acier valyrien et le Verredragon",
        Reponse3: "Le bois d'un arbre puissant et le métal valkyrien ",
        Reponse4: "l'eau de mer et le soleil",
        correct: "L'Acier valyrien et le Verredragon",

    },
    {
        Question: "10.A la fin de la saison 7, on a la confirmation du vrai nom de Jon Snow. Quel est-il ?",
        Reponse1: "Jon Stark",
        Reponse2: "Jon Targaryen",
        Reponse3: "Aegon Targaryen",
        Reponse4: "Aegon Tyrell",
        correct: "Aegon Targaryen",

    },
];
// array for function verif()
tbl_correction = [];


function display_gif() {
    $('#gif').attr('src', 'https://media3.giphy.com/media/NyvaiYod2ShwI/giphy.gif?cid=3640f6095c0a2bf9516475796be73ec6')
}

var score = 0;

//  function verif look if the choice of user it's good or not
function verif() {

    if (tbl_correction[0] == 2) {
        score++;

    } else {
        $('#wrong').append('<li>La bonne réponse à la question 1 était' + ' ' + ':' + tbl_questions[0].correct + '</li>');
    }


    if (tbl_correction[1] == 3) {

        score++;

    } else {
        $('#wrong').append('<li>La bonne réponse à la question 2 était' + ' ' + ':' + tbl_questions[1].correct + '</li>');
    }

    if (tbl_correction[2] == 3) {

        score++;

    } else {
        $('#wrong').append('<li>La bonne réponse à la question 3 était' + ' ' + ':' + tbl_questions[2].correct + '</li>');
    }

    if (tbl_correction[3] == 1) {

        score++;

    } else {
        $('#wrong').append('<li>La bonne réponse à la question 4 était ' + ' ' + ':' + tbl_questions[3].correct + '</li>');
    }

    if (tbl_correction[4] == 1) {

        score++;

    } else {
        $('#wrong').append('<li>La bonne réponse à la question 5 était' + ' ' + ':' + tbl_questions[4].correct + '</li>');
    }

    if (tbl_correction[5] == 1) {

        score++;

    } else {
        $('#wrong').append('<li>La bonne réponse à la question 6 était ' + ' ' + ':' + tbl_questions[5].correct+ '</li>');
    }

    if (tbl_correction[6] == 3) {

        score++;

    } else {
        $('#wrong').append('<li>La bonne réponse à la question 7 était ' + ' ' + ':' + tbl_questions[6].correct+ '</li>');
    }

    if (tbl_correction[7] == 0) {

        score++;

    } else {
        $('#wrong').append('<li>La bonne réponse à la question 8 était ' + ' ' + ':' + tbl_questions[7].correct+ '</li>');
    }

    if (tbl_correction[8] == 1) {

        score++;

    } else {
        $('#wrong').append('<li>La bonne réponse à la question 9 était' + ' ' + ':' + tbl_questions[8].correct+ '</li>');
    }

    if (tbl_correction[9] == 2) {

        score++;

    } else {
        $('#wrong').append('<li>La bonne réponse à la question 10 était' + ' ' + ':' + tbl_questions[9].correct+ '</li>');
    }


    $('#score').html('votre score est de' + ' ' + score + '/10');

};
// function for restart new game
function reset() {
    location.reload();
}

// Display the first questions and answers
let i;

function Afficher() {
    i = 0;


    if (i == 0) {
        $('#questions').html(tbl_questions[i].Question);
        $('#Reponse_a').html(tbl_questions[i].Reponse1);
        $('#Reponse_b').html(tbl_questions[i].Reponse2);
        $('#Reponse_c').html(tbl_questions[i].Reponse3);
        $('#Reponse_d').html(tbl_questions[i].Reponse4);

    }

}

Afficher();

// event for select answer
$('li').click(function () {


    // alert(this.id);
    var i2 = ($('li').index(this));
    tbl_correction.push(i2);
    console.log(tbl_correction);

    // if i>= 9 , also the game it's finish
    if (i >= 9) {
        // Screen of game it's no more visible
        $('#issue').css({
            'display': 'none'
        });
        // Screen of result display
        $('#display_result').css({
            'display': 'inline-block'
        });
        // Button for restart it's now visible
        $('#reset').css({
            'display': 'inline-block'
        });
        // call function
        verif();
        display_gif();

        // Display questions one after one , when user click on answer
    } else {
        i++;


        $('#questions').html(tbl_questions[i].Question);
        $('#Reponse_a').html(tbl_questions[i].Reponse1);
        $('#Reponse_b').html(tbl_questions[i].Reponse2);
        $('#Reponse_c').html(tbl_questions[i].Reponse3);
        $('#Reponse_d').html(tbl_questions[i].Reponse4);


    }
});









































