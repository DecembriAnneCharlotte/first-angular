import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CreaCatService {

  constructor() { }

  // catDetails

  catDetails = [
    {
      id:1,
      catName:"Peinture",
      catDetails:"Choisisez ce que vous voulez voir apparaitre sur votre peinture. Support au choix, toile ou plaque en bois.",
      catImg:"../../../assets/img/1686514756300.jpg"
    },
    {
      id:2,
      catName:"Batôn de marche",
      catDetails:"Choisisez le style de gravure et les accessoires: pierres incrustée, cuire, plumes, perles, etc...",
      catImg:"../../../assets/img/baton.png"
    },
    {
      id:3,
      catName:"Bijoux en pâte Fimo",
      catDetails:"Choisisez le bijoux que vous voulez, pendentif, bracelet, boucles d'oreilles, porte clés, etc... Imaginez la decoration qui vous fait envie.",
      catImg:"../../../assets/img/1686515338377.jpg"
    },
    {
      id:4,
      catName:"Décoration avec pâte Fimo",
      catDetails:"Choisisez un objet que vous souhaiteriez voir customiser et faite nous part de la décoration que vous souhaitez voire dessus.",
      catImg:"../../../assets/img/objet.png"
    },
    {
      id:5,
      catName:"Galet peint",
      catDetails:"Choisisez le motif que vous voulez voir apparaitre sur votre galet.",
      catImg:"../../../assets/img/1686515758497.jpg"
    },
    {
      id:6,
      catName:"Broderie",
      catDetails:"Choisisez un support et communiquez nous le motif que vous voulez voir apparaitre dessus.",
      catImg:"../../../assets/img/1686515143319.jpg"
    }
  ]

}
