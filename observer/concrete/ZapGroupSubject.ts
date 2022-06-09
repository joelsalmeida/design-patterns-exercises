import IObserver from '../interfaces/IObserver';
import ISubject from '../interfaces/ISubject';

class ZapGroupSubject implements ISubject {
  public messages: string[];

  private _observers: IObserver[];

  constructor() {
    this.messages = [];
    this._observers = [];
  }

  attach(observer: IObserver): void {
    this._observers.push(observer);
    console.log(`ZapGroup: ${observer.name} observer attached. \n`);
  }

  detach(observer: IObserver): void {
    this._observers = this._observers.filter((currObserver) => currObserver !== observer);
    console.log(`ZapGroup: ${observer.name} observer detached. \n`);
  }

  notify(): void {
    console.log('##### ZapGroup: Notifying...');
    this._observers.forEach((observer) => observer.update(this));
    console.log('##### ZapGroup: Observers notified. \n');
  }

  public addMessage(newMessage : string) {
    this.messages.push(newMessage);
    this.notify();
  }
}

export default ZapGroupSubject;
