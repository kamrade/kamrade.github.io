export const representativeInformation = {
  title: 'Representative Information',

  fields: {
    namesSurnames: {
      title: 'Name(s), Surname(s)',
      type: 'text'
    },
    personalCodeOrDateOfBirth: {
      title: 'Personal code or Date of birth',
      type: 'text'
    },
    citizenship: {
      title: 'Citizenship',
      type: 'selector | countrySelector'
    },
    addressOfResidence: {
      title: 'Address of residence',
      type: 'text'
    },
    emailAddress: {
      title: 'E-mail address',
      type: 'text | email'
    },
    phoneNumber: {
      title: 'Phone number',
      type: 'text | phone'
    },
    typeOfADocument: {
      title: 'Type of document',
      type: 'selector | documentSelector (Passport, ID Card, Residence permit, issued by EEE country)'
    },
    documentNumber: {
      title: 'Document number',
      type: 'text'
    },
    validUntil: {
      title: 'Valid until',
      type: 'text | date'
    },
    position: {
      title: 'Position',
      type: 'selector | positionSelector (CEO, Power of Attorney)'
    },

    // If Power of Attorney, then CEO data must be filled below
    CEOname: {
      type: 'text',
      title: 'CEO name',
    },
    CEOsurname: {
      type: 'text',
      title: 'CEO surname'
    },
    CEOpersonalCodeOrDateOfBirth: {
      type: 'text',
      title: 'Personal code or Date of birth'
    },
    CEOcitizenship : {
      type: 'text',
      title: 'Citizenship'
    },
    CEOaddressOfResidence : {
      type: 'text',
      title: 'Address of residence'
    },
    CEOphone: {
      type: 'text | phone',
      title: 'Phone'
    },
    CEOemail: {
      type: 'text | email',
      title: 'Email'
    }

  }

}
