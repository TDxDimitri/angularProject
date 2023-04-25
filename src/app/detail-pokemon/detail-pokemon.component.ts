import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { POKEMONS } from '../mock-pokemon-list';
import { Pokemon } from '../pokemon';
@Component({
  selector: 'app-detail-pokemon',
  templateUrl: './detail-pokemon.component.html',
  styles: [
  ]
})
export class DetailPokemonComponent implements OnInit {

  pokemonList: Pokemon[];

  constructor(private route: ActivatedRoute) {}

  ngOnInit() {
    this.pokemonList = POKEMONS;
    const pokemonId: string|null = this.route.snapshot.paramMap.get('id')
    if(pokemonId) {
    const pokemon: Pokemon|undefined = this.pokemonList.find(pokemon => pokemon.id == +pokemonId)
    }
  }

}
