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
 const testdb2=firebase.database().ref('WebApp/Admin/Status');
 document.getElementById('status').addEventListener('submit',submitForm);
 function submitForm(e){
 e.preventDefault();
 var vr=getElementVal2('vr');
 var p=getElementVal2('p');
 var c=getElementVal2('c');
 var i=getElementVal2('i');
 var f=getElementVal2('f');
 save2(vr,p,c,i,f);
 console.log(vr,p,c,i,f);
 };
 const save2= (vr,p,c,i,f) =>{
 firebase.database().ref('WebApp/Admin/Status/' + vr).set({
 vn:vr,
 purchase:p,
 claim:c,
 inspection:i,
 fund:f
 });
 };
 
 const getElementVal2 = (id) =>{
 return document.getElementById(id).value;
 };