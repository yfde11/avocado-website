# Avocado AI 網站

這是一個基於 Figma 設計圖實現的 Avocado AI 公司官網前端項目。

## 項目結構

```
figma/
├── index.html          # 主要 HTML 文件
├── styles.css          # CSS 樣式文件
├── script.js           # JavaScript 互動功能
├── images/             # 圖片資源目錄
│   ├── main-avocado.png
│   ├── product-image-f03368.png
│   ├── logo-white.png
│   ├── ellipse19.svg
│   └── ellipse21.svg
└── README.md           # 項目說明文件
```

## 功能特色

### 🎨 設計還原
- 完全按照 Figma 設計圖實現
- 精確的顏色、字體、間距和佈局
- 漸變背景和視覺效果

### 📱 響應式設計
- 支援桌面、平板和手機設備
- 自適應佈局和字體大小
- 移動端友好的導航菜單

### ✨ 互動效果
- 平滑滾動導航
- 滾動進度指示器
- 浮動元素動畫
- 懸停效果和過渡動畫
- 視差滾動效果

### 🚀 性能優化
- 圖片優化和壓縮
- 滾動事件節流
- 懶加載動畫
- 移動端性能優化

## 技術棧

- **HTML5**: 語義化標籤和現代 HTML 結構
- **CSS3**: Flexbox、Grid、動畫、漸變
- **JavaScript (ES6+)**: 模組化代碼、事件處理、DOM 操作
- **Google Fonts**: Inter 字體家族

## 瀏覽器支援

- Chrome 60+
- Firefox 55+
- Safari 12+
- Edge 79+

## 使用方法

1. **直接打開**
   ```bash
   # 在瀏覽器中直接打開 index.html 文件
   ```

2. **本地服務器（推薦）**
   ```bash
   # 使用 Python 簡單服務器
   python -m http.server 8000
   
   # 或使用 Node.js
   npx serve .
   
   # 然後在瀏覽器中訪問 http://localhost:8000
   ```

## 頁面結構

### 1. 導航欄
- 固定頂部導航
- 品牌標識
- 平滑滾動菜單

### 2. 主要橫幅
- 品牌標語 "Cute on the Outside, Powerful on the Inside"
- 主要產品圖片
- 浮動動畫元素

### 3. 產品介紹
- ThreatCado XDR 平台介紹
- SenseL 智能引擎說明
- 產品特色和優勢

### 4. 關於我們
- 公司背景介紹
- 服務承諾
- 品牌標識

### 5. 為什麼選擇 Avocado
- 四大核心優勢
- AI 驅動技術
- 智能轉化能力
- 攻防模擬能力
- 高效能與性價比

### 6. 合作夥伴
- 與啟碁科技（WNC）的合作
- 戰略技術夥伴關係

### 7. 行動呼籲
- 免費諮詢和試用邀請
- 聯繫方式

### 8. 頁腳
- 品牌標識
- 版權信息

## 自定義和修改

### 顏色主題
主要顏色變量在 `styles.css` 中定義：
```css
:root {
  --primary-green: #96ED9B;
  --primary-purple: #A61ED0;
  --text-dark: #000000;
  --text-light: #404040;
  --bg-light: #FEFEF4;
  --bg-purple: #EDEBFA;
}
```

### 字體
使用 Google Fonts 的 Inter 字體：
```html
<link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&display=swap" rel="stylesheet">
```

### 動畫效果
可以通過修改 CSS 動畫和 JavaScript 來調整：
- 浮動動畫時間和效果
- 滾動動畫觸發條件
- 懸停效果強度

## 部署建議

### 靜態網站託管
- GitHub Pages
- Netlify
- Vercel
- AWS S3 + CloudFront

### 性能優化
1. 圖片壓縮和 WebP 格式
2. CSS 和 JS 文件壓縮
3. 啟用 Gzip 壓縮
4. 使用 CDN 加速

## 維護和更新

### 內容更新
- 修改 `index.html` 中的文字內容
- 更新 `images/` 目錄中的圖片
- 調整 `styles.css` 中的樣式

### 功能擴展
- 在 `script.js` 中添加新的互動功能
- 使用 CSS 添加新的動畫效果
- 整合第三方服務（表單、分析等）

## 聯繫方式

如有問題或建議，請聯繫開發團隊。

---

© 2024 Avocado AI. 保留所有權利。

