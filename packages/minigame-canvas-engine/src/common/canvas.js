export const Layout = require('../../lib/minigame-canvas-engine').default;

export const canvas = document.getElementById('canvas');
// 设置canvas的尺寸和样式的container比例一致
canvas.width = 800;
canvas.height = 600;
//todo bug: 事件捕获的计算里面宽高没有生效

export const context = canvas.getContext('2d');

export const rerender = ({ template, style, width = 800, height = 600, x = 0, y = 0 }) => {
  Layout.clear();
  Layout.init(template, style);
  Layout.updateViewPort({ width, height, x, y });
  Layout.layout(context);
};
