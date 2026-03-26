import { Component } from '@angular/core';
import { Navbar } from '../../layout/navbar/navbar';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-evenement',
  imports: [Navbar,CommonModule],
  templateUrl: './evenement.html',
  styleUrl: './evenement.css',
})
export class Evenement {
  activeTab: string = 'clients';

}
