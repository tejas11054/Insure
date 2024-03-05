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
 //firebase.initializeApp(firebaseConfig);
 const testdb4=firebase.database().ref('WebApp/Claim/Accident');
 document.getElementById('accident').addEventListener('submit',submitForm);

 function submitForm(e){
 e.preventDefault();
 var vr=getElementVal4('vr');
 var ad=getElementVal4('ad');
 var at=getElementVal4('at');
 var avs=getElementVal4('avs');
 var poa=getElementVal4('poa');
 var firn=getElementVal4('firn');
 var psn=getElementVal4('psn');
 var gn=getElementVal4('gn');
 var nop=getElementVal4('nop');
 var from=getElementVal4('from');
 var to=getElementVal4('to');
 var purpose=getElementVal4('purpose')
 var thirdpartyinvolved=getElementVal4('thirdpartyinvolved')
 save4(vr,ad,at,avs,poa,firn,psn,gn,nop,from,to,purpose,thirdpartyinvolved);
 console.log(vr,ad,at,avs,poa,firn,psn,gn,nop,from,to,purpose,thirdpartyinvolved);
 };
 const save4= (vr,ad,at,avs,poa,firn,psn,gn,nop,from,to,purpose,thirdpartyinvolved) =>{
 firebase.database().ref('WebApp/Claim/Accident/' + vr).set({
 vr:vr,
 ad:ad,
 at:at,
 avs:avs,
 poa:poa,
 firn:firn,
 psn:psn,
 gn:gn,
 nop:nop,
 from:from,
 to:to,
 purpose:purpose,
 thirdpartyinvolved:thirdpartyinvolved
 });
};
 
 const getElementVal4 = (id) =>{
 return document.getElementById(id).value;
 };
