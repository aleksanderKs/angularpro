import { Component, OnInit } from '@angular/core';
import { AngularFireDatabase } from 'angularfire2/database';
import { Observable } from 'rxjs/Observable';

@Component({
  selector: 'app-contacts',
  templateUrl: './contacts.component.html',
  styleUrls: ['./contacts.component.css']
})



export class ContactsComponent implements OnInit {

nameContact: Observable<any[]>;
constructor(private db: AngularFireDatabase) {}

ngOnInit() {
  this.nameContact = this.getContact("allData");
}

getContact(listPath): Observable<any[]> {
  var con = this.db.list(listPath).valueChanges();
  console.log(con);
  return con;
}



};
