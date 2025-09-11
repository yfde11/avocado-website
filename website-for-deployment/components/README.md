# Ballpit 組件

這是一個基於 React Three Fiber 和 Cannon.js 的 3D 球池效果組件，靈感來自 React Bits。

## 功能特色

- 🎯 **3D 物理模擬**：使用 Cannon.js 物理引擎
- 🎨 **自定義顏色**：支持白色和淺綠色球體
- 🌟 **光影效果**：真實的陰影和光照
- 📱 **響應式設計**：適配不同螢幕尺寸
- ⚡ **高效能**：使用 React Three Fiber 優化渲染

## 安裝依賴

```bash
npm install three @react-three/fiber @react-three/cannon
```

## 使用方法

```tsx
import Ballpit from './components/Ballpit';

function App() {
  return (
    <div className="w-full h-screen">
      <Ballpit />
    </div>
  );
}
```

## 組件結構

### Ballpit.tsx
主要的 Ballpit 組件，包含：
- `Ball`: 單個球體組件
- `Ground`: 地面組件
- `Walls`: 牆壁組件
- `Ballpit`: 主容器組件

## 自定義選項

### 球體顏色
```tsx
const colors = ["#E8F5E8", "#F0F8F0", "#D4F1C5"]; // 白色和淺綠色系
```

### 球體數量
```tsx
const balls = Array.from({ length: 80 }, (_, i) => ({ // 80 個球體
  position: [x, y, z],
  color: colors[i % colors.length],
}));
```

### 物理參數
```tsx
const [ref] = useSphere(() => ({
  mass: 1,                    // 質量
  position,                   // 位置
  args: [0.5],               // 半徑
  material: {
    friction: 0.1,           // 摩擦力
    restitution: 0.7,        // 彈性係數
  },
}));
```

## 測試頁面

查看 `ballpit-test.html` 來預覽組件效果。

## 技術棧

- **React 18**: 前端框架
- **Three.js**: 3D 圖形庫
- **React Three Fiber**: Three.js 的 React 封裝
- **Cannon.js**: 物理引擎
- **TypeScript**: 類型安全

## 瀏覽器支援

- Chrome 60+
- Firefox 55+
- Safari 12+
- Edge 79+

## 注意事項

1. 組件需要較高的 GPU 效能
2. 建議在現代瀏覽器中使用
3. 移動設備可能會有性能限制



