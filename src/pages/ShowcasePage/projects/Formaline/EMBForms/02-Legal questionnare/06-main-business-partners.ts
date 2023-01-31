export const mainBusinessPartners = {
  title: 'Main Business Partners (customers, suppliers, etc.)',
  type: 'subFormRepeated',

  fields: {

    partnerName: {
      title: 'Partner name',
      type: 'text',
    },

    countryOfRegistration: {
      title: 'Country of registration',
      type: 'selector | countrySelector',
    },

    businessArea: {
      title: 'Business Area',
      type: 'text',
    }

  },
}
