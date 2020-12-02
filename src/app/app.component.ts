import { Component, OnInit } from '@angular/core';
import { timer, fromEvent } from 'rxjs';
import { timeInterval } from 'rxjs/operators';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})

export class StopwatchComponent implements OnInit {
  public hours: any = '00';
  public minutes: any = '00';
  public seconds: any = '00';
  waitDoubleClickInterval: number = 300;
  startButtonValue: string = 'Start';
  time: number = 0;
  isRunning: boolean = false;
  
  public start() {
    this.startButtonValue === 'Start'
      ? this.startButtonValue = 'Stop'
      : this.startButtonValue = 'Start';
    this.isRunning = !this.isRunning;
  }

  public wait() {
    const stopwatchButtonWait = document.querySelector('.stopwatch__button--wait');

    fromEvent(stopwatchButtonWait, 'mousedown')
      .pipe(timeInterval())
      .subscribe(iteration => {
        if (iteration.interval < this.waitDoubleClickInterval) {
          this.isRunning = false;
          this.startButtonValue = 'Start';
          stopwatchButtonWait.classList.add('stopwatch__button--wait-clicked');
        }
    });
  }

  public reset() {
    this.isRunning = false;
    this.startButtonValue = 'Start';
    this.time = 0;
    this.hours = '00';
    this.minutes = '00';
    this.seconds = '00';
  }

  public ngOnInit() {
    timer(0, 1000).subscribe(() => {
      if(this.isRunning) {
        this.time++;
        this.seconds = Math.floor(this.time % 3600 % 60);
        this.minutes = Math.floor(this.time % 3600 / 60);
        this.hours = Math.floor(this.time / 3600);

        if (this.hours < 10) {
          this.hours = '0' + this.hours;
        };

        if (this.minutes < 10) {
          this.minutes = '0' + this.minutes;
        };

        if (this.seconds < 10) {
          this.seconds = '0' + this.seconds;
        };
      }
    });
  }
}
