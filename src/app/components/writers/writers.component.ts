import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Writer } from 'src/app/models/writer.model';
import { WritersService } from 'src/app/services/writers.service';

@Component({
  selector: 'app-writers',
  templateUrl: './writers.component.html',
  styleUrls: ['./writers.component.css']
})
export class WritersComponent {
  country: string;
  arrWriters: Writer[];

  constructor(private writersService: WritersService, private router: Router) {
    this.arrWriters = [];
    this.country = '';
  }

  ngOnInit() {
    this.arrWriters = this.writersService.getAll();
  }

  /* writers/id/:writerId */

  goToWriter(writerId: number): void {
    this.router.navigate([`/writers/id/${writerId}`])
  }

  async filterByCountry($event) {
    try {
      this.country = $event.target.value;
      this.router.navigate([`/writers/country/${this.country}`], { queryParams: { country: this.country } })
      this.arrWriters = await this.writersService.getByCountry(this.country);
    } catch (error) {
      console.log(error);
    }
  }
}
