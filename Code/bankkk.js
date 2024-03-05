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
 const testdb4=firebase.database().ref('WebApp/Claim/Bank');
 document.getElementById('bank').addEventListener('submit',submitForm);
 function submitForm(e){
 e.preventDefault();
 var vr=getElementVal4('vr');
 var bsn=getElementVal4('bsn');
 var bfn=getElementVal4('bfn');
 var bln=getElementVal4('bln');
 var banktype=getElementVal4('banktype');
 var ban=getElementVal4('ban');
 var bn=getElementVal4('bn');
 var bb=getElementVal4('bb');
 var micr=getElementVal4('micr');
 var ifsc=getElementVal4('ifsc');
 
 save4(vr,bsn,bfn,bln,banktype,ban,bn,bb,micr,ifsc);
 console.log(vr,bsn,bfn,bln,banktype,ban,bn,bb,micr,ifsc);
 };
 const save4= (vr,bsn,bfn,bln,banktype,ban,bn,bb,micr,ifsc) =>{ 
 firebase.database().ref('WebApp/Claim/Bank/' + vr).set({
 vr:vr,
 bsn:bsn,
 bfn:bfn,
 bln:bln,
 banktype:banktype,
 ban:ban,
 bn:bn,
 bb:bb,
 micr:micr,
 ifsc:ifsc

 });
};
 
 const getElementVal4 = (id) =>{
 return document.getElementById(id).value;
 };