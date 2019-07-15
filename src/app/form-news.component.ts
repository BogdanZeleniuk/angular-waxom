import { Component, OnInit  } from '@angular/core';

@Component({
  selector: 'news-comp',
  templateUrl: './form-news.component.html',
  styleUrls: ['./form-news.component.css']
})
export class NewsComponent implements OnInit{


	isOpen: boolean = false;
	toggle():void{
		this.isOpen = !this.isOpen;
	}

	ngOnInit(){}

}
