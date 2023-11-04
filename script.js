
const imtahanneticesi=function(a,b){
    let d=a+b;
    if (b<17 || d<51){
        return "telebe kesildi";
}
    
    else if(d>=51 && d<=60){
        return "E";
    }
    else if (d>=61 && d<=70)
    {
        return "D";
    }
    else if (d>=71 && d<=80)
    {
        return "c";
    }
    else if (d>=81 && d<=90)
    {
        return "b";
    }
    else if (d>=91 && d<=100)
    {
        return "A";
    }
    else {
        return "telebenin ballarini duzgun daxil edin"
    }

}
console.log(imtahanneticesi(34,17));