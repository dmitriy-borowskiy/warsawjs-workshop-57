/*

Task:
Create a component that presents some basic information about you.

1. Display your firstName and lastName in the same paragraph.
2. Update the display so that firstName is UPPERCASE
3. Create an image element that displays your favorite picture
4. Set the background of the main div to be your favorite color

*/

const firstName = "Dima";
const lastName = "Borowski";
const favoritePictureUrl = "https://pbs.twimg.com/media/DPy3_stW4AExs1G.jpg";
const favoriteColor = "blue";

export function AboutMeTask() {
  return <div style={{
    backgroundColor: favoriteColor
  }}>Task:
    <p>First name: {firstName.toUpperCase()}</p>
    <p>Last name: {lastName}</p>
    <img src={favoritePictureUrl}></img>
  </div>;
}
