/* eslint-disable no-unused-vars */

import IObserver from './IObserver';

interface ISubject {
  attach(observer: IObserver):void;
  detach(observer: IObserver): void;
  notify(): void;
}

export default ISubject;
