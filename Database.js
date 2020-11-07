var firebaseConfig = {
    apiKey: "AIzaSyCGIgK0AMXKdmDT4RiYiPNDVKllrGy9YY8",
    authDomain: "webapp-a08be.firebaseapp.com",
    databaseURL: "https://webapp-a08be.firebaseio.com",
    projectId: "webapp-a08be",
    storageBucket: "webapp-a08be.appspot.com",
    messagingSenderId: "248979751837",
    appId: "1:248979751837:web:036a019b7f08272b5ba574"
  };
  
firebase.initializeApp(firebaseConfig);
var database = firebase.database();
var NumR = 'ID:'+ Math.floor(Math.random() * 10000) + (Math.floor(Math.random() * 10000));

function userFunc(){
     var userName = document.getElementById('user-name').value;
     database.ref('users/' + NumR).set({
            username: userName,
            points: 0
        });
        console.log(userName + 'hello');
};

window.onload = function(){
    
    database.ref('users/').on('value', function(snapshot){
    var allUser = snapshot.val();
    var list = document.getElementById('contentlist');
    
    
    for (var NumOfUser = 0; NumOfUser < Object.keys(allUser).length; NumOfUser++){
        
       var li = document.createElement('li');
       
       
        li.textContent = allUser[Object.keys(allUser)[NumOfUser]].username + ' | ' + 'score: ' + allUser[Object.keys(allUser)[NumOfUser]].points;
        
        
        list.children[0].appendChild(li);
       
    }
 

 })
}

function finishScore(point){
    database.ref('users/' + NumR).update({
        points: point
    })
}