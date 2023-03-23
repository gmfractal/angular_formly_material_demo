import { Component, inject } from '@angular/core';
import { FieldType, FieldTypeConfig } from '@ngx-formly/core';
import { CurrencyPipe } from '@angular/common';
import { digitsAndSingleDecimalFilter } from 'src/app/utils';

@Component({
  selector: 'app-wb-currency-input',
  templateUrl: './wb-currency-input.component.html',
  styleUrls: ['./wb-currency-input.component.scss'],
})
export class WbCurrencyInputComponent extends FieldType<FieldTypeConfig> {
  public defaultClasses = 'w-full';

  private _currencyPipe = inject(CurrencyPipe);

  handleFocus(e: Event) {
    const currentFormValue =
      (this.currencyFormControl.value?.toString() as string) ?? '';
    const filteredValue = digitsAndSingleDecimalFilter(currentFormValue);
    this.currencyFormControl.patchValue(filteredValue);
  }

  handleBlur(e: Event) {
    try {
      const currentValue =
        (this.currencyFormControl.value?.toString() as string) ?? '';

      this.currencyFormControl.patchValue(
        this._currencyPipe.transform(
          digitsAndSingleDecimalFilter(currentValue),
          'en-CA',
          '$ '
        )
      );
    } catch (err) {
      console.error(err);
      this.currencyFormControl.patchValue('');
    }
  }

  handleInput(e: Event) {
    const currentFormValue =
      (this.currencyFormControl.value?.toString() as string) ?? '';
    const sanitizedValue = digitsAndSingleDecimalFilter(currentFormValue);
    this.currencyFormControl.patchValue(sanitizedValue);
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

  get currencyFormControl() {
    return this.field.formControl;
  }

  get classes(): string {
    const classes = this.props['classes']
      ? this.props['classes']
      : this.defaultClasses;

    return classes;
  }
}
