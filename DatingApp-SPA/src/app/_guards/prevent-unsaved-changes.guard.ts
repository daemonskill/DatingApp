import { Injectable } from '@angular/core';
import { MemberEditComponent } from '../Members/Member-Edit/member-edit.component';
import { CanDeactivate } from '@angular/router';

@Injectable()
export class PreventUnsavedChanges implements CanDeactivate<MemberEditComponent>{
   canDeactivate(component: MemberEditComponent){
        if (component.editForm.dirty){
        return confirm('Are you sure to continue!!!. All unsaved Data will be lost!!');
        }
        return true;
    }
}
