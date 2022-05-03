"use strict";
exports.__esModule = true;
function DiakInfo(nev, csoport, tipus) {
    if (tipus == true) {
        return nev + " [Team0" + csoport + "]Junior Frontend";
    }
    return nev + "[Team0" + csoport + "]Webprogramozó";
}
function szovegesErtekeles(jegy) {
    if (jegy == 5) {
        return ["Példás", "Példás"];
    }
    else if (jegy == 4) {
        return ["Jó", "Jó"];
    }
    else if (jegy == 3) {
        return ["Változó", "Változó"];
    }
    else if (jegy == 2) {
        return ["Hanyag", "Rossz"];
    }
    else {
        return ["Hibás érték", "Hibás érték"];
    }
}
;
function harommalOszthatokSzama(tomb) {
    var oszthatoSzamokMennyisege = 0;
    for (var i = 0; i < tomb.length; i++) {
        if (tomb[i] % 3 == 0) {
            oszthatoSzamokMennyisege++;
        }
    }
    return oszthatoSzamokMennyisege;
}
