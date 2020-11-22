
import { Component, ViewChild, OnInit, ComponentFactoryResolver, ApplicationRef, Injector, OnDestroy, Input } from '@angular/core';
import { CdkPortal, DomPortalHost } from '@angular/cdk/portal';

/**
 * This component template wrap the projected content
 * with a 'cdkPortal'.
 */

@Component({
    selector: 'window',
    template: `
    <ng-container *cdkPortal>
      <ng-content></ng-content>
    </ng-container>
  `
})
export class WindowComponent implements OnInit, OnDestroy {
    @Input() externalUrl: string;

    // STEP 1: get a reference to the portal
    @ViewChild(CdkPortal) portal: CdkPortal;

    // STEP 2: save a reference to the window so we can close it
    private externalWindow = null;

    // STEP 3: Inject all the required dependencies for a PortalHost
    constructor(
        private componentFactoryResolver: ComponentFactoryResolver,
        private applicationRef: ApplicationRef,
        private injector: Injector) { }


    ngOnInit() {
        // STEP 4: create an external window
        console.log('roger', this.externalUrl);
        this.externalWindow = window.open(this.externalUrl, '', 'width=800,height=600,left=100,top=100');

        // STEP 5: create a PortalHost with the body of the new window document    
        const host = new DomPortalHost(
            this.externalWindow.document.body,
            this.componentFactoryResolver,
            this.applicationRef,
            this.injector
        );

        // STEP 6: Attach the portal
        // host.attach(this.portal);
    }

    ngOnDestroy() {
        // STEP 7: close the window when this component destroyed
        this.externalWindow.close()
        console.log('close', this.externalWindow);
    }
}