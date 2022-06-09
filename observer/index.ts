import ZapGroupSubject from './concrete/ZapGroupSubject';
import ZapObserver from './concrete/ZapObserver';

const zapGroup = new ZapGroupSubject();

const john = new ZapObserver('John');

zapGroup.attach(john);

zapGroup.addMessage('Hello!');
zapGroup.addMessage('Good morning!');

zapGroup.detach(john);
const anna = new ZapObserver('Anna');
zapGroup.attach(anna);

zapGroup.addMessage('~Good morning sticker~');
zapGroup.addMessage('Where\'s John?');

zapGroup.attach(john);
zapGroup.addMessage('John is back!');
