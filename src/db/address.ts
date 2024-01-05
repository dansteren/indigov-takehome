export class Address {
  static records = [
    {
      id: "00000001",
      uuid: "0bd69841-e1bc-4f92-88cf-e019eddc3508",
      createdAt: "2024-01-04T15:50:30.000Z",
      updatedAt: "2024-01-04T15:50:30.000Z",
      constituentId: "00000001",
      street: "42 Wallaby Way",
      city: "Syndney",
      state: "NY",
      zip: "84010",
    },
  ];

  static find() {
    return this.records;
  }

  static findOneByConstituentId(constituentId: string) {
    return this.records.find(
      (record) => record.constituentId === constituentId
    );
  }
}
