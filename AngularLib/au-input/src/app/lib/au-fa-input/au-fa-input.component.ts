import { AfterContentInit, Component, ContentChild, Input } from '@angular/core';
import { InputRefDirective } from 'app/lib/common/input-ref.directive';

@Component({
  // tslint:disable-next-line:component-selector
  selector: 'au-fa-input',
  templateUrl: './au-fa-input.component.html',
  styleUrls: ['./au-fa-input.component.css']
})
export class AuFaInputComponent implements AfterContentInit {

  @Input()
  icon: string;

  @ContentChild(InputRefDirective)
  input: InputRefDirective;

  constructor() { }

  ngAfterContentInit() {
    console.log('input', this.input);
  }

  get classes() {
    const cssClasses = {};

    if (this.icon) {
      cssClasses['fa-' + this.icon] = true;
    }

    return cssClasses;
  }
}
