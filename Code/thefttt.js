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
 const testdb8=firebase.database().ref('WebApp/Claim/Theft');
 document.getElementById('theft').addEventListener('submit',submitForm);
 function submitForm(e){
 e.preventDefault();
 var vr=getElementVal8('vr');
 var pot=getElementVal8('pot');
 var dot=getElementVal8('dot');
 var tot=getElementVal8('tot');
 var pst=getElementVal8('pst');
 var firt=getElementVal8('firt');
 var doft=getElementVal8('doft');
 var nbt=getElementVal8('nbt');
 var ton=getElementVal8('ton');
 var wsn=getElementVal8('wsn');
 var wfn=getElementVal8('wfn');
 var wln=getElementVal8('wln');
 var wa=getElementVal8('wa');
 var wpn=getElementVal8('wpn');
 var nsn=getElementVal8('nsn');
 var nfn=getElementVal8('nfn');
 var nln=getElementVal8('nln');
 var na=getElementVal8('na');
 var npn=getElementVal8('npn');
 var relation=getElementVal8('relation');
 var purpose=getElementVal8('purpose');
 save8(vr,pot,dot,tot,pst,firt,doft,nbt,ton,wsn,wfn,wln,wa,wpn,nsn,nfn,nln,na,npn,relation,purpose); 
console.log(vr,pot,dot,tot,pst,firt,doft,nbt,ton,wsn,wfn,wln,wa,wpn,nsn,nfn,nln,na,npn,relation,purpose);
 };

 const save8= 
(vr,pot,dot,tot,pst,firt,doft,nbt,ton,wsn,wfn,wln,wa,wpn,nsn,nfn,nln,na,npn,relation,purpose) =>{
 
 
 firebase.database().ref('WebApp/Claim/Theft/' + vr).set({
 vr:vr,
 pot:pot,
 dot:dot,
 tot:tot,
 pst:pst,
 firt:firt,
 doft:doft,
 nbt:nbt,
 ton:ton,
 wsn:wsn,
 wfn:wfn,
 wln:wln,
 wa:wa,
 wpn:wpn,
 nsn:nsn,
 nfn:nfn,
 nln:nln,
 na:na,
 npn:npn,
 relation:relation,
 purpose:purpose
 });
};
 
 const getElementVal8 = (id) =>{
 return document.getElementById(id).value;
 };
