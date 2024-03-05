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
 const testdb55=firebase.database().ref('WebApp/Admin/Login');
 document.getElementById('login').addEventListener('submit',submitForm);
 function submitForm(e){
 e.preventDefault();
 var un=getElementVal55('username');
 var pass=getElementVal55('password');
 var sb = getElementVal55('sign');
 myfunction(un,pass);
 //save55(un,pass);
 // console.log(un,pass);
 };
/*
 const save55= (un,pass) =>{
 firebase.database().ref('WebApp/Admin/Login/' + un).set({
 un:un,
 pass:pass
 });
 };*/
 
 const getElementVal55 = (id) =>{
 return document.getElementById(id).value;
 };
 const myfunction =(un,pass) => {
 un : un;
 pass : pass;
 firebase.database().ref('WebApp/Admin/Login').on("value" , function(snapshot){
 snapshot.forEach(function(childSnapshot){
 var a = childSnapshot.val();
 var usn = a["un"];

 var ps = a["pass"];
 if(usn == un && ps==pass){ 
 location.replace('admin1.html');
 } 
 });
 }); 
}
sign.addEventListener('click',myfunction);