import { Component } from '@angular/core';
import { AuthService } from 'src/app/shared/services/auth.service';
import { NzMessageService } from 'ng-zorro-antd/message';
import { NzAlertModule } from 'ng-zorro-antd/alert';
import { UserCredential } from 'firebase/auth';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss'],
})
export class RegisterComponent {
  data = {
    password: '',
    email: '',
  };

  constructor(
    public authService: AuthService,
    private readonly _msg: NzMessageService
  ) {}
  async loginOrRegister(reg: boolean = false) {
    try {
      if (reg) {
        const data: UserCredential = await this.authService.doRegister(
          this.data
        );
        //  .then(
        //     (res) => {
        //       console.log(res);
        //     },
        //     (err) => {
        //       console.log(err);
        //       console.log(this);
        //       this._msg.error('Ошибка регистрации');
        //     }
        //   );
        console.log(data);
      } else {
        await this.authService.enter(this.data);
      }
    } catch (e: any) {
      this._msg.error('Ошибка: ', e);
    } finally {
    }
  }
}
