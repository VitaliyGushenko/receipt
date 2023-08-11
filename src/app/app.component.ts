import { Component, OnInit } from '@angular/core';
import { AuthService } from './shared/services/auth.service';
// import {
//   Firestore,
//   collection,
//   addDoc,
//   doc,
//   deleteDoc,
//   updateDoc,
//   deleteField,
//   getDoc,
//   query,
//   where,
//   getDocs,
// } from '@angular/fire/firestore';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
  // data = {
  //   name: '',
  //   password: '',
  //   email: '',
  // };

  constructor(public auth: AuthService) {}

  async ngOnInit(): Promise<void> {
    this.auth.isLoading$.next(true);
    this.auth.initAuth();
  }
  // async save() {
  //   console.log('save');
  //   try {
  //     const collectionInstance = collection(this.firestore, 'users');

  //     const res = await addDoc(collectionInstance, this.data)
  //       .then(() => console.log('eeee'))
  //       .catch((e) => console.log(e));
  //     console.log(res);
  //   } catch (e) {
  //     console.error(e);
  //   } finally {
  //   }
  // }
  // async del() {
  //   console.log('delete');
  //   try {
  //     const collectionInstance = collection(this.firestore, 'users');

  //     const res = await deleteDoc(
  //       doc(this.firestore, 'users', 'FBR2yOqQ2kugmkPxp6bw')
  //     )
  //       .then((e) => console.log('удалили: ', e))
  //       .catch((e) => console.log(e));
  //     console.log(res);
  //   } catch (e) {
  //     console.error(e);
  //   } finally {
  //   }
  // }
  // async upd() {
  //   console.log('upd');
  //   try {
  //     const cityRef = doc(this.firestore, 'users', '6SFX4nGuervv1xMyCDTS');
  //     // const collectionInstance = collection(this.firestore, 'users');

  //     const res = await updateDoc(cityRef, {
  //       email: '1',
  //       name: '1',
  //       password: '1',
  //     })
  //       .then((e) => console.log('обновили: ', e))
  //       .catch((e) => console.log(e));
  //     console.log(res);
  //   } catch (e) {
  //     console.error(e);
  //   } finally {
  //   }
  // }
  // async getDoc() {
  //   console.log('get doc');
  //   try {
  //     const docRef = doc(this.firestore, 'users', '6SFX4nGuervv1xMyCDTS');
  //     const docSnap = await getDoc(docRef);
  //     console.log(docSnap.data());
  //   } catch (e) {
  //     console.error(e);
  //   } finally {
  //   }
  // }
  // async getDocs() {
  //   console.log('get docs');
  //   try {
  //     const q = query(
  //       collection(this.firestore, 'users'),
  //       where('password', '==', '1')
  //     );
  //     const querySnapshot = await getDocs(q);
  //     const b = [] as any[];
  //     querySnapshot.forEach((e) => b.push(e.data()));
  //     console.log(b);
  //   } catch (e) {
  //     console.error(e);
  //   } finally {
  //   }
  // }
}
