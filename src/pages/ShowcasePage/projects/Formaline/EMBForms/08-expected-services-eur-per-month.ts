export const expectedServicesEURPerMonth = {
  allIncomingTransfers: {
    type: `text |
      0
      1-50000
      50001-500000
      500001-more
    `,
    title: 'All incoming transfers'
  },
  incomingCrossBorderNumberOfTransactions: {
    title: 'Incoming cross- border number of transactions, units',
    type: `text |
      0-100
      101-1000
      1001-5000
      5001-more
    `
  },
  incomingCrossBorderPaymentsValue: {
    title: 'Incoming cross- border payments value',
    type: `text |
      0
      1-50000
      50001-500000
      500001-more
    `
  },
  specifyFromWhichCountries: {
    title: 'Specify from which countries',
    type: 'text | countryMultiSelector',
  },



  allOutgoingTransfers: {
    type: `text |
      0
      1-50000
      50001-500000
      500001-more
    `,
    title: 'All Outgoing transfers'
  },
  outgoingCrossBorderNumberOfTransactionsUnits: {
    title: 'Outgoing cross- border number of transactions, units',
    type: `text |
      0-100
      101-1000
      1001-5000
      5001-more
    `
  },
  outgoingCrossBorderPaymentsValue: {
    type: `text |
      0
      1-50000
      50001-500000
      500001-more
    `,
    title: 'Outgoing cross-border payments value'
  },
  specifyToWhichCountries: {
    title: 'Specify to which countries',
    type: 'text | countryMultiSelector',
  },



  cashDeposit: {
    type: `text |
      0
      1-5000
      5001-50000
      50000-more
    `,
    title: 'Cash deposit'
  },
  pleaseExplainTheOriginOfCash: {
    title: 'Please explain the origin of cash',
    type: 'text',
    condition: 'cashDeposit > 5000'
  },



  cashWithdrawal: {
    type: `text |
      0
      1-5000
      5001-50000
      50000-more
    `
  },
  pleaseExplainThePurposeOfSuchWithdrawal: {
    title: 'Please explain the purpose of such withdrawal',
    type: 'text',
    condition: 'cashDeposit > 5000'
  },


  currencyExchange: {
    type: `text |
      0
      1-5000
      5001-50000
      50000-more
    `,
    title: 'Currency exchange'
  },
  cardPayments: {
    type: `text |
      0
      1-5000
      5001-50000
      50000-more
    `,
    title: 'Card payments'
  },
  loans: {
    type: `text |
      0
      1-5000
      5001-50000
      50000-more
    `,
    title: 'Loans'
  },



  other: {
    type: 'text',
    title: 'Other'
  },



  dateOfFillingQuestionnaire: {
    type: 'text | date',
    title: 'Date of filling Questionnaire'
  }



}
