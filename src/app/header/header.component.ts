import { Component, OnInit, EventEmitter,Output } from '@angular/core';
import { Ng4LoadingSpinnerService } from 'ng4-loading-spinner';
@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  showLoader=false;
@Output() selectedFeature = new EventEmitter<string>();
  constructor(private spinnerService: Ng4LoadingSpinnerService) { }
onSelect(feature:string){
  this.showLoader=true;
  if(this.showLoader)
  {this.spinnerService.show();
    
  setTimeout(function() {
    this.spinnerService.hide();
  }.bind(this), 4000);
  }
this.selectedFeature.emit(feature);
}
  ngOnInit() {

  }

}
