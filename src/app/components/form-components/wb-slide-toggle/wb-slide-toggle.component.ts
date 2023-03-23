import { Component } from '@angular/core';
import { FieldType, FieldTypeConfig } from '@ngx-formly/core';

@Component({
  selector: 'app-wb-slide-toggle',
  templateUrl: './wb-slide-toggle.component.html',
  styleUrls: ['./wb-slide-toggle.component.scss'],
})
export class WbSlideToggleComponent extends FieldType<FieldTypeConfig> {
  get label() {
    const requiredFieldIndicator = this.props.required ? ' *' : '';
    const labelText = this.props.label ? this.props.label : 'Toggle';

    return `${labelText}${requiredFieldIndicator}`;
  }

  get disabled() {
    return this.props.disabled ?? false;
  }

  get labelPosition() {
    return this.props['labelPosition'] ?? 'after';
  }
}
