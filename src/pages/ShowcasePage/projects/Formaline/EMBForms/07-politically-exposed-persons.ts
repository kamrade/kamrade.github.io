export const politicallyExposedPersons = {
  politicallyExposedPersons: {
    title: 'Politically exposed persons',
    type: `CheckboxGroup |
    NO
    Head of State, Head of Government, Minister, Vice-minister or Deputy Minister, Secretary of State or Chancellor of Parliament, Government or Ministry
    Member of Parliament
    Member of Supreme Court, Constitutional Court or other high-level judicial body whose decisions are not subject to further appeal
    Mayor of municipality or Director of municipal administration
    Member of the management body of supreme audit and control institution
    Chairman, Deputy Chairman or Member of Board of Central Bank
    Ambassador, Chargé d’affaires, Envoy Extraordinary or Minister Plenipotentiary
    High-ranking officer in the armed forces
    Member of the management or supervisory body of state or municipal enterprise or limited liability company whose part of shares carrying more than 1⁄2 of all the votes at the general meeting of shareholders are owned by the state or municipality
    Head, Deputy Head or Member of management or supervisory body of international intergovernmental organization
    Head, Deputy Head or Member of management body of political party
    
  `,

    description: 'Does any representative or owner of the company or his close family members2 or close associate3 entrust or during the past 12 months entrusted any of below mentioned functions in Lithuania, in the European Union, in international or foreign state institutions?',

    hints: `
    Politically exposed person – a natural person who is or was during the past 12 months, entrusted with prominent public functions in the Republic of Lithuania, the European Union, international or foreign state institutions as well as close family members or close associates of such person.
    Close family members – the spouse, the person with whom partnership has been registered (hereinafter referred to as the ‘cohabiting partner’), parents, brothers, sisters, children and children’s spouses, children’s cohabitant partners.
    Close associate: 
      1. a natural person who, together with the person who is/was entrusted with the above mentioned prominent public functions, participates in the same legal entity or maintains other business relations;
      2. a natural person who is the only owner of the legal entity set up or operating de facto with the aim of acquiring property or another personal benefit for the person entrusted with the prominent public functions.
  `,
  },
  entrustedPersons: {
    type: `CheckboxGroup |
      I myself
      My close family member
      My close associate
    `,
    title: 'Specify the person, entrusted any of the above-mentioned functions'
  },

  specificPEP: {
    type: 'text',
    title: 'Specify the name, surname, institution and position of politically exposed person'
  },

  eeasonForAccountOpening: {
    type: 'text',
    title: 'Reason for account opening'
  }

}
