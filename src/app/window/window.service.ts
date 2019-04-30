import {Injectable} from '@angular/core';

@Injectable()
export class WindowService extends Window {}

export function windowFactory(): Window {
  return window;
}