namespace L06_Houshold{
    export interface Item {
        name:string;
        price:number;
    }

    export interface Data {
        [category:string]: Item[];
    }
    export interface Element {
        name:string;
    }
    export interface Detail{
        [product:string]:Element[];
    }
}