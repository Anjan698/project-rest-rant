const React = require("react");
const Def = require("./default");

function home() {
  return (
    <Def>
      <main>
        <h1>HOME</h1>
        <div>
          <img src="/images/salad.jpg" alt="Salad" />
        </div>
        <div>
          Photo By:<a href="Author_link">Eiliv-Sonas Aceron</a>
          <a href="https://unsplash.com/photos/ZuIDLSz3XLg?utm_source=unsplash&utm_medium=referral&utm_content=creditShareLink">
            Unsplash
          </a>
        </div>
        <a href="/places">
          <button className="btn-primary">Places Page</button>
        </a>
      </main>
    </Def>
  );
}

module.exports = home;
