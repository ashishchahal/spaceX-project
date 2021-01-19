import React from "react";

class History extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      historyData: null,
      payloadData: null,
    };
  }

  componentDidMount() {
    this.props.loadHistoryData();
    this.props.loadPayloadData();
  }

  componentWillReceiveProps(nextProps) {
    if (nextProps.historyData) {
      console.log(nextProps.historyData, ",...histordata..nextpros");
      this.setState({
        historyData: nextProps.historyData,
      });
    }
    if (nextProps.payloadData) {
      console.log(nextProps.payloadData, ",...payloaddata..nextpros");
      this.setState({
        payloadData: nextProps.payloadData,
      });
    }
  }

  render() {
    console.log(this.state.historyData, "historyData");
    return <div>HistoryData</div>;
  }
}

export default History;
