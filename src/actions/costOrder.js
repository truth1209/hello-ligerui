import Services from '../api/services'
import * as actions from '../constants/ActionTypes'

export const invalid_CostOrder_Load = () => ({
  type: actions.INVALID_COSTORDER_OFFLOWNO
})

export const request_CostOrder_OfFlowNo = () => ({
  type: actions.REQUEST_COSTORDER_OFFLOWNO
})

export const receive_CostOrder_OfFlowNo = (json, fetchStatus) => ({
  type: actions.RECEIVE_COSTORDER_OFFLOWNO,
  fetchStatus: fetchStatus,
  response: json
})

const fetch_CostOrder_OfFlowNo = dispatch => {
  dispatch(request_CostOrder_OfFlowNo())
  return Services.getCostOrderOfFlowNoData()
    .then(
    function (response) {
      // //async ajax
      // response.json().then(json => {
      //   dispatch(receivePosts(json, FETCH_STATUS_SUCCESS))
      // })
      dispatch(receive_CostOrder_OfFlowNo(response, actions.FETCH_STATUS_SUCCESS))
    },
    function (error) {
      dispatch(receive_CostOrder_OfFlowNo({}, actions.FETCH_STATUS_FAILURE))
    }
    )
}

const shouldFetch_CostOrder_OfFlowNo = (state) => {
  const posts = state.costOrder
  if (!posts || Object.keys(posts).length === 0) {
    return true
  }
  if (posts.costOrderOfFlowNo_Loading) {
    return false
  }
  return posts.costOrderOfFlowNo_Invalid
}

export const fetch_CostOrder_OfFlowNo_IfNeeded = (dispatch, getState) => {
  if (shouldFetch_CostOrder_OfFlowNo(getState())) {
    return dispatch(fetch_CostOrder_OfFlowNo)
  }
}