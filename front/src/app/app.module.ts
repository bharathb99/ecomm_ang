import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule ,FormGroup} from '@angular/forms';
import {NgxPaginationModule} from 'ngx-pagination';

import { AppRoutingModule, routingComponents } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { AdminComponent } from './admin/admin.component';
import { CreateComponent } from './create/create.component';
import { EditComponent } from './edit/edit.component';
import { UserComponent } from './user/user.component';
import { SearchFilterPipe } from './search-filter.pipe';
// import {NgxPaginationModule} from 'ngx-pagination'; // <-- import the module




@NgModule({
  declarations: [
    AppComponent,
    // LoginComponent,
    // AdminComponent,
    CreateComponent,
    EditComponent,
    // UserComponent,
    routingComponents,
    SearchFilterPipe
  
  
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    NgxPaginationModule,
    FormsModule,
    ReactiveFormsModule


  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
