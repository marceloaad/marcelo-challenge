import { MatButtonModule } from '@angular/material/button'
import { MatIconModule } from '@angular/material/icon'
import { MatButtonToggleModule} from '@angular/material/button-toggle'
import { NgModule } from '@angular/core';
@NgModule({
    imports: [MatButtonModule, MatIconModule, MatButtonToggleModule],
    exports: [MatButtonModule, MatIconModule, MatButtonToggleModule]
})
export class MaterialModule {}