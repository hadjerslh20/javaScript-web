// 1. Create variable name(favActorFirstName) & store your fav actor name.
// 2. Create variable name(favActorLastName) & store the last name of fav actor.
// 3. Create variable name(fullName) & concatenate (favActorFirstName, favActorLastName).
// 4. Create variable name(uppercase) & capitalize your fav actor name .
// 5. Create variable name(message) & store `My favourite actor is (favActorName) & say something about your fav actor` name should be in UPPERCASE.
// 6. Now Append this message to the (message variable) `hiss best show is silicon valley`.
// 7. Now Log your Message.
let favActorFirstName="Hadjer";
let favActorLastName="Si Salah";
let fullName =favActorFirstName+" "+favActorLastName; // or :let fullName =favActorFirstName.concat(favActorLastName)
let uppercase = fullName.toUpperCase();
let message = `My favourite actor is ${uppercase}`;
message+= ` hiss best show is silicon valley`;
console.log(message);

