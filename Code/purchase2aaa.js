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
    const testdb3=firebase.database().ref('WebApp/Purchase/Vehicle');
    document.getElementById('vehicle').addEventListener('submit',submitForm);
    function submitForm(e){
    e.preventDefault();
    var vehiclenumber=getElementVal3('vehiclenumber');
    var rn=getElementVal3('rn');
    var dor=getElementVal3('dor');
    var dovp=getElementVal3('dovp');
    var cn=getElementVal3('cn');
    var en=getElementVal3('en');
    var make=getElementVal3('make');
    var model=getElementVal3('model');
    var nf=getElementVal3('nf');
    var classv=getElementVal3('classv');
    var gas=getElementVal3('gas');
    var antitheft=getElementVal3('antitheft');
    
    save3(vehiclenumber,rn,dor,dovp,cn,en,make,model,nf,classv,gas,antitheft);
    myfunction5(vehiclenumber);
    console.log(vehiclenumber,rn,dor,dovp,cn,en,make,model,nf,classv,gas,antitheft);
    };
    const save3= (vehiclenumber,rn,dor,dovp,cn,en,make,model,nf,classv,gas,antitheft) =>{
    
    firebase.database().ref('WebApp/Purchase/Vehicle/'+ vehiclenumber).set({
    vehiclenumber:vehiclenumber,
   
    rn:rn,
    dor:dor,
    dovp:dovp,
    cn:cn,
    en:en,
    make:make,
    model:model,
    nf:nf,
    classv:classv,
    gas:gas,
    antitheft:antitheft
    });
    };
    
    const getElementVal3 = (id) =>{
    return document.getElementById(id).value;
    };
    const myfunction5=(vehiclenumber)=>{
    vehiclenumber:vehiclenumber,
    
    firebase.database().ref('WebApp/Purchase/Vehicle').on("value" , function(snapshot){
    snapshot.forEach(function(childSnapshot){
    var a = childSnapshot.val();
    var un = a["vehiclenumber"];
    var c = a["model"];
    
    if(un == vehiclenumber)
    {
    if(c >= 2020)
    {
    premium = 1000;
    console.log(premium); 
    }
    else if(c >= 2017){
    premium = 5000;
    console.log(premium); 
    }
    else if(c >= 2014){
    premium = 8000;
    console.log(premium); 
    }
    else if(c >= 2011){
    premium = 12000;
    console.log(premium); 
    }
    else if(c >= 2007){
    premium = 18000;
    console.log(premium); 
    }
   
    else{
    premium = 25000;
    console.log(premium); 
    }
    saveee2(vehiclenumber,premium);
    }
    
    });
    });
    }
    const saveee2= (vehiclenumber,premium) =>{ 
    firebase.database().ref('WebApp/Purchase/Premium/' + vehiclenumber).set({
    vehiclenumber: vehiclenumber,
    premium : premium,
    });
};