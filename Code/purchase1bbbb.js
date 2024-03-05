const testdb2=firebase.database().ref('WebApp/Purchase/OwnerContact');
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
 firebase.database().ref('WebApp/Purchase/OwnerContact/'+ vr).set({
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
 });
 };
 
 const getElementVal2 = (id) =>{
 return document.getElementById(id).value;
 };
