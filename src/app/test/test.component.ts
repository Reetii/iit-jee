import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'pp-test',
  templateUrl: './test.component.html',
  styleUrls: ['./test.component.scss']
})
export class TestComponent implements OnInit {

  constructor() { document.addEventListener('contextmenu', event => event.preventDefault()); }

  ngOnInit() {
  }

}