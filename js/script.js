
//Get the elements
const start_box = document.querySelector(".start_btn");
const start_btn = document.querySelector(".start_btn .s_btn");
const question_box = document.querySelector(".question_box");
const s_box = document.querySelector(".s_box");
const quit_btn = document.querySelector(".buttons .btn_q");
const restart_btn = document.querySelector(".buttons .btn_r");
const progress = document.querySelector(".progress_bar");
const next_btn = document.querySelector(".question_box .next_btn");

// Add question function here
var question = [question1(), question2(), question3(), question4(), question5()];
var question_count = 0;
var question_number = 1;
var percent = 100/question.length;
var p_bar = percent;
var answer;

//Start button
start_btn.onclick = ()=>{
    question_box.classList.add("question_box_active");
    $(".q_box").append(question[question_count]);
    $(".fn").text(question_number);
    $(".ln").text(question.length);
    $(".question_box header .progress_bar").css("width", percent);
    start_box.classList.add("start_btn_hide");

    answer = document.querySelectorAll(".option");
    
    const option = document.querySelectorAll(".option_list .option");
    for(let i = 0; i < option.length; i++) {
        option[i].setAttribute("onclick","optionSelected(this)");
    }
}

next_btn.onclick = ()=>{
    for(let check_pro = 0; check_pro < answer.length; check_pro++) {
        if(answer[check_pro].classList.contains("option_active")){
            if(question_count < question.length - 1){
                $(".q_box .q_container").remove();
                question_count++;
                $(".q_box").append(question[question_count]);
                question_number++;
                $(".fn").text(question_number);
                p_bar = p_bar + percent;
                $(".question_box header .progress_bar").css("width", p_bar + "%");
        
                answer = document.querySelectorAll(".option");
        
                const option = document.querySelectorAll(".option_list .option");
                for(let i = 0; i < option.length; i++) {
                    option[i].setAttribute("onclick","optionSelected(this)");
                }
            }else{
                question_box.classList.remove("question_box_active");
                s_box.classList.add("s_box_active");
            }
        }else{

        }
    }
}

function optionSelected(answer){
    answer_act = document.querySelectorAll(".option");
    for(a_btn = 0; a_btn < answer_act.length; a_btn++) {
        answer_act[a_btn].classList.remove("option_active");
    }
    let userAns = answer.textContent;
    answer.classList.add("option_active");
    console.log(userAns);
}

restart_btn.onclick = () => {
    question_count = 0;
    question_number = 1;
    percent = 100/question.length;
    p_bar = percent;
    $(".q_box .q_container").remove();
    question_box.classList.add("question_box_active");
    $(".q_box").append(question[question_count]);
    $(".fn").text(question_number);
    $(".ln").text(question.length);
    $(".question_box header .progress_bar").css("width", percent);
    start_box.classList.add("start_btn_hide");

    answer = document.querySelectorAll(".option");
    
    const option = document.querySelectorAll(".option_list .option");
    for(let i = 0; i < option.length; i++) {
        option[i].setAttribute("onclick","optionSelected(this)");
    }
    
    answer_act = document.querySelectorAll(".option");
    for(a_btn = 0; a_btn < answer_act.length; a_btn++) {
        answer_act[a_btn].classList.remove("option_active");
    }
}

quit_btn.onclick = () => {
    window.location.reload();
} 