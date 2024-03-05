const testdb4=firebase.database().ref('WebApp/Claim/Driver');
 document.getElementById('driver').addEventListener('submit',submitForm);
 function submitForm(e){
 e.preventDefault();
 var vhr=getElementVal4('vhr');
 var dsn=getElementVal4('dsn');
 var dfn=getElementVal4('dfn');
 var dln=getElementVal4('dln');
 var da=getElementVal4('da');
 var dmn=getElementVal4('dmn');
 var ddob=getElementVal4('ddob');
 var dlsn=getElementVal4('dlsn');
 var license=getElementVal4('license');
 var vehicletype=getElementVal4('vehicletype');
 var drivertype=getElementVal4('drivertype');
 var alcohol=getElementVal4('alcohol');
 var past=getElementVal4('past');
 
 save4(vhr,dsn,dfn,dln,da,dmn,ddob,dlsn,license,vehicletype,drivertype,alcohol,past);
 console.log(vhr,dsn,dfn,dln,da,dmn,ddob,dlsn,license,vehicletype,drivertype,alcohol,past);
 };
 const save4= (vhr,dsn,dfn,dln,da,dmn,ddob,dlsn,license,vehicletype,drivertype,alcohol,past) =>{
 firebase.database().ref('WebApp/Claim/Driver/' + vhr).set({
 vhr:vhr,
 dsn:dsn,
 dfn:dfn,
 dln:dln,
 da:da,
 dmn:dmn,
 ddob:ddob,
 dlsn:dlsn,
 license:license,
 vehicletype:vehicletype,
 drivertype:drivertype,
 alcohol:alcohol,
 past:past
 });

 };
 const getElementVal4 = (id) =>{
 return document.getElementById(id).value};
