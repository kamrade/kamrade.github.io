export const statisticsOfExistingCustomers = {
  approximateNumberOfPrivateCustomers: {
    type: 'number',
    title: 'Approximate number of private customers'
  },
  approximateNumberOfCorporateCustomers: {
    type: 'number',
    title: 'Approximate number of corporate customers'
  },
  customersFromOtherJurisdictions: {
    type: 'number',
    title: 'Customers from other jurisdictions, %',
    description: 'Percent of customers from other jurisdictions,than company is registered'
  },

  approximateNumberOfCustomersOfType: {
    politicallyExposedPersons: {
      type: 'number',
      title: 'Politically Exposed Persons'
    },
    paymentsOrMoneyServices: {
      type: 'number',
      title: 'Payments or Money Services'
    },
    armsAndOtherMilitaryEquipmentTrading: {
      type: 'number',
      title: 'Arms and other military equipment trading'
    },
    gambling: {
      type: 'number',
      title: 'Gambling'
    },
    charities: {
      type: 'number',
      title: 'Charities'
    },
    onGnovernmentalOrganizations: {
      type: 'number',
      title: 'Non-governmental organizations'
    },
    companiesFromOffshores: {
      type: 'number',
      title: 'Companies from “Tax Haven” jurisdictions (“offshore”)'
    },
    cashBasedIndustry: { // Duplicate?
      type: 'number',
      title: 'Cash based industry',
      description: '(e.g. money exchange offices)'
    },
    adultRelated: {
      type: 'number',
      title: 'Adult related',
      description: '(e.g. pornography, dating services, escort services etc.)'
    },
    dualGoods: {
      type: 'number',
      title: 'Dual goods which can be used for illegal purposes',
      description: '(e.g. laser technology, various chemicals)'
    },
    pharmaceuticalsOrDrugs: {
      type: 'number',
      title: 'Pharmaceuticals or drugs'
    },
    productionOrTradeOfPreciousMetalsJewels: {
      type: 'number',
      title: 'Production or Trade of precious metals/jewels'
    }
  },


  // Countries, where the customer operates most[] 3?
  countriesWhereTheCustomerOperatesMost: {
    country: {
      type: 'text | country',
      titile: 'Country'
    },
    percentage: {
      type: 'number',
      title: 'Percentage'
    }
  },


  // Main Correspondent (Nostro) Accounts with the Banks[] 3?
  mainCorrespondentAccountsWithTheBanks: {
    bankName: {
      type: 'text',
      title: 'Bank name'
    },
    country: {
      type: 'text | country',
      title: 'Bank country'
    }
  }
}
