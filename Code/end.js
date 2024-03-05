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
 const testdb12=firebase.database().ref('WebApp/Claim/Agreement');
 document.getElementById('agr').addEventListener('submit',submitForm);
 function submitForm(e){
 e.preventDefault();
 var vn=getElementVal12('vn');
 var agreebutton=getElementVal12('agreebutton');
 myfunction(vn);
 save12(vn,agreebutton);
 console.log(vn,agreebutton);
 };
 const save12= (vn,agreebutton) =>{
 
 firebase.database().ref('WebApp/Claim/Agreement/' + vn).set({
 vn:vn,
 agreebutton:agreebutton
 });
 };
 const getElementVal12 = (id) =>{
 return document.getElementById(id).value;
 };
 const myfunction=(vn)=>{
 vn :vn;

 firebase.database().ref('WebApp/Purchase/Register').on("value" , function(snapshot){
 snapshot.forEach(function(childSnapshot){
 var a = childSnapshot.val();
 var un = a["vehiclenumber"];
 var em = a["email"];
 if(un == vn){
 Email.send({
 Host: "smtp.google.com",
 Username: "treramane@gmail.com",
 Password: "129@Tejas",
 To: em,
 From: "treramane@gmail.com",
 Subject: un,
 Body: "Dear client, Your insurance claiming process has been started. For online inspection you will be having appointment with us by Tommorrow. Shortly you will recieve the Email regarding the appointment via mail.Thank You!!",
 }).then(
 message => alert("Check your gmail spam")
 );
 }
 });
 });
 }