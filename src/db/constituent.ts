import { Address } from "./address";

export class Constituent {
  static records = [
    {
      id: "00000001",
      uuid: "d4059871-c79a-41ff-ba72-42b563743a2a",
      createdAt: "2024-01-04T15:50:30.000Z",
      updatedAt: "2024-01-04T15:50:30.000Z",
      email: "jolie@indigov.com",
      firstName: "Jolie",
      middleName: "Grace",
      lastName: "Spiegelman",
    },
  ];

  static find() {
    return this.records.map((record) => {
      const address = Address.findOneByConstituentId(record.id);
      return {
        ...record,
        address,
      };
    });
  }
}
