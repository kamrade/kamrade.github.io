export const otherImportantInformation = {

  title: 'Other important information',

  fields: {

    // Name and address of external auditor
    nameOfExternalAuditor: {
      title: 'Name of external auditor',
      type: 'text'
    },
    addressOfExternalAuditor: {
      title: 'Address of external auditor',
      type: 'text'
    },


    theDateOfTheLastAudit: {
      title: 'The date of the last audit',
      type: 'text | date'
    },

    contactsOfEmployeeResponsibleForAMLItems: {
      title: 'Contacts of employee, responsible for AML items',

      name: {
        type: 'text',
        title: 'Name'
      },
      surname: {
        type: 'text',
        title: 'Surname'
      },
      phone: {
        type: 'text | phone',
        title: 'Phone'
      },
      email: {
        type: 'text | email',
        title: 'Email'
      },
    },

  }


}
