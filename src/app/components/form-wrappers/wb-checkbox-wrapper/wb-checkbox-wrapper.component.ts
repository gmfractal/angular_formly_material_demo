import { Component } from '@angular/core';
import { FieldWrapper } from '@ngx-formly/core';

@Component({
  selector: 'app-wb-checkbox-wrapper',
  templateUrl: './wb-checkbox-wrapper.component.html',
  styleUrls: ['./wb-checkbox-wrapper.component.scss'],
})
export class WbCheckboxWrapperComponent extends FieldWrapper {
  get label(): string | null {
    if (!this.props.label) return null;

    const requiredFieldIndicator = this.props.required ? ' *' : '';
    const labelText = this.props.label;

    return `${labelText}${requiredFieldIndicator}`;
  }
}
