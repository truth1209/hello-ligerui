import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { fetch_CostOrder_OfFlowNo_IfNeeded } from '../actions/costOrder'
import GlobalConfigUtil from '../api/util/globalConfigUtil'
// import CompareUtil from '../api/util/compareUtil'

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
                  <div>从历史单生成：
                    <div className="l-text-wrapper">
                      <div className="l-text l-text-combobox">
                        <input type="text" readOnly="" className="l-text-field" />
                        <div className="l-text-l"></div><div className="l-text-r"></div>
                        <div className="l-trigger"><div className="l-trigger-icon"></div></div>
                        <div className="l-trigger l-trigger-cancel" style={{ display: 'none' }}>
                          <div className="l-trigger-icon"></div></div>
                      </div>
                      <input type="hidden" value="" />
                    </div>
                    <br />
                    <div className="l-box-select l-box-select-absolute" style={{ width: 130, left: 10, top: 30, display: 'none' }}>
                      <div className="l-box-select-inner" style={{ height: 'auto' }}>
                        <table cellPadding="0" cellSpacing="0" border="0" className="l-box-select-table l-table-nocheckbox">
                          <tbody>
                            <tr value="1">
                              <td index="0" value="1" text="广东" align="left" className=""><span>广东</span></td>
                            </tr>
                            <tr value="2">
                              <td index="1" value="2" text="福建" align="left"><span>福建</span></td>
                            </tr>
                          </tbody>
                        </table>
                      </div>
                      <div className="l-btn-nw-drop">
                      </div>
                    </div>
                  </div>
                  <div className="l-grid-header" style={{ height: '100%', width: '100%' }}>
                    <table className="l-grid-header-table" cellPadding="0" cellSpacing="0" style={{ width: '100%' }} >
                      <tbody>
                        <tr className="l-grid-hd-row">
                          <td className="l-grid-hd-cell" rowSpan='2' style={{ height: 56 }}>
                            <div className="l-grid-hd-cell-inner" style={{ height: 28 }}>
                              <span className="l-grid-hd-cell-text">序号</span>
                            </div>
                          </td>
                          <td className="l-grid-hd-cell l-grid-row-cell-checkbox" rowSpan='2'>
                            <div className="l-grid-row-cell-inner" style={{ height: 28 }}><span className="l-grid-row-cell-btn-checkbox"></span></div>
                          </td>
                          <td className="l-grid-hd-cell" rowSpan='2' style={{ height: 56, width: 20 }}>
                            <div className="l-grid-row-cell-inner">
                              <div className="l-icon l-icon-add"></div>
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
                        <tr className="l-grid-row">
                          <td className="l-grid-row-cell l-grid-row-cell-rownumbers">1</td>
                          <td className="l-grid-row-cell l-grid-row-cell-checkbox">
                            <div className="l-grid-row-cell-inner" style={{ height: 28 }}><span className="l-grid-row-cell-btn-checkbox"></span></div>
                          </td>
                          <td className="l-grid-row-cell">
                            <div className="l-grid-row-cell-inner">
                              <div className="l-icon l-icon-delete"></div>
                            </div>
                          </td>
                          <td className="l-grid-row-cell">
                            <div className="l-grid-row-cell-inner">PCODE100011</div>
                          </td>
                          <td>test</td>
                          <td>test</td>
                          <td>test</td>
                          <td>test</td>
                          <td>test</td>
                          <td>test</td>
                          <td>test</td>
                          <td>test</td>
                          <td>test</td>
                          <td>test</td>
                          <td>test</td>
                          <td>test</td>
                          <td>test</td>
                          <td>test</td>
                        </tr>
                      </tbody>
                      <tfoot>
                        <tr className="l-grid-row">
                          <td className="l-grid-row-cell">合计</td>
                          <td className="l-grid-row-cell">
                            <div className="l-grid-row-cell-inner">
                              <div className="l-icon l-icon-delete"></div>
                            </div>
                          </td>
                          <td className="l-grid-row-cell">
                            <div className="l-grid-row-cell-inner">
                              <div className="l-icon l-icon-add"></div>
                            </div>
                          </td>
                          <td className="l-grid-row-cell">
                          </td>
                          <td></td>
                          <td></td>
                          <td></td>
                          <td></td>
                          <td></td>
                          <td></td>
                          <td></td>
                          <td></td>
                          <td></td>
                          <td></td>
                          <td></td>
                          <td></td>
                          <td></td>
                          <td></td>
                        </tr>
                        <tr className="l-grid-row">
                          <td colSpan='17'>
                          </td>
                          <td>
                            <div className="l-dialog-buttons-inner">
                              <div className="l-dialog-btn">
                                <div className="l-dialog-btn-l"></div>
                                <div className="l-dialog-btn-r"></div>
                                <div className="l-dialog-btn-inner">保存</div></div>
                              <div className="l-clear"></div></div>
                          </td>
                        </tr>
                      </tfoot>
                    </table>
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
