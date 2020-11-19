import { Component, OnInit } from '@angular/core';
import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';
import { Observable } from 'rxjs';
import { map, shareReplay } from 'rxjs/operators';
import { Router } from '@angular/router';
import { MatIconRegistry } from "@angular/material/icon";
import { DomSanitizer } from '@angular/platform-browser';

@Component({
  selector: 'app-topnav',
  templateUrl: './topnav.component.html',
  styleUrls: ['./topnav.component.css']
})
export class TopnavComponent implements OnInit {

  isFoo:boolean = false;
  show:boolean = false;
  
  isHandset$: Observable<boolean> = this.breakpointObserver.observe(Breakpoints.Handset)
    .pipe(
      map(result => result.matches),
      shareReplay()
    );

  constructor(private breakpointObserver: BreakpointObserver,
              private router: Router,
              private matIconRegistry: MatIconRegistry,
              private domSanitizer: DomSanitizer
            ) {
              this.matIconRegistry.addSvgIcon(
                'home-icon',
                this.domSanitizer.bypassSecurityTrustResourceUrl("assets/icons/home.svg")
              );
              this.matIconRegistry.addSvgIcon(
                'stack-icon',
                this.domSanitizer.bypassSecurityTrustResourceUrl("assets/icons/stack.svg")
              );
              this.matIconRegistry.addSvgIcon(
                'user-icon',
                this.domSanitizer.bypassSecurityTrustResourceUrl("assets/icons/user.svg")
              );
             }

  ngOnInit(): void {
  }

  
}
