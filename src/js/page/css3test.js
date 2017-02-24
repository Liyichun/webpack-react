/**
 * Created by yichli on 2/23/17.
 */
import React from 'react';
import ReactDOM from 'react-dom';

export default class CSS3 extends React.Component {
    // 构造
    constructor(props) {
        super(props);
        // 初始状态
        this.state = {};
    }
    render() {
        return (
            <div>
                <div className="chapter1">
                <p >

                    < img src = "../../../../src/img/4.png" alt = "Student-made statuette of Dudley Storey"
                          className="linear-transform-panel" />
                        Lorem ipsum dolor sit
                        amet, consectetur adipiscing elit. Suspendisse eu mi tellus. Vestibulum tortor erat, facilisis
                        in auctor semper, pharetra quis mi...
                    Lorem ipsum dolor sit
                    amet, consectetur adipiscing elit. Suspendisse eu mi tellus. Vestibulum tortor erat, facilisis
                    in auctor semper, pharetra quis mi...
                    Lorem ipsum dolor sit
                    amet, consectetur adipiscing elit. Suspendisse eu mi tellus. Vestibulum tortor erat, facilisis
                    in auctor semper, pharetra quis mi...
                    Lorem ipsum dolor sit
                    amet, consectetur adipiscing elit. Suspendisse eu mi tellus. Vestibulum tortor erat, facilisis
                    in auctor semper, pharetra quis mi...
                </p>
                <h1>test</h1>
                </div>
                <div className="crossfadebac2">
                    {/*< img src = "../../../../src/img/jatropha-hybrid.jpg" alt = "Jatropha hybrid leaf"/>
                    < img src = "../../../../src/img/leaf-veins.jpg" alt = "Jatropha hybrid leaf"/>*/}
                </div>
            </div>
        )
    }
}