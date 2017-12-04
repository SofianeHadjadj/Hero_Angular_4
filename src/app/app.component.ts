import { Component } from '@angular/core';
import { Hero } from 'hero-detail/hero';

const HEROES: Hero[] = [
  { id: 1, name: 'Wolverine' },
  { id: 2, name: 'Hulk' },
  { id: 3, name: 'Spiderman' },
  { id: 4, name: 'Magneto' },
  { id: 5, name: 'Iron Fist' },
  { id: 6, name: 'Groot' },
  { id: 7, name: 'Thor' },
  { id: 8, name: 'Dr Strange' },
  { id: 9, name: 'Gambit' },
  { id: 10, name: 'Deadpool' }
];

@Component({
  selector: 'my-app',
  template: `
  		<h1>{{title}}</h1>
  		<h2> My Heroes</h2>
  		<ul class="heroes">
			<li *ngFor="let hero of heroes" [class.selected]="hero === selectedHero" (click)="onSelect(hero)">
				<span class="badge">{{hero.id}}</span> {{hero.name}}
			</li>
  		</ul>
  		<!--<div *ngIf="selectedHero">
	  		<h2>{{selectedHero.name}} details!</h2>
			<div><label>id: </label>{{selectedHero.id}}</div>
			<div>
			    <label>name: </label>
			    <input [(ngModel)]="selectedHero.name" placeholder="name"/>
			</div>
		</div>-->
		<hero-detail [hero]="selectedHero"></hero-detail>
  		`,
  styles: [`
  .selected {
    background-color: #CFD8DC !important;
    color: white;
  }
  .heroes {
    margin: 0 0 2em 0;
    list-style-type: none;
    padding: 0;
    width: 15em;
  }
  .heroes li {
    cursor: pointer;
    position: relative;
    left: 0;
    background-color: #EEE;
    margin: .5em;
    padding: .3em 0;
    height: 1.6em;
    border-radius: 2px;
  }
  .heroes li.selected:hover {
    background-color: #BBD8DC !important;
    color: white;
  }
  .heroes li:hover {
    color: #607D8B;
    background-color: #DDD;
    left: .1em;
  }
  .heroes .text {
    position: relative;
    top: -3px;
  }
  .heroes .badge {
    display: inline-block;
    font-size: small;
    color: white;
    padding: 0.8em 0.7em 0 0.7em;
    background-color: #607D8B;
    line-height: 1em;
    position: relative;
    left: -1px;
    top: -4px;
    height: 1.8em;
    margin-right: .8em;
    border-radius: 2px 0 0 2px;
  }
`]
})

export class AppComponent  { 
	//name = 'Angular'; 
	title = 'Tour of Heroes';
	heroes = HEROES;
	selectedHero : Hero;

	onSelect(hero: Hero): void {
		this.selectedHero = hero;
	}
}
