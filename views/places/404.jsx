const React = require("react");
const Def = require("./default");
function error404() {
  return (
    <Def>
      <main>
      <div>
          <img src="/images/marvel.jpg" alt="marvel" />
        </div>
        <div>
          Photo By:<a href="Author_link">Eiliv-Sonas Aceron</a>
          <a href="https://unsplash.com/photos/ZuIDLSz3XLg?utm_source=unsplash&utm_medium=referral&utm_content=creditShareLink">
            Unsplash
          </a>
        </div>
      </main>
    </Def>
  );
}

app.get("*", (req, res) => {
  res.render("error404");
});

module.exports = error404;
