import { TestBed, async } from '@angular/core/testing';
import { ProjectsPageComponent } from './projectspage.component';
describe('AppComponent', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        ProjectsPageComponent
      ],
    }).compileComponents();
  }));
  it('should create the app', async(() => {
    const fixture = TestBed.createComponent(ProjectsPageComponent);
    const app = fixture.debugElement.componentInstance;
    expect(app).toBeTruthy();
  }));
  it(`should have as title 'mobileFrontend'`, async(() => {
    const fixture = TestBed.createComponent(ProjectsPageComponent);
    const app = fixture.debugElement.componentInstance;
    expect(app.title).toEqual('mobileFrontend');
  }));
});
