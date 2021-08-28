/*

Task:
Create a textarea that you can paste text into and display the word count below.

Hint:
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/split

*/

import { useState } from "react";

export function WordCountTask() {
  const [word, setWord] = useState("");
  const count = word.split(" ").length;

  return <div>Task: Word Count
    <textarea value={word} onChange={e => setWord(e.target.value)} />
    <p>{count}</p>
  </div>;
}
