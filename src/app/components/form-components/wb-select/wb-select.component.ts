import { Component } from '@angular/core';
import { FieldType, FieldTypeConfig } from '@ngx-formly/core';

type SelectOption = { label: string; value: string | number };

@Component({
  selector: 'app-wb-select',
  templateUrl: './wb-select.component.html',
  styleUrls: ['./wb-select.component.scss'],
})
export class WbSelectComponent extends FieldType<FieldTypeConfig> {
  public defaultClasses = 'w-full';

  get label() {
    const requiredFieldIndicator = this.props.required ? ' *' : '';
    const labelText = this.props.label ? this.props.label : 'Select input';

    return `${labelText}${requiredFieldIndicator}`;
  }

  get disabled() {
    return this.props.disabled ?? false;
  }

  get selectOptions(): SelectOption[] {
    return (this.props.options as SelectOption[]) ?? [];
  }

  get classes(): string {
    const classes = this.props['classes']
      ? this.props['classes']
      : this.defaultClasses;

    return classes;
  }
}
