import { rerender, Layout } from '../../common/canvas';
import { renderPlay } from '../play';

let template = `
<view class="container">
    <view class="content">
        <text class="title" value="欢迎来到果果果实验中心"/>
        <view class="startBtn">
            <text class="startBtnLabel" value="开始"></text>
        </view>
    </view>
</view>
`;
let style = {
  container: {
    width: 800,
    height: 600,
    backgroundColor: '#999999'
  },
  content: {
    top: 100,
    width: 800,
    height: 500,
    justContent: 'center',
    alignItems: 'center',
    backgroundColor: '#00ff00'
  },
  title: {
    color: '#ffffff',
    top: 100,
    fontSize: 20,
    alignItems: 'center',
    justContent: 'center'
  },
  startBtn: {
    top: 150,
    width: 100,
    height: 30,
    backgroundColor: '#006666',
    justContent: 'center',
    alignItems: 'center'
  },
  startBtnLabel: {
    color: '#fff',
    fontSize: 14,
    lineHeight: 30
  }
};
export const renderStart = () => {
  rerender({ template, style });
  const startBtn = Layout.getElementsByClassName('content')[0];
  startBtn.on('click', e => {
    debugger;
    renderPlay();
  });
};
