import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-favourite-button',
  templateUrl: './favourite-button.component.html',
  styleUrls: ['./favourite-button.component.css']
})
export class FavouriteButtonComponent {
  @Input() pokemonName: string="";

  constructor(){}

  onFavouriteClick(): void{
    alert("Click the favourite: " + this.pokemonName);
  }

}
