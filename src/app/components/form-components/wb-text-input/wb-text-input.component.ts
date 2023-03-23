import { Component } from '@angular/core';
import { FieldType, FieldTypeConfig } from '@ngx-formly/core';

@Component({
  selector: 'app-wb-text-input',
  templateUrl: './wb-text-input.component.html',
  styleUrls: ['./wb-text-input.component.scss'],
})
export class WbTextInputComponent extends FieldType<FieldTypeConfig> {
  public defaultClasses = 'w-full';
  get label() {
    const requiredFieldIndicator = this.props.required ? ' *' : '';
    const labelText = this.props.label ? this.props.label : 'Text input';

    return `${labelText}${requiredFieldIndicator}`;
  }

  get placeholder() {
    return this.props.placeholder ?? '';
  }

  get disabled() {
    return this.props.disabled ?? false;
  }

  get maxLength() {
    return this.props['maxLength'] ?? 50;
  }

  get classes(): string {
    const classes = this.props['classes']
      ? this.props['classes']
      : this.defaultClasses;

    return classes;
  }
}
