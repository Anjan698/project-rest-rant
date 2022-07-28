const React = require('react')

function Def (html) {
    return (
        <html>
            <head>
            <link rel="stylesheet" href="/css/style.css"/>
                <title>Title</title>
                
            </head>
            <body>
                {html.children}
            </body>
        </html>
    )
}

module.exports = Def
