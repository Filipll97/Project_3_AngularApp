import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { finalize } from 'rxjs';
import { environment } from 'src/environments/environment';
import { StorageKeys } from '../enums/storage-keys.enum';
import { Pokemon } from '../models/pokemon.model';
import { StorageUtil } from '../utils/storage.util';

const { apiPokemons } = environment

@Injectable({
  providedIn: 'root'
})
export class PokemonCatalogueService {

  private _pokemons: Pokemon[] = [];
  private _error: string = "";
  private _loading: boolean = false;

  get pokemons(): Pokemon[] {
    return this._pokemons;
  }

  get error(): string {
    return this._error;
  }

  get loading(): boolean {
    return this._loading;
  }

  constructor(private readonly http: HttpClient) { }

  public fetchAllPokemons(): void {

    if (this._pokemons.length > 0 || this.loading) {
      return;
    }

    if (StorageUtil.storageRead(StorageKeys.pokemonCatalogue) !== undefined) {
      this.fetchPokemonsFromSessionStorage();
      return;
    }

    this._loading = true;
    this.http.get<Pokemon[]>(apiPokemons)
      .pipe(
        finalize(() => {
          this._loading = false;
        })
      ).subscribe({
        next: (pokemons: any) => {
          this._pokemons = pokemons.results;
          StorageUtil.storageSave(StorageKeys.pokemonCatalogue, pokemons.results)
        },
        error: (error: HttpErrorResponse) => {
          this._error = error.message;
        }
      })
  }

  public pokemonByName(name: string): Pokemon | undefined {
    return this._pokemons.find((pokemon: Pokemon) => pokemon.name === name);
  }

  private fetchPokemonsFromSessionStorage() {
    return this._pokemons = StorageUtil.storageRead<any>(StorageKeys.pokemonCatalogue);
  }
}
