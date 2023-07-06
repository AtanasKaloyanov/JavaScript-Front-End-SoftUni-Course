function browser(history, commands) {
    let openTabs = history['Open Tabs']
    let closedTabs = history['Recently Closed']
    let browserLogs = history['Browser Logs']

    commands.forEach((commandAndSiteAsString) => {
        let commandAndSite = commandAndSiteAsString.split(' ')
        let command = commandAndSite[0]
        let site = commandAndSite[1]

        if (command == 'Open') {
            openTabs.push(site)
            browserLogs.push(commandAndSiteAsString)

        } else if (command == 'Close' && openTabs.includes(site)) {
            let siteIndex = openTabs.indexOf(site)
            openTabs.splice(siteIndex, 1)
            closedTabs.push(site)
            browserLogs.push(commandAndSiteAsString)
        } else if (commandAndSiteAsString == 'Clear History and Cache') {
            openTabs = []
            closedTabs = []
            browserLogs = []
        }
    })

    console.log(history['Browser Name'])
    console.log('Open Tabs: ' + openTabs.join(', '))
    console.log('Recently Closed: ' + closedTabs.join(', '))
    console.log('Browser Logs: ' + browserLogs.join(', '))
}

// Inputs:

// browser({
//     "Browser Name": "Google Chrome", "Open Tabs": ["Facebook", "YouTube", "Google Translate"],
//     "Recently Closed": ["Yahoo", "Gmail"],
//     "Browser Logs": ["Open YouTube", "Open Yahoo", "Open Google Translate", "Close Yahoo", "Open Gmail", "Close Gmail", "Open Facebook"]
// },
//     ["Close Facebook", "Open StackOverFlow", "Open Google"]
// )

// browser({"Browser Name":"Mozilla Firefox",
// "Open Tabs":["YouTube"],
// "Recently Closed":["Gmail", "Dropbox"],
// "Browser Logs":["Open Gmail", "Close Gmail", "Open Dropbox", "Open YouTube", "Close Dropbox"]},
// ["Open Wikipedia", "Clear History and Cache", "Open Twitter"]
// )

// input: 2 parameters: a JSON object and an array of string
// The JSON must be parsed into an object:

// json :

// {
//     browserName: String,
//     openTabs: [a, b, c]
//     recentlyClosed: [a, b, c]
//     browserLogs: [a, b, c]
// }

// Than must be filled in based on the actions from the string array:
// opening the site -> adding it to the open tabs
// closing the tabs (only if they are opened) -> removing from "Open Tabs" and adding to "Recently closed"
// Browser logs holds evert valid action
// Clear History and Cache -> empty the whole object

// Output: Printing

// {"Browser Name":"Google Chrome","Open Tabs":["Facebook","YouTube","Google Translate"],
//     "Recently Closed":["Yahoo","Gmail"],
//     "Browser Logs":["Open YouTube","Open Yahoo","Open Google Translate","Close Yahoo","Open Gmail","Close Gmail","Open Facebook"]}


//     ["Close Facebook", "Open StackOverFlow", "Open Google"]

