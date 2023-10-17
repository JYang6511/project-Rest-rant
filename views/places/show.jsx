const React = require('react')
const Def = require('../default')

function show (data) {
    return (
        <Def>
          <main>
            <h1>{ data.place.name }</h1>
          </main>
          <body>
            <div>            
                <img src={data.place.pic} alt={data.place.name} />
                <h2>Description</h2>
                <p>Located in {data.place.city}, {data.place.state}.  They are serving {data.place.cuisines}</p>
            </div>
            <div>
                <h2>Rating</h2>
                <p>unrated</p>
            </div>
            <div>
                <h2>Comments</h2>
                <p>No Comments yet!</p>
            </div>
          </body>
        </Def>
    )
}

module.exports = show

