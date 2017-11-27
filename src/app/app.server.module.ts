import { AppComponent } from './app.component';
import { NgModule } from '@angular/core';
import { AppModule } from './app.module';
import { ServerModule } from '@angular/platform-server';
@NgModule({
    imports: [
        AppModule,
        ServerModule
    ],
    bootstrap: [AppComponent]
})
export class AppServerModule {}