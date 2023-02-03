import { HttpErrorResponse, HttpResponse } from '@angular/common/http';
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

  public isPokemonCaught: boolean = false;
  @Input() pokemonName: string="";

  get loading(): boolean{
    return this.favouriteService.loading;
  }

  constructor(
    private trainerService: TrainerService,
    private readonly favouriteService: FavouriteService
  ){}

  ngOnInit(): void {
    this.isPokemonCaught = this.trainerService.inCatchPokemon(this.pokemonName);
  }
  onFavouriteClick(): void{
    this.favouriteService.addToFavourites(this.pokemonName)
    .subscribe({
      next:(response: Trainer) => {
        console.log("NEXT", response)
      },
      error: (error: HttpErrorResponse) => {
        console.log("ERROR", error.message)
      }
    })
  }

}
