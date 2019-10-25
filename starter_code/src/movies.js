/* eslint no-restricted-globals: 'off' */

// Iteration 1: All rates average - Get the average of all rates with 2 decimals

function calculateAverageMovieRate(movies) {
    const moviesRates = movies.reduce((accumulator, value) => {
        return accumulator + value.rate

    }, 0);

    return (moviesRates / movies.length)
}

// Iteration 2: Drama movies - Get the average of Drama Movies

function calculateAverageDramaRate(movies) {
    const drama = movies.filter((value) => {
        return value.genre.includes("Drama")
    }); if (drama.length === 0) {
        return 0
    } else {
        return calculateAverageMovieRate(drama)
    }


}





// Iteration 3: Ordering by duration - Order by time duration, ascending (in growing order)





function orderByYear(movies) {
    const sortedYear = [...movies]
    return sortedYear.sort((a, b) => {
        if (a.year > b.year) {
            return 1;
        } else if (a.year < b.year) {
            return -1;
        } else {
            if (a.title > b.title) {
                return 1;
            } else if (a.title < b.title) {
                return -1;
            }

        }
    })
}





// Iteration 4: Steven Spielberg. The best? - How many movies did STEVEN SPIELBERG direct
let spielbergDrama = [];
function countSpielbergDramaMovies(movies) {
    spielbergDrama = movies.filter((value) => {
        return value.genre.includes("Drama") && value.director.includes('Steven Spielberg')
    }); if (spielbergDrama.length === 0) {
        return 0
    } else {
        return spielbergDrama.length
    }
}





// Iteration 5: Alphabetic Order - Order by title and print the first 20 titles
function orderAlphabetically(movies) {
    let sortedMovies = [...movies]
    sortedMovies.sort((a, b) => {
        if (a.title.toLowerCase() > b.title.toLowerCase()) {
            return 1
        } else if (a.title.toLowerCase() < b.title.toLowerCase()) {
            return -1
        } else {
            return 0
        }
    });
    let titlesList = sortedMovies.map((value) => value.title)
    return titlesList.slice(0, 20);
}



// Iteration 6: Time Format - Turn duration of the movies from hours to minutes
function turnHoursToMinutes(movies) {
    const timeList = movies.map((value) => { return { duration: value.duration.split(" ") } });
    const timeInMin = timeList.map((value) => {
        let sum = 0;
        /* console.log('value', value) */
        for (i = 0; i < value.duration.length; i++) {

            if (value.duration[i].includes("h")) {
                sum += parseInt(value.duration[i]) * 60;
              /*   console.log('value', value.duration[i])
                console.log(`adding hours in minutes-sum`, sum) */
            } else if (value.duration[i].includes("m")) {
                sum += parseInt(value.duration[i]);
               /*  console.log('value', value.duration[i])
                console.log(`adding minutes to hours-sum`, sum) */
            }
        }
        return { duration: sum };
    });
    return timeInMin;
}


