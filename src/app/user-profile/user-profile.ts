import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  imports: [FormsModule],
  selector: 'app-user-profile',
  styleUrl: './user-profile.css',
  templateUrl: './user-profile.html',
})
export class UserProfile {
    User = {
      name : 'Doe',
      firstName : 'John',
      age : 25,
      quote : '',
      photo : 'https://randomuser.me/api/portraits/lego/2.jpg'
  };
  ageMasque = false;
}
