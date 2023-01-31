export const customerInformation = {
  title: 'Customer Information',

  fields: {
    legalName: {
      type: 'text',
      title: 'Legal name'
    },
    legalFormOfFinancialInstitution: {
      type: 'text', // Select?
      title: 'Legal form of financial institution'
    },
    registrationNumber: {
      type: 'text',  // Number?
      title: 'Registration number'
    },
    dateOfRegistration: {
      type: 'text | date',
      title: 'Date of registration'
    },
    countryOfIncorporation: {
      type: 'selector | countrySelector',
      title: 'Country of incorporation'
    },
    addressOfRegistration: {
      type: 'text | address',
      title: 'Address of registration (if applicable)'
    },
    addressOfCorrespondence: {
      type: 'text | address',
      title: 'Address of correspondence (if applicable)'
    },

    // Licensing authority, country and license number
    licensing: {
      type: 'title',
      title: 'Licensing'
    },
    licensingAuthority: {
      type: 'text',
      title: 'Licensing authority'
    },
    licensingCountry: {
      type: 'text | countrySelector',
      title: 'Licensing country'
    },
    licenseNumber: {
      type: 'number',
      title: 'License number'
    },
    licensingSeparator: {
      type: 'separator'
    },
    //- Licensing authority, country and license number

    nameOfTheRegulatorSupervisoryAuthority: {
      type: 'text',
      title: 'Name of the regulator/supervisory authority'
    },
    termOfValidityOfTheLicense: {
      type: 'text | date',
      title: 'Term of validity of the license'
    },
    FIOrFIs_ParentalCompanyIsListedOnTheStockExchange: {
      type: 'boolean',
      title: 'FI or FI‘s parental company is listed on the stock exchange'
    },
    taxpayerIdentificationNumber: {
      type: 'text | number',
      title: 'Taxpayer Identification Number',
      description: '(if non-resident company does not have Taxpayer Identification Number,please specify the Foreign Organization Code)'
    }
  }

};
