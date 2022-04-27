//Tuple
var tupleMinta;
tupleMinta = ["Kis József", 22];
console.log(tupleMinta[0]);
var kerTerFeladat;
kerTerFeladat = [22, 30];
//Enum
var fizetesTipusok;
(function (fizetesTipusok) {
    fizetesTipusok[fizetesTipusok["juniorFrontEnd"] = 450000] = "juniorFrontEnd";
    fizetesTipusok[fizetesTipusok["juniorBackEnd"] = 500000] = "juniorBackEnd";
    fizetesTipusok[fizetesTipusok["juniorFullStack"] = 600000] = "juniorFullStack";
    fizetesTipusok[fizetesTipusok["seniorFronEnd"] = 900000] = "seniorFronEnd";
    fizetesTipusok[fizetesTipusok["seniorBackEnd"] = 1000000] = "seniorBackEnd";
    fizetesTipusok[fizetesTipusok["seniorFullStack"] = 120000] = "seniorFullStack";
})(fizetesTipusok || (fizetesTipusok = {}));
var jozsiFizetes = fizetesTipusok.juniorFrontEnd;
console.log(jozsiFizetes);
var interfaceObjektum = { nev: "Kis József", eletkor: 22, aktiv: true };
console.log(interfaceObjektum.nev);
console.log(interfaceObjektum.eletkor);
console.log(interfaceObjektum.aktiv);
