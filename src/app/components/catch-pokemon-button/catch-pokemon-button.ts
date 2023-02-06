import { HttpErrorResponse } from '@angular/common/http';
import { Component, Input, OnInit } from '@angular/core';
import { Trainer } from 'src/app/models/trainer.model';
import { TrainerService } from 'src/app/services/trainer.service';
import { CatchPokemonService } from 'src/app/services/catchPokemon.service';

@Component({
  selector: 'app-catch-pokemon-button',
  templateUrl: './catch-pokemon-button.html',
  styleUrls: ['./catch-pokemon-button.css']
})
export class CatchPokemonButtonComponent implements OnInit {

  public loading: boolean = false;
  public isPokemonCaught: boolean = false;

  @Input() pokemonName: string = "";

  constructor(
    private trainerService: TrainerService,
    private readonly catchPokemonService: CatchPokemonService
  ) { }

  ngOnInit(): void {
    this.isPokemonCaught = this.trainerService.inCatchPokemon(this.pokemonName);
  }
  onCatchPokemonClick(): void {

    this.loading = true;
    this.catchPokemonService.addToCatchPokemons(this.pokemonName)
      .subscribe({
        next: (trainer: Trainer) => {
          this.loading = false;
          this, this.isPokemonCaught = this.trainerService.inCatchPokemon(this.pokemonName);
        },
        error: (error: HttpErrorResponse) => {
          console.log("ERROR", error.message)
        }
      })
  }
}
