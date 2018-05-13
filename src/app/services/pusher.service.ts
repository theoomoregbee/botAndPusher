import { Injectable } from '@angular/core';
import * as Pusher from 'pusher-js';

// this is here to discourage the instantianting of pusher any where its
// needed, better to reference it from one place
@Injectable()
export class PusherService {
private _pusher: any;

constructor() {
  this._pusher = new Pusher('8b80c72e54c8883d8baa', {
    cluster: 'eu',
    encrypted: true
  });
}

getPusher() {
  return this._pusher;
}

}
