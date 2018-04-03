import { NgModule } from '@angular/core';
import { IonicModule } from 'ionic-angular';
import { Form1Page} from './form1.page';
import { DynamicFormModule } from '../../common/forms/dynamic-form.module';
import { ConfigService } from '../../services/getConfig.service';

@NgModule({
	imports: [IonicModule, DynamicFormModule],
	declarations: [Form1Page],
	entryComponents: [Form1Page],
	providers: [ConfigService]
})
export class Form1Module {

}
