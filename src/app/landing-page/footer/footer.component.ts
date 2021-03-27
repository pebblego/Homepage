import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
// import { MatDialog } from '@angular/material/dialog';
import { PrivacyPolicyComponent } from '../../popup/privacy-policy/privacy-policy.component';
import { TermsOfUseComponent } from '../../popup/terms-of-use/terms-of-use.component';

@Component({
  selector: 'footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent implements OnInit {
  constructor( public dialog: MatDialog) { }

  ngOnInit(): void {
    console.log('page loaded')
  }
  termsofuse(){
    const dialogRef = this.dialog.open(TermsOfUseComponent);
   }
   privacypolicy(){
    const dialogRef = this.dialog.open(PrivacyPolicyComponent);
   }
  
}
