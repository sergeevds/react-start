var my_news = [
    {
        author: 'Alex',
        text: 'News 1...'
    },
    {
        author: 'Vasia',
        text: 'I hope it will be a great party'
    },
    {
        author: 'Guest',
        text: 'It is absolutely free!!!'
    }
];

var Article = React.createClass({
    render: function() {
        var article = this.props.article;

        return (
            <div className='article'>
                <p className="news__author">{article.author}:</p>
                <p className="news__text">{article.text}</p>
            </div>
        )
    }
});

var News = React.createClass({
   render: function() {
       var data = this.props.data;
       var newsTemplate = data.map(function(article, index){
          return (
              <Article  article={article} key={index} />
          )
       }) ;

       return (
           <div className='news'>
               {data.length ? newsTemplate : "Unfortunately news aren't existed"}
               <p className={data.length ? '': 'hidden'}>Total news: {data.length}</p>
           </div>);
   }

});

var App = React.createClass({
   render: function() {
        return (
            <div className='app'>
                <strong className='title'>The latest news:</strong>
                <News data={my_news}/>
            </div>
        );
   }
});

var Comment = React.createClass({
    render: function() {
        return (
            <div className='comments'>No news - no comments</div>
        )
    }
});



ReactDOM.render(
    <App />,
    document.getElementById('root')
);