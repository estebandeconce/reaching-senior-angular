import { Component } from '@angular/core';
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

  constructor(private writersService: WritersService) {
    this.arrWriters = [];
  }

  ngOnInit() {
    this.arrWriters = this.writersService.getAll();
  }

  async filterByCountry(event: Event) {
    try {
      this.arrWriters = await this.writersService.getByCountry((event.target as HTMLSelectElement).value);
    } catch (error) {
      console.log(error);
    }
  }
}
