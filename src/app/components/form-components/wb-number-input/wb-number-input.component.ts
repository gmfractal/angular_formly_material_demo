import { Component, inject, OnInit } from '@angular/core';
import { FieldType, FieldTypeConfig } from '@ngx-formly/core';
import { DecimalPipe } from '@angular/common';
import { digitsFilter, digitsAndSingleDecimalFilter } from 'src/app/utils';

@Component({
  selector: 'app-wb-number-input',
  templateUrl: './wb-number-input.component.html',
  styleUrls: ['./wb-number-input.component.scss'],
})
export class WbNumberInputComponent
  extends FieldType<FieldTypeConfig>
  implements OnInit
{
  public defaultClasses = 'w-full';

  private allowDecimals = false;
  private _decimalPipe = inject(DecimalPipe);

  ngOnInit(): void {
    this.allowDecimals = this.props['allowDecimals'] ?? false;
  }

  handleFocus(e: Event) {
    const currentFormValue =
      (this.numberFormControl.value?.toString() as string) ?? '';
    const filteredValue = this.allowDecimals
      ? digitsAndSingleDecimalFilter(currentFormValue)
      : digitsFilter(currentFormValue);
    this.numberFormControl.patchValue(filteredValue);
  }

  handleBlur(e: Event) {
    try {
      const currentValue =
        (this.numberFormControl.value?.toString() as string) ?? '';

      this.numberFormControl.patchValue(
        this._decimalPipe.transform(
          digitsAndSingleDecimalFilter(currentValue),
          this.allowDecimals ? '1.2-2' : '1.0-0',
          'en-CA'
        )
      );
    } catch (err) {
      console.error(err);
      this.numberFormControl.patchValue('');
    }
  }

  handleInput(e: Event) {
    const currentFormValue =
      (this.numberFormControl.value?.toString() as string) ?? '';
    const sanitizedValue = this.allowDecimals
      ? digitsAndSingleDecimalFilter(currentFormValue)
      : digitsFilter(currentFormValue);
    this.numberFormControl.patchValue(sanitizedValue);
  }

  get label() {
    const requiredFieldIndicator = this.props.required ? ' *' : '';
    const labelText = this.props.label ? this.props.label : 'Currency input';

    return `${labelText}${requiredFieldIndicator}`;
  }

  get placeholder() {
    return this.props.placeholder ?? '';
  }

  get disabled() {
    return this.props.disabled ?? false;
  }

  get maxLength() {
    return this.props['maxLength'] ?? 20;
  }

  get numberFormControl() {
    return this.field.formControl;
  }

  get classes(): string {
    const classes = this.props['classes']
      ? this.props['classes']
      : this.defaultClasses;

    return classes;
  }
}
