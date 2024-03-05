const testdb4=firebase.database().ref('WebApp/Purchase/Driver');
 document.getElementById('driver').addEventListener('submit',submitForm);
 function submitForm(e){
 e.preventDefault();
 var vr=getElementVal4('vr');
 var dsn=getElementVal4('dsn');
 var dfn=getElementVal4('dfn');
 var dln=getElementVal4('dln');
 var da=getElementVal4('da');
 var dmn=getElementVal4('dmn');
 var gender=getElementVal4('gender');
 var ddob=getElementVal4('ddob');
 var dlsn=getElementVal4('dlsn');
 var dla=getElementVal4('dla');
 var dva=getElementVal4('dva');
 var license=getElementVal4('license');
 var vehicletype=getElementVal4('vehicletype');
 var drivertype=getElementVal4('drivertype');
 var alcohol=getElementVal4('alcohol');
 var past=getElementVal4('past'); 
save4(vr,dsn,dfn,dln,da,dmn,gender,ddob,dlsn,dla,dva,license,vehicletype,drivertype,alcohol,past);
 
console.log(vr,dsn,dfn,dln,da,dmn,gender,ddob,dlsn,dla,dva,license,vehicletype,drivertype,alcohol,past);
 };
 const save4= 
(vr,dsn,dfn,dln,da,dmn,gender,ddob,dlsn,dla,dva,license,vehicletype,drivertype,alcohol,past) =>{ 
 firebase.database().ref('WebApp/Purchase/Driver/' + vr).set({
 vr:vr,
 dsn:dsn,

 dfn:dfn,
 dln:dln,
 da:da,
 dmn:dmn,
 gender:gender,
 ddob:ddob,
 dlsn:dlsn,
 dla:dla,
 dva:dva,
 license:license,
 vehicletype:vehicletype,
 drivertype:drivertype,
 alcohol:alcohol,
 past:past
 });
 }; 
 const getElementVal4 = (id) =>{
 return document.getElementById(id).value;
 };