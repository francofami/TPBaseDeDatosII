import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-chat-firestore',
  templateUrl: './chat-firestore.component.html',
  styleUrls: ['./chat-firestore.component.css']
})
export class ChatFirestoreComponent implements OnInit {

    constructor(private http: HttpClient) {
    
  }

  items = [];
  opcion: String = "";

  ngOnInit(): void {
  }

  aQueHora(): void {
    this.opcion = "aQueHora";
  }

  llamarApi(coleccion: String, llamada: String) {
    this.items = [];
    this.opcion = llamada;
    
    this.http.get("https://tp-base-de-datos.herokuapp.com/"+coleccion+"/"+llamada).toPromise().then(data => {
      //this.http.get("http://localhost:8080/"+coleccion+"/"+llamada).toPromise().then(data => {

      console.log(data);
      console.log(this.opcion);

      for (let key in data) {
        if (data.hasOwnProperty(key)) {
          this.items.push(data[key as never]);
        }
      }
      
    });
  }

  

}
