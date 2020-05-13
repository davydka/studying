// --- Directions
// Create an 'eventing' library out of the
// Events class.  The Events class should
// have methods 'on', 'trigger', and 'off'.

class Events {
  constructor() {
    this.events = {};
  }
  // Register an event handler
  on(eventName, callback) {
    if (!this.events[eventName]) {
      this.events[eventName] = [];
    }
    this.events[eventName].push(callback);
  }

  // Trigger all callbacks associated
  // with a given eventName
  trigger(eventName) {
    if(this.events[eventName]) {
      this.events[eventName].forEach(evt => evt());
    }
  }

  // Remove all event handlers associated
  // with the given eventName
  off(eventName) {
    // this.events[eventName] = [];
    delete this.events[eventName];
  }
}

const cb1 = () => {console.log('yea')}
const cb2 = () => {console.log('dawg')}
const events = new Events();
events.on('click', cb1);
events.on('click', cb2);
events.trigger('click');

module.exports = Events;
