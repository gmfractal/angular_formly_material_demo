import { Component, inject, AfterViewInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { FieldArrayType } from '@ngx-formly/core';
import { DialogModalComponent } from '../../shared-ui/dialog-modal/dialog-modal.component';

@Component({
  selector: 'app-wb-array-renderer',
  templateUrl: './wb-array-renderer.component.html',
  styleUrls: ['./wb-array-renderer.component.scss'],
})
export class WbArrayRendererComponent
  extends FieldArrayType
  implements AfterViewInit
{
  private defaultClasses = 'flex flex-wrap w-full';
  private dialogModal = inject(MatDialog);

  ngAfterViewInit() {
    setTimeout(() => {
      if (this.shouldPrepopulateEmptyArray) {
        this.add();
      }
    }, 0);
  }

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

  get addBtnLabel(): string {
    return this.props['addBtnLabel'] ?? 'Add';
  }

  get removeBtnLabel(): string {
    return this.props['removeBtnLabel'] ?? 'Remove';
  }

  get disableBgClose(): boolean {
    return this.props['helpDialog']['disableBgClose'] ?? false;
  }

  get fieldGroup() {
    return this.field.fieldGroup;
  }

  get controlGroupLabel() {
    return this.props['controlGroupLabel'] ?? null;
  }

  get arrayLimit() {
    const definedLimit = this.props['arrayLimit']['limit'];
    if (!definedLimit || definedLimit < 1 || isNaN(parseInt(definedLimit)))
      return Infinity;

    return parseInt(definedLimit);
  }

  get exceededArrayLimitMsg() {
    return (
      this.props['arrayLimit']['exceededLimitMsg'] ??
      `Cannot Add More Than ${this.arrayLimit}`
    );
  }

  get disableAddBtn() {
    if (
      this.field.fieldGroup &&
      this.field.fieldGroup.length >= this.arrayLimit
    )
      return true;

    return false;
  }

  get shouldPrepopulateEmptyArray() {
    if (
      this.props['prepopulateEmptyArray'] &&
      this.field.fieldGroup &&
      this.field.fieldGroup.length === 0
    ) {
      return true;
    }

    return false;
  }

  handleHelpBtnClick() {
    this.dialogModal.open(DialogModalComponent, {
      data: this.props['helpDialog'],
      width: '70%',
      disableClose: this.disableBgClose,
    });
  }

  handleAddBtnClick() {
    this.add();
  }

  handleRemoveBtnClick(index: number) {
    this.remove(index);
  }
}
