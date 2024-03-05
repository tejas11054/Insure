const firebaseConfig = {
 apiKey: "AIzaSyBzNxCcnq5Mgbq5ojojdXjs9TzYcGURFLM",
 authDomain: "insure-10fea.firebaseapp.com",
 databaseURL: "https://insure-10fea-default-rtdb.firebaseio.com",

 projectId: "insure-10fea",
 storageBucket: "insure-10fea.appspot.com",
 messagingSenderId: "952535704771",
 appId: "1:952535704771:web:9be8cdc3f2d37020dc2e76",
 measurementId: "G-935ZW5E3LG"
 };
 firebase.initializeApp(firebaseConfig);
 const testdb5=firebase.database().ref('WebApp/Claim/Login');
 document.getElementById('login').addEventListener('submit',submitForm);
 function submitForm(e){
 e.preventDefault();
 const username=getElementVal5('username');
 var password=getElementVal5('password');
 var sb = getElementVal5('sign');
 myfunction(username,password); 
 //console.log(username,password);
 };
 const getElementVal5 = (id) =>{
 return document.getElementById(id).value;
 };
 const myfunction =(username,password) => {
 username : username;
 password : password;
 firebase.database().ref('WebApp/Purchase/Register').on("value" , function(snapshot){
 snapshot.forEach(function(childSnapshot){
 var a = childSnapshot.val();
 var un = a["vehiclenumber"];
 var ps = a["password"];
 if(un == username && ps==password){
 save5(username,password);
 location.replace('type.php');
 } 
 });
 }); 
}
const save5= (username,password) =>{
 firebase.database().ref('WebApp/Claim/Login/' + username).set({
 username:username,
 password:password
 });
};
sign.addEventListener('click',myfunction);