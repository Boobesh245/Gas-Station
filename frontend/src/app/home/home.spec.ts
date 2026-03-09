import { ComponentFixture, TestBed } from '@angular/core/testing';
import { provideRouter } from '@angular/router'; // Import this
import { Home } from './home';

describe('Home', () => {
  let component: Home;
  let fixture: ComponentFixture<Home>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Home],
      providers: [
        provideRouter([]) // Provide an empty routes array for testing
      ]
    }).compileComponents();

    fixture = TestBed.createComponent(Home);
    component = fixture.componentInstance;
    fixture.detectChanges(); // Use detectChanges() to trigger initial data binding
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});