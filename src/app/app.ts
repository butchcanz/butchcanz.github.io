import { ChangeDetectionStrategy, Component, OnInit, signal } from '@angular/core';
import { RouterModule } from '@angular/router';
import { LoadingScreen } from './components/loading-screen/loading-screen';

@Component({
  selector: 'app-root',
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [RouterModule, LoadingScreen],
  template: `
    @if (loading()) {
      <app-loading-screen />
    }
    <router-outlet />
  `,
})
export class App implements OnInit {
  readonly loading = signal(true);

  ngOnInit(): void {
    setTimeout(() => this.loading.set(false), 800);
  }
}
