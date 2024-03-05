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
    const testdb=firebase.database().ref('WebApp/Purchase/OwnerPersonal');
    document.getElementById('personal').addEventListener('submit',submitForm); 
    function submitForm(e){
    e.preventDefault(); 
    var vehiclenumber=getElementVal('vehiclenumber');
    // var policyno=getElementVal('policyno'); 
    var coverno=getElementVal('coverno');
    var policyfrom=getElementVal('policyfrom');
    // var policytill=getElementVal('policytill');
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
    var policyno = pincode + 56;
    var state=getElementVal('state'); 
   save(vehiclenumber,policyno,coverno,policyfrom,fulllast,fullfirst,fullmiddle,gender,buildingname,streetname,landmark,city,taluka,district,pincode,state);
    myfunction(vehiclenumber); 
   console.log(vehiclenumber,policyno,coverno,policyfrom,fulllast,fullfirst,gender,fullmiddle,buildingname,streetname,landmark,city,taluka,district,pincode,state);
    alert("policy No: "+ policyno);
    };
   const save= 
   (vehiclenumber,policyno,coverno,policyfrom,fulllast,fullfirst,fullmiddle,gender,buildingname,streetname,landmark,city,taluka,district,pincode,state) =>{ 
    firebase.database().ref('WebApp/Purchase/OwnerPersonal/' + vehiclenumber).set({
    vehiclenumber:vehiclenumber,
    policyno:policyno,
   
    coverno:coverno,
    policyfrom:policyfrom,
    // policytill:policytill,
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
    state:state,
    });
   };
   const getElementVal = (id) =>{
    return document.getElementById(id).value;
   };
   const myfunction=(vehiclenumber)=>{
    vehiclenumber:vehiclenumber,
    firebase.database().ref('WebApp/Purchase/OwnerPersonal').on("value" , function(snapshot){
    snapshot.forEach(function(childSnapshot){
    var a = childSnapshot.val();
    var un = a["vehiclenumber"];
    var pf = a["policyfrom"];
    var pt = 0;
    var splitString = "";
    var joinArray ;
    var reverseArray= "";
    var a,b,d;
    var d1,d2,d3;
    var m = "-";
    var datetill2 = ""
    //var em2="tejramane11@gmail.com";
    
    if(un == vehiclenumber){
    a = parseInt(pf);
    b= a + 1;
    splitString = pf.split("-");
    reverseArray = splitString.reverse();
    joinArray = reverseArray.join("-");
    c =joinArray.substring(3, 5);
    d= parseInt(joinArray);
    a = d + 1;
    d1 = d.toString();
    d2 = c;
    d3 = b;
   
    datetill2 = d1 + m + d2 + m + d3;
    datetill3 = datetill2.split("-");
    
    datetill4 = datetill3.reverse();
    datetill=datetill4.join("-");
    console.log(datetill);
    savee2(datetill,vehiclenumber);
    }
    });
    });
   }
   const savee2= (datetill,vehiclenumber) =>{
    firebase.database().ref('WebApp/Purchase/Datetill/' + vehiclenumber).set({
    datetill : datetill,
    });
   };