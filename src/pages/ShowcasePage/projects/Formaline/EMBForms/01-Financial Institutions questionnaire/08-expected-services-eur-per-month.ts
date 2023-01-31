export const expectedServicesEURPerMonth = {

  title: 'Expected services. EUR per month',

  fields: {
    allIncomingTransfers: {
      title: 'All incoming transfers',
      type: `selector | range
          0
          1-50000
          50001-500000
          500001-more
        `
    },
    incomingCrossBorderNumberOfTransactions: {
      title: 'Incoming cross- border number of transactions, units',
      type: `selector | range
          0-100
          101-1000
          1001-5000
          5001-more
        `
    },
    incomingCrossBorderPaymentsValue: {
      title: 'Incoming cross- border payments value',
      type: `selector | range
          0
          1-50000
          50001-500000
          500001-more
        `
    },
    specifyFromWhichCountries: {
      title: 'Specify from which countries',
      type: 'multiSelector | countryMultiSelector',
    },


    allOutgoingTransfers: {
      title: 'All Outgoing transfers',
      type: `text | range
          0
          1-50000
          50001-500000
          500001-more
        `
    },
    outgoingCrossBorderNumberOfTransactionsUnits: {
      title: 'Outgoing cross- border number of transactions, units',
      type: `text | range
          0-100
          101-1000
          1001-5000
          5001-more
        `
    },
    outgoingCrossBorderPaymentsValue: {
      title: 'Outgoing cross-border payments value',
      type: `text | range
          0
          1-50000
          50001-500000
          500001-more
        `
    },
    specifyToWhichCountries: {
      title: 'Specify to which countries',
      type: 'text | countryMultiSelector',
    },


    cashDeposit: {
      title: 'Cash deposit',
      type: `text | range
          0
          1-5000
          5001-50000
          50000-more
        `
    },
    pleaseExplainTheOriginOfCash: {
      title: 'Please explain the origin of cash',
      type: 'text',
      condition: 'cashDeposit > 5000'
    },


    cashWithdrawal: {
      title: 'Cash withdrawal',
      type: `text | range
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
      type: `text | range
          0
          1-5000
          5001-50000
          50000-more
        `,
      title: 'Currency exchange'
    },
    cardPayments: {
      title: 'Card payments',
      type: `text | range
          0
          1-5000
          5001-50000
          50000-more
        `
    },
    loans: {
      title: 'Loans',
      type: `text | range
          0
          1-5000
          5001-50000
          50000-more
        `
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


}
