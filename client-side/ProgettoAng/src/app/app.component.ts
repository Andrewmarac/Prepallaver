import { Component, OnInit } from '@angular/core';
import {HttpClient} from '@angular/common/http';
@Component({
selector: 'app-root',
templateUrl: './app.component.html',
styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
results: string[];

constructor(private http: HttpClient) {}
ngOnInit(): void {
this.http.get('https://3000-fce1168c-0748-4f8c-ac91-da678227605e.ws-eu01.gitpod.io/api').subscribe(data => {

this.results = data['results'];
});
}
}
