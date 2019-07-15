import { Component, AfterViewInit, ViewChild, 
	OnInit, ElementRef, Renderer2, HostListener } from '@angular/core';
import { LogService } from './log.service';

@Component({
  selector: 'projects-component',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.css'],
  providers: [LogService]
})
export class ProjectsComponent implements AfterViewInit, OnInit{

	lupa:any;
	link:any;
	listOfElements: any[];
	isLupaClicked: boolean = false;
	isLinkClicked: boolean = false;

	@ViewChild('lupa', {static:true}) private lupaElem: ElementRef;
	@ViewChild('link', {static:true}) private linkElem: ElementRef;

	constructor(private renderer: Renderer2, private pictureRef: ElementRef, private logger: LogService) {}

	ngAfterViewInit(){
	    this.listOfElements = this.pictureRef.nativeElement.querySelectorAll('.picture');
	}

	ngOnInit(){
		this.lupa = this.lupaElem.nativeElement;
	    this.link = this.linkElem.nativeElement;
	}

	@HostListener('document:mouseover', ['$event.target'])
	onMouseOver() {
		this.logger.info("onMouseOver() method in ProjectsComponent");
		for(let element of this.listOfElements){
 		const isPictureElement = element.contains(event.target);
 			if(isPictureElement){
 				this.renderer.addClass(element.children[1], 'lupa_active');
 				this.renderer.addClass(element.children[2], 'link_active');
 				if(!element.children[0].classList.contains('big_img')){
 					this.renderer.setStyle(element.children[0], 'filter', 'brightness(40%)');
 				}
 			}
 		}	
	}
	@HostListener('document:mouseout', ['$event.target'])
	onMouseOut() {
		this.logger.info("onMouseOut() method in ProjectsComponent");
		for(let element of this.listOfElements){
 		const isPictureElement = element.contains(event.target);
 			if(isPictureElement){
 				this.renderer.removeClass(element.children[1], 'lupa_active');
 				this.renderer.removeClass(element.children[2], 'link_active');
 				this.renderer.setStyle(element.children[0], 'filter', 'brightness(100%)');
 			}
 		}	
	}

	onLupaClick(event) {

		this.logger.info("onLupaClick() method in ProjectsComponent");
		for(let element of this.listOfElements){
 		const isLupaElement = element.contains(event.target);
 			if(isLupaElement){
 				if(this.isLupaClicked == false){
 					this.renderer.addClass(element.children[0], 'big_img');
 					this.isLupaClicked = true;
 				}
 				else{
 					this.renderer.removeClass(element.children[0], 'big_img');
 					this.isLupaClicked = false;
 				}
 				this.renderer.setStyle(element.children[0], 'filter', 'brightness(100%)');
 			}
 		}	
	}
	
	onLinkClick(event) {
		
		this.logger.info("onLinkClick() method in ProjectsComponent");
		for(let element of this.listOfElements){
 		const isLinkElement = element.contains(event.target);
 			if(isLinkElement){
 					let confirmPage = confirm('You realy wanna link to ' + 'https://learn.javascript.ru' + ' ?');
 					if (!confirmPage) {
						return false;
					}
 					document.location.href = 'https://learn.javascript.ru';
					this.renderer.setStyle(element.children[0], 'filter', 'brightness(100%)');	
 			}
 		}	
	}
}