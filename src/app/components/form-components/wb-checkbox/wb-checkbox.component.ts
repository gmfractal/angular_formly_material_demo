import { Component } from '@angular/core';
import { FieldType, FieldTypeConfig } from '@ngx-formly/core';

@Component({
  selector: 'app-wb-checkbox',
  templateUrl: './wb-checkbox.component.html',
  styleUrls: ['./wb-checkbox.component.scss'],
})
export class WbCheckboxComponent extends FieldType<FieldTypeConfig> {
  get label() {
    const requiredFieldIndicator = this.props.required ? ' *' : '';
    const labelText = this.props.label ? this.props.label : 'Checkbox input';

    return `${labelText}${requiredFieldIndicator}`;
  }

  get disabled() {
    return this.props.disabled ?? false;
  }
}
