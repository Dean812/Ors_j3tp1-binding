import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-hero',
  templateUrl: './hero.component.html',
  styleUrls: ['./hero.component.css']
})
export class HeroComponent implements OnInit {

  @Input() name= "default";
  @Output() liked = new EventEmitter();// 
  constructor() { }

  ngOnInit(): void {
  }

}
