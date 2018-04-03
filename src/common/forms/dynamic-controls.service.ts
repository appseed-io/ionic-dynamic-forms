import { Injectable } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ControlBase } from './control-base';

@Injectable()
export class DynamicControlsService {
  constructor() {
  }

  toFormGroup(formGroup: FormGroup, controls: ControlBase<any>[]) {
    formGroup = formGroup || new FormGroup({});

    controls.forEach(control => {
      let formControl = control.required
        ? new FormControl(control.value || '', Validators.required)
        : new FormControl(control.value || '');
      formGroup.addControl(control.key, formControl);
    });

    return formGroup;
  }
}