import {Component, OnInit, Output, EventEmitter} from '@angular/core';
import {Router} from "@angular/router";

@Component({
  selector: 'app-search-result-page',
  templateUrl: './search-result-page.component.html',
  styleUrls: ['./search-result-page.component.scss']
})
export class SearchResultPageComponent implements OnInit {

  constructor(private router: Router) { }
  @Output() homeEvent = new EventEmitter<boolean>();
  ngOnInit(): void {
  }

  home(){
    this.homeEvent.emit(true);
  }
}
