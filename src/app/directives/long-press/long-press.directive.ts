import {
  Directive,
  ElementRef,
  EventEmitter,
  HostListener,
  Input,
  Output,
} from '@angular/core';
import { fromEvent, timer } from 'rxjs';
import { takeUntil } from 'rxjs/operators';

@Directive({
  selector: '[longPress]',
})
// a custom directive for long press on small screens
export class LongPressDirective {
  @Output() longPress = new EventEmitter<any>();
  @Input() longPressDuration = 200; // default duration in milliseconds

  private longPressing = false;
  private longPressSubscription: any;

  constructor(private _element: ElementRef) {}

  @HostListener('touchstart')
  onTouchStart() {
    this.longPressing = true;
    this.longPressSubscription = timer(this.longPressDuration)
      .pipe(takeUntil(fromEvent(this._element.nativeElement, 'touchend')))
      .subscribe(() => {
        if (this.longPressing) {
          this.longPress.emit();
        }
      });
  }

  @HostListener('touchend')
  onTouchEnd() {
    this.longPressing = false;
    if (this.longPressSubscription) {
      this.longPressSubscription.unsubscribe();
    }
  }
}
