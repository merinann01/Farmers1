import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { FooterComponent } from './footer/footer.component';
import { CarouselComponent } from './carousel/carousel.component';

import { SocialLoginModule, SocialAuthServiceConfig } from 'angularx-social-login';
import { GoogleLoginProvider, FacebookLoginProvider } from 'angularx-social-login';
import { HomeComponent } from './home/home.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { ProductsComponent } from './products/products.component';

@NgModule({
	declarations: [
		AppComponent,
		NavbarComponent,
		FooterComponent,
		CarouselComponent,
		HomeComponent,
		NotFoundComponent,
		ProductsComponent
	],
	imports: [ BrowserModule, AppRoutingModule, SocialLoginModule, HttpClientModule, FormsModule ],
	providers: [
		{
			provide: 'SocialAuthServiceConfig',
			useValue: {
				autoLogin: false,
				providers: [
					{
						id: GoogleLoginProvider.PROVIDER_ID,
						provider: new GoogleLoginProvider(
							'1086364764940-gvpm41r4to48as95ui23s7g2uk4vc7an.apps.googleusercontent.com'
						)
					},
					{
						id: FacebookLoginProvider.PROVIDER_ID,
						provider: new FacebookLoginProvider('251938542571353')
					}
				]
			} as SocialAuthServiceConfig
		}
	],
	bootstrap: [ AppComponent ]
})
export class AppModule {}
