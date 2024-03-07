const passbox=document.getElementById("passwordd");
const length=10;
const upp="ABCDEFGHIJKLMNOPQRSTUVWXYZ";
const low="abcdefghijklmnopqrstuvwxyz";
const num="0123456789";
const sym="!@#$%^&*()-_=+[]{};:',.<>/?";
const allchars=upp+low+num+sym;

function crt()
{
    let password="";

    password+=upp[Math.floor(Math.random() * upp.length)];
    password+=low[Math.floor(Math.random() * low.length)];
    password+=num[Math.floor(Math.random() * num.length)];
    password+=sym[Math.floor(Math.random() * sym.length)];

    while(length>=password.length)
    {
        password+=allchars[Math.floor(Math.random() * allchars.length)];
    }
    console.log(password); // Log the generated password to check its value
    console.log(passbox); 

    passbox.value=password;

}
