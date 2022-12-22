import { Component, OnDestroy, OnInit } from '@angular/core';
import { Recette } from './recette';
import { RecetteService } from './recette.service';

@Component({
  selector: 'app-recettes',
  templateUrl: './recettes.page.html',
  styleUrls: ['./recettes.page.scss'],
})
export class RecettesPage implements OnInit, OnDestroy {
  recettes : Recette[] = [];

  constructor(private recetteService : RecetteService) { }

  ngOnInit() {
    this.recetteService.listRecettesModifiee.subscribe(
      listRecettesModifiee => this.recettes = listRecettesModifiee
    )
    this.recettes = this.recetteService.getRecettes();
  }

  ngOnDestroy(){
    this.recetteService.listRecettesModifiee.unsubscribe();
  }

}
