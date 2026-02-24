import { EventEmitter } from "events";

const birthdayEventEmitter = new EventEmitter();

const birthdayEventListener = (name) => {
  console.log(`Happy birthday, ${name}!`);
};

birthdayEventEmitter.on("birthday", birthdayEventListener);

birthdayEventEmitter.emit("birthday", "Alice");
birthdayEventEmitter.emit("birthday", "Bob");