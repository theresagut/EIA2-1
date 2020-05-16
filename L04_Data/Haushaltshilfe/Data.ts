namespace Haushaltshilfe {
    export interface Item{
        name:string;
        price:number;
    }
    export interface Data{
        [category:string]: Item[];
    }
    export let data: Data= {
        einkauf:[
           { name: "Ananas | 1.99$", price:1.99},
           { name: "Baguette | 0.79", price:0.79},
           { name:"Gouda | 3.59", price:3.59},
           { name:"Bier | 1.19",price:1.19},
           { name:"Wurst | 1.29",price:1.29},
           { name: "Bananen | 2.99", price:2.99},
           { name:"Milch | 0.55",price:0.55} 
        ],
        
        Ort: [
            { name:"Aldi",price:0},
            { name:"Lidl",price:0},
            { name:"Edeka",price:0},
            { name:"Rewe",price:0},
            { name:"Netto",price:0}
        ],

        hilfe:[
            { name:"Putzen | 20$", price:20},
            { name:"Staubsaugen | 15$",price:15},
            { name:"Wischen | 5$",price:5},
            { name:"Rasen mähen | 17$",price:17}
        ],

        bezahlung:[
            { name:"Bar",price:0},
            { name:"PayPal",price:0},
            { name:"Lastschirft",price:0}
        ]
    };
}