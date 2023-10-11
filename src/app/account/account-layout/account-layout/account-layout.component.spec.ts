import { ComponentFixture, TestBed } from '@angular/core/testing';
import { AccountLayoutComponent } from './account-layout.component';



describe('AccessLayoutComponent', () => {
  let component: AccountLayoutComponent;
  let fixture: ComponentFixture<AccountLayoutComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AccountLayoutComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AccountLayoutComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
