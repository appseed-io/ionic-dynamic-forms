import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { ControlBase } from './control-base';
import { DynamicControlsService } from './dynamic-controls.service';

@Component({
  selector: 'dynamic-form',
  templateUrl: './dynamic-form.component.html',
  exportAs: 'dynamicForm'
})
export class DynamicFormComponent implements OnInit {
  @Input() controls: ControlBase<any>[] = [];
  @Input() form: FormGroup;
  @Output() submit: EventEmitter<any> = new EventEmitter();

  constructor(private controlsService: DynamicControlsService) {
  }

  ngOnInit() {
    this.form = this.controlsService.toFormGroup(this.form, this.controls);
  }

  onSubmit() {
    this.submit.next(this.form.value);
  }
}