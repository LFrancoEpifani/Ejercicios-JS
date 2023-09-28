const azar = () =>{
    const number =  Math.round(Math.random());
    if(number == 0){
        return "Cruz " + number;
    }else{
        return "Cara " + number;
    }
}

console.log(azar());