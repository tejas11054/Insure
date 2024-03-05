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
    const testdb13=firebase.database().ref('WebApp/Purchase/Bank');
    document.getElementById('bank').addEventListener('submit',submitForm);
    function submitForm(e){
    e.preventDefault();
    var vn=getElementVal13('vn');
    var bn=getElementVal13('cnm');
    var cn =getElementVal13('cn');
    var cvv=getElementVal13('cvv');
    var otp=getElementVal13('otp');
    myfunction(vn);
    save13(vn,bn,cn,cvv,otp);
    console.log(vn,bn,cn,cvv,otp);
    };
    const save13= (vn,bn,cn,cvv,otp) =>{
    
    firebase.database().ref('WebApp/Purchase/Bank/' + vn).set({
   
    vn:vn,
    bn:bn,
    cn:cn,
    cvv:cvv,
    premium:otp
    });
    };
    
    const getElementVal13 = (id) =>{
    return document.getElementById(id).value;
    };
    const myfunction=(vn)=>{
    vn :vn;
    firebase.database().ref('WebApp/Purchase/Register').on("value" , function(snapshot){
    snapshot.forEach(function(childSnapshot){
    var a = childSnapshot.val();
    var un = a["vehiclenumber"];
    var em = a["email"];
    //var em2="tejramane11@gmail.com";
    
    if(un == vn){
    Email.send({
    Host: "smtp.google.com",
    Username: "treramane@gmail.com ",
    Password: "129@Tejas",
    To: em,
    From: "treramane@gmail.com ",
    Subject: un,
    Body: "Dear Client, You have successfully purchased the insurance from Insure policies. All the details that you have filled will be kept confidential. For checking your profile you can just visit our Insure Application. Thank You!!",
    }).then(
    message => alert("Check your gmail spam")
    );
    }
    });
    });
   }