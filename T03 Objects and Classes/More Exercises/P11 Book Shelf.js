function bookShelf(array) {
    let shelves = []
    array.forEach((element) => {
        if (element.includes('->')) {
            let currentArray = element.split(' -> ')
            let id = currentArray[0]
            let bookGenre = currentArray[1]

            let flag = true

            shelves.forEach((currentShelf) => {
                if (currentShelf.id == id) {
                    flag = false
                    return
                }

            })

            if (flag) {
                let shelf = {
                    id: id,
                    genre: bookGenre,
                    books: []
                }

                shelves.push(shelf)
            }

        } else if (element.includes(':')) {
            let innerArray = element.split(': ')
            let bookTitle = innerArray[0]
            let bookAuthor = innerArray[1].split(', ')[0]
            let bookGenre = innerArray[1].split(', ')[1]

            shelves.forEach((currentShelf) => {
                if (currentShelf.genre == bookGenre) {
                    currentShelf.books.push([bookTitle, bookAuthor])
                    return
                }
            })
        }
    })

    shelves
        .sort((first, second) => second.books.length - first.books.length)
        .forEach((currentShelf) => {
            console.log(currentShelf.id + ' ' + currentShelf.genre + ': ' + currentShelf.books.length)
            currentShelf.books
                .sort((first, second) => first[0].localeCompare(second[0]))
                .forEach((currentArray) =>
                    console.log('--> ' + currentArray[0] + ': ' + currentArray[1]))

        })

}

// Inputs:

// bookShelf(['1 -> history', '1 -> action', 'Death in Time: Criss Bell, mystery', '2 -> mystery', '3 -> sci-fi', 'Child of Silver: Bruce Rich, mystery', 'Hurting Secrets: Dustin Bolt, action', 'Future of Dawn: Aiden Rose, sci-fi', 'Lions and Rats: Gabe Roads, history', '2 -> romance', 'Effect of the Void: Shay B, romance', 'Losing Dreams: Gail Starr, sci-fi', 'Name of Earth: Jo Bell, sci-fi', 'Pilots of Stone: Brook Jay, history'])

bookShelf(['1 -> mystery', '2 -> sci-fi',
    'Child of Silver: Bruce Rich, mystery',
    'Lions and Rats: Gabe Roads, history',
    'Effect of the Void: Shay B, romance',
    'Losing Dreams: Gail Starr, sci-fi',
    'Name of Earth: Jo Bell, sci-fi']
)

// Each shelf has id and bookGenre
// Each book has a title, an author, a genre

// the input is an array of strings:
// 1. {shelf id} -> {shelf genre} - creating a shelf if the id is not taken
// 2. {book title}: {book author}, {book genre} - If the shelf with that genre exists, the book should be added to the shelf

// shelf1               shelf2

// id                     id2
// bookGenre              bookGenre 2
// [book1, book2...]      [book3, book4]


// book

// title
// author
