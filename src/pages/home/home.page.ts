import { Component } from '@angular/core';
import { Nav } from 'ionic-angular';

import { Form1Page } from '../form1/form1.page';
import { Form2Page } from '../form2/form2.page';
import { GoogleMapsPage } from '../google-maps/google-maps.page';

import { Tile } from './models/tile.model';
import { EmailService } from '../../services/email.service';
import { CallService } from '../../services/call.service';
import { MapsService } from '../../services/maps.service';
import { InAppBrowserService } from '../../services/in-app-browser.service';
import { data } from './home-data';

@Component({
	templateUrl: 'home.html',
	providers: []
})
export class HomePage {
	public tiles: Tile[][];

	private nav: Nav;

	constructor(
		private emailService: EmailService,
		private callService: CallService,
		private mapsService: MapsService,
		private browserService: InAppBrowserService,
		nav: Nav
	) {
		this.nav = nav;
		this.initTiles();
	}

	public navigateTo(tile) {
		this.nav.setRoot(tile.component);
	}

	public getDirections() {
		this.mapsService.openMapsApp(data.officeLocation);
	}

	public sendEmail() {
		this.emailService.sendEmail(data.email);
	}

	public openFacebookPage() {
		this.browserService.open(data.facebook);
	}

	public callUs() {
		this.callService.call(data.phoneNumber);
	}

	private initTiles(): void {
		this.tiles = [[{
			title: 'Form 1',
			path: 'form1',
			icon: 'football',
			component: Form1Page
		}, {
			title: 'Form 2',
			path: 'form2',
			icon: 'film',
			component: Form2Page
		}]];
	}
}
