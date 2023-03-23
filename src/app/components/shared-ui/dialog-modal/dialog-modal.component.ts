import { Component, Inject } from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import { DialogContents } from 'src/app/definitions/dialog-modal';

@Component({
  selector: 'app-dialog-modal',
  templateUrl: './dialog-modal.component.html',
  styleUrls: ['./dialog-modal.component.scss'],
})
export class DialogModalComponent {
  constructor(@Inject(MAT_DIALOG_DATA) public dialogContents: DialogContents) {}
}
