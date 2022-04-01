interface PhoneNumberDictionary {
  [phone: string]: {
    num: number;
  };
}

interface Contact {
  name: string;
  address: string;
  phones: PhoneNumberDictionary;
}

enum PhoneTypes {
  Hoem = 'home',
  Office = 'office',
  Studio = 'studio',
}

export { Contact, PhoneTypes };
