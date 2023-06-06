const password = '12345';
const validPassword = '123456'
var retry = 0;

if(password==validPassword){
    console.log("selamat datang bos");
}
else{
    console.log("password salah, coba lagi.");
}

if(password==validPassword){
    console.log("selamat datang bos");
    retry = retry++;
}
else if(retry<3){
    console.log("ulangi");
}
else{
    console.log("batas pengisian");
}