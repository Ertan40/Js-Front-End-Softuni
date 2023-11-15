function comments (input) {
    let users = []
    let articles = []
    let comments = {}
    for (let data of input) {
        let d = data.split(' ')
        // console.log(d) // ['user', 'aUser123']   ['someUser', 'posts', 'on', 'someArticle:', 'NoTitle,', 'stupidComment']
        if (d.includes('user')) {
            let userName = d.pop()
            users.push(userName) // ['aUser123', 'someUser', 'uSeR4', 'lastUser']
        } else if (d.includes('article')) {
            let articleName = d.pop()
            articles.push(articleName) // ['Books', 'Movies', 'Shopping']
            comments [articleName] = []
        } else {
            let new_data = data.split(': '); // ['someUser posts on someArticle', 'NoTitle, stupidComment']
            let first = new_data[0].split(' '); // ['someUser', 'posts', 'on', 'someArticle']
            let user = first.shift();
            first.shift();
            first.shift();
            let article = first.shift(); // books Movies Shopping 
            let second = new_data[1].split(', ');
            let title = second.shift(); // NoTitle
            let content = second.shift(); // stupidComment
            if (users.includes(user) && articles.includes(article)) {
                comments[article].push({'user': user, 'title': title, 'content': content}) 
                // console.log(comments)  // {Books: Array(1), Movies: Array(0), Shopping: Array(0)}
            } 
        }
    }
    const sortable = Object.entries(comments)
    .sort(([,a],[,b]) => b.length - a.length).reduce((r, [k, v]) => ({ ...r, [k]: v }), {});
    for (let key in sortable) {
        console.log(`Comments on ${key}`)
        let sorted = comments[key].sort((a, b) => a['user'].localeCompare(b['user']))
        sorted.forEach(element => {
            console.log(`--- From user ${element.user}: ${element.title} - ${element.content}`)
        });
    }
}
comments (['user aUser123', 'someUser posts on someArticle: NoTitle, stupidComment', 'article Books', 'article Movies', 'article Shopping',
 'user someUser', 'user uSeR4', 'user lastUser', 'uSeR4 posts on Books: I like books, I do really like them',
 'uSeR4 posts on Movies: I also like movies, I really do', 'someUser posts on Shopping: title, I go shopping every day',
 'someUser posts on Movies: Like, I also like movies very much'])