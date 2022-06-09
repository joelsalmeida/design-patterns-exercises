import IObserver from '../interfaces/IObserver';
import ISubject from '../interfaces/ISubject';
import ZapGroupSubject from './ZapGroupSubject';

class ZapObserver implements IObserver {
  name: string;

  private _messagesReceived: string[];

  constructor(name: string) {
    this.name = name;
    this._messagesReceived = [];
  }

  update(subject: ISubject): void {
    if (subject instanceof ZapGroupSubject) {
      const lastMessage = subject.messages[subject.messages.length - 1];
      this._messagesReceived.push(lastMessage);

      console.log(`${this.name}: I was Notified!`);
      console.log(`Messages received: ${this._messagesReceived}`);
    }
  }
}

export default ZapObserver;
