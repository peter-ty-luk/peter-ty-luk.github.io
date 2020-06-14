import {COMMA, ENTER} from '@angular/cdk/keycodes';
import {Component, Input, Output, EventEmitter} from '@angular/core';
import {MatChipInputEvent} from '@angular/material/chips';

export interface ChipInput {
  text: string;
}

/**
 * @title Chips with input
 */
@Component({
  selector: 'chip-input',
  templateUrl: 'chip-input.component.html',
  styleUrls: ['chip-input.component.css'],
})
export class ChipInputComponent {
  @Input() placeholder:string = "PlaceHolder";
  @Output() updateEvent = new EventEmitter();
  visible = true;
  selectable = true;
  removable = true;
  addOnBlur = true;
  readonly separatorKeysCodes: number[] = [ENTER, COMMA];
  chipInputs: ChipInput[] = [
  ];

  add(event: MatChipInputEvent): void {
    const input = event.input;
    const value = event.value;

    // Add our fruit
    if ((value || '').trim()) {
      this.chipInputs.push({text: value.trim()});
    }

    // Reset the input value
    if (input) {
      input.value = '';
    }
    this.updateEvent.emit();
  }

  remove(chipInput : ChipInput): void {
    const index = this.chipInputs.indexOf(chipInput);

    if (index >= 0) {
      this.chipInputs.splice(index, 1);
    }
    this.updateEvent.emit();
  }

}

