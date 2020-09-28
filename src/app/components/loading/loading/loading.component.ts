import { Component } from '@angular/core';
import { LoadingService } from 'app/services/loading/loading.service';

@Component({
  selector: 'app-loading',
  templateUrl: './loading.component.html',
  styleUrls: ['./loading.component.scss'],
})
export class LoadingComponent {
  color = 'primary';

  mode = 'indeterminate';

  isLoading: boolean = this.loadingService.isLoading;

  constructor(private loadingService: LoadingService) {}
}
