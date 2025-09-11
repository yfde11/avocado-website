# 🚀 網站部署指南

## 方案一：GitHub Pages (推薦)

### 步驟 1：準備 GitHub 倉庫
1. 在 GitHub 創建新倉庫
2. 將您的網站文件上傳到倉庫
3. 確保主分支名稱為 `main`

### 步驟 2：啟用 GitHub Pages
1. 進入倉庫設定 (Settings)
2. 點擊 "Pages" 選項
3. Source 選擇 "Deploy from a branch"
4. Branch 選擇 "gh-pages"
5. 點擊 "Save"

### 步驟 3：自動部署
- 每次推送到 `main` 分支時，GitHub Actions 會自動部署
- 網站將在 `https://您的用戶名.github.io/倉庫名` 上線

## 方案二：Netlify (拖拽部署)

### 步驟 1：註冊 Netlify
1. 訪問 [netlify.com](https://netlify.com)
2. 使用 GitHub 帳號登入

### 步驟 2：部署網站
1. 點擊 "New site from Git"
2. 選擇您的 GitHub 倉庫
3. 分支選擇 `main`
4. 點擊 "Deploy site"

### 步驟 3：自定義域名
- 在 "Domain settings" 中設定自定義域名
- 免費 SSL 證書自動生成

## 方案三：Vercel (極速部署)

### 步驟 1：註冊 Vercel
1. 訪問 [vercel.com](https://vercel.com)
2. 使用 GitHub 帳號登入

### 步驟 2：導入項目
1. 點擊 "New Project"
2. 選擇您的 GitHub 倉庫
3. 點擊 "Deploy"

## 🔧 部署前檢查清單

- [ ] 所有圖片路徑正確
- [ ] CSS 和 JS 文件路徑正確
- [ ] 所有頁面連結正常
- [ ] 響應式設計測試完成
- [ ] 瀏覽器兼容性測試完成

## 📱 測試建議

1. **桌面端測試**
   - Chrome, Firefox, Safari, Edge
   - 不同解析度測試

2. **移動端測試**
   - iOS Safari
   - Android Chrome
   - 不同螢幕尺寸

3. **性能測試**
   - Google PageSpeed Insights
   - GTmetrix
   - WebPageTest

## 🌐 自定義域名設定

### 如果您有自己的域名：
1. 在域名註冊商處設定 DNS
2. 添加 CNAME 記錄指向您的部署平台
3. 在部署平台中驗證域名

## 💡 優化建議

1. **圖片優化**
   - 使用 WebP 格式
   - 壓縮圖片大小
   - 設定適當的圖片尺寸

2. **CSS/JS 優化**
   - 合併和壓縮文件
   - 啟用 Gzip 壓縮
   - 使用 CDN

3. **SEO 優化**
   - 添加 meta 標籤
   - 設定 Open Graph
   - 創建 sitemap.xml

## 🆘 常見問題

**Q: 部署後圖片無法顯示？**
A: 檢查圖片路徑是否為相對路徑，確保路徑正確

**Q: 樣式沒有載入？**
A: 檢查 CSS 文件路徑，確保文件名稱正確

**Q: 連結無法跳轉？**
A: 檢查 HTML 文件中的 href 屬性是否正確

## 📞 需要幫助？

如果遇到部署問題，可以：
1. 檢查 GitHub Actions 日誌
2. 查看瀏覽器開發者工具錯誤
3. 確認文件路徑和權限設定















