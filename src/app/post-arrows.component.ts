import { Component, AfterViewInit, ViewChild, 
	OnInit, ElementRef, Renderer2, HostListener } from '@angular/core';
import { LogService } from './log.service';

@Component({
  selector: 'post-arrows-component',
  templateUrl: './post-arrows.html',
  styleUrls: ['./post-arrows.css'],
  providers: [LogService]
})
export class PostArrowsComponent implements AfterViewInit, OnInit{

	listOfPosts: any[];
	leftArrow: any;
	rightArrow: any;
	isLeftArrowClicked: boolean = false;
	isRightArrowClicked: boolean = false;

	constructor(private renderer: Renderer2, private postRef: ElementRef, private logger: LogService) {}

	@ViewChild('left_post', {static:true}) private leftPostElem: ElementRef;
	@ViewChild('right_post', {static:true}) private rightPostElem: ElementRef;

	ngAfterViewInit(){
	    this.listOfPosts = this.postRef.nativeElement.querySelectorAll('.post');
	}

	ngOnInit(){
		this.leftArrow = this.leftPostElem.nativeElement;
	    this.rightArrow = this.rightPostElem.nativeElement;
	}

	onLeftClick(event) {
		this.logger.info("onLeftClick() method in PostArrowsComponent");
		for(let i=0; i<this.listOfPosts.length; i++){
 			if(event.target.className == 'left_post'){
	 			if(this.listOfPosts[i].children[0].children[0].classList.contains('post_active_img')
	 				&& i>0){
	 				this.renderer.removeClass(this.listOfPosts[i].children[0].children[0], 'post_active_img');
	 				this.renderer.removeClass(this.listOfPosts[i].children[0].children[1], 'day_active');
	 				this.renderer.removeClass(this.listOfPosts[i].children[0].children[2], 'month_active');

	 				this.renderer.removeClass(this.listOfPosts[i].children[1], 'post_active');
	 				this.renderer.removeClass(this.listOfPosts[i].children[1].children[0], 'post_desc_title_active');
	 				this.renderer.removeClass(this.listOfPosts[i].children[1].children[1], 'post_desc_text_active');
	 				this.renderer.removeClass(this.listOfPosts[i].children[1].children[2], 'post_btn_active');

	 				this.renderer.addClass(this.listOfPosts[i-1].children[0].children[0], 'post_active_img');
	 				this.renderer.addClass(this.listOfPosts[i-1].children[0].children[1], 'day_active');
	 				this.renderer.addClass(this.listOfPosts[i-1].children[0].children[2], 'month_active');

	 				this.renderer.addClass(this.listOfPosts[i-1].children[1], 'post_active');
	 				this.renderer.addClass(this.listOfPosts[i-1].children[1].children[0], 'post_desc_title_active');
	 				this.renderer.addClass(this.listOfPosts[i-1].children[1].children[1], 'post_desc_text_active');
	 				this.renderer.addClass(this.listOfPosts[i-1].children[1].children[2], 'post_btn_active');

	 				this.renderer.setStyle(this.leftArrow, 'background-image', 'url(../assets/img/right_posts.png)');
	 				this.renderer.setStyle(this.leftArrow, 'transform', 'scale(-1,1)');
	 				this.renderer.setStyle(this.rightArrow, 'background-image', 'url(../assets/img/left_posts.png)');
	 				this.renderer.setStyle(this.rightArrow, 'transform', 'scale(-1,1)');
	 			}
	 		}
 		}	
	}

	onRightClick(event) {
		this.logger.info("onRightClick() method in PostArrowsComponent");
		for(let i=0; i<this.listOfPosts.length; i++){
 			if(event.target.className == 'right_post'){
	 			if(this.listOfPosts[i].children[0].children[0].classList.contains('post_active_img')
	 				&& i<2){
	 				this.renderer.removeClass(this.listOfPosts[i].children[0].children[0], 'post_active_img');
	 				this.renderer.removeClass(this.listOfPosts[i].children[0].children[1], 'day_active');
	 				this.renderer.removeClass(this.listOfPosts[i].children[0].children[2], 'month_active');

	 				this.renderer.removeClass(this.listOfPosts[i].children[1], 'post_active');
	 				this.renderer.removeClass(this.listOfPosts[i].children[1].children[0], 'post_desc_title_active');
	 				this.renderer.removeClass(this.listOfPosts[i].children[1].children[1], 'post_desc_text_active');
	 				this.renderer.removeClass(this.listOfPosts[i].children[1].children[2], 'post_btn_active');

	 				this.renderer.addClass(this.listOfPosts[i+1].children[0].children[0], 'post_active_img');
	 				this.renderer.addClass(this.listOfPosts[i+1].children[0].children[1], 'day_active');
	 				this.renderer.addClass(this.listOfPosts[i+1].children[0].children[2], 'month_active');

	 				this.renderer.addClass(this.listOfPosts[i+1].children[1], 'post_active');
	 				this.renderer.addClass(this.listOfPosts[i+1].children[1].children[0], 'post_desc_title_active');
	 				this.renderer.addClass(this.listOfPosts[i+1].children[1].children[1], 'post_desc_text_active');
	 				this.renderer.addClass(this.listOfPosts[i+1].children[1].children[2], 'post_btn_active');

	 				this.renderer.setStyle(this.rightArrow, 'background-image', 'url(../assets/img/right_posts.png)');
	 				this.renderer.setStyle(this.rightArrow, 'transform', 'scale(1,-1)');
	 				this.renderer.setStyle(this.leftArrow, 'background-image', 'url(../assets/img/left_posts.png)');
	 				this.renderer.setStyle(this.leftArrow, 'transform', 'scale(1,-1)');
	 			}
	 		}
 		}	
	}
}