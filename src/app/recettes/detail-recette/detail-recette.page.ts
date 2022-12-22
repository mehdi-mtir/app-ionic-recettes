import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { AlertController } from '@ionic/angular';
import { Recette } from '../recette';
import { RecetteService } from '../recette.service';

@Component({
  selector: 'app-detail-recette',
  templateUrl: './detail-recette.page.html',
  styleUrls: ['./detail-recette.page.scss'],
})
export class DetailRecettePage implements OnInit {
  recetteActive : Recette = {} as Recette

  constructor(private recetteService : RecetteService,
    private activatedRoute : ActivatedRoute,
    private alertCtrl : AlertController,
    private router : Router) { }

  deleteRecette(){
    this.alertCtrl.create(
      {
        header : "Suppression d'une recette ",
        message : "Êtes-vous sûre de vouloir supprimer la recette?",
        buttons : [
          {
            text : "Annuler",
            role : "cancel"
          },
          {
            text : "Supprimer",
            handler : ()=>{
              this.recetteService.deleteRecette(this.recetteActive.id);
              this.router.navigate(["/recettes"]);
            }
          }
        ]
      }
    ).then(alertEl => {
      alertEl.present();
    })
  }

  ngOnInit() {
    this.activatedRoute.params.subscribe(
      params => {
        this.recetteActive = this.recetteService.getRecetteById(params['id']);
      }
    )
  }

}
