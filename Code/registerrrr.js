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
    const testdb=firebase.database().ref('WebApp/Purchase/Register');
    document.getElementById('register').addEventListener('submit',submitForm);
    function submitForm(e){
    e.preventDefault();
    var email=getElementVal('email');
    var vehiclenumber=getElementVal('vehiclenumber');
    var password=getElementVal('password');
    
    save(email,vehiclenumber,password);
    }
    const save= (email,vehiclenumber,password) =>{
    firebase.database().ref("WebApp/Purchase/Register/" + vehiclenumber).set({
    email:email,
    vehiclenumber:vehiclenumber,
    password:password
    
    });
    };
    const getElementVal = (id) =>{
    return document.getElementById(id).value;
   
    };