export class User {

  [propName: string]: any;
  private id: number;
  public name: string;
  public room: string;

  // Represents a participating user in the chat.
  //
  // id      - A unique ID for the user.
  // options - An optional Hash of key, value pairs for this user.
  constructor (id: number, options: { [propName: string]: any; } = {}) {
    this.id = id;

    Object.keys(options).forEach((key) => {
      this[key] = options[key]
    });

    if (!this.name) {
      this.name = this.id.toString()
    }
  }
}

