import { Component, OnInit } from '@angular/core';
import { FieldType, FieldTypeConfig } from '@ngx-formly/core';
import { getMonthName, getOrdinalDay } from '../../../utils';
import { Observable, of, startWith, map } from 'rxjs';

@Component({
  selector: 'app-wb-datepicker',
  templateUrl: './wb-datepicker.component.html',
  styleUrls: ['./wb-datepicker.component.scss'],
})
export class WbDatepickerComponent
  extends FieldType<FieldTypeConfig>
  implements OnInit
{
  public defaultClasses = 'w-full';

  public formattedDate$: Observable<string> = of('');

  ngOnInit(): void {
    this.formattedDate$ = this.field.formControl.statusChanges.pipe(
      startWith(''),
      map((status) => {
        if (status === 'VALID') {
          const rawDateValue = this.field.formControl.value as Date;
          const monthName = getMonthName(rawDateValue.getMonth());
          const ordinalDate = getOrdinalDay(rawDateValue.getDate());
          const fullYear = rawDateValue.getFullYear();

          if (monthName && ordinalDate && fullYear) {
            return `${monthName} ${ordinalDate}, ${fullYear}`;
          }
        }

        return '';
      })
    );
  }

  get label() {
    const requiredFieldIndicator = this.props.required ? ' *' : '';
    const labelText = this.props.label ? this.props.label : 'Datepicker';

    return `${labelText}${requiredFieldIndicator}`;
  }

  get disabled() {
    return this.props.disabled ?? false;
  }

  get minDate() {
    return this.props['minDate'] ? this.props['minDate'] : null;
  }

  get maxDate() {
    return this.props['maxDate'] ? this.props['minDate'] : null;
  }

  get classes(): string {
    const classes = this.props['classes']
      ? this.props['classes']
      : this.defaultClasses;

    return classes;
  }
}
