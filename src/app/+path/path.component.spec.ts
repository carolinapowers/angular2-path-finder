/* tslint:disable:no-unused-variable */

import { By }           from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import {
  beforeEach, beforeEachProviders,
  describe, xdescribe,
  expect, it, xit,
  async, inject
} from '@angular/core/testing';

import { PathComponent } from './path.component';

describe('Component: Path', () => {
  it('should create an instance', () => {
    let component = new PathComponent();
    expect(component).toBeTruthy();
  });
});
