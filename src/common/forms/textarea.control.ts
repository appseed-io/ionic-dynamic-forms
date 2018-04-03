import { ControlBase } from './control-base';

export class TextareaControl extends ControlBase<string> {
  controlType = 'textarea';
  type: string;

  constructor(options: {} = {}) {
    super(options);
    this.type = options['type'] || '';
  }
}