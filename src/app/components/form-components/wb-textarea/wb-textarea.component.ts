import { Component } from '@angular/core';
import { FieldType, FieldTypeConfig } from '@ngx-formly/core';

@Component({
  selector: 'app-wb-textarea',
  templateUrl: './wb-textarea.component.html',
  styleUrls: ['./wb-textarea.component.scss'],
})
export class WbTextareaComponent extends FieldType<FieldTypeConfig> {
  public defaultClasses = 'w-full';

  get label() {
    const requiredFieldIndicator = this.props.required ? ' *' : '';
    const labelText = this.props.label ? this.props.label : 'Textarea input';

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

  get minRows() {
    return this.props['minRows'] ?? 1;
  }

  get maxRows() {
    return this.props['maxRows'] ?? 5;
  }

  get classes(): string {
    const classes = this.props['classes']
      ? this.props['classes']
      : this.defaultClasses;

    return classes;
  }
}
