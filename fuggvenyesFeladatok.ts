export{};

//Téglalap kerület-terület eljárás
function TeglalapKeruletTerulet(a:number, b:number):void{
    let kerulet:number=2*(a+b);
    let terulet:number=a*b;
    document.write(`<br>A ${a},${b} oldalú téglalap kerülete: ${kerulet}`);
    document.write(`<br>A ${a},${b} oldalú téglalap területe: ${terulet}`);
}


//ParosE függvény
//Szám bemeneti paraméter
//Logikai értékkel kell visszatérnie
function ParosE(vizsgalandoSzam:number):boolean{
    if(vizsgalandoSzam%2==0){
        return true;
    }
    return false;  
}


//Prímszám generátor
//Határérték bemeneti paraméter(hatar1, hatar2)
//Egész szám értékkel térjen vissza, ami egy prímszám!
function PrimGenerator(hatarEgy:number,hatarKetto:number):number{
    let also:number;
    let felso:number;
    if (hatarEgy < hatarKetto) {
        also = hatarEgy;
        felso = hatarKetto;
    }
    else {
        also = hatarKetto;
        felso = hatarEgy;
    }
    let probalkozasokSzama:number=0;
    let sikeresGeneralas:boolean=false;
    let generaltSzam:number;
    do{
        generaltSzam=Math.round(Math.random()*(felso-also)+also);
        probalkozasokSzama++;
        let oszto:number=0;
        for(let i=1;i<=generaltSzam;i++)
        {
            if(generaltSzam%i==0){
                oszto++;
            }
        }
        if(oszto==2)
        {
            sikeresGeneralas=true;
        }
    }while(sikeresGeneralas==false && probalkozasokSzama<100)
    return generaltSzam;
}

//Szorgalmi
//Old meg a téglalap kerület terület függvényt Tuple típusú visszatérési értékkel!
