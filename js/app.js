
var App = React.createClass({
   render: function() {
       return (
           <div className='app'>
               Hi all! This is a first react component
           </div>);
   }

});

ReactDOM.render(
    <App />,
    document.getElementById('root')
);