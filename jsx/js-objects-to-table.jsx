/** @jsx React.DOM */

/** JavaScript object module with data structure definitions **/

/* LeftClass generating function. Return array of attributes. */
function LeftClass (att1, att2, name, duration) {
  this.att1 = att1;
  this.att2 = att2;
  this.name = name;
  this.duration = duration;
  this.draw = function() {
    return [name, att1, att2, duration];
  }
};

/* RightClass generating function. Return array of attributes. */
function RightClass (att1, att2, name, duration) {
  this.att1 = att1;
  this.att2 = att2;
  this.name = name;
  this.duration = duration;
  this.draw = function() {
    return [name, att1, att2, duration];
  }
};

/* Create JS objects to map onto HTML table */
var leftObj1 = new LeftClass("", "lefty1.att2", "lefty1", 0);
var leftObj2 = new LeftClass("lefty2.att1", "lefty2.att2", "lefty2", 10);
var leftObj3 = new LeftClass("lefty3.att1", "lefty3.att2", "lefty3", 5);
var leftObj4 = new LeftClass("lefty4.att1", "lefty4.att2", "lefty4", 0);

var rightObj1 = new RightClass("righty1.att1", "righty1.att2", "righty1", 15);
var rightObj2 = new RightClass("righty2.att1", "righty2.att2", "righty2", 30);
var rightObj3 = new RightClass("righty3.att1", "righty3.att2", "righty3", 15);


/* Container for collecting JS objects */
var containerObj = {
  arrayLeft: [leftObj1.draw(), leftObj2.draw(), leftObj3.draw(), leftObj4.draw()],
  arrayRight: [rightObj1.draw(), rightObj2.draw(), rightObj3.draw()]
};

/* Table style object */
var table_style = { 
  width: "50%", 
  borderSpacing: "2px",
  borderCollapse: "separate",
  cellpadding: "5px"
};

/* Different styles for cells */
var td_style_center = { textAlign: "center" };
var td_style_aqua = { backgroundColor: "aqua" };
var td_style_aqua_left = { backgroundColor: "aqua", textAlign: "left" };
var td_style_aqua_center = { backgroundColor: "aqua", textAlign: "center" };
var td_style_aqua_right = { backgroundColor: "aqua", textAlign: "right" };

var td_style_yellow = { backgroundColor: "yellow", textAlign: "center"};
var td_style_pink = { backgroundColor: "pink" };
var td_style_pink_left = { backgroundColor: "pink", textAlign: "left" };
var td_style_pink_center = {backgroundColor: "pink", textAlign: "center"};
var td_style_pink_right = {backgroundColor: "pink", textAlign: "right"};

/* Table headers config object*/
var columns = {
  col1: { name: "Objects of class LeftClass"},
  col2: { name: ""},
  col3: { name: "Objects of class RightClass"}
};

/* Fix current time of client */
var currentTime = new Date;

/* Eight Rows of JS object to present one element of table */
var FirstRowLeft = React.createClass({
  render: function() {
    return (
      <tr>
        <td style = {td_style_aqua}></td>
        <td style = {td_style_aqua}></td>
        <td>&nbsp;</td>
      </tr>
    );
  }
});
var SecondRowLeft = React.createClass({
  render: function() {
    if (this.props.rowAtt2) {
      var mins = this.props.rowAtt2 + " mins"
    };
    return (
      <tr>
        <td style = {td_style_aqua_left}>&nbsp;{this.props.rowAtt1}:</td>
        <td style = {td_style_aqua_center}>{mins}</td>
        <td>&nbsp; (button to insert a left/right pair)</td>
      </tr>
    );
  }
});
var ThirdRowLeft = React.createClass({
  render: function() {
    return (
      <tr>
        <td style = {td_style_aqua}></td>
        <td style = {td_style_aqua}></td>
        <td>&nbsp;</td>
      </tr>
    );
  }
});
var FourthRowLeft = React.createClass({
  render: function() {
    currentTime.setMinutes(currentTime.getMinutes() + this.props.rowAtt2);
    var Hours = (currentTime.getHours() >= 10) 
      ? currentTime.getHours()
      : "0" + currentTime.getHours();
    var Minutes = (currentTime.getMinutes() >= 10) 
      ? currentTime.getMinutes()
      : "0" + currentTime.getMinutes();
    return (
      <tr>
        <td style = {td_style_aqua_right}>{this.props.rowAtt1}:&nbsp;</td>
        <td style = {td_style_yellow}>{Hours}:{Minutes}</td>
        <td style = {td_style_pink}>&nbsp; {this.props.rowAtt3}</td>
      </tr>
    );
  }
});
var FifthRowRight = React.createClass({
  render: function() {
    return (
      <tr>
        <td>&nbsp;</td>
        <td style = {td_style_pink}></td>
        <td style = {td_style_pink}></td>
      </tr>
    );
  }
});
var SixthRowRight = React.createClass({
  render: function() {
    return (
      <tr>
        <td style = {td_style_center}>(button to insert a left/right pair)</td>
        <td style = {td_style_pink_center}>{this.props.rowAtt1} mins</td>
        <td style = {td_style_pink_right}>&nbsp; {this.props.rowAtt2}</td>
      </tr>
    );
  }
});
var SeventhRowRight = React.createClass({
  render: function() {
    return (
      <tr>
        <td>&nbsp;</td>
        <td style = {td_style_pink}></td>
        <td style = {td_style_pink}></td>
      </tr>
    );
  }
});
var EighthRowLeft = React.createClass({
  render: function() {
    currentTime.setMinutes(currentTime.getMinutes() + this.props.rowAtt2);
    var Hours = (currentTime.getHours() >= 10) 
      ? currentTime.getHours()
      : "0" + currentTime.getHours();
    var Minutes = (currentTime.getMinutes() >= 10) 
      ? currentTime.getMinutes()
      : "0" + currentTime.getMinutes();
    return (
      <tr>
        <td style = {td_style_aqua_right}>{this.props.rowAtt1}:&nbsp;</td>
        <td style = {td_style_yellow}>{Hours}:{Minutes}</td>
        <td style = {td_style_pink}>&nbsp; {this.props.rowAtt3}</td>
      </tr>
    );
  }
});

