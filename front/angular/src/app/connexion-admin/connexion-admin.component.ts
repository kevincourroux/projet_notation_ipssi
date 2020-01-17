import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-login',
  templateUrl: './connexion-admin.component.html',
  styleUrls: ['./connexion-admin.component.css']
})

export class ConnexionAdminComponent implements OnInit {
  constructor(private http:HttpClient) { }

  ngOnInit() {
    let resp = this.http.get("http://localhost:3000/user");
    resp.subscribe((data) => console.log(data));
    
  }
}