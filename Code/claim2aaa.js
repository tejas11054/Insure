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
 const testdb3=firebase.database().ref('WebApp/Claim/Vehicle');
 document.getElementById('vehicle').addEventListener('submit',submitForm);
 function submitForm(e){
 e.preventDefault();
 var vr=getElementVal3('vr');
 var rn=getElementVal3('rn');
 var dor=getElementVal3('dor');
 var dovp=getElementVal3('dovp');
 var cn=getElementVal3('cn');
 var en=getElementVal3('en');
 var make=getElementVal3('make');
 var model=getElementVal3('model');
 var nf=getElementVal3('nf');
 var classv=getElementVal3('classv');
 var gas=getElementVal3('gas');
 var antitheft=getElementVal3('antitheft');
 
 save3(vr,rn,dor,dovp,cn,en,make,model,nf,classv,gas,antitheft);
 console.log(vr,rn,dor,dovp,cn,en,make,model,nf,classv,gas,antitheft);
 };
 const save3= (vr,rn,dor,dovp,cn,en,make,model,nf,classv,gas,antitheft) =>{ 
 
 firebase.database().ref('WebApp/Claim/Vehicle/' + vr).set({
 vr:vr,
 rn:rn,
 dor:dor,
 dovp:dovp,
 cn:cn,
 en:en,
 make:make,
 model:model,
 nf:nf,
 classv:classv,

 gas:gas,
 antitheft:antitheft
 });
 };
 
 const getElementVal3 = (id) =>{
 return document.getElementById(id).value;
 };