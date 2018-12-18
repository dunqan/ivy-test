import { TestBed, async } from '@angular/core/testing';
import { UuuComponent } from './uuu.component';

describe('UuuComponent', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        UuuComponent
      ],
    }).compileComponents();
  }));

  it('should create the app', () => {
    const fixture = TestBed.createComponent(UuuComponent);
    const app = fixture.debugElement.componentInstance;
    expect(app).toBeTruthy();
  });

  it(`should have as title 'ivy-test'`, () => {
    const fixture = TestBed.createComponent(UuuComponent);
    const app = fixture.debugElement.componentInstance;
    expect(app.title).toEqual('ivy-test');
  });

  it('should render title in a h1 tag', () => {
    const fixture = TestBed.createComponent(UuuComponent);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('h1').textContent).toContain('Welcome to ivy-test!');
  });
});
