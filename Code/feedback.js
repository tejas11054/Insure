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
 const testdb9=firebase.database().ref('WebApp/Feedback');
 document.getElementById('feedback').addEventListener('submit',submitForm);
 function submitForm(e){
 e.preventDefault();
 var username=getElementVal9('username');
 var email=getElementVal9('email');
 var mobile=getElementVal9('mobile');
 var comment=getElementVal9('comment');
 save9(username,email,mobile,comment);
 console.log(username,email,mobile,comment);
 };
 const save9= (username,email,mobile,comment) =>{
 var newform9 = testdb9.push();
 newform9.set({
 username:username,
 email:email,
 mobile:mobile,
 comment:comment
 });
 };
 
 const getElementVal9 = (id) =>{
 return document.getElementById(id).value;
 };