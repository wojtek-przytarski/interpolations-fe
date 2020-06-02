import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-integer-input',
  templateUrl: './integer-input.component.html',
  styleUrls: ['./integer-input.component.css']
})
export class IntegerInputComponent implements OnInit {
  @Output() value = new EventEmitter<number>();
  @Input() initialValue = 0;
  @Input() minValue: number;
  @Input() maxValue: number;
  @Input() label: string;
  fieldValue = 0;

  constructor() { }

  ngOnInit(): void {
    this.fieldValue = this.initialValue;
  }

  onMinusClicked() {
    if (this.minValue === undefined || this.fieldValue > this.minValue) {
      this.fieldValue -= 1;
      this.updateValue();
    }
  }

  onPlusClicked() {
    if (this.maxValue === undefined || this.fieldValue < this.maxValue) {
      this.fieldValue += 1;
      this.updateValue();
    }
  }

  onValueChanged(newValue: number) {
    if ((this.maxValue === undefined || newValue <= this.maxValue) && (this.minValue === undefined || newValue >= this.minValue)) {
      this.fieldValue = newValue;
      this.updateValue();
    }
  }

  private updateValue() {
    this.value.emit(this.fieldValue);
  }
}
