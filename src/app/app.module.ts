import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { EntitiesContainerComponent } from './entities-container/entities-container.component';
import { TextsContainerComponent } from './texts-container/texts-container.component';
import { EntityService } from './services/entity.service';
import { TextService } from './services/text.service';
import { AnnotationService } from './services/annotation.service';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MaterialModule } from './material';
import { SelectionContainerComponent } from './selection-container/selection-container.component';

@NgModule({
  declarations: [
    AppComponent,
    EntitiesContainerComponent,
    TextsContainerComponent,
    SelectionContainerComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MaterialModule
  ],
  providers: [
    EntityService,
    TextService,
    AnnotationService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
