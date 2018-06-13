import { Directive, EventEmitter, Output, HostListener } from "@angular/core";

@Directive({
    selector: "[mouse-down]"
 })
 export class MouseDownDirective {
    @Output() onMouseDown: EventEmitter<number[]> = new EventEmitter<number[]>();
 
    @HostListener("mousedown", ["$event"])
    public onListenerTriggered(event: any): void {
        this.onMouseDown.emit([event.clientX, event.clientY]);
    }
 }