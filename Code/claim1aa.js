const testdb=firebase.database().ref('WebApp/Claim/OwnerPersonal');
 document.getElementById('personal').addEventListener('submit',submitForm);
 function submitForm(e){
 e.preventDefault();
 var vhr=getElementVal('vhr');
 var policyno=getElementVal('policyno');
 var coverno=getElementVal('coverno');
 var policyfrom=getElementVal('policyfrom');
 var policytill=getElementVal('policytill');
 var fulllast=getElementVal('fulllast');
 var fullfirst=getElementVal('fullfirst');
 var fullmiddle=getElementVal('fullmiddle');
 var gender=getElementVal('gender')
 var buildingname=getElementVal('buildingname');
 var streetname=getElementVal('streetname');
 var landmark=getElementVal('landmark');
 var city=getElementVal('city');
 var taluka=getElementVal('taluka');
 var district=getElementVal('district');
 var pincode=getElementVal('pincode');
 var state=getElementVal('state'); 
 
save(vhr,policyno,coverno,policyfrom,policytill,fulllast,fullfirst,fullmiddle,gender,buildingname,streetname,landmark,city,taluka,district,pincode,state); 
console.log(vhr,policyno,coverno,policyfrom,policytill,fulllast,fullfirst,fullmiddle,gender,buildingname,streetname,landmark,city,taluka,district,pincode,state);
 };
const save= 
(vhr,policyno,coverno,policyfrom,policytill,fulllast,fullfirst,fullmiddle,gender,buildingname,streetname,landmark,city,taluka,district,pincode,state) =>{
 firebase.database().ref('WebApp/Claim/OwnerPersonal/' + vhr).set({
 vhr:vhr,
 policyno:policyno,
 coverno:coverno,
 policyfrom:policyfrom,
 policytill:policytill,
 fulllast:fulllast,
 fullfirst:fullfirst,
 fullmiddle:fullmiddle,
 gender:gender,
 buildingname:buildingname,
 streetname:streetname,
 landmark:landmark,
 city:city,
 taluka:taluka,
 district:district,
 pincode:pincode,
 state:state
 });
};
const getElementVal = (id) =>{
 return document.getElementById(id).value;
161
};