export const representativesInformation = {

  title: 'Representatives information',

  fields: {

    names: {
      type: 'text',
      title: 'Name(s)'
    },
    surnames: {
      type: 'text',
      title: 'Surname(s)'
    },
    personalCodeOrDateOfBirth: {
      type: 'text | date',
      title: 'Personal code or Date of birth',
      question: 'Not clearly understand the meaning of this field'
    },
    citizenship: {
      type: 'selector | countrySelector',
      title: 'Citizenship'
    },
    addressOfResidence: {
      type: 'text | address',
      title: 'Address of residence'
    },
    phone: {
      type: 'text | phone',
      title: 'Phone'
    },
    email: {
      type: 'text | email',
      title: 'E-mail'
    },
    typeOfDocument: {
      type: 'selector | documentSelector ("Passport | ID Card | Residence permit, issued by EEE country")',
      title: 'Type of document'
    },
    documentNumber: {
      type: 'text',
      title: 'Document number'
    },
    validUntil: {
      type: 'text | date',
      title: 'Valid until'
    },
    position: {
      type: 'selector | positionSelector("CEO | Power of attorney")',
      title: 'Position'
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
