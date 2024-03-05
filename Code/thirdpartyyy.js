const testdb6=firebase.database().ref('WebApp/Claim/ThirdParty');
 document.getElementById('thirdparty').addEventListener('submit',submitForm);
 function submitForm(e){
 e.preventDefault();
 var vhr=getElementVal6('vhr');
 var loss=getElementVal6('loss');

 var vsn=getElementVal6('vsn');
 var vfn=getElementVal6('vfn');
 var vln=getElementVal6('vln');
 var va=getElementVal6('va');
 var vmn=getElementVal6('vmn');
 var gender=getElementVal6('gender');
 var status=getElementVal6('status');
 save6(vhr,loss,vsn,vfn,vln,va,vmn,gender,status);
 console.log(vhr,loss,vsn,vfn,vln,va,vmn,gender,status);
 };
 const save6= (vhr,loss,vsn,vfn,vln,va,vmn,gender,status)=>{
 
 firebase.database().ref('WebApp/Claim/ThirdParty/' + vhr).set({
 vhr:vhr,
 loss:loss,
 vsn:vsn,
 vfn:vfn,
 vln:vln,
 va:va,
 vmn:vmn,
 gender:gender,
 status:status
 });
};
 
 const getElementVal6 = (id) =>{
 return document.getElementById(id).value;
 };
