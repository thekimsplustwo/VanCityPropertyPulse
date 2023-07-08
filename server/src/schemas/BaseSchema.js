import { Schema } from 'mongoose';

export class BaseSchema extends Schema {
  constructor(schema) {
    super(schema);
    this.set('toJSON', {
      virtuals: true,
      transform: (doc, converted) => {
        delete converted._id;
      },
    });
  }
}
