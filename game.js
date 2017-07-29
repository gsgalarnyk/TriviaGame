var countdown = 120
var answer1, answer2, answer3, answer4, answer5, answer6, answer7, answer8;
var enabled = true;
var correct = 0;
var wrong = 8;

// var ichibanSong = $('#ichiban') 

function playAudio() { 
     $("#ichiban")[0].play();
} 

function pauseAudio() { 
    $("#ichiban")[0].pause(); 
}
function playAud() { 
     $("#OPM")[0].play();
} 

function pauseAud() { 
    $("#OPM")[0].pause(); 
}


// var questions = [{
// 	question: "How many legs are legs for days?",
// 	wrong1: "2",
// 	wrong2: "6",
// 	wrong3: "7",
// 	correct: "4",
// },{
// 	question: "What's my favorate number?",
// 	wrong1: "8",
// 	wrong2: "3",
// 	wrong3: "17",
// 	correct: "27"
// }

// ];

function start() {
    $('#start').remove();

    $('input[name="first"]').on('click', function() {
        answer1 = $(this).val();
    });

    $('input[name="second"]').on('click', function() {
        answer2 = $(this).val();
    });

    $('input[name="third"]').on('click', function() {
        answer3 = $(this).val();
    });

    $('input[name="forth"]').on('click', function() {
        answer4 = $(this).val();
    });

    $('input[name="fifth"]').on('click', function() {
        answer5 = $(this).val();
    });

    $('input[name="sixth"]').on('click', function() {
        answer6 = $(this).val();
    });

    $('input[name="seventh"]').on('click', function() {
        answer7 = $(this).val();
    });

    $('input[name="eighth"]').on('click', function() {
        answer8 = $(this).val();
    });


}

function done() {

    countdown = -1;
    $(".questionair").attr("id", "hide");


    if (answer1 === "Masami") {
        console.log(answer1);
        correct++;
    };

    if (answer2 === "HidekinYui") {
        console.log(answer2);
        correct++;
    };

   if (answer3 === "Angel") {
        console.log(answer5);
        correct++;
    };

    if (answer4 === "???") {
        console.log(answer4);
        correct++;
    };

    if (answer5 === "Angel") {
        console.log(answer5);
        correct++;
    };

    if (answer6 === "StuffedAnimals") {
        console.log(answer6);
        correct++;
    };

    if (answer7 === "5") {
        console.log(answer7);
        correct++;
    };

    if (answer8 === "IchibannoTakaramono") {
        console.log(answer8);
        correct++;
    };
    wrong = wrong - correct
    $(".totalCorrect").text("Total Correct Answers : " + correct);
    $(".totalWrong").text("Total Incorrect Answers : " + wrong);
    $(".finelsheet").attr("id", "show");


};

function timer() {
    if (enabled === true) {
        if (countdown === 0) {
            enabled = false;
            $('#timer').attr("id", "hide");
            $(".questionair").attr("id", "hide");
            $('failure').attr("id", "show");

        }
        if (countdown < 0) {
            enabled = false;
            $('#timer').attr("id", "hide");
        } else {

            function counting() {
                countdown--;
                console.log(countdown);
                $('#timer').html(countdown);
                timer();
            };

            setTimeout(counting, 1000);
        };
    };
};


// function selectBtn() {
// 	$(this).addClass("selected")
// };

// 		// for (i = 0; i < questions.length; i++) {
// 			// var a = $("<div>");

//    //        // Adding a class of movie to our button
//    //        a.addClass("question" + i);
//    //        // Adding a data-attribute
//    //        // a.attr("data-name", movies[i]);
//    //        // Providing the initial button text
//    //        a.text(questions[i].question);
//    //        // Adding the button to the buttons-view div
//    //        $("#title").html(a);
//    			console.log("working")

// 			// }
// function autocheck() {
// 	if (question1 === "Masami") {
// 		console.log(question1);
// 	}

// else {
// 	setTimeout(autocheck, 500);
// }; };
// $(document).on("click", ".this", console.log(question1));