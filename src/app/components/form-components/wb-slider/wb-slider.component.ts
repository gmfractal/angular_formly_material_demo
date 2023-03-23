import { Component } from '@angular/core';
import { FieldType, FieldTypeConfig } from '@ngx-formly/core';

@Component({
  selector: 'app-wb-slider',
  templateUrl: './wb-slider.component.html',
  styleUrls: ['./wb-slider.component.scss'],
})
export class WbSliderComponent extends FieldType<FieldTypeConfig> {
  get label() {
    const requiredFieldIndicator = this.props.required ? ' *' : '';
    const labelText = this.props.label ? this.props.label : 'Select';

    return `${labelText}${requiredFieldIndicator}`;
  }

  get disabled() {
    return this.props.disabled ?? false;
  }

  get minRange() {
    return this.props['minRange'] ?? 0;
  }

  get maxRange() {
    return this.props['maxRange'] ?? 100;
  }

  get stepSize() {
    return this.props['stepSize'] ?? 1;
  }

  get showThumbLabel() {
    return this.props['showThumbLabel'] ?? false;
  }

  get showTickMarks() {
    return this.props['showTickMarks'] ?? true;
  }
}
