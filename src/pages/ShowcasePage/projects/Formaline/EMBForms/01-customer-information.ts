export const customerInformation = {
  title: 'Customer Information',

  fields: {
    legalName: {
      type: 'text',
      title: 'Legal name'
    },
    legalFormOfFinancialInstitution: {
      type: 'text | number',
      title: 'Legal form of financial institution'
    },
    registrationNumber: {
      type: 'text | number',
      title: 'Registration number'
    },
    countryOfIncorporation: {
      type: 'text | countrySelector',
      title: 'Country of incorporation'
    },
    addressOfRegistration_if_applicable: {
      type: 'text | address',
      title: 'Address of registration (if applicable)'
    },
    addressOfCorrespondence_if_applicable: {
      type: 'text | address',
      title: 'Address of correspondence (if applicable)'
    },
    // Licensing authority, country and license number

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
