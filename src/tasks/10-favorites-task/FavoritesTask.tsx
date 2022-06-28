/*

Task:
Add interactivity. Extract an EmojiRating component. This component should have
a state that determines whether or not it was rated and what was the rating. The
"Dog" is an example of an unrated emoji while the "Cat" is an example of a rated
one.

*/

import { EmojiRating } from "../10-favorites-task/EmojiRating";

export function FavoritesTask() {
  return (
    <div style={{ maxWidth: 600 }}>
      <h1>Rate emojis!</h1>
      <ul>
        <li>
          <EmojiRating emoji="🦊" name='Fox' />
        </li>
        <li>
          <EmojiRating emoji="🦍" name='Gorilla' />
        </li>
        <li>
          <EmojiRating emoji="🐈" name='Cat' />
        </li>
        <li>
          <EmojiRating emoji="🐕" name='Dog' />
        </li>
        <li>
          <EmojiRating emoji="🐘" name='Elephant' />
        </li>
      </ul>
    </div>
  );
}
