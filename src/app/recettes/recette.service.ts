import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import { Recette } from './recette';

@Injectable({
  providedIn: 'root'
})
export class RecetteService {
  private recettes : Recette[] = [
    {
      id : 'r1',
      title : 'Couscous Tunisien',
      imageUrl : 'https://static.750g.com/images/1200-630/4b4c2c9c149f4f59c4a914df44278d41/couscous-tunisien.jpeg',
      ingredients : ['viande', 'tomate', 'semoule', 'pomme de terre']
    },
    {
      id : 'r2',
      title : 'Salade Mechouia',
      imageUrl : 'https://cuisine.nessma.tv/uploads/1/2019-05/572fe1b4ada748f99d9e2b4617dd37b6.jpg',
      ingredients : ['tomate', 'piment', "huile d'olive", 'thon', 'oeuf']
    }
  ];

  listRecettesModifiee = new Subject<Recette[]>();

  constructor() { }

  getRecettes(){
    return [...this.recettes];
  }

  getRecetteById(id : string) : Recette{
    return {...this.recettes.find(
      r => r.id === id
    )} as Recette
  }

  deleteRecette(id : string){
    this.recettes = this.recettes.filter(
      r=>r.id!==id
    )
    this.listRecettesModifiee.next([...this.recettes]);
    console.log(this.recettes);
  }
}
