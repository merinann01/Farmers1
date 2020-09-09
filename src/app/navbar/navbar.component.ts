import { Component, OnInit } from '@angular/core';
import { SocialAuthService, SocialUser } from 'angularx-social-login';
import { GoogleLoginProvider, FacebookLoginProvider } from 'angularx-social-login';

@Component({
	selector: 'app-navbar',
	templateUrl: './navbar.component.html',
	styleUrls: [ './navbar.component.css' ]
})
export class NavbarComponent implements OnInit {
	user: SocialUser;
	loggedIn: boolean;

	constructor(private authService: SocialAuthService) {}

	ngOnInit() {
		this.authService.authState.subscribe((user) => {
			this.user = user;
			this.loggedIn = user != null;
		});
	}

	signInWithGoogle(): void {
		this.authService.signIn(GoogleLoginProvider.PROVIDER_ID);
	}

	signInWithFB(): void {
		this.authService.signIn(FacebookLoginProvider.PROVIDER_ID);
	}

	signOut(): void {
		this.authService.signOut();
	}
}
