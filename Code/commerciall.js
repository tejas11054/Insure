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
 const testdb2=firebase.database().ref('WebApp/Claim/Commercial');
 document.getElementById('commercial').addEventListener('submit',submitForm);
 function submitForm(e){
 e.preventDefault();
 var vr=getElementVal2('vr');
 var load=getElementVal2('load');
 var psngr=getElementVal2('psngr');
 var grdate=getElementVal2('grdate');
 var grn=getElementVal2('grn');
 var prmtn=getElementVal2('prmtn');
 var prmtid=getElementVal2('prmtid');
 var prmtup=getElementVal2('prmtup');
 var fitness=getElementVal2('fitness'); 
 save2(vr,load,psngr,grdate,grn,prmtn,prmtid,prmtup,fitness);
 console.log(vr,load,psngr,grdate,grn,prmtn,prmtid,prmtup,fitness);
 };
 const save2= (vr,load,psngr,grdate,grn,prmtn,prmtid,prmtup,fitness) =>{
 
 firebase.database().ref('WebApp/Claim/Commercial/' + vr).set({
 vr:vr,
 load:load,
 psngr:psngr,
 grdate:grdate,
 grn:grn,
 prmtn:prmtn,
 prmtid:prmtid,
 prmtup:prmtup,
 fitness:fitness
 });
 };
 
 const getElementVal2 = (id) =>{
 return document.getElementById(id).value;
 };