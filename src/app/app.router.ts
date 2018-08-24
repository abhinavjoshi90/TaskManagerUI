import { Routes } from '@angular/router';
import { AddComponent } from 'src/app/UI/add/add.component';
import { UpdateComponent } from 'src/app/UI/update/update.component';
import { RouterModule } from '@angular/router';
import { ViewComponent } from 'src/app/UI/view/view.component';

const APP_ROUTES: Routes = [
    { path: '', component: AddComponent },
    { path: 'View', component: ViewComponent },
    { path: 'Update/:id', component: UpdateComponent }
];

export const routing = RouterModule.forRoot(APP_ROUTES)