import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { SignupComponent } from './signup/signup.component';
const appRoutes: Routes = [
	{path: 'login', component: LoginComponent},
	{path: 'signup', component: SignupComponent}
	// {path: '', redirectTo: '/recipes', pathMatch: 'full' },
	// {path: 'recipes', component: RecipesComponent, children:[
	// 	{path: '', component: RecipeStartComponent},
	// ]},
];
@NgModule({
	imports: [
		RouterModule.forRoot(appRoutes)
	],
	exports: [RouterModule]
})
export class AppRoutingModule{

}