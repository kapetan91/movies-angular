import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router'
@Component({
  selector: 'app-search-input',
  templateUrl: './search-input.component.html',
  styleUrls: ['./search-input.component.css']
})
export class SearchInputComponent implements OnInit {

	private searchTerm: string;
	
  constructor(private router: Router) { }

  ngOnInit() {
  }

  search() {
    this.router.navigate(['search/'+ this.searchTerm]);
  }
  
}
