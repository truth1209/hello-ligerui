import * as actions from '../constants/ActionTypes'

const costOrderReducer = (state = { }, action) => {
  switch (action.type) {
    case actions.INVALID_COSTORDER_OFFLOWNO:
      return {
        ...state,
        costOrderOfFlowNo_Invalid: true
      }
    case actions.REQUEST_COSTORDER_OFFLOWNO:
      return {
        ...state,
        costOrderOfFlowNo_Loading: true,
        costOrderOfFlowNo_Invalid: false
      }
    case actions.RECEIVE_COSTORDER_OFFLOWNO:
      return {
        ...state,
        costOrderOfFlowNo_Loading: false,
        costOrderOfFlowNo_Invalid: false,
        costOrderOfFlowNo_Response:action.response,
        costOrderOfFlowNo_FetchStatus: action.fetchStatus
      }
    default:
      return state
  }
}

export default costOrderReducer