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
 const testdb2=firebase.database().ref('WebApp/Claim/OwnerContact');
 document.getElementById('contact').addEventListener('submit',submitForm);
 function submitForm(e){
 e.preventDefault();
 var vr=getElementVal2('vr');
 var phn=getElementVal2('phn');
 var aphn=getElementVal2('aphn');
 var mn=getElementVal2('mn');
 var almn=getElementVal2('almn');
 var email=getElementVal2('email');
 var dob=getElementVal2('dob');
 var adn=getElementVal2('adn');
 var pan=getElementVal2('pan');
 var profession=getElementVal2('profession');
 var income=getElementVal2('income');
 
 save2(vr,phn,aphn,mn,almn,email,dob,adn,pan,profession,income);
 console.log(vr,phn,aphn,mn,almn,email,dob,adn,pan,profession,income);
 };
 const save2= (vr,phn,aphn,mn,almn,email,dob,adn,pan,profession,income) =>{
 firebase.database().ref('WebApp/Claim/OwnerContact/' + vr).set({
 vr:vr,
 phn:phn,
 aphn:aphn,
 mn:mn,
 almn:almn,
 email:email,
 dob:dob,
 adn:adn,
 pan:pan,
 profession:profession,
 income:income
 });};

 const getElementVal2 = (id) =>{
 return document.getElementById(id).value;
 };