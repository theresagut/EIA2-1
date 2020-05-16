namespace Haushaltshilfe {
    window.addEventListener("load", handleLoad);

}

let totalCost:number=0;
let form:HTMLElement=<HTMLElement>document.querySelector("Auswahlbereich");
let selecteinkaufen:HTMLElement=<HTMLElement>document.querySelector("#selecteinkaufen");
let selectarbeit:HTMLElement=<HTMLElement>document.querySelector("selectarbeit");
let selectgeld:HTMLElement=<HTMLElement>document.querySelector("selectgeld");
