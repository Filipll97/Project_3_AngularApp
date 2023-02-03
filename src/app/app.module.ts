import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { HttpClientModule } from '@angular/common/http'

import { AppComponent } from './app.component';
import { LoginFormComponent } from './components/login-form/login-form.component';

import { LoginPage } from './pages/login/login.page';
import { TrainerPage } from './pages/trainer/trainer.page';
import { PokemonCataloguePage } from './pages/pokemon-catalogue/pokemon-catalogue.page';
import { FormsModule } from '@angular/forms';
import { PokemonGridComponent } from './components/pokemon-grid/pokemon-grid.component';
import { PokemonGridItemComponent } from './components/pokemon-grid-item/pokemon-grid-item.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { FavouriteButtonComponent } from './components/favourite-button/favourite-button.component';
import { FavouritePokemonComponent } from './components/favourite-pokemon/favourite-pokemon.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginPage,
    PokemonCataloguePage,
    TrainerPage,
    LoginFormComponent,
    PokemonGridComponent,
    PokemonGridItemComponent,
    NavbarComponent,
    FavouriteButtonComponent,
    FavouritePokemonComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
