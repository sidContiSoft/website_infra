import { TestBed } from '@angular/core/testing';
import { provideRouter } from '@angular/router';
import { App } from './app';
import { COMPANY, PROJECTS, SERVICES, PROJECT_CATEGORIES } from './core/site.data';

describe('Supreme Electromech site', () => {
  beforeEach(async () => {
    document.body.style.overflow = '';
    await TestBed.configureTestingModule({
      imports: [App],
      providers: [provideRouter([])],
    }).compileComponents();
  });

  it('renders the header, content outlet and footer', async () => {
    const fixture = TestBed.createComponent(App);
    fixture.detectChanges();
    await fixture.whenStable();

    const element = fixture.nativeElement as HTMLElement;
    expect(element.querySelector('app-site-header')).toBeTruthy();
    expect(element.querySelector('router-outlet')).toBeTruthy();
    expect(element.querySelector('app-site-footer')).toBeTruthy();
    expect(element.querySelector('a[href="#main-content"]')).toBeTruthy();
  });

  it('keeps the primary contact details correct', () => {
    expect(COMPANY.phones.map((phone) => phone.href)).toContain('tel:+919999116118');
    expect(COMPANY.emails.map((email) => email.label)).toEqual([
      'supremelectropower@gmail.com',
      'info@supremeinfraprojact.com',
      'sales@supremeinfraproject.com',
    ]);
  });

  it('has complete service and project data', () => {
    expect(SERVICES.length).toBe(8);
    expect(new Set(SERVICES.map((service) => service.id)).size).toBe(SERVICES.length);
    expect(PROJECTS.length).toBeGreaterThanOrEqual(6);
    for (const project of PROJECTS) {
      expect(PROJECT_CATEGORIES).toContain(project.category);
      expect(project.scope.length).toBeGreaterThan(0);
      expect(project.image.startsWith('assets/img/')).toBe(true);
    }
  });

  it('shows exactly six featured projects on the home page data set', () => {
    expect(PROJECTS.filter((project) => project.featured).length).toBe(6);
  });
});
