export const customerInformation = {
  title: 'Customer Information',

  fields: {
    legalName: {
      type: 'text',
      title: 'Legal name'
    },
    legalForm: {
      type: 'text',
      title: 'Legal form'
    },
    legalEntityIsAFinancialInstitution: {
      title: 'Legal entity is a financial institution',
      type: 'boolean'
    },
    registrationNumber: {
      title: 'Registration number',
      type: 'text'
    },
    registrationDate: {
      title: 'Registration date',
      type: 'text | date'
    },
    fullRegisteredOfficeAddress: {
      title: 'Full registered office address',
      type: 'text'
    },
    legalEntityIsAPublicAuthority: {
      title: 'Legal entity is a public authority',  // Looks like boolean
      type: 'text'
    },
    fullMailingAddress: {
      title: 'Full mailing address',
      info: 'Full mailing address (if not the same as the registered address)',
      type: 'text | email'
    },
    countryOfIncorporation: {
      title: 'Country of incorporation',
      type: 'selector | countrySelector'
    },
    numberOfEmployees: {
      title: 'Number of employees',
      type: 'number'
    },
    emailAddress: {
      title: 'E-mail address',
      type: 'text | email'
    },
    phoneNumber: {
      title: 'Phone number',
      type: 'text | phone'
    },
    webPage: {
      title: 'Web page',
      type: 'text | url'
    }

  }

}
