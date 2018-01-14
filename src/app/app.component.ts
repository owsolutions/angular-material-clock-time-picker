import { Component } from '@angular/core';
import { AmazingTimePickerService } from './atp-library/atp-time-picker.service'; // this line you need

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  public selectedTime: string;
  constructor( private atp: AmazingTimePickerService ) { } // this line you need

  open() {
    const amazingTimePicker = this.atp.open({
      time: '18:20',
      arrowStyle: {background: '#80cbc4', color: '#000'},
      theme: 'dark'
    });
    amazingTimePicker.afterClose().subscribe(time => {
      this.selectedTime = time;
    });
  }
}
