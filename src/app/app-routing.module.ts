import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { ScanBarcodeComponent } from './pages/scan-barcode/scan-barcode.component';
import { ProtectedComponent } from './pages/protected/protected.component';
import { AuthGuard } from './_helpers/auth.guard';

const routes: Routes = [
  { path: '', component: HomeComponent, data: { title: 'Home' } },
  { path: 'scan-barcode', component: ScanBarcodeComponent, data: { title: 'Scan barcode title from routing' } },
  { path: 'protected', component: ProtectedComponent, canActivate: [AuthGuard]},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
