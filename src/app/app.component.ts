import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  template:`<h1>Welcome to {{pokemons[1]}}!</h1>`

})
export class AppComponent implements OnInit {
  pokemons = ['Bulbizarre', 'Salamèche', 'Carapuce'];
  ngOnInit() {
    console.table()
    
  }
}
