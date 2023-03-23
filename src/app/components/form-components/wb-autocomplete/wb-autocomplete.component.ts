import { Component, OnInit } from '@angular/core';
import { FieldType, FieldTypeConfig } from '@ngx-formly/core';
import { map, Observable, of, startWith } from 'rxjs';

@Component({
  selector: 'app-wb-autocomplete',
  templateUrl: './wb-autocomplete.component.html',
  styleUrls: ['./wb-autocomplete.component.scss'],
})
export class WbAutocompleteComponent
  extends FieldType<FieldTypeConfig>
  implements OnInit
{
  public defaultClasses = 'w-full';

  private _autocompleteOptions: {
    originalValue: string;
    lowercaseValue: string;
  }[] = [];

  public filteredOptions$: Observable<string[]> = of([]);

  ngOnInit() {
    this._autocompleteOptions = this.optionsFromProps.map((option) => {
      return { originalValue: option, lowercaseValue: option.toLowerCase() };
    });

    this.filteredOptions$ = this.field.formControl.valueChanges.pipe(
      startWith(''),
      map((value: any) => this._filter(value || ''))
    );
  }

  private _filter(value: string): string[] {
    const filterValue = value.toLowerCase();

    const filteredOptions = this._autocompleteOptions
      .filter((option) => option.lowercaseValue.includes(filterValue))
      .map((value) => value.originalValue);

    return filteredOptions;
  }

  get label() {
    const requiredFieldIndicator = this.props.required ? ' *' : '';
    const labelText = this.props.label
      ? this.props.label
      : 'Autocomplete input';

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

  get optionsFromProps() {
    return this.field.props.options as string[];
  }

  get classes(): string {
    const classes = this.props['classes']
      ? this.props['classes']
      : this.defaultClasses;

    return classes;
  }
}
