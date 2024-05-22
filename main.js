import JatekTer from "./JatekTer.js";



    /*
        ha a lepes szamlalo paros akkor X egyebkent O
        Ha kattintás esemény kiváltódik, akkor növeljűk az változó    
    */
    
   
   class Allapotkezelo{
    #JatekLISTA = [" ", " ", " ", " ", " ", " ", " ", " ", " "];
    #lepes = 0;
    constructor(){
        new JatekTer(this.#JatekLISTA)
        $(window).on("kattintasom",(event)=>{
            console.log(event.detail);
            let index = event.detail;
            if(this.#lepes%2===0){
                this.#JatekLISTA[index] = "X"
            } else {
                this.#JatekLISTA[index] = "O"
            }
            this.#lepes++;
            
            new JatekTer(this.#JatekLISTA);
        }) 
        
    }
}

new Allapotkezelo();

/*Feliratkozók a saját kattintásom eseményemre*/



