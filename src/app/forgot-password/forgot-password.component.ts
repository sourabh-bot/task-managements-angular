import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-forgot-password',
  imports: [RouterModule, FormsModule],
  templateUrl: './forgot-password.component.html',
  styleUrl: './forgot-password.component.css'
})
export class ForgotPasswordComponent {
      title = 'Forgot Password';

      forgotPasswordUser: ForgotPasswordUser = {
        email: ''
      };


      onSubmit(){
        console.log(this.forgotPasswordUser);
      }


}

interface ForgotPasswordUser{
  email: string;
}
