function comments(input) {
    let articles = {}
    let usersArray = []
    let articlesArray = []
    input.forEach((currentElement) => {

        if (currentElement.includes('user')) {
            let array = currentElement.split(' ')
            let username = array[1]
            usersArray.push(username)
        } else if (currentElement.includes('article')) {
            let array = currentElement.split(' ')
            let articleName = array[1]
            articlesArray.push(articleName)
        } else if (currentElement.includes('posts')) {
            // Mark posts on someArticle: NoTitle, stupidComment
            let array = currentElement.split(': ')

            let innerArray1 = array[0].split(' posts on ')
            let username = innerArray1[0]
            let articleName = innerArray1[1]

            if (usersArray.includes(username) && articlesArray.includes(articleName)) {
                let commentTitleAndComment = array[1].replace(', ', ' - ')

                if (!articles.hasOwnProperty(articleName)) {
                    articles[articleName] = []
                }

                articles[articleName].push([username, commentTitleAndComment])
            }
        }
    })

    Object.entries(articles)
        .sort( (first, second) => second[1].length - first[1].length)
        .forEach( (entry) => {
            console.log('Comments on ' + entry[0])
            entry[1]
                .sort( (first, second) =>  first[0].localeCompare(second[0]))
                .forEach( (element) => {
                    console.log('--- From user ' + element[0] + ': ' + element[1])
                })
        })

}

// comments(['user aUser123', 'someUser posts on someArticle: NoTitle, stupidComment', 'article Books', 'article Movies', 'article Shopping', 'user someUser', 'user uSeR4', 'user lastUser', 'uSeR4 posts on Books: I like books, I do really like them', 'uSeR4 posts on Movies: I also like movies, I really do', 'someUser posts on Shopping: title, I go shopping every day', 'someUser posts on Movies: Like, I also like movies very much'])

// comments(['user Mark', 'Mark posts on someArticle: NoTitle, stupidComment', 'article Bobby', 'article Steven', 'user Liam', 'user Henry', 'Mark posts on Bobby: Is, I do really like them', 'Mark posts on Steven: title, Run', 'someUser posts on Movies: Like'])

// key                           value (Object)
//                   innerKey (String)    inner value String
//
// article                 user               :       ....
//                   comment title -  content :        ...
//
//
// article                 user2               :       ....
//                   comment title -  content2 :        ...
//
//
// article                 user               :       ....
//                   comment title -  content :        ...
//
//
// article                 user2               :       ....
//                   comment title -  content2 :        ...
//
//

// this task is about storing information about users and their comments. The comment is an object with title and content
// The user can comment only when he is in the list of users and the article is in the list of articles

// input - The input is an array of strings:
// 1. user {username} - add the user to the list of user
// 2. article {article name} - add the user to user list
// 3. {username} posts on {article name}: {comment title}, {comment content}

// output: the article must be sorted by the count of the comments, the users must be printed with their comments ordered by usernames in ascending


