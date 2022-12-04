import { Pipe, PipeTransform } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';


// https://stackoverflow.com/questions/37076867/in-rc-1-some-styles-cant-be-added-using-binding-syntax/37076868#37076868 
@Pipe({ name: 'safeHtml' })
export class SafeHtml implements PipeTransform {
    constructor(private sanitizer: DomSanitizer) { }

    transform(html) {
        if (html == '<label for="State" style="color: black">State</label> <input type="text" class="form-control" id="State" name="State" [(ngModel)]="State" style="color: black"/>') {
            return this.sanitizer.bypassSecurityTrustHtml(html);
        }
        //return this.sanitizer.bypassSecurityTrustStyle(html);
        //return this.sanitizer.bypassSecurityTrustHtml(html);
        // return this.sanitizer.bypassSecurityTrustScript(html);
        // return this.sanitizer.bypassSecurityTrustUrl(html);
        // return this.sanitizer.bypassSecurityTrustResourceUrl(html);
    }
}