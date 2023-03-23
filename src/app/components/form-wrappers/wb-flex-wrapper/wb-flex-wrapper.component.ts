import { Component, inject } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { FieldWrapper } from '@ngx-formly/core';
import { DialogModalComponent } from '../../shared-ui/dialog-modal/dialog-modal.component';

@Component({
  selector: 'app-wb-flex-wrapper',
  templateUrl: './wb-flex-wrapper.component.html',
  styleUrls: ['./wb-flex-wrapper.component.scss'],
})
export class WbFlexWrapperComponent extends FieldWrapper {
  private defaultClasses = 'flex flex-wrap w-full';
  private dialogModal = inject(MatDialog);

  get heading(): string | null {
    const headingText = this.props['heading'] ? this.props['heading'] : null;
    return headingText;
  }

  get descriptions(): string[] | null {
    const descriptionText = this.props['descriptions']
      ? this.props['descriptions']
      : null;
    return descriptionText;
  }

  get classes(): string {
    const classes = this.props['classes']
      ? this.props['classes']
      : this.defaultClasses;

    return classes;
  }

  get helpBtnLabel(): string {
    return this.props['helpBtnLabel'] ?? '';
  }

  get showHelpBtn(): boolean {
    return this.props['helpBtnLabel'] && this.props['descriptions'];
  }

  get disableBgClose(): boolean {
    return this.props['helpDialog']['disableBgClose'] ?? false;
  }

  handleHelpBtnClick() {
    this.dialogModal.open(DialogModalComponent, {
      data: this.props['helpDialog'],
      width: '70%',
      disableClose: this.disableBgClose,
    });
  }
}
