import { Component } from '@angular/core';
import { FieldType, FieldTypeConfig } from '@ngx-formly/core';

type RadioOption = { label: string; value: string | number };

@Component({
  selector: 'app-wb-radio',
  templateUrl: './wb-radio.component.html',
  styleUrls: ['./wb-radio.component.scss'],
})
export class WbRadioComponent extends FieldType<FieldTypeConfig> {
  public defaultClasses = 'w-full';

  get label(): string | null {
    if (!this.props.label) return null;

    const requiredFieldIndicator = this.props.required ? ' *' : '';
    const labelText = this.props.label;

    return `${labelText}${requiredFieldIndicator}`;
  }

  get radioOptions(): RadioOption[] {
    return (this.props.options as RadioOption[]) ?? [];
  }

  get classes(): string {
    const classes = this.props['classes']
      ? this.props['classes']
      : this.defaultClasses;

    return classes;
  }
}
