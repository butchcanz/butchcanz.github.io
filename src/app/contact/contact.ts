import { ChangeDetectionStrategy, Component, inject, signal } from '@angular/core';
import { FormBuilder, ReactiveFormsModule, Validators } from '@angular/forms';
import { SectionHeader } from '../components/section-header/section-header';
import { ThemedLogo } from '../components/themed-logo/themed-logo';
import { ScrollRevealDirective } from '../directives/scroll-reveal.directive';
import { PortfolioService } from '../services/portfolio.service';

@Component({
  selector: 'app-contact',
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [ReactiveFormsModule, ThemedLogo, SectionHeader, ScrollRevealDirective],
  templateUrl: './contact.html',
})
export class Contact {
  private readonly fb = inject(FormBuilder);
  private readonly portfolio = inject(PortfolioService);

  readonly personal = this.portfolio.personal;
  readonly socialLinks = this.portfolio.socialLinks;
  readonly submitted = signal(false);
  readonly submitting = signal(false);

  readonly form = this.fb.nonNullable.group({
    name: ['', [Validators.required, Validators.minLength(2)]],
    email: ['', [Validators.required, Validators.email]],
    message: ['', [Validators.required, Validators.minLength(10)]],
  });

  get nameCtrl() {
    return this.form.controls.name;
  }
  get emailCtrl() {
    return this.form.controls.email;
  }
  get messageCtrl() {
    return this.form.controls.message;
  }

  onSubmit(): void {
    if (this.form.invalid) {
      this.form.markAllAsTouched();
      return;
    }

    this.submitting.set(true);
    const { name, email, message } = this.form.getRawValue();

    const subject = encodeURIComponent(`Portfolio Contact from ${name}`);
    const body = encodeURIComponent(`Name: ${name}\nEmail: ${email}\n\n${message}`);
    window.location.href = `mailto:${this.personal.email}?subject=${subject}&body=${body}`;

    setTimeout(() => {
      this.submitting.set(false);
      this.submitted.set(true);
      this.form.reset();
    }, 500);
  }
}
