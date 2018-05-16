let value = 0;

export default class SharedThing {
  static get value() {
    return value;
  }

  static set value(aValue) {
    console.log(`Setting shared thing to ${aValue}`);
    value = aValue;
  }
}
