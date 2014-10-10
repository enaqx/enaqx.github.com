/** @jsx React.DOM */

var AverageAggregation = require('./averageAggregation');
var BarChart = require('./barChart');

/* === Question 1 === */
var WebTools = React.createClass({
  render: function() {
    return <div>
      <b>{this.props.comp}</b> (alternatively <b>Browserify</b> 
        <b>or RequireJS</b>) for module compiling.
      <p/>
      <b>{this.props.ut}</b> (alternatively <b>Jasmine</b>) for client-side 
        Unit Testing.
      <p/>
      <b>{this.props.debug}</b>for debugging.
      <p/>
      <b>{this.props.testing}</b> for server-side testing of JavaScript.
      <p/>
      <b>{this.props.task}</b> (alternatively <b>Grunt</b>) 
        for automation of routine tasks.
      <p/>
      <b>{this.props.package}</b> for package management.
    </div>;
  }
});

/* === Question 2 === */

var averageAggregation = new AverageAggregation.AverageAggregation;

var FixObject = React.createClass({
  getInitialState: function() {
     return {items: [], text: ''};
  },
  onChange: function(e) {
    this.setState({text: e.target.value});
  },
  handleSubmit: function(e) {
    e.preventDefault();
    var nextItems = averageAggregation.add(JSON.parse("[" + this.state.text + "]"));
    console.log(JSON.parse("[" + this.state.text + "]"));
    var nextText = '';
    this.setState({items: nextItems, text: nextText});
  },
  render: function() {
    return <div>
      <p/>Input comma-separated Numbers:
      <form onSubmit={this.handleSubmit}>
        <input onChange={this.onChange} value={this.state.text} />
        <button>Calculate</button>
      </form>
      <p/>{averageAggregation.result()}
    </div>;
  }
});

/* === Question 3 and 4 === */
var Link = React.createClass({
  render: function() {
    return <a href={this.props.link}>Naive code here</a>
  }
})

/* === Rendering === */

React.renderComponent(
  <WebTools 
    comp = "Webpack"
    ut = "Jest"
    debug = "Chrome Developer Tools"
    testing = "Mocha" 
    task = "Gulp" 
    package = "npm/Bower" />,
  document.getElementById('question1')
);

React.renderComponent(
  <FixObject />,
  document.getElementById('question2')
);


React.renderComponent(
  <Link link="https://github.com/enaqx/react-interview-answers/blob/master/app/js/loadData.js" />,
  document.getElementById('question3')
);

React.renderComponent(
  <Link link="https://github.com/enaqx/react-interview-answers/blob/master/app/js/buildHierarchy.js" />,
  document.getElementById('question4')
);

React.renderComponent(
  <BarChart width={100} height={100} />,
  document.getElementById('question5')
);
