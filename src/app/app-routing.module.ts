import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { ScanBarcodeComponent } from './pages/scan-barcode/scan-barcode.component';
import { ProtectedComponent } from './pages/protected/protected.component';
import { AuthGuard } from './_helpers/auth.guard';
import { HereMapsComponent } from './pages/here-maps/here-maps.component';
import { PersistentDataComponent } from './pages/persistent-data/persistent-data.component';
import { PumpDataComponent } from './pages/pump-data/pump-data.component';

const routes: Routes = [
  { path: '', component: HomeComponent, data: { title: 'Home' } },
  { path: 'scan-barcode', component: ScanBarcodeComponent, data: { title: 'Scan barcode title from routing' } },
  { path: 'protected', component: ProtectedComponent, canActivate: [AuthGuard]},
  { path: 'here-maps', component: HereMapsComponent },
  { path: 'persistent-data', component: PersistentDataComponent },
  { path: 'pump-data', component: PumpDataComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
