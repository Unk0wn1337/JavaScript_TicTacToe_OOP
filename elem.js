export default class Elem {
  #ertek = "";
  #szuloELEM;
  #divELEM;
  #index = 0;
  constructor(index, ertek, szuloELEM) {
    /*Adattagok beallitva*/
    this.#index = index;
    this.#ertek = ertek;
    this.#szuloELEM = szuloELEM;
    this.#megjelenit();
    /*Eseménykezelő konstruktorba írjuk
            a div elemet megkell fogni
        */
    this.#divELEM = this.#szuloELEM.children("div:last-child");
    console.log(this.#divELEM);
    this.#divELEM.on("click", () => {
      /*Nyíl függvény esetén, a konrkét objektum példányra mutat!*/
      //console.log(this.#index);
      /*Csak akkor tudjunk kattintani, ha nincsen benne érték*/
      if(this.#ertek === " "){
          this.#trigger("kattintasom");
      } 
    });
  }


  #megjelenit() {
    /*elkészítjűk a html kódot*/
    let txt = `<div class="elem">
                        <p>${this.#ertek}</p>
                    </div>
                   `;
    this.#szuloELEM.append(txt);
  }
  #trigger(esemenyNev){
    // létrehozok egy új saját eseményt
    const e = new CustomEvent(esemenyNev,{detail:this.#index})
    // az eseményt elérhetőve teszem az egész programban
    window.dispatchEvent(e);
  }

}
