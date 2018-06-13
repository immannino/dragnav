import { Component, AfterViewInit, HostListener, OnInit } from '@angular/core';
import { EventManager } from '@angular/platform-browser';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  element: any;
  elementHeader: any;

  dragX: number = 0;
  dragY: number = 0;
  clickX: number = 0;
  clickY: number = 0;

  topStyle: string = '100px';
  leftStyle: string = '100px';
  isClick: boolean = false;

  isDebug: boolean = false;
  stuff: boolean = false;

  toggleStuff = () => this.stuff = !this.stuff;

  positions = {
    pos1: 0,
    pos2: 0,
    pos3: 0,
    pos4: 0
  }

  constructor(private manager: EventManager) {}

  ngAfterViewInit() {
  }

  ngOnInit() {
    this.element = document.getElementById('mydiv');
    this.elementHeader = document.getElementById('mydivheader');
  }

  // @HostListener('mousedown', ['$event']) mouseDown(e: any) {
  //   this.clickX = e.clientX;
  //   this.clickY = e.clientY;
  //   console.log(`${this.clickX} ${this.clickY}`);
  //   this.isClick = true;
  // }

  startDrag(e) {
    // this.clickX = e.clientX;
    // this.clickY = e.clientY;
    this.clickX = e[0];
    this.clickY = e[1];
    this.isDebug ? console.log(`${this.clickX} ${this.clickY}`) : null;
    this.isClick = true;
  }

  @HostListener('document:mousemove', ['$event']) mouseMove(e: any) {
    if (this.isClick) {
      this.dragX = this.clickX - e.clientX;
      this.dragY = this.clickY - e.clientY;
      this.clickX = e.clientX;
      this.clickY = e.clientY;
      
      this.topStyle = (this.element.offsetTop - this.dragY) + "px";
      this.leftStyle = (this.element.offsetLeft - this.dragX) + "px";
      this.isDebug ? console.log(`${this.topStyle} ${this.leftStyle}`) : null;
    }
  }

  @HostListener('mouseup', ['$event']) mouseUp(e: any) {
    /**
     * Alright for this section we gots some work todo. 
     * 
     * The idea is that when the drag is ended, the element will snap to the nearest edge of the screen. 
     * The behavior should act identical to iOS accessability widget thing.
     */
    this.isClick = false;
    console.log(this.isClick);
  }
}