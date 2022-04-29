export const existingAccountsWithTheBanks = {
  title: 'Existing Accounts with the Banks',

  fields: {

    existingAccountsWithTheBanks: {
      title: 'Bank',
      type: 'arrayForm',

      fields: {
        key: {
          title: 'Name',
          type: 'text'
        },
        value: {
          title: 'Country',
          type: 'selector | countrySelector'
        }
      }
    },

    annualTurnover: {
      title: 'Annual turnover of the legal entity, EUR',
      type: 'text'
    },

    taxResidenceCountry: {
      title: 'Tax residence country',
      type: 'selector | countrySelector'
    },

    taxResidenceTIN: {
      title: 'Tax residence TIN (if country does not issue TIN, please specify)',
      type: 'text'
    },

    sourceOfFundsInTheAccount: {
      title: 'Source of funds in the account',
      type: 'subForm',
      fields: [{
        title: 'Company shareholders’ funds',
        type: 'boolean'
      }, {
        title: 'Borrowed funds',
        type: 'boolean'
      }, {
        title: 'Government grants',
        type: 'boolean'
      }, {
        title: 'Income from sales of products or services',
        type: 'boolean'
      }, {
        title: 'Other (specify)',
        type: 'boolean'
        // тут надо опциональный текст инпут
      }]
    }


  },
}
