import { Component } from '@angular/core';
import { Firestore, collection, addDoc } from '@angular/fire/firestore';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  data = {
    name: '',
    password: '',
    email: '',
  };

  constructor(private firestore: Firestore) {}
  async save() {
    console.log('save');
    try {
      const collectionInstance = collection(this.firestore, 'users');

      const res = await addDoc(collectionInstance, this.data)
        .then(() => console.log('eeee'))
        .catch((e) => console.log(e));
      console.log(res);
    } catch (e) {
      console.error(e);
    } finally {
    }
  }
}
