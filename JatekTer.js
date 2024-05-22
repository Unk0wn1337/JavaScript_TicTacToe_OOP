import  Elem  from "./elem.js";

export default class JatekTer {
  #jatekLISTA=[];
  constructor(jatekLISTA) {
    const szuloELEM = $(".jatekter");
    this.#jatekLISTA = jatekLISTA;
    szuloELEM.empty();
    for (let index = 0; index < this.#jatekLISTA.length; index++) {
      const elem = new Elem(index,this.#jatekLISTA[index], szuloELEM);
    }
  }
}
