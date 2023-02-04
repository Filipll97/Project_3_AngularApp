import { HttpErrorResponse } from '@angular/common/http';
import { Component, Input, OnInit } from '@angular/core';
import { Trainer } from 'src/app/models/trainer.model';
import { FavouriteService } from 'src/app/services/favourite.service';
import { TrainerService } from 'src/app/services/trainer.service';

@Component({
  selector: 'app-favourite-button',
  templateUrl: './favourite-button.component.html',
  styleUrls: ['./favourite-button.component.css']
})
export class FavouriteButtonComponent  implements OnInit{

  public loading: boolean = false;

  public isPokemonCaught: boolean = false;
  @Input() pokemonName: string="";

  constructor(
    private trainerService: TrainerService,
    private readonly favouriteService: FavouriteService
  ){}

  ngOnInit(): void {
    this.isPokemonCaught = this.trainerService.inCatchPokemon(this.pokemonName);
  }
  onFavouriteClick(): void{

    this.loading = true;

    this.favouriteService.addToFavourites(this.pokemonName)
    .subscribe({
      next:(trainer: Trainer) => {
        this.loading = false;
        this,this.isPokemonCaught = this.trainerService.inCatchPokemon(this.pokemonName);
      },
      error: (error: HttpErrorResponse) => {
        console.log("ERROR", error.message)
      }
    })
  }

}
