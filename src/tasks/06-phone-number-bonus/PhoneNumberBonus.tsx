/*

Task:
Create an input that accepts and formats phone numbers into XXX-XXX-XXX.
The user should be able to type numbers and the dashes should insert themselves
automatically.

Example #1:
The user types 1 2 3 4. The input shows 123-4.

Example #2:
The user types 1 2 3 4 BACKSPACE. The input shows 123. Note the lack of dash!

*/

import { useState } from "react";

export function PhoneNumberBonus() {
  const [phone, setPhone] = useState("");

  function onChange(value: string) {
    if (isNonEmptyString(value) && value.length % 4 == 0 && value.slice(-1) != "-") {
      let index: number = value.length - 1;
      value = addStr(value, index, "-");
      setPhone(value);
    }
    else {
      setPhone(value);
    }
  }

  function addStr(str: string, index: number, stringToAdd: string) {
    return str.substring(0, index) + stringToAdd + str.substring(index, str.length);
  }

  function isNonEmptyString(str: string) {
    return str && str.length > 0;
  }


  return <div>Bonus: Phone Number
    <input value={phone} onChange={(e) => onChange(e.target.value)} />

  </div>;
}
