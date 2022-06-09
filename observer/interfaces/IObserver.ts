/* eslint-disable no-unused-vars */

import ISubject from './ISubject';

interface IObserver {
  name: string;
  update(subject: ISubject): void;
}

export default IObserver;
