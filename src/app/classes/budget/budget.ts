export class Budget {
    constructor(
        public budgetName: string,
        public amount: number,
        public budgetFor: string, 
        public dateFrom: Date,
        public dateTo: Date,
      ) {}
}
