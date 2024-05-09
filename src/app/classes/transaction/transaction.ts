export class Transaction {
    constructor(
        public date: Date,
        public category: string, 
        public amount: number,
        public paymentMethod: string,
        public type: string,
      ) {}
}
