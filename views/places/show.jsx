const React = require('react')
const Def = require('../default')

function show (data) {
    let comments = (
        <h3 className="inactive">
            No comments yet!
        </h3>
    )
    if (data.place.comments.length) {
        comments = data.place.comments.map(c => {
          return (
            <div className="border">
              <h2 className="rant">{c.rant ? 'Rant! ' : 'Rave! '}</h2>
              <h4>{c.content}</h4>
              <h3>
                <stong>- {c.author}</stong>
              </h3>
              <h4>Rating: {c.stars}</h4>
            </div>
          )
        })
      }
    return (
        <Def>
          <main>
            <h1>{ data.place.name }</h1>
          </main>
          <body>
            <div>            
                <img src={data.place.pic} alt={data.place.name} />
                <h3
                    >Located in {data.place.city}, {data.place.state}.  
                </h3>
                <h2>
                    Description
                </h2>
                <h3>
                    {data.place.showEstablished()}
                </h3>
                <h4>
                    Serving {data.place.cuisines}
                </h4>
            </div>
            <div>
                <h2>Rating</h2>
                <p>unrated</p>
            </div>
            <div>
                <h2>Comments</h2>
                {comments}
                    <a href={`/places/${data.id}/edit`} className="btn btn-warning"> 
                        Edit
                    </a> 
                    <form method="POST" action={`/places/${data.id}?_method=DELETE`}>
                        <button type="submit" className="btn btn-danger">
                            Delete
                        </button>
                    </form>
            </div>
            <form method="POST" action={`/places/${data.place.id}/comment/?_method=POST`}>
                <label htmlFor="author">Author:</label>
                <input type="text" id="author" name="author" required/>
                <label htmlFor="content">Content:</label>
                <textarea id="content" name="content" required></textarea>
                <label htmlFor="stars">Star Rating:</label>
                <input type="number" id="stars" name="stars" step="0.5" required />
                <label htmlFor="rant">Rant:</label>
                <input type="checkbox" id="rant" name="rant"/>
                <input className="btn btn-primary" type="submit" value="Add Comment" />
            </form>
          </body>
        </Def>
    )
}

module.exports = show


