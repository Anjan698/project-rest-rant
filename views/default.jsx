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
                <a href="/places">
</a>

            </body>
        </html>
    )
}

module.exports = Def
