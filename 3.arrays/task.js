"use strict";

function compareArrays(arr1, arr2) {
    if (arr1.length === arr2.length) {
      return arr1.every((element, i) => element === arr2[i]); 
    }
    return false;
  }

  function getUsersNamesInAgeRange(users, gender) {
    if ((gender !== "мужской" && gender !== "женский") || (users === [])) {
      return 0;
    } else {
      return users.filter(user => user.gender === gender).map(user => user.age).reduce((usAge, next, index, genderArr) => {
        usAge += next;
        if (index === genderArr.length - 1) {
          return usAge / genderArr.length;
        }
        return usAge;
      }, 0)
    }
  }
