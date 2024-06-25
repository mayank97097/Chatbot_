import { ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';
import { MyComponent } from './my.component';

describe('MyComponent', () => {
  let component: MyComponent;
  let fixture: ComponentFixture<MyComponent>;
  let debugElement: DebugElement;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [MyComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MyComponent);
    component = fixture.componentInstance;
    debugElement = fixture.debugElement;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should display the title in a h1 element', () => {
    const title = 'Test Title';
    component.title = title;
    fixture.detectChanges();
    const h1Element = debugElement.query(By.css('h1')).nativeElement;
    expect(h1Element.textContent).toBe(title);
  });
});
