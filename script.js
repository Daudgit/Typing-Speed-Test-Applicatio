const setOfWords = [
    "OpenCV is a great tool for image processing and performing computer vision tasks. It is an open-source library that can be used to perform tasks like face detection, objection tracking, landmark detection, and much more. It supports multiple languages including python, java C++",
    "A self introduction for interview or otherwise is an extended version of an elevator pitch where you are the 'idea'. A self introduction for interview, for instance, would comprise your name, your current designation and a few experiences tied in with the job role.",
    "JavaScript isn't exactly hard to learn, but if it's your first programming language adjusting to the mindset required for programming can take a lot of time. JavaScript is actually one of the easier programming languages to start with. In fact, there are several resources available to help you learn it with ease."
];

const msg = document.getElementById('msg')
const typeWords = document.getElementById('mywords')
const btn = document.getElementById('btn')


let startTime , endTime;



btn.addEventListener('click' , ()=>{
    
    if(btn.innerText === "Start"){
        typeWords.disabled = false;
        playGame()
    }else if(btn.innerText === "Done"){
    typeWords.disabled = "True";
    btn.innerText = "Start"
    endPlay();
    }
})


function playGame() {
    let randomNumber = Math.floor(Math.random()*setOfWords.length);
    msg.innerText = setOfWords[randomNumber];
    let date = new Date();
    startTime = date.getTime();
    btn.innerText = "Done"
    
}

function endPlay(){
    let date =new Date();
    endTime = date.getTime();
    let totalTime = ((endTime - startTime)/1000);
    console.log(totalTime);

    let totalString = typeWords.value;
    let wordCount = wordCounter(totalString);

    let speed = Math.round((wordCount/totalTime)*60)
    let finalMsg = `you typed total at ${speed} words per minute`;

    finalMsg +=compareWords(msg.innerText , totalString);

    msg.innerText = finalMsg



}

const wordCounter = (str) =>{
    let response = str.split(" ").length;
    return response;
}


const compareWords = (str1 , str2) =>{
    let words1 = str1.split(" ")
    let words2 = str2.split(" ")

    let cnt = 0

    words1.forEach( (item , idx)=>{
        if(item == words2[idx]){
            cnt++;
        }
    });

    let errorWords = (words1.length - cnt);

    return ` ${cnt} correct out of ${words1.length} words and the total number of error are ${errorWords} . `
    
}



