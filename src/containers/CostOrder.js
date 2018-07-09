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
                      <div>新增界面，外带“从历史单生成”按钮</div>
                      :
                      <div>修改界面，外带“从历史单生成”按钮</div>
                  }
                  {/* <div className="l-panel-bwarp">
                  <div className="l-panel-body"> */}
                  <div style={{ margin: 0, padding: 0, width: '100%' }}>
                    <div className="l-grid2" style={{ width: '100%', left: 0 }}>
                      <div className="l-grid-header l-grid-header2" style={{ height: 56, width: '100%' }}>
                        <div className="l-grid-header-inner" style={{ width: '100%' }}>
                          <table className="l-grid-header-table" cellPadding="0" cellSpacing="0" style={{ width: '100%' }} >
                            <tbody>
                              <tr className="l-grid-hd-row">
                              <td className="l-grid-hd-cell" rowSpan='2' style={{ height: 56 }}>
                                  <div className="l-grid-hd-cell-inner" style={{ height: 28 }}>
                                    <span className="l-grid-hd-cell-text"></span>
                                  </div>
                                </td>
                                <td className="l-grid-hd-cell" rowSpan='2' style={{ height: 56 }}>
                                  <div className="l-grid-hd-cell-inner" style={{ height: 28 }}>
                                    <span className="l-grid-hd-cell-text">添加行</span>
                                  </div>
                                </td>
                                <td className="l-grid-hd-cell" rowSpan='2' style={{ height: 56 }}>
                                  <div className="l-grid-hd-cell-inner" style={{ height: 28 }}>
                                    <span className="l-grid-hd-cell-text">编码</span>
                                  </div>
                                </td>
                                <td className="l-grid-hd-cell" rowSpan="2" style={{ height: 56 }}>
                                  <div className="l-grid-hd-cell-inner" style={{ height: 28 }}>
                                    <span className="l-grid-hd-cell-text">项目成本</span>
                                  </div></td>
                                <td className="l-grid-hd-cell" rowSpan="2" style={{ height: 56 }}>
                                  <div className="l-grid-hd-cell-inner" style={{ height: 28 }}>
                                    <span className="l-grid-hd-cell-text">单位</span>
                                  </div></td>
                                <td className="l-grid-hd-cell" colSpan='3' style={{ height: 28 }}>
                                  <div className="l-grid-hd-cell-inner" style={{ height: 28 }}>
                                    <span className="l-grid-hd-cell-text">材料</span>
                                  </div></td>
                                <td className="l-grid-hd-cell" colSpan='2' style={{ height: 28 }}>
                                  <div className="l-grid-hd-cell-inner" style={{ height: 28 }}>
                                    <span className="l-grid-hd-cell-text">工资</span>
                                  </div></td>
                                <td className="l-grid-hd-cell" colSpan='2' style={{ height: 28 }}>
                                  <div className="l-grid-hd-cell-inner" style={{ height: 28 }}>
                                    <span className="l-grid-hd-cell-text">制造费用</span>
                                  </div></td>
                                <td className="l-grid-hd-cell" colSpan='2' style={{ height: 28 }}>
                                  <div className="l-grid-hd-cell-inner" style={{ height: 28 }}>
                                    <span className="l-grid-hd-cell-text">管理费用</span>
                                  </div></td>
                                <td className="l-grid-hd-cell" colSpan='2' style={{ height: 28 }}>
                                  <div className="l-grid-hd-cell-inner" style={{ height: 28 }}>
                                    <span className="l-grid-hd-cell-text">增值税</span>
                                  </div></td>
                                <td className="l-grid-hd-cell" rowSpan='2' style={{ height: 28 }}>
                                  <div className="l-grid-hd-cell-inner" style={{ height: 28 }}>
                                    <span className="l-grid-hd-cell-text">价税合计</span>
                                  </div></td>
                              </tr>
                              <tr className="l-grid-hd-row">
                                <td className="l-grid-hd-cell" style={{ height: 28 }}>
                                  <div className="l-grid-hd-cell-inner" style={{ height: 28 }}>
                                    <span className="l-grid-hd-cell-text">数量</span>
                                  </div></td>
                                <td className="l-grid-hd-cell" style={{ height: 28 }}>
                                  <div className="l-grid-hd-cell-inner" style={{ height: 28 }}>
                                    <span className="l-grid-hd-cell-text">单价</span>
                                  </div></td>
                                <td className="l-grid-hd-cell" style={{ height: 28 }}>
                                  <div className="l-grid-hd-cell-inner" style={{ height: 28 }}>
                                    <span className="l-grid-hd-cell-text">金额</span>
                                  </div></td>
                                <td className="l-grid-hd-cell" style={{ height: 28 }}>
                                  <div className="l-grid-hd-cell-inner" style={{ height: 28 }}>
                                    <span className="l-grid-hd-cell-text">单价</span>
                                  </div></td>
                                <td className="l-grid-hd-cell" style={{ height: 28 }}>
                                  <div className="l-grid-hd-cell-inner" style={{ height: 28 }}>
                                    <span className="l-grid-hd-cell-text">金额</span>
                                  </div></td>
                                <td className="l-grid-hd-cell" style={{ height: 28 }}>
                                  <div className="l-grid-hd-cell-inner" style={{ height: 28 }}>
                                    <span className="l-grid-hd-cell-text">制造费率</span>
                                  </div></td>
                                <td className="l-grid-hd-cell" style={{ height: 28 }}>
                                  <div className="l-grid-hd-cell-inner" style={{ height: 28 }}>
                                    <span className="l-grid-hd-cell-text">金额</span>
                                  </div></td>
                                <td className="l-grid-hd-cell" style={{ height: 28 }}>
                                  <div className="l-grid-hd-cell-inner" style={{ height: 28 }}>
                                    <span className="l-grid-hd-cell-text">管理费率</span>
                                  </div></td>
                                <td className="l-grid-hd-cell" style={{ height: 28 }}>
                                  <div className="l-grid-hd-cell-inner" style={{ height: 28 }}>
                                    <span className="l-grid-hd-cell-text">金额</span>
                                  </div></td>
                                <td className="l-grid-hd-cell" style={{ height: 28 }}>
                                  <div className="l-grid-hd-cell-inner" style={{ height: 28 }}>
                                    <span className="l-grid-hd-cell-text">增值税</span>
                                  </div></td>
                                <td className="l-grid-hd-cell" style={{ height: 28 }}>
                                  <div className="l-grid-hd-cell-inner" style={{ height: 28 }}>
                                    <span className="l-grid-hd-cell-text">税额</span>
                                  </div></td>
                              </tr>
                            </tbody>
                          </table>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              }
              <div>保存和取消按钮</div>
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
