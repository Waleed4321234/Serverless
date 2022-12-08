import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddfriendmodalComponent } from './addfriendmodal.component';

describe('AddfriendmodalComponent', () => {
  let component: AddfriendmodalComponent;
  let fixture: ComponentFixture<AddfriendmodalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddfriendmodalComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AddfriendmodalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
