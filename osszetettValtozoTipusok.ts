//Tuple
var tupleMinta:[string, number];
tupleMinta=["Kis József", 22];



console.log(tupleMinta[0]);


var kerTerFeladat:[number, number];
kerTerFeladat=[22,30];

//Enum
enum fizetesTipusok{
    juniorFrontEnd=450000, 
    juniorBackEnd=500000, 
    juniorFullStack=600000, 
    seniorFronEnd=900000,
    seniorBackEnd=1000000,
    seniorFullStack=120000
}
var jozsiFizetes:fizetesTipusok=fizetesTipusok.juniorFrontEnd;
console.log(jozsiFizetes);

//Interface
interface Dolgozo{
    nev:string;
    eletkor:number;
    aktiv:boolean;
}
var interfaceObjektum:Dolgozo={nev:"Kis József", eletkor:22, aktiv:true}
console.log(interfaceObjektum.nev);
console.log(interfaceObjektum.eletkor);
console.log(interfaceObjektum.aktiv);