// animation and the start 

let startBTN = document.getElementById('start'),
    circle = document.getElementsByClassName('circle'),
    user = 'unknown';


startBTN.onclick = ()=> {
     
     circle[0].classList.add('start-Animation');
     
     setTimeout(() => {
         startBTN.style.display = 'none';
         document.getElementById('user-name').style.display = 'none';
         
        }, 500);
     
     user = document.getElementById('user-name').value;
     Qs();

    };
    
// end 

// Quiz system 

var barQST = document.getElementById('question'),
    firstAns = document.getElementById('answer1'),
    secondAns = document.getElementById('answer2'),
    thirdAns = document.getElementById('answer3'),
    points = 0;
    

var x = 0,
    y = 0;

function Qs(){
   
   if (x == numQst){
       
   } else {
        barQST.textContent = questions[x].qst;
        firstAns.textContent = questions[x].answerA;
        secondAns.textContent = questions[x].answerB;
        thirdAns.textContent = questions[x].answerC;
        
   }
};



firstAns.onclick = function(){
      
     if (this.textContent == questions[y].trueAnswer){
         x = x +1;
         y = y +1;
         points = points + 1;
         finish();
         Qs()
     } else {
         alert('حاول مجددا');
     }
    };

secondAns.onclick = function(){
      
     if (this.textContent == questions[y].trueAnswer){
         x = x + 1;
         y = y +1;
         points = points + 1;
         finish();
         Qs()
     } else {
         alert('حاول مجددا');

     }
    };
    
thirdAns.onclick = function(){
     
     if (this.textContent == questions[y].trueAnswer) {
         x = x + 1;
         y = y +1;
         points = points + 1;
         finish();
         Qs()
     } else {
          alert('حاول مجددا');

     }
     
    };
    
    
// end

// finish 

function finish(){

    if (x == numQst){
        alert('رائع! ' + user +' لقد حصلت على : ' + points + ' نقاط ')
    }
}
// end