/* Create React Table component for rendering table from JS objects */
var Table = React.createClass({
  render: function() {
    /* Row counter */
    var rowCounter = 1;

    /* Mixing left and right data for rendering */
    var dataLeft  = this.props.tableModel.arrayLeft;
    var dataRight = this.props.tableModel.arrayRight;
    var dataMixed = [];
    for (var i = 0; i < dataLeft.length; i++) {
      if (dataLeft[i] != undefined)
        dataMixed.push(dataLeft[i]);
      if (dataRight[i] != undefined)
        dataMixed.push(dataRight[i]);
    }

    return (
      <table style = {table_style}>
        <tr>
          <th style = {td_style_center}>{columns.col1.name}</th>
          <th style = {td_style_center}>{columns.col2.name}</th>
          <th style = {td_style_center}>{columns.col3.name}</th>
        </tr>
        <tbody>
          {dataMixed.map(function(row) {
            if (dataMixed[dataMixed.indexOf(row[0]) + rowCounter + 2] != undefined) {
              rowCounter++;
            }

            if (dataMixed.indexOf(row)+1 != dataMixed.length) {
              if ( dataMixed.indexOf(row) % 2 == 0) {  
                return [
                  <FirstRowLeft />,
                  <SecondRowLeft 
                    rowAtt1 = {row[0]}
                    rowAtt2 = {row[3]} />,
                  <ThirdRowLeft />,
                  <FourthRowLeft 
                    rowAtt1 = {row[2]}
                    rowAtt2 = {row[3]}
                    rowAtt3 = {dataMixed[dataMixed.indexOf(row[0]) + rowCounter][1]} />,
                  <FifthRowRight />,
                  <SixthRowRight 
                    rowAtt1 = {dataMixed[dataMixed.indexOf(row[0]) + rowCounter][3]}
                    rowAtt2 = {dataMixed[dataMixed.indexOf(row[0]) + rowCounter][0]} />,
                  <SeventhRowRight />,
                  <EighthRowLeft 
                    rowAtt1 = {dataMixed[dataMixed.indexOf(row[0]) + rowCounter + 1][1]}
                    rowAtt2 = {dataMixed[dataMixed.indexOf(row[0]) + rowCounter][3]}
                    rowAtt3 = {dataMixed[dataMixed.indexOf(row[0]) + rowCounter][2]} />
                ];
              }
            // If last data entry, show only first three row
            } else {
              if ( dataMixed.indexOf(row) % 2 == 0) {  
                return [
                  <FirstRowLeft />,
                  <SecondRowLeft 
                    rowAtt1 = {row[0]} />,
                  <ThirdRowLeft />
                ]
              }  
            }
          })}
        </tbody>
      </table>
    );
  }
});

/* Create React App component */
var App = React.createClass({
  render: function() {
    return (
      <div>
        <Table tableModel = {containerObj} />
      </div>
    );
  }
});

/* Render Application */
React.renderComponent(
  <App />, 
  document.getElementById("app")
);