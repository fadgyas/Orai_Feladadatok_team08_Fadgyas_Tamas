export { };

function DiakInfo(nev: string, csoport: number, tipus: boolean): string {
    if (tipus == true) {
        return nev + " [Team0" + csoport + "]Junior Frontend";
    }
    return nev + "[Team0" + csoport + "]Webprogramozó";
}

function szovegesErtekeles(jegy: number): [string, string] {
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
};

function harommalOszthatokSzama(tomb: Array<number>): number {
    let oszthatoSzamokMennyisege: number = 0;
    for (let i = 0; i < tomb.length; i++) {
        if (tomb[i] % 3 == 0) {
            oszthatoSzamokMennyisege++;
        }
    }
    return oszthatoSzamokMennyisege;
}