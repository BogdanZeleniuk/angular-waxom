import { Component, HostListener, ElementRef, OnInit, Renderer2, ViewChild } from '@angular/core';
import { LogService } from './log.service';

@Component({
  selector: 'browser-pict-comp',
  templateUrl: './browser-pict.component.html',
  styleUrls: ['./browser-pict.component.css'],
  providers: [LogService]
})
export class BrowserPictComponent implements OnInit{
	leftPicture: any;
	centerPicture: any;
	rightPicture: any;

	@ViewChild('browser_left', {static:true}) private leftElement: ElementRef;
	@ViewChild('browser_center', {static:true}) private centerElement: ElementRef;
	@ViewChild('browser_right', {static:true}) private rightElement: ElementRef;

	constructor(private renderer: Renderer2, private logger: LogService) {}

	ngOnInit() {
	    this.leftPicture = this.leftElement.nativeElement;
	    this.centerPicture = this.centerElement.nativeElement;
	    this.rightPicture = this.rightElement.nativeElement;
  	}

	@HostListener('document:mousemove', ['$event.target'])
 	onMouseMove(event) {

 		const onLeftElement = this.leftPicture.contains(event);
 		const onCenterElement = this.centerPicture.contains(event);
 		const onRightElement = this.rightPicture.contains(event);

 		if(onLeftElement && !onCenterElement && !onRightElement){
 			this.renderer.setStyle(this.leftPicture, 'z-index', '15');
 			this.renderer.setStyle(this.leftPicture, 'position', 'absolute');
 			this.renderer.setStyle(this.centerPicture, 'z-index', '10');
 			this.renderer.setStyle(this.rightPicture, 'z-index', '10');

 		}
 		else if(!onLeftElement && onCenterElement && !onRightElement){
 			this.renderer.setStyle(this.leftPicture, 'z-index', '1');
 			this.renderer.setStyle(this.centerPicture, 'z-index', '15');
 			this.renderer.setStyle(this.rightPicture, 'z-index', '10');
 		}
 		else if(!onLeftElement && !onCenterElement && onRightElement){
 			this.renderer.setStyle(this.leftPicture, 'z-index', '1');
 			this.renderer.setStyle(this.centerPicture, 'z-index', '10');
 			this.renderer.setStyle(this.rightPicture, 'z-index', '15');
 		}
  	}	
}