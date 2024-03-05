const testdb7=firebase.database().ref('WebApp/Claim/Garage');
 document.getElementById('garage').addEventListener('submit',submitForm);
 function submitForm(e){
 e.preventDefault();
 var vhnr=getElementVal7('vhnr');
 var gn=getElementVal7('gn');
 var ga=getElementVal7('ga');
 var gpn=getElementVal7('gpn');
 var gd=getElementVal7('gd');
 save7(vhnr,gn,ga,gpn,gd);
 console.log(vhnr,gn,ga,gpn,gd);
 };
 const save7= (vhnr,gn,ga,gpn,gd)=>{
 var newform7 = testdb7.push();
 

 firebase.database().ref('WebApp/Claim/Garage/' + vhnr).set({
 vhnr:vhnr,
 gn:gn,
 ga:ga,
 gpn:gpn,
 gd:gd
 });
};
 const getElementVal7 = (id) =>{
 return document.getElementById(id).value;
 };