export const companysOwnersShareholdersFoundersAndUltimateBeneficiaryOwnersInformation = {

  title: 'Company’s owners, shareholders, founders and ultimate beneficiary owners information',

  fields: {
    theCustomerOrHisMainDirectshareholderIsACompanyWithPubliclyTradedShares: {
      text: 'The customer or his main direct shareholder is a company with publicly traded shares',
      type: 'boolean'
    },

    ISINCodeOfTheCompany: {
      text: 'ISIN code of the company',
      type: 'text',
      condition: 'theCustomerOrHisMainDirectshareholderIsACompanyWithPubliclyTradedShares === true'
    },

    ownerShareholderFounder: {

      title: 'Owner, shareholder, founder',
      type: 'subFormRepeated',
      addButtonTitle: 'Owner, shareholder, founder',

      fields: {
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
          type: 'text | date',
          title: 'Date of birth',
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


      ultimateBeneficiaryOwner: {

        title: 'Ultimate beneficiary owner',
        type: 'subFormRepeated',
        addButtonTitle: 'Ultimate beneficiary owner',

        fields: {
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
            type: 'selector | countrySelector',
            title: 'Citizenship',
            info: 'only for natural persons'
          },
          taxPayerCode: {
            type: 'text',
            title: 'Tax-Payer Code',
            info: 'please indicate if country does not issue TIN'
          }
        }

      }
    }
  }
}
