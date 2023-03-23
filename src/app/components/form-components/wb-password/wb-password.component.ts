import { Component } from '@angular/core';
import { FieldType, FieldTypeConfig } from '@ngx-formly/core';

@Component({
  selector: 'app-wb-password',
  templateUrl: './wb-password.component.html',
  styleUrls: ['./wb-password.component.scss'],
})
export class WbPasswordComponent extends FieldType<FieldTypeConfig> {
  public defaultClasses = 'w-full';

  public hideInputValue = true;

  handleClick() {
    this.hideInputValue = !this.hideInputValue;
  }

  get tooltipText() {
    return this.hideInputValue ? 'Show password' : 'Hide password';
  }

  get label() {
    const requiredFieldIndicator = this.props.required ? ' *' : '';
    const labelText = this.props.label ? this.props.label : 'Enter password';

    return `${labelText}${requiredFieldIndicator}`;
  }

  get placeholder() {
    return this.props.placeholder ?? '';
  }

  get disabled() {
    return this.props.disabled ?? false;
  }

  get maxLength() {
    return this.props['maxLength'] ?? 15;
  }

  get classes(): string {
    const classes = this.props['classes']
      ? this.props['classes']
      : this.defaultClasses;

    return classes;
  }
}
