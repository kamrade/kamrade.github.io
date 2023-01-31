export const informationAboutTheSubstidiaries = {

  title: 'Information about the substidiaries',

  fields: {

    numberOfDomesticSubsidiaries: {
      type: 'text | number',
      title: 'Number of domestic subsidiaries'
    },
    numberOfForeignSubsidiaries: {
      type: 'text | number',
      title: 'Number of foreign subsidiaries'
    },
    numberOfDomesticBranches: {
      type: 'text | number',
      title: 'Number of domestic branches'
    },
    numberOfForeignBranches: {
      type: 'text | number',
      title: 'Number of foreign branches'
    },
    numberOfEmployees: {
      type: 'text | number',
      title: 'Number of employees'
    },
    eMail: {
      type: 'text | email',
      title: 'E-mail'
    },
    phone: {
      type: 'text | phone',
      title: 'Phone'
    },
    website: {
      type: 'text | url',
      title: 'Website'
    },
    BICCode: {
      type: 'text | bic',
      title: 'SWIFT/BIC code'
    },
    FATCA_GIIN: {
      question: 'What is that?'
    }
  }

}
