export const businessArea = {
  title: 'Business area',

  fields: {

    agriculture: {
      title: 'Agriculture, forestry and fishing',
      type: 'boolean'
    },
    miningAndQuarring: {
      title: 'Mining and quarrying',
      type: 'boolean'
    },

    manufacturing: {
      title: 'Manufacturing',
      type: 'boolean'
    },
    kindOfProduct: {
      title: 'Kind of product',
      type: 'text',
      condition: 'Manufacturing === true'
    },
    addressOfFactory: {
      title: 'Address of factory',
      type: 'text',
      condition: 'Manufacturing === true'
    },

    energySupplies: {
      title: 'Energy supplies',
      type: 'boolean'
    },
    constructionWorks: {
      title: 'Construction works',
      type: 'boolean'
    },


    trading: {
      title: 'Trading',
      type: 'multiSelector | (Used cars, Real Estate, Arms and ammunition, Metals and jewelry, Oil products, Other goods – specify)',
      condition: 'Trading === true'
    },
    otherGoods: {
      title: 'Other goods',
      type: 'text',
      condition: 'particularTraiding === Other goods – specify'
    },



    storageAndLogistics: {
      title: 'Storage and logistics',
      type: 'boolean'
    },
    ITAndCommunications: {
      title: 'IT and communications',
      type: 'boolean'
    },
    charities: {
      title: 'Charities',
      type: 'boolean'
    },
    nonGovernmentalOrganizations: {
      title: 'Non-governmental organizations',
      type: 'boolean'
    },

    services: {
      title: 'Services',
      type: 'multiSelector | (Beauty, Consulting, Advertising and marketing, Legal, Other – specify)',
      condition: 'Trading === true'
    },
    otherServices: {
      title: 'Other service',
      type: 'text',
      condition: 'servicesList === Other goods – specify'
    },

    gamblingAndBetting: {
      title: 'Gambling and betting – specify country and number of license',
      type: 'boolean'
    },
    stateOrMunicipalInstitution: {
      title: 'State or municipal institution',
      type: 'boolean'
    },
    educationAndScience: {
      title: 'Education and science',
      type: 'boolean'
    },
    healthAndSocialCare: {
      title: 'Health and social care',
      type: 'boolean'
    },
    artsEntertainmentAndSports: {
      title: 'Arts, entertainment and sports',
      type: 'boolean'
    },
    financialServices: {
      title: 'Financial services – fill additional Questionnaire for Financial Institution',
      type: 'boolean'
    },
    other: {
      title: 'Other – specify',
      type: 'text',
      condition: 'other === true'
    },


    specialLicense: {
      title: 'Please specify if your business activity requires a special license, if yes please specify if this license is publicly available, if not please provide a copy and license number:',
      type: 'textarea'
    }


  }
}
