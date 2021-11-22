const profileDataArgs = process.argv.slice(2, process.argv.length);
// console.log(profileDataArgs);

const printProfileData = profileDataArr => {
    for (let i = 0; i < profileDataArr.length; i++){
        console.log(profileDataArr[i])
    }
};

// can also be written as:
// profileDataArr.forEach((profileItem) => {
//     console.log(profileItem)
// });
// cleaned up =>
// profile.DataArr.forEach(profileItem => console.log(profileItem));

printProfileData(profileDataArgs);