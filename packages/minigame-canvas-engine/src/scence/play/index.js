import {rerender, Layout} from '../../common/canvas'
let template = `
<view id="container" class="container">
    <image class="star" src="assets/images/start.png"/>
</view>
`;
let style = {
    container: {
        width: 800,
        height: 600,
        backgroundColor: '#999'
    }
};

export const renderPlay = ()=>{
    rerender({template, style})
};