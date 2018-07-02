import {Directive, HostBinding, HostListener} from '@angular/core';

// Import DirectionModel
import {DirectionModel} from './direction.model';

@Directive({
  selector: '[appColor]'
})
export class ColorDirective {

  constructor() { }

  /**
   * binding style color to appColor directive
   */
  @HostBinding('style.color') keyColor: string;
  /**
   * Listening keydowm event and change color depending on key code
   * @param $event
   */
  @HostListener('window:keydown', ['$event']) windowClick($event) {
    // key code
    const key = $event.key;

    switch (key) {
      case 'ArrowUp':
        this.keyColor = DirectionModel.Up;
        break;
      case 'ArrowDown':
        this.keyColor = DirectionModel.Down;
        break;
      case 'ArrowLeft':
        this.keyColor = DirectionModel.Left;
        break;
      case 'ArrowRight':
        this.keyColor = DirectionModel.Right;
        break;
      default:
        this.keyColor = 'black';
    }
  }

}
