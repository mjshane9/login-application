import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../services/auth.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {
timer:any=30000
  constructor(
    public authService:AuthService,
    private router:Router,
    ) {
   }

  ngOnInit(): void {
    let ticker=this.timer;
    setTimeout(() => {
      localStorage.clear()
      // this.router.navigate(['login']);

    },ticker);
  }

  resetTimer(){
    this.timer=30000;
  }

  logout(){
    localStorage.clear();
  }

}
