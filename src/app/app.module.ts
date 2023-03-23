import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ReactiveFormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormExamplesComponent } from './components/pages/form-examples/form-examples.component';

import { FormlyModule } from '@ngx-formly/core';

import { MatNativeDateModule } from '@angular/material/core';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
import { MatRadioModule } from '@angular/material/radio';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatAutocompleteModule } from '@angular/material/autocomplete';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatButtonModule } from '@angular/material/button';
import { MatSliderModule } from '@angular/material/slider';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import { MatDialogModule } from '@angular/material/dialog';
import { MatDividerModule } from '@angular/material/divider';

import { WbTextInputComponent } from './components/form-components/wb-text-input/wb-text-input.component';
import { WbTextareaComponent } from './components/form-components/wb-textarea/wb-textarea.component';
import { WbSelectComponent } from './components/form-components/wb-select/wb-select.component';
import { WbRadioComponent } from './components/form-components/wb-radio/wb-radio.component';
import { WbCheckboxComponent } from './components/form-components/wb-checkbox/wb-checkbox.component';
import { WbCheckboxWrapperComponent } from './components/form-wrappers/wb-checkbox-wrapper/wb-checkbox-wrapper.component';
import { WbAutocompleteComponent } from './components/form-components/wb-autocomplete/wb-autocomplete.component';
import { WbDatepickerComponent } from './components/form-components/wb-datepicker/wb-datepicker.component';
import { WbCurrencyInputComponent } from './components/form-components/wb-currency-input/wb-currency-input.component';
import { WbPasswordComponent } from './components/form-components/wb-password/wb-password.component';
import { CurrencyPipe, DecimalPipe } from '@angular/common';
import { WbNumberInputComponent } from './components/form-components/wb-number-input/wb-number-input.component';
import { WbSliderComponent } from './components/form-components/wb-slider/wb-slider.component';
import { WbSlideToggleComponent } from './components/form-components/wb-slide-toggle/wb-slide-toggle.component';
import { WbFlexWrapperComponent } from './components/form-wrappers/wb-flex-wrapper/wb-flex-wrapper.component';
import { DialogModalComponent } from './components/shared-ui/dialog-modal/dialog-modal.component';
import { MatTooltipModule } from '@angular/material/tooltip';
import { WbArrayRendererComponent } from './components/form-wrappers/wb-array-renderer/wb-array-renderer.component';
import { LoginComponent } from './components/pages/login/login.component';

@NgModule({
  declarations: [
    AppComponent,
    FormExamplesComponent,
    WbTextInputComponent,
    WbTextareaComponent,
    WbSelectComponent,
    WbRadioComponent,
    WbCheckboxComponent,
    WbCheckboxWrapperComponent,
    WbAutocompleteComponent,
    WbDatepickerComponent,
    WbCurrencyInputComponent,
    WbPasswordComponent,
    WbNumberInputComponent,
    WbSliderComponent,
    WbSlideToggleComponent,
    WbFlexWrapperComponent,
    DialogModalComponent,
    WbArrayRendererComponent,
    LoginComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    ReactiveFormsModule,

    // Angular Material form components
    MatNativeDateModule,
    MatIconModule,
    MatInputModule,
    MatSelectModule,
    MatRadioModule,
    MatCheckboxModule,
    MatAutocompleteModule,
    MatDatepickerModule,
    MatButtonModule,
    MatSliderModule,
    MatSlideToggleModule,
    MatDialogModule,
    MatTooltipModule,
    MatDividerModule,

    FormlyModule.forRoot(
      // Define Formly configuations for types, validators and validation messages here
      {
        types: [
          { name: 'text-input', component: WbTextInputComponent },
          { name: 'textarea', component: WbTextareaComponent },
          { name: 'select', component: WbSelectComponent },
          { name: 'radio', component: WbRadioComponent },
          { name: 'checkbox', component: WbCheckboxComponent },
          { name: 'autocomplete', component: WbAutocompleteComponent },
          { name: 'datepicker', component: WbDatepickerComponent },
          { name: 'currency', component: WbCurrencyInputComponent },
          { name: 'number', component: WbNumberInputComponent },
          { name: 'password', component: WbPasswordComponent },
          { name: 'slider', component: WbSliderComponent },
          { name: 'slide-toggle', component: WbSlideToggleComponent },
          { name: 'array-renderer', component: WbArrayRendererComponent }, // This is defined as a Formly type and not a wrapper because it does not extend the FieldWrapper class
        ],
        validationMessages: [
          { name: 'required', message: 'This field is required' },
        ],
        wrappers: [
          { name: 'checkbox-wrapper', component: WbCheckboxWrapperComponent },
          { name: 'flex-wrapper', component: WbFlexWrapperComponent },
        ],
      }
    ),
  ],
  providers: [CurrencyPipe, DecimalPipe],
  bootstrap: [AppComponent],
})
export class AppModule {}
