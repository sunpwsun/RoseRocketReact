import React, {Component} from 'react'
import { InputNumber } from 'antd'
import 'antd/dist/antd.css'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import * as roseRocketAction from '../../store/modules/roserocket'
import { RoseRocketActions } from '../../store/actionCreators'
import './XYPosText.css'

class XYPosText extends Component {

    onChangeX = (x) => {
        console.log( 'Progress changed - ', x)
        RoseRocketActions.updateBonusLocationX( x )
    }   


    onChangeY = (y) => {
console.log( 'Progress changed - ', y)
        RoseRocketActions.updateBonusLocationY( y )
    }   




    render() {

        console.log('[x] ', this.props.bonusDriverLocation )
        return (
            <div>
                <div className='inputNumber' >
                    <strong>X-coordinate</strong> &nbsp;
                    <InputNumber
                        defaultValue={this.props.bonusDriverLocation.x}
                        min={0}
                        max={199}
                        formatter={value => `${value}`}
                        parser={value => value.replace('%', '')}
                        style={{width:'40%'}}
                        onChange={this.onChangeX}
                    />
                </div>
                <div className='inputNumber' >
                    <strong>Y-coordinate </strong>&nbsp;
                    <InputNumber
                    defaultValue={this.props.bonusDriverLocation.y}
                    min={0}
                    max={199}
                    formatter={value => `${value}`}
                    parser={value => value.replace('%', '')}
                    style={{width:'40%'}}
                    onChange={this.onChangeY}
                    />
                </div>
            </div>
        )
    }
}


export default connect(
    (state) => ({
        bonusDriverLocation : state.roserocket.bonusDriverLocation
    }),
    (dispatch) => ({
        RoseRocketActions: bindActionCreators( roseRocketAction, dispatch)
    })
)(XYPosText);

