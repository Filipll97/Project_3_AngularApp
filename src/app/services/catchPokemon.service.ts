import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, tap } from 'rxjs';
import { PokemonCatalogueService } from './pokemon-catalogue.service';
import { TrainerService } from './trainer.service';
import { environment } from 'src/environments/environment';
import { Pokemon } from '../models/pokemon.model';
import { Trainer } from '../models/trainer.model';

const {apiKey, apiTrainers} = environment;

@Injectable({
  providedIn: 'root'
})
export class CatchPokemonService {

  constructor(
    private http: HttpClient,
    private readonly pokemonService: PokemonCatalogueService,
    private readonly trainerService: TrainerService,
  ) { }

  public addToCatchPokemons(pokemonName: string): Observable<Trainer> {
    
    if(!this.trainerService.trainer){
      throw new Error("addToCatchPokemons: There is no trainer");
      
    }
    const trainer: Trainer = this.trainerService.trainer;
    const pokemon: Pokemon | undefined = this.pokemonService.pokemonByName(pokemonName);

    if(!pokemon){
      throw new Error("No pokemon with name: " + pokemonName);
    }

    if(this.trainerService.inCatchPokemon(pokemonName)) {
      this.trainerService.removeFromCatchPokemons(pokemonName);
    } else {
       this.trainerService.addToCatchPokemons(pokemon)
    }

    const headers = new HttpHeaders({
      'content-type': 'application/json',
      'x-api-key': apiKey
    }) 

    return this.http.patch<Trainer>(`${apiTrainers}/${trainer.id}`,{
      pokemon: [...trainer.pokemon]
    },{ headers })
    .pipe(
      tap((updatedTrainer: Trainer) => {
        this.trainerService.trainer = updatedTrainer;
      }),
    )
  }
}
