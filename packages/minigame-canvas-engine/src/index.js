import Layout from '../lib/minigame-canvas-engine'
let template = `
    <view id="container" class="container">
       <text id="testText" class="redText" value="hello canvas xxxxxx"/>
    </view>
   `;
   let style = {
    container: {
        width: 200,
        height: 100,
        backgroundColor: '#cccccc',
        justContent: 'center',
        alignItems: 'center',
    },
    testText: {
        color: '#ffffff',
        width: 200,
        height: 50,
        lineHeight: 50,
        fontSize: 20,
        textAlign: 'center',
    },
    // 文字的最终颜色为#ff0000
    redText: {
        color: '#ff0000',
    }
}

let canvas = document.getElementById('canvas');
let context = canvas.getContext('2d');
Layout.init(template, style);
Layout.updateViewPort({
    width: 800,
    height: 400,
    x:0,
    y:0
});
Layout.layout(context);
