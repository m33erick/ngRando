import { NgModule, } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HikeListeComponent } from './hike-list.component';
import { HikeService } from './hike.service';

@NgModule({
    imports: [CommonModule],
    declarations: [HikeListeComponent],
    exports: [HikeListeComponent],
    providers: [HikeService]
})
export class HikeModule {}
