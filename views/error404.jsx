const React = require('react')
const Def = require('./default')

function error404 () {
    return (
      <Def>
          <main>
              <h1>404: PAGE NOT FOUND</h1>
              <p>Oops, sorry, we can't find this page!</p>
              <div>
                <img src="/images/breathe404.jpg" alt="breathe sign"/>
                <div>
                  Photo by <a href="https://unsplash.com/@maxvdo?utm_content=creditCopyText&utm_medium=referral&utm_source=unsplash">Max van den Oetelaar</a> on <a href="https://unsplash.com">Unsplash</a>
                </div>
              </div>
          </main>
      </Def>
    )
  }
  
module.exports = error404
