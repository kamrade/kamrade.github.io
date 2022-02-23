export const companysOwnersShareholdersFoundersAndUltimateBeneficiaryOwnersInformation = {
  companyWithPubliclyTradedShares: {
    type: 'boolean',
    title: 'Company with publicly traded shares',
    description: 'The customer or his main direct shareholder is a company with publicly traded shares'
  },
  ISINCode: {
    type: 'text',
    title: 'ISIN Code of the company',
    condition: 'companyWithPubliclyTradedShares === true' // CONDITION
  },



  // Owner Shareholder Founder[] --- This is an array
  ownerShareholderFounders: {
    name: {
      type: 'text',
      title: 'Name'
    },
    surname: {
      type: 'text',
      title: 'Surname'
    },
    companyName: {
      type: 'text',
      title: 'Company name'
    },

    // Personal code for Lithuanian residents or date of birth for foreign residents, code of company
    isLithuanianResident: {
      type: 'boolean',
      title: 'Has residence of Lithuania'
    },
    personalCode: {
      type: 'text',
      title: 'Personal code',
      condition: 'isLithuanianResident === true'
    },
    dateOfBirth: {
      type: 'text',
      title: 'Date of birth',
      condition: 'isLithuanianResident === false'
    },
    codeOfCompany: {
      type: 'text',
      title: 'Code of company',
      condition: 'isLithuanianResident === false'
    },

    addressOfResidence: {
      type: 'text | address',
      title: 'Address of residence'
    },
    addressOfCompany: {
      type: 'text | address',
      title: 'Address of company'
    },
    citizenship: {
      type: 'text',
      title: 'Citizenship (only for natural persons)'
    },
    share: {
      type: 'number',
      title: 'Share in, %'
    }
  },

  // Ultimate Beneficiary Owner[] --- This is an array
  ultimateBeneficiaryOwner: {
    name: {
      type: 'text',
      title: 'Name'
    },
    surname: {
      type: 'text',
      title: 'Surname'
    },

    // Personal code for Lithuanian residents or date of birth for foreign residents, code of company
    isLithuanianResident: {
      type: 'boolean',
      title: 'Has residence of Lithuania'
    },
    personalCode: {
      type: 'text',
      title: 'Personal code',
      condition: 'isLithuanianResident === true'
    },
    dateOfBirth: {
      type: 'text',
      title: 'Date of birth',
      condition: 'isLithuanianResident === false'
    },
    addressOfResidence: {
      type: 'text | address',
      title: 'Address of residence'
    },
    citizenship: {
      type: 'text',
      title: 'Citizenship (only for natural persons)'
    },
    taxPayerCode: {
      type: 'text',
      title: 'Tax-Payer Code (please indicate if country does not issue TIN)'
    }
  },


  // Other members of customer’s management and supervisory bodies[] --- This is an array
  otherMembers: {
    name: {
      type: 'text',
      title: 'Name'
    },
    surname: {
      type: 'text',
      title: 'Surname'
    },
    dateAndCountryOfBirth: {
      type: 'text | date',
      title: 'Date and country of birth'
    },
    citizenship: {
      type: 'text',
      title: 'Citizenship'
    }
  }



}
