/*

Task:
Create a component named LimitedButtonA. This component should render ButtonA
underneath and accept the same props as ButtonA with the additional prop named
maxClicks. After the button has been clicked maxClicks times it disappears.

After that create a component LimitedButtonB that uses ButtonB.

After that create a component LimitedButtonNative that uses a native button.

*/

import {LimitedButtonA} from "./LimitedButtonA";
import { LimitedButtonB } from "./LimitedButtonB";
import {LimitedButtonNative} from "./LimitedButtonNative";

export function CustomButtonTask() {
  return (
      <div>
        Task: Custom Button
          <LimitedButtonA maxClick={5} onClick={() => console.log("click!")} color={'red'} > Button A </LimitedButtonA>
          <LimitedButtonB maxClick={2} onClick={() => console.log("click button B!")} > Button B </LimitedButtonB>
          <LimitedButtonNative
              onClick={() => console.log("Native!")}
              maxClicks={2}
          >
              Button Native
          </LimitedButtonNative>
    </div>);
}
