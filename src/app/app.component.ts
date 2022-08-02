import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'my component : tp-composant';
  hero= 'spiderman'

onLike() {
  window.alert(`I like ${this.hero}`);
  this.hero = 'Batman';
}
onBoolLike(event:Boolean) {
  alert(`I like ${this.hero} = ${event}`);
  this.hero = 'Spiderman';
}
}
