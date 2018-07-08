import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { fetch_CostOrder_OfFlowNo_IfNeeded } from '../actions/costOrder'
import GlobalConfigUtil from '../api/util/globalConfigUtil'
import CompareUtil from '../api/util/compareUtil'

class CostOrder extends Component {
  static propTypes = {
    costOrderOfFlowNo_Loading: PropTypes.bool.isRequired,
    costItems: PropTypes.array.isRequired,
    viewStatus: PropTypes.string.isRequired,
    dispatch: PropTypes.func.isRequired
  }

  componentDidMount() {
    const { dispatch } = this.props
    dispatch(fetch_CostOrder_OfFlowNo_IfNeeded)
  }

  render() {
    const { costOrderOfFlowNo_Loading, costOrder, costItems } = this.props
    return (
      <div style={{ margin: 0, padding: 0, width: '100%' }} className="l-panel l-frozen">
        {
          costOrderOfFlowNo_Loading ? <h2>Loading...</h2> :
            <div>{/*子组件在此扩展*/}
              {costOrder.costOrderOfFlowNo_Response.retCode === 1 ? <h2>{costOrder.costOrderOfFlowNo_Response.retMessage}...</h2> :
                <div>
                  {
                    CompareUtil.arrayIsEmpty(costItems) ?
                      <div>新增界面</div>
                      :
                      <div>修改界面</div>
                  }
                  <div className="l-panel-bwarp">
                  <div className="l-panel-body">
                  <div className="l-grid l-grid-hashorizontal">
                    <div className="l-grid2" style={{ width: 1042, left: 30 }}>
                      <div className="l-grid-header l-grid-header2" style={{ height: 56 }}>
                        <div className="l-grid-header-inner" style={{ width: 1082 }}>
                          <table className="l-grid-header-table" cellPadding="0" cellSpacing="0">
                            <tbody>
                              <tr className="l-grid-hd-row l-grid-hd-mul">
                                <td className="l-grid-hd-cell l-grid-hd-cell-mul" id="maingrid4|hcell|c102" style={{ height: 28 }}>
                                  <div className="l-grid-hd-cell-inner" style={{ height: 28 }}>
                                    <span className="l-grid-hd-cell-text">公司信息</span>
                                  </div></td>
                                <td className="l-grid-hd-cell l-grid-hd-cell-mul" id="maingrid4|hcell|c104" colSpan="3" style={{ height: 28 }}>
                                  <div className="l-grid-hd-cell-inner" style={{ height: 28 }}>
                                    <span className="l-grid-hd-cell-text">个人信息</span>
                                  </div></td>
                              </tr>
                              <tr className="l-grid-hd-row">
                                <td className="l-grid-hd-cell" id="maingrid4|hcell|c103" columnindex="1" columnname="CompanyName" style={{ height: 28, width: 300 }}>
                                  <div className="l-grid-hd-cell-inner" style={{ height: 28 }}>
                                    <span className="l-grid-hd-cell-text">公司名</span>
                                  </div></td>
                                <td className="l-grid-hd-cell" id="maingrid4|hcell|c105" columnindex="2" columnname="CustomerID" style={{ height: 28, width: 120 }}>
                                  <div className="l-grid-hd-cell-inner" style={{ height: 28 }}>
                                    <span className="l-grid-hd-cell-text">主键</span>
                                  </div></td>
                                <td className="l-grid-hd-cell" id="maingrid4|hcell|c106" columnindex="3" columnname="ContactName" style={{ height: 28, width: 50 }}>
                                  <div className="l-grid-hd-cell-inner" style={{ height: 28 }}>
                                    <span className="l-grid-hd-cell-text">联系名</span>
                                  </div></td>
                                <td className="l-grid-hd-cell l-grid-hd-cell-last" id="maingrid4|hcell|c107" columnindex="4" columnname="City" style={{ height: 28, width: 568 }}>
                                  <div className="l-grid-hd-cell-inner" style={{ height: 28 }}>
                                    <span className="l-grid-hd-cell-text">城市</span>
                                  </div></td>
                              </tr>
                            </tbody>
                          </table>
                        </div>
                      </div>
                      </div>
                    </div>
                  </div>
                  </div>
                </div>
              }
            </div>
        }
      </div>
    )
  }
}

const mapStateToProps = state => {
  const { costOrder } = state
  const costOrderOfFlowNo_Loading = (costOrder && costOrder.costOrderOfFlowNo_Loading === false) ? false : true
  const costItems = costOrder.response ?
    (costOrder.costOrderOfFlowNo_Response.costItems ? costOrder.costOrderOfFlowNo_Response.costItems : [])
    :
    [];
  const viewStatus = GlobalConfigUtil.getGlobalConfig().viewStatus;
  return {
    costOrderOfFlowNo_Loading,
    viewStatus,
    costOrder,
    costItems
  }
}

export default connect(mapStateToProps)(CostOrder)
