import { connect } from "react-redux";
import History from "../Components/History";

import {
  getSpacexHistoryData as getSpacexHistoryDataAction,
  getSpacexPayloadData as getSpacexPayloadDataAction,
} from "../redux/action";

const mapStateToProps = (state) => ({
  historyData: state.historyData,
  payloadData: state.payloadData,
});

const mapDispatchToProps = (dispatch) => ({
  loadHistoryData: () => dispatch(getSpacexHistoryDataAction()),
  loadPayloadData: () => dispatch(getSpacexPayloadDataAction()),
});

export default connect(mapStateToProps, mapDispatchToProps)(History);
