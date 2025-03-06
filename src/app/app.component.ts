import { Component } from '@angular/core';
import { RouterLink, RouterOutlet } from '@angular/router'
import { GenerationsComponent } from './generations/generations.component';
import { PokemonsComponent } from './pokemons/pokemons.component';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, GenerationsComponent, PokemonsComponent, RouterLink],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'tp';
}
