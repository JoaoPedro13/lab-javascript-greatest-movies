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


const sortedMovies = [...MOVIES]


function orderByYear(sortedMovies) {
    return sortedMovies.sort((a, b) => {
        if (a.year > b.year) {
            return 1
        } else if (a.year < b.year) {
            return -1
        } else {
            if(a.title> b.title){
                return 1
            }else if(a.title< b.title){
                return -1
            }
                
        }
    })
}

// Iteration 4: Steven Spielberg. The best? - How many movies did STEVEN SPIELBERG direct
let spielbergDrama=[];
function countSpielbergDramaMovies(movies){
    spielbergDrama = movies.filter((value) => {
        return value.genre.includes("Drama") && value.director.includes('Steven Spielberg')
    }); if (spielbergDrama.length === 0) {
        return 0
    } else {
        return spielbergDrama.length
    }
}

// Iteration 5: Alphabetic Order - Order by title and print the first 20 titles

let moviesAlphabetically = [ ...MOVIES]
function orderAlphabetically(movies){
    

}

// Iteration 6: Time Format - Turn duration of the movies from hours to minutes

// BONUS Iteration: Best yearly rate average - Best yearly rate average
