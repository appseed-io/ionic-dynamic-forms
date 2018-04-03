import { Component } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { ControlBase } from '../../common/forms/control-base';
import { ControlsService } from '../../common/forms/controls.service';
import { ConfigService } from '../../services/getConfig.service';
import 'rxjs/add/operator/map';

@Component({
	templateUrl: 'form1.html',
	providers: []
})
export class Form1Page {
	controls: ControlBase<any>[];
	form: FormGroup;

	constructor(public configService: ConfigService,
							public controlsService: ControlsService
						) {
		this.form = new FormGroup({});
	}

	ionViewWillEnter() {
		this.configService.getConfig('form1-conf.json')
			.map(res => res.json())
			.subscribe(data => {
					this.controls = this.controlsService.getControls(data);
				});
	}




}
