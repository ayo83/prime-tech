import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-grid-one',
  templateUrl: './grid-one.component.html',
  styleUrls: ['./grid-one.component.scss']
})
export class GridOneComponent implements OnInit {
  localData = [
    { Name:'John', Age: 29 },
    { Name:'Alice', Age: 27 },
    { Name:'Jessica', Age: 31 },
  ];

  title = 'My Ignite UI project';
  constructor() { }

  ngOnInit() {
  }

}
