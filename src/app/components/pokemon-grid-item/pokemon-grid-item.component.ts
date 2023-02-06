import { Component, Input } from '@angular/core';
import { Pokemon } from 'src/app/models/pokemon.model';

@Component({
  selector: 'app-pokemon-grid-item',
  templateUrl: './pokemon-grid-item.component.html',
  styleUrls: ['./pokemon-grid-item.component.css']
})
export class PokemonGridItemComponent {

  @Input() pokemon?: Pokemon;

  constructor() { }

  pokemonUrl = this.pokemon?.url
}
