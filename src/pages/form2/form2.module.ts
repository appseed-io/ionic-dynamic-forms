import { NgModule } from '@angular/core';
import { IonicModule } from 'ionic-angular';
import { Form2Page} from './form2.page';
import { DynamicFormModule } from '../../common/forms/dynamic-form.module';
import { ConfigService } from '../../services/getConfig.service';

@NgModule({
	imports: [IonicModule, DynamicFormModule],
	declarations: [Form2Page],
	entryComponents: [Form2Page],
	providers: [ConfigService]
})
export class Form2Module {

}
