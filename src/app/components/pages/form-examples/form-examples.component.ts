import { Component } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { FormlyFieldConfig } from '@ngx-formly/core';

@Component({
  selector: 'app-form-examples',
  templateUrl: './form-examples.component.html',
  styleUrls: ['./form-examples.component.scss'],
})
export class FormExamplesComponent {
  public form = new FormGroup({});
  public model = {};
  public fields: FormlyFieldConfig[] = [
    {
      fieldGroupClassName: 'controls-group-flex-std',
      fieldGroup: [
        {
          key: 'textExample',
          type: 'text-input',
          defaultValue: null,
          className: 'input-control-flex-40',
          props: {
            label: 'Text Example',
            placeholder: 'Enter some text',
            required: true,
          },
          hooks: {
            // Example of formly hooks
            onInit(field) {
              field.formControl?.valueChanges.subscribe((val) => {
                console.log(field);
              });
            },
          },
        },
      ],
    },
    {
      fieldGroupClassName: 'controls-group-flex-std',
      fieldGroup: [
        {
          key: 'textAreaExample',
          type: 'textarea',
          defaultValue: null,
          className: 'input-control-flex-50',
          props: {
            label: 'Textarea Example',
            placeholder: 'Enter some text',
            minRows: '5',
            required: true,
          },
        },
      ],
    },
    {
      fieldGroupClassName: 'controls-group-flex-std',
      fieldGroup: [
        {
          key: 'selectExample',
          type: 'select',
          defaultValue: null,
          className: 'input-control-flex-40',
          props: {
            required: true,
            label: 'Dropdown example',
            options: [
              { value: 'apple', label: 'Apple' },
              { value: 'orange', label: 'Orange' },
              { value: 'grape', label: 'Grape' },
            ],
          },
        },
      ],
    },
    {
      fieldGroupClassName: 'controls-group-flex-std',
      fieldGroup: [
        {
          key: 'radioExample',
          type: 'radio',
          defaultValue: null,
          props: {
            required: true,
            label: 'Radio example',
            className: 'input-control-flex-40',
            options: [
              { value: 'blue', label: 'Blue' },
              { value: 'red', label: 'Red' },
              { value: 'green', label: 'Green' },
            ],
          },
        },
      ],
    },
    {
      key: 'checkboxExample',
      wrappers: ['checkbox-wrapper'],
      validators: {
        chooseAtLeastOne: {
          // Custom form group validation function to trigger error msg to render in wrapper (refactor this by defining the function in another file to make this fields object pure JSON)
          expression: (control: FormGroup) => {
            const value = control.value;

            return (
              // avoid showing the error if form controls are pristine
              control.pristine ||
              value.coke === true ||
              value.pepsi === true ||
              value.fanta === true
            );
          },
          // Custom error message for form group validation
          message: 'Choose at least 1 checkbox',
        },
      },
      props: {
        label: 'Checkbox Wrapper/Container',
        // required property used on formgroup but does not trigger any validation, just to render a '*' beside the label in template
        required: true,
      },
      fieldGroup: [
        {
          key: 'coke',
          type: 'checkbox',
          defaultValue: null,
          props: {
            label: 'Coke',
          },
        },
        {
          key: 'pepsi',
          type: 'checkbox',
          defaultValue: null,
          props: {
            label: 'Pepsi',
          },
        },
        {
          key: 'fanta',
          type: 'checkbox',
          defaultValue: null,
          props: {
            label: 'Fanta',
          },
        },
      ],
    },
    {
      fieldGroupClassName: 'controls-group-flex-std',
      fieldGroup: [
        {
          key: 'autocompleteExample',
          type: 'autocomplete',
          defaultValue: null,
          className: 'input-control-flex-40',
          props: {
            required: true,
            label: 'Autocomplete example',
            options: ['Google', 'Apple', 'Microsoft'],
            placeholder: 'Autocomplete with filtering!',
          },
        },
      ],
    },
    {
      fieldGroupClassName: 'controls-group-flex-std',
      fieldGroup: [
        {
          key: 'datepickerExample',
          type: 'datepicker',
          defaultValue: null,
          className: 'input-control-flex-40',
          props: {
            required: true,
            label: 'Datepicker example',
            maxDate: new Date(2100, 11, 31),
          },
        },
      ],
    },
    {
      fieldGroupClassName: 'controls-group-flex-std',
      fieldGroup: [
        {
          key: 'currencyExample',
          type: 'currency',
          defaultValue: null,
          className: 'input-control-flex-40',
          props: {
            required: true,
            label: 'Currency example',
          },
        },
      ],
    },
    {
      fieldGroupClassName: 'controls-group-flex-std',
      fieldGroup: [
        {
          key: 'passwordExample',
          type: 'password',
          defaultValue: null,
          className: 'input-control-flex-50',
          props: {
            required: true,
            label: 'Password example',
          },
        },
      ],
    },
    {
      fieldGroupClassName: 'controls-group-flex-std',
      fieldGroup: [
        {
          key: 'numberExample1',
          type: 'number',
          defaultValue: null,
          className: 'input-control-flex-50',
          props: {
            required: true,
            label: 'Number w/o decimals',
            allowDecimals: false,
          },
        },
      ],
    },
    {
      fieldGroupClassName: 'controls-group-flex-std',
      fieldGroup: [
        {
          key: 'numberExample2',
          type: 'number',
          defaultValue: null,
          className: 'input-control-flex-50',
          props: {
            required: true,
            label: 'Number w/ decimals',
            allowDecimals: true,
          },
        },
      ],
    },
    {
      fieldGroupClassName: 'controls-group-flex-std',
      fieldGroup: [
        {
          key: 'sliderExample',
          type: 'slider',
          defaultValue: null,
          className: 'input-control-flex-70',
          props: {
            required: true,
            label: 'Slider example',
            minRange: 0,
            maxRange: 1000,
            stepSize: 100,
            showTickMarks: true,
            showThumbLabel: true,
          },
        },
      ],
    },
    {
      fieldGroupClassName: 'controls-group-flex-std',
      fieldGroup: [
        {
          key: 'slideToggleExample',
          type: 'slide-toggle',
          defaultValue: false,
          className: 'input-control-flex-30',
          props: {
            required: true,
            label: 'Slide toggle',
            labelPosition: 'before',
          },
        },
      ],
    },
    {
      wrappers: ['flex-wrapper'],
      props: {
        classes: '',
        heading: 'Flex Wrapper Example',
        helpBtnLabel: 'Click to open help dialog modal',
        descriptions: ['Sample paragraph 1', 'Sample Paragraph 2'],
        helpDialog: {
          mainHeading: 'Help Modal Example',
          body: [
            { heading: 'Subsection Heading 1', content: 'Lorem ipsum' },
            { heading: 'Subsection Heading 2', content: 'Lorem ipsum' },
          ],
          buttons: [
            {
              label: 'Close Dialog',
              hasInitialFocus: true,
              closeOnClick: true,
            },
          ],
          buttonAlignment: 'center',
          disableBgClose: true,
        },
      },
      fieldGroupClassName: 'controls-group-flex-std',
      fieldGroup: [
        {
          key: 'firstName',
          type: 'text-input',
          className: 'input-control-flex-30',
          defaultValue: null,
          props: {
            label: 'First Name',
            placeholder: 'Enter first name',
            required: true,
          },
        },
        {
          key: 'middleName',
          type: 'text-input',
          className: 'input-control-flex-30',
          defaultValue: null,
          props: {
            label: 'Middle name',
            placeholder: 'Enter middle name',
          },
        },
        {
          key: 'lastName',
          type: 'text-input',
          className: 'input-control-flex-30',
          defaultValue: null,
          props: {
            label: 'Last Name',
            placeholder: 'Enter last name',
            required: true,
          },
        },
      ],
    },
    {
      key: 'accounts',
      type: 'array-renderer',
      props: {
        heading: 'Form Array Rendering Example',
        helpBtnLabel: 'Click to open help dialog modal',
        addBtnLabel: 'Add Account',
        removeBtnLabel: 'Remove this account',
        controlGroupLabel: 'Bank Account No. ', // Heading for each set of form elements in the array
        prepopulateEmptyArray: true, // Prepopulate array with an empty set of form elements if array is empty
        arrayLimit: {
          limit: 3, // Optional limit for the form array
          exceededLimitMsg: 'Cannot Add Any More', // Optional message to show if array contents are at the limit
        },
        descriptions: [
          'Form array renderer allows adding and removing form elements',
        ],
        helpDialog: {
          mainHeading: 'Help Modal Example',
          body: [
            { heading: 'Subsection Heading 1', content: 'Lorem ipsum' },
            { heading: 'Subsection Heading 2', content: 'Lorem ipsum' },
          ],
          buttons: [
            {
              label: 'Close Dialog',
              hasInitialFocus: true,
              closeOnClick: true,
            },
          ],
          buttonAlignment: 'center',
          disableBgClose: true,
        },
      },
      fieldArray: {
        fieldGroupClassName: 'controls-group-flex-std',
        fieldGroup: [
          {
            key: 'accountType',
            type: 'select',
            defaultValue: null,
            className: 'input-control-flex-20',
            props: {
              required: true,
              label: 'Account type',
              options: [
                { value: 'chequeing', label: 'Chequeing' },
                { value: 'savings', label: 'Savings' },
              ],
            },
          },
          {
            type: 'text-input',
            key: 'accountNumber',
            className: 'input-control-flex-50',
            defaultValue: null,
            props: {
              label: 'Account number',
              placeholder: 'Enter account number',
              required: true,
            },
          },
        ],
      },
    },
  ];
}
