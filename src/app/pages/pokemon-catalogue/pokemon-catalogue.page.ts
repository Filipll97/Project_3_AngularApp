import { Component, OnInit } from '@angular/core';
import { Pokemon } from 'src/app/models/pokemon.model';
import { PokemonCatalogueService } from 'src/app/services/pokemon-catalogue.service';

@Component({
  selector: 'app-pokemon-catalogue',
  templateUrl: './pokemon-catalogue.page.html',
  styleUrls: ['./pokemon-catalogue.page.css']
})
export class PokemonCataloguePage implements OnInit{

  get pokemons(): Pokemon[] {
    return this.PokemonCatalogueServices.pokemons;
  }
 
  get loading(): boolean {
    return this.PokemonCatalogueServices.loading;
  }

  get error(): string {
    return this.PokemonCatalogueServices.error;
  } 

  constructor(private readonly PokemonCatalogueServices: PokemonCatalogueService) {  }

  ngOnInit(): void {
    this.PokemonCatalogueServices.fetchAllPokemons();
  }
}
