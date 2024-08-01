const data = [{
        img: '<img class="dataimg" src="assets/img/1.png" alt="01">',
        ans: 'squid'
    },
    {
        img: '<img class="dataimg" src="assets/img/2.png" alt="01">',
        ans: 'starfish'
    },
    {
        img: '<img class="dataimg" src="assets/img/3.png" alt="01">',
        ans: 'sea lion'
    },
    {
        img: '<img class="dataimg" src="assets/img/4.png" alt="01">',
        ans: 'walrus'
    },
    {
        img: '<img class="dataimg" src="assets/img/5.png" alt="01">',
        ans: 'lobster'
    },
    {
        img: '<img class="dataimg" src="assets/img/6.png" alt="01">',
        ans: 'eel'
    }
]

let container = document.querySelector('.mainContainer');

// document.querySelector('.modal').requestFullscreen();

function load() {
    data.forEach((e, i) => {
        container.innerHTML += `<div class="data">` + e.img + `
        <input  type="text" maxlength=10 autofill="off" >
        <img id='correct` + i + `' class="correct" src="assets/img/correct.png" alt="correctIcon">
         <img id='incorrect` + i + `' class="incorrect" src="assets/img/incorrect.png" alt="incorrectIcon">
        <span class="answer"></span>
        </div>`;

    })


}


load();





const inputtag = document.querySelectorAll('input');

var counter = 0;
inputtag.forEach((e) => {
    e.addEventListener('change', () => {
        if (e.value != '') {
            counter++;
            if (counter == data.length - 1) {
                console.log("iam enabled")
                submit.removeAttribute('disabled');
                submit.setAttribute('class', 'allowed')
            }
        }
    })


})





let reset = document.querySelector('#btnreset');

reset.addEventListener('click', () => {
    window.location.reload();
})

let answer = document.querySelector('#btnanswer');

answer.addEventListener('click', () => {
    document.querySelectorAll('input').forEach((e, i) => {
    
        e.value = data[i].ans;
    })
    document.querySelectorAll('.correct').forEach((e)=>{
        e.style='display:none;';
    });

    document.querySelectorAll('.incorrect').forEach((e)=>{
        e.style='display:none;';
    });
    answer.setAttribute('disabled', true);
    answer.setAttribute('class', 'notAllowed')

})



const submit = document.querySelector('#btnsubmit');

submit.addEventListener('click', (e) => {
    var a = 0;
    var incorrect = false;
    input = document.querySelectorAll('input');
    input.forEach((e, i) => {



        if (e.value.toLowerCase() == data[i].ans.toLocaleLowerCase()) {
            document.querySelector('#correct' + i).style = 'display:inline;';
            a++;
        } else {
            document.querySelector('#incorrect' + i).style = 'display:inline;';
            incorrect = true;
        }
    })

    if (incorrect != true) {
        document.querySelector('.modal').innerHTML = ` <img class="resultimg" src="assets/img/target.gif" alt="target"><h2 class='modalheader'> You got &nbsp;` + a + ` &nbsp;out of &nbsp;` + Number(data.length) + `&nbsp;!</h2>`;
        document.querySelector('.modalContainer').style = 'display:flex;';

        const win=document.querySelector('#win');
        win.play();

        



        setTimeout(() => {
            document.querySelector('.modalContainer').style = 'display:none;';

        }, [4000])
    } else {

        document.querySelector('.modal').innerHTML = ` <img class="resultimg" src="assets/img/target.gif" alt="target"><h2 class='modalheader'> You got &nbsp; ` + a + ` &nbsp;out of &nbsp;` + Number(data.length) + `&nbsp;!</h2>`;
        document.querySelector('.modalContainer').style = 'display:flex;';

        const lose=document.querySelector('#lose');
        lose.play()

        setTimeout(() => {
            document.querySelector('.modalContainer').style = 'display:none;';

        }, [4000])
        answer.removeAttribute('disabled');
        answer.setAttribute('class', 'allowed')
    }

    submit.setAttribute('disabled', true);
    submit.setAttribute('class', 'notAllowed')

})


const headeraudio=document.querySelector('#headeraudio');
headeraudio.addEventListener('click',playAudio);


function playAudio(){
    
    var audio = document.querySelector('#audio');
    audio.play();

    
}