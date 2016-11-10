var React = require('react');
var ReactDOM = require('react-dom');

var OverviewCardPanel = React.createClass({
render: function() {
  var cardPanels = this.props.cards.map(function(card, index) {
     return (
         <div className='card-box' key={index} >

                 {card.title}


             </div>

       )
   });
  return (
    <div className="cardPanel-wrapper">
        {cardPanels}
    </div>
)
}
});

module.exports = OverviewCardPanel;
