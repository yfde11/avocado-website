// 語言切換器
class LanguageSwitcher {
    constructor() {
        this.currentLang = 'zh-TW';
        this.translations = {
                         'zh-TW': {
                 // 首頁
                 'index.page.title': 'Avocado AI - 智能資安防護平台',
                 // 導航欄
                 'nav.home': '首頁',
                'nav.products': '產品',
                'nav.about': '關於我們',
                'nav.join': '加入我們',
                'nav.contact': '聯絡我們',
                
                // 首頁
                'hero.title.line1': '外表可愛',
                'hero.title.line2': '內在強大',
                'hero.title.line3': '的酪梨',
                'hero.subtitle': '新世代資安智能服務平台，專為中小型企業量身打造的智能威脅偵測與回應解決方案',
                'hero.btn.demo': '立即體驗',
                'hero.btn.learn': '了解更多',
                
                // 產品區域
                'products.highlight': '核心產品亮點',
                'products.title': 'ThreatCado XDR',
                'products.subtitle': 'SenseL 智能引擎',
                'products.description': 'ThreatCado XDR 是一個高度整合的延伸偵測與回應平台，核心由強大的 SenseL AI 偵測引擎驅動。它無縫整合了 AnomalyShield（負責異常偵測與 AI 驅動分析）和 ThreatScope（偵測已知攻擊模式或可疑行為），結合 EDR 與 NDR 的全面遙測數據，為您提供無與倫比的威脅洞察與防護能力。',
                'products.cta': '探索產品',
                
                // 關於我們
                'about.paragraph1': 'ThreatCado XDR，新世代資安智能服務平台，專為中小型企業量身打造。我們通過全面的端點防護 (EDR)、精準的網路偵測與回應 (NDR)、以及AI 驅動的智能化威脅偵測，實現動態風險評估與即時事件響應。',
                'about.paragraph2': '我們深知您的需求，因此 ThreatCado XDR 不僅提供卓越的技術效能，更具備高性價比與簡便的部署管理優勢。我們承諾完善的客戶支援與售後服務，包括直觀的部署引導、全天候監控及客製化安全優化建議，確保您的企業能夠心無旁騖地專注於核心業務發展，同時享受無縫且穩定的頂級安全防護體驗。',
                
                // 為什麼選擇 Avocado
                'why.title': '為什麼選擇酪梨？',
                'why.intro': 'Avocado.ai 創立於 2024 年 12 月，是一家專注於人工智慧與資訊安全整合應用的科技新創公司。我們不只提供產品，更提供一套全面且智能的資安解決方案，讓您在複雜的網路威脅面前保持領先',
                'why.feature1.title': 'AI 驅動的獨特優勢',
                'why.feature1.desc': '我們引以為傲的SenseL AI 助手，搭載了 LSTM 深度學習模型和輕量級語言模型 (SLM) 的 Agentic RAG 技術。精準識別零時攻擊、內部攻擊以及程式碼注入等新型攻擊模式。我們不僅偵測異常分數，更深入分析其背後的潛在威脅。',
                'why.feature2.title': '從數據到決策的智能轉化',
                'why.feature2.desc': '透過將 Wazuh EDR 和 NDR 實時遙測數據匯入 XDR 資料湖，系統能自動關聯事件並構建威脅圖形 (Threat Graph)。SenseL 則能基於此圖形與威脅情報庫（透過 RAG 技術）回應分析人員查詢，或自動摘要安全事件，提供引導式調查建議，提升 SOC 分析師的效率。',
                'why.feature3.title': '全面攻防模擬能力',
                'why.feature3.desc': '具備業界領先的AI 驅動攻防模擬引擎，能動態生成多樣化攻擊路徑。我們的Avocado 威脅獵捕平台整合 EDR / NDR / Syslog 資料，提供主動威脅獵捕。此外，還有供應鏈滲透模擬系統和針對 ICS/SCADA 的安全測試工具鏈。',
                'why.feature4.title': '高效能與高性價比',
                'why.feature4.desc': '我們理解中小型企業的預算考量。ThreatCado XDR 的設計理念就是提供競爭力的價格，無需額外投資於昂貴的資安硬體或專業人員。透過 AI 驅動的自動化分析與回應，有效縮短應變時間，迅速遏制安全事件，真正實現高效能與高性價比。',
                
                // 合作夥伴
                'partnership.title': '合作夥伴',
                'partnership.subtitle': '策略合作｜與啟碁科技（WNC）建立深度技術夥伴關係',
                'partnership.desc': 'Avocado.ai 致力於透過與產業領導者的強強聯手，共同推動資安技術的革新。我們與國際知名企業 啟碁科技 (WNC) 簽署了戰略技術合作協議，共同開發 ThreatCado XDR 全方位資安防護平台，這項合作證明了我們在 AI 威脅分析領域的領先地位和市場潛力。',
                
                // 行動呼籲
                'cta.title.line1': '立即行動！',
                'cta.title.line2': '想了解更多？我們提供免費顧問諮詢與試用，',
                'cta.title.line3': '讓您親身體驗 ThreatCado XDR 帶來的智能安全防護！',
                'cta.btn.consult': '免費諮詢',
                'cta.btn.details': '產品詳情',
                
                // 頁腳
                'footer.copyright': '&copy; 2024 Avocado AI. All rights reserved. 智能資安防護平台',
                
                // 關於我們頁面
                'about.page.title': '關於我們 - Avocado AI',
                'about.hero.title': 'Welcome to Avocado',
                'about.hero.desc1': 'ThreatCado XDR，新世代資安智能服務平台，專為中小型企業量身打造。我們結合全面的端點偵測 (EDR)、精準的網路偵測與回應 (NDR)、以及以風險驅動的威脅低位特徵，實現高效應對與即時事件響應。',
                'about.hero.desc2': '我們不只是技術的供應者，因此 ThreatCado XDR 不僅提供整合數據、威脅情報與 AI 驅動的防禦機制，還為用戶實現跨部門支援與數據整合，包含在地威脅情報的引導、全球性威脅資訊的同步與共享，確保您的企業能夠即時掌握最新威脅，並同時享受最直觀且完整的資安保護與支援。',
                'about.company.title': '公司簡介 Company Overview',
                'about.company.desc1': '酪梨智慧整體有限公司（AvocadoAI）創立於 2024 年 12 月 27 日，是一間專注於 AI 資安解決整合應用的技術團隊，核心技術結合產業 AI 行為分析、關鍵防護管理，以及跨平台的 XDR 安全整合。',
                'about.company.desc2': '我們的關鍵產品包括：',
                'about.company.product1.title': 'ThreatCado XDR：',
                'about.company.product1.desc': '關於整體 XDR 平台，整合 SIEM、SOAR 與 LLM 威脅分析',
                'about.company.product2.title': 'SenseL 安全助手：',
                'about.company.product2.desc': '具備情境識別、風險預測與即時應對的 AI 智能工具',
                'about.company.product1.name': 'ThreatCado XDR',
                'about.company.product1.subtitle': '整合式資安防護平台',
                'about.company.product2.name': 'SenseL 安全助手',
                'about.company.product2.subtitle': 'AI 智能威脅分析',
                'about.philosophy.title': '關於我們',
                'about.philosophy.quote': '【以簡馭繁】',
                'about.philosophy.desc1': '在複雜中找到簡單，讓一切都更高效。',
                'about.philosophy.desc2': '每一個強化的功能、每一項設計，都基於您的需求，讓操作、維護、協作更加順暢與高效。',
                'about.timeline.title': 'AvocadoAI 公司發展時間線',
                'about.timeline.subtitle': '從種子到開花結果的成長歷程',
                'about.vision.title': '願景與使命 Vision & Mission',
                'about.vision.quote': '「讓 AI 成為保護位作的守護者，成就下一個資安轉角」',
                'about.vision.desc1': '我們的使命，是為企業打造「更聰明、更精準、更有彈性」的防禦策略，尤其著重於中小型企業資安防禦力的提升。',
                'about.vision.desc2': '我們相信，科技應該是與人並肩作戰的夥伴，而非冷冰冰的工具。透過 ThreatCado，我們將科技的溫度轉化成資安防護的能量，確保每一位使用者都能在更安全的環境中，安心成長、盡情生活。',
                'about.team.title': '我們的團隊',
                'about.team.group1': 'AI 資訊分析技術組',
                'about.team.group2': '資安雲端基礎建設組',
                'about.team.group3': '資安顧問服務組',
                'about.team.member1': '資深 AI 資安工程師 (Lead AI Security Engineer)',
                'about.team.member2': 'AI 研究工程師 (AI Research Engineer)',
                'about.team.member3': 'AI 防護工程師 (Junior Engineer)',
                'about.team.member4': '雲端後端工程師 (Cloud Backend Engineer)',
                'about.team.member5': '雲端基礎架構工程師 (DevOps Engineer)',
                'about.team.member6': '開發實習工程師 (Junior Engineer)',
                'about.team.member7': '資深解決方案工程師 (Senior Engineer)',
                'about.team.member8': '解決方案工程師 (Solution Engineer)',
                'about.team.member9': '助理工程師 (Junior Engineer)',
                                 'about.footer.platform': '新世代資安智能服務平台',
                 'about.footer.home': '首頁',
                 'about.footer.products': '產品',
                 'about.footer.about': '關於我們',
                 'about.footer.join': '加入我們',
                 
                 // 時間線內容
                 'about.timeline.instruction': '點擊階段標題查看詳細內容',
                 'about.timeline.clear': '隱藏所有區塊',
                 'about.timeline.stage1.title': '種子期',
                 'about.timeline.stage1.subtitle': '發現問題的開始',
                 'about.timeline.stage1.description': '在一次與中小企業主的資安檢測訪談中，我們發現市場常見的監控系統缺一不可，「我們該不該自己開發 XDR 來整合各類資安功能？」事件發生的背後有人在操縱，根本不是巧合，這是市場的普遍需求，且潛藏著強大的市場潛力，我們決定從這裡開始。',
                 'about.timeline.stage2.title': '萌芽期',
                 'about.timeline.stage2.subtitle': '技術原型成形',
                 'about.timeline.stage2.description': '隨著想法迅速落實，我們的原型產品應運而生，並推出第一代「ThreatCado XDR」與 AI 智能助手「SenseL」。我們導入 LLM（大型語言模型）與 RAG 技術，讓 SenseL 不只是回應指令，而是能理解情境、協助分析人員調整策略，主動阻擋威脅，化身為真正的夥伴型守護者。',
                 'about.timeline.stage3.title': '生長期',
                 'about.timeline.stage3.subtitle': '快速拓展',
                 'about.timeline.stage3.description': '2024 年是我們的「階段里程碑」年，這一年，我們將增長成果走進世界舞台。參展美國 CES 消費電子展，展現跨境資安創新的影響力與整合能力。獲選至 PITCH 新創競賽代表，與全球 AI 資安新創並駕齊驅。',
                 'about.timeline.stage4.title': '開花期',
                 'about.timeline.stage4.subtitle': '走進實務、落地應用',
                 'about.timeline.stage4.description': '累積的同時，我們同時落地市場，落實「資安普及化」的理念。透過 SBIR 中小企業創新計畫，我們實際帶資安防護進入新竹某產業園區，並在測試區合作推出 ThreatCado 系統，將跨平台端口數據整合落實。',
                 'about.timeline.stage5.title': '結果期',
                 'about.timeline.stage5.subtitle': '持續創新與成長',
                 'about.timeline.stage5.description': '展望未來，我們將持續深耕 AI 資安領域，不斷創新技術與服務模式，為更多企業提供更優質的資安防護解決方案，成為業界領先的智能資安服務提供商。',
                
                                 // 產品頁面
                 'products.page.title': 'Products - Avocado AI 智能資安防護平台',
                 'products.back.home': '← 返回主頁',
                'products.hero.title.line1': 'Cute on the',
                'products.hero.title.line2': 'Outside',
                'products.hero.title.line3': 'Powerful on',
                'products.hero.title.line4': 'the Inside',
                'products.hero.brand': 'Products',
                'products.main.title': 'Avocado Products',
                'products.overview.title': '產品概述',
                'products.overview.text': '面對日益複雜且多樣化的資安威脅，中小企業經常因預算有限和專業資安人力短缺而無法有效應對。這導致業務中斷、營運中止等風險的增加，對企業造成重大的影響。本解決方案專為中小型企業（例如製造業）設計，針對資源有限但安全需求高的企業提供一套高效能且高性價比的智能資安防護方案。',
                'products.overview.description': '新世代資安智能服務平台 ThreatCado（XDR）是一款專為中小型企業設計的高效能擴展偵測與回應（XDR）解決方案，結合了先進的端點偵測與回應（EDR）功能，幫助企業有效識別、偵測並防禦各種網路攻擊。透過 AI（資安智能助手 SenseL）技術，進一步提升了威脅偵測與風險管理能力，提供了自動化、智能化的動態風險評估功能，確保企業在運營過程中的安全性。此方案能夠顯著提升企業的整體安全性，同時在現有 IT 環境中實現無縫整合，不僅滿足安全防護需求，更幫助企業以更低的成本有效應對資安挑戰，確保業務持續運行。',
                'products.features.title': '自動化資安獵捕平台，整合 EDR/NDR/SIEM<br>結合 SenseX AI 智能回應機制',
                                 'products.architecture.title': 'AI 驅動威脅分析架構圖',
                 'products.architecture.description': '整合式 XDR 與多元資安資料來源',
                 
                 // 售後服務區域
                 'products.services.title': '售後服務',
                 'products.services.deployment.title': '部屬服務',
                 'products.services.deployment.description': '專業的部署團隊，確保系統快速上線並穩定運行，提供完整的部署文檔和培訓支援。',
                 'products.services.monitoring.title': '7x24 實時監控服務',
                 'products.services.monitoring.description': '全天候不間斷的系統監控，即時發現並處理潛在威脅，確保您的資安防護始終有效。',
                 'products.services.update.title': '自動更新與維護',
                 'products.services.update.description': '智能化的系統更新機制，自動修補安全漏洞，保持防護系統的最新狀態。',
                 'products.services.report.title': '安全報告優化建議',
                 'products.services.report.description': '定期提供詳細的安全分析報告，並根據企業需求提供個性化的優化建議。',
                 
                                 // 模組介紹區域
                'products.modules.title': '模組介紹',
                'products.modules.edr.title': 'EDR : 端點偵測與回應',
                'products.modules.edr.description': '旨在即時偵測與發現端點惡意程式及網路攻擊，並採取必要的回應措施。',
                'products.modules.edr.feature1': '核心防護：即時偵測與主動防禦',
                'products.modules.edr.feature2': '部署簡便：一站式端點防護',
                'products.modules.ndr.title': 'NDR: 網路偵測與回應',
                'products.modules.ndr.description': '負責整合網路層級的防護，即使在簡化的環境下也能提供全面的網路監控與應變。',
                'products.modules.ndr.feature1': '網路層級防護：強化弱環境下的可視性',
                'products.modules.ndr.feature2': '行為分析與即時風險反應',
                'products.modules.ndr.feature3': '自動化事件響應與加速調查',
                
                // SenseL AI 區域
                'products.sensel.title': 'SenseL AI',
                'products.sensel.description': 'SenseL 作為嵌入 ThreatCado XDR 平台 中的 AI 安全助手，利用 大型語言模型 (LLM) 和 檢索增強生成 (RAG) 技術，將原始安全數據轉化為可操作的知識，極大提升 SOC 分析師的效率。',
                'products.sensel.feature1.title': '智能威脅獵捕<br>AI-Driven Threat Hunting',
                'products.sensel.feature2.title': '動態風險評估<br>Dynamic Risk Assessment',
                'products.sensel.feature3.title': '自我學習與優化<br>Self-learning & Optimization',
                
                 // Dashboard 介紹
                'products.dashboard.subscribers': '15位訂閱者',
                'products.dashboard.videos': '4部影片',
                'products.dashboard.subscribe': '訂閱',
                'products.dashboard.videos.title': '精選影片',
                'products.dashboard.video1.title': 'ThreatCado XDR - Lateral Movement (Part1)',
                'products.dashboard.video1.stats': '觀看次數:23次・7個月前',
                'products.dashboard.video2.title': 'ThreatCado XDR - Lateral Movement (Part2)',
                'products.dashboard.video2.stats': '觀看次數:18次・7個月前',
                'products.dashboard.video3.title': 'ThreatCado XDR - Proactive Defense',
                'products.dashboard.video3.stats': '觀看次數:15次・7個月前',
                'products.dashboard.video4.title': 'ThreatCado XDR - Account Creation & Agent Installation',
                'products.dashboard.video4.stats': '觀看次數:12次・7個月前',
                'products.dashboard.view.all': '查看所有影片',
                
                // 加入我們頁面
                'join.page.title': 'Join Us - Avocado AI 智能資安防護平台',
                'join.hero.title': 'Join Us',
                'join.hero.subtitle': '與我們一起打造智能資安防護的未來',
                'join.jobs.title': '職缺列表',
                'join.jobs.subtitle': '加入我們的團隊，一起創造資安防護的未來',
                'join.job1.title': '資深 AI 資安工程師',
                'join.job1.type': '全職',
                'join.job1.location': '台北市',
                'join.job1.description': '負責開發和維護 AI 驅動的資安解決方案，包括威脅偵測、風險評估和自動化回應系統。',
                'join.job1.requirements': '要求：5年以上資安開發經驗，熟悉機器學習和深度學習技術，具備 Python、TensorFlow 等技能。',
                'join.job1.apply': '立即申請',
                'join.job2.title': '雲端後端工程師',
                'join.job2.type': '全職',
                'join.job2.location': '台北市',
                'join.job2.description': '負責設計和開發雲端基礎架構，確保系統的高可用性和安全性。',
                'join.job2.requirements': '要求：3年以上雲端開發經驗，熟悉 AWS、Azure 等平台，具備微服務架構設計能力。',
                'join.job2.apply': '立即申請',
                'join.job3.title': '資安顧問',
                'join.job3.type': '全職',
                'join.job3.location': '台北市',
                'join.job3.description': '為客戶提供資安諮詢服務，包括風險評估、安全策略制定和技術實施指導。',
                'join.job3.requirements': '要求：5年以上資安顧問經驗，熟悉各項資安標準和法規，具備優秀的溝通能力。',
                'join.job3.apply': '立即申請',
                'join.culture.title': '公司文化',
                'join.culture.subtitle': '我們相信創新、協作和持續學習',
                'join.culture.innovation': '創新驅動',
                'join.culture.innovation.desc': '鼓勵員工探索新技術和解決方案，推動資安領域的創新發展。',
                'join.culture.collaboration': '團隊協作',
                'join.culture.collaboration.desc': '重視團隊合作，相信集體智慧能夠創造更大的價值。',
                'join.culture.learning': '持續學習',
                'join.culture.learning.desc': '提供豐富的學習資源和培訓機會，支持員工的職業發展。',
                'join.cta.title': '準備好加入我們了嗎？',
                'join.cta.subtitle': '一起打造智能資安防護的未來',
                'join.cta.button': '查看所有職缺',
                
                                 // 聯絡我們頁面
                 'contact.page.title': '聯絡我們 - Avocado AI',
                 'contact.hero.title': '聯絡我們',
                'contact.hero.subtitle': '我們隨時準備為您提供協助',
                'contact.info.title': '聯絡資訊',
                'contact.info.address': '地址',
                'contact.info.address.value': '台北市信義區信義路五段7號',
                'contact.info.phone': '電話',
                'contact.info.phone.value': '+886-2-2345-6789',
                'contact.info.email': '電子郵件',
                'contact.info.email.value': 'info@avocado.ai',
                'contact.form.title': '聯絡表單',
                'contact.form.name': '姓名',
                'contact.form.name.placeholder': '請輸入您的姓名',
                'contact.form.email': '電子郵件',
                'contact.form.email.placeholder': '請輸入您的電子郵件',
                'contact.form.subject': '主旨',
                'contact.form.subject.placeholder': '請輸入主旨',
                'contact.form.message': '訊息',
                'contact.form.message.placeholder': '請輸入您的訊息',
                'contact.form.submit': '送出訊息',
                'contact.newsletter.title': '訂閱電子報',
                'contact.newsletter.subtitle': '獲取最新的資安資訊和產品更新',
                'contact.newsletter.email': '電子郵件',
                'contact.newsletter.email.placeholder': '請輸入您的電子郵件',
                'contact.newsletter.subscribe': '訂閱',
                
                // 測試頁面
                'test.title': '語言切換功能測試',
                'test.subtitle': '測試 Avocado AI 網站的中英文切換功能',
                'test.current.lang': '當前語言',
                'test.language.note': '點擊導航欄右上角的語言切換按鈕來測試功能',
                'test.example.hero': '首頁標題範例',
                'test.example.products': '產品描述範例',
                'test.example.about': '關於我們範例',
                'test.instructions.title': '測試說明',
                'test.instructions.step1': '點擊導航欄右上角的語言切換按鈕',
                'test.instructions.step2': '觀察頁面內容是否正確切換語言',
                'test.instructions.step3': '檢查頁面標題是否更新',
                'test.instructions.step4': '測試不同頁面的語言切換功能',
                'test.back.home': '返回首頁'
            },
                         'en': {
                 // 首頁
                 'index.page.title': 'Avocado AI - Intelligent Cybersecurity Protection Platform',
                 // 導航欄
                 'nav.home': 'Home',
                'nav.products': 'Products',
                'nav.about': 'About us',
                'nav.join': 'Join us',
                'nav.contact': 'Contact Us',
                
                // 首頁
                'hero.title.line1': 'Cute on the Outside',
                'hero.title.line2': 'Powerful on the',
                'hero.title.line3': 'Inside',
                'hero.subtitle': 'Next-generation cybersecurity intelligent service platform, tailored for small and medium enterprises with intelligent threat detection and response solutions',
                'hero.btn.demo': 'Get Demo',
                'hero.btn.learn': 'Learn More',
                
                // 產品區域
                'products.highlight': 'Core Product Highlights',
                'products.title': 'ThreatCado XDR',
                'products.subtitle': 'SenseL Intelligent Engine',
                'products.description': 'ThreatCado XDR is a highly integrated extended detection and response platform, powered by the powerful SenseL AI detection engine. It seamlessly integrates AnomalyShield (responsible for anomaly detection and AI-driven analysis) and ThreatScope (detecting known attack patterns or suspicious behaviors), combining comprehensive telemetry data from EDR and NDR to provide you with unparalleled threat insights and protection capabilities.',
                'products.cta': 'Explore Products',
                
                // 關於我們
                'about.paragraph1': 'ThreatCado XDR, a next-generation cybersecurity intelligent service platform, is tailor-made for small and medium enterprises. We achieve dynamic risk assessment and real-time incident response through comprehensive endpoint protection (EDR), precise network detection and response (NDR), and AI-driven intelligent threat detection.',
                'about.paragraph2': 'We deeply understand your needs, so ThreatCado XDR not only provides excellent technical performance but also offers high cost-effectiveness and simple deployment management advantages. We promise comprehensive customer support and after-sales service, including intuitive deployment guidance, 24/7 monitoring, and customized security optimization recommendations, ensuring your enterprise can focus on core business development while enjoying seamless and stable top-tier security protection.',
                
                // 為什麼選擇 Avocado
                'why.title': 'Why Avocado?',
                'why.intro': 'Avocado.ai was founded in December 2024 as a technology startup focused on the integration of artificial intelligence and information security. We don\'t just provide products, but a comprehensive and intelligent cybersecurity solution that keeps you ahead of complex cyber threats.',
                'why.feature1.title': 'AI-Driven Unique Advantages',
                'why.feature1.desc': 'Our proud SenseL AI assistant is equipped with LSTM deep learning models and lightweight language model (SLM) Agentic RAG technology. It accurately identifies zero-day attacks, insider attacks, and new attack patterns like code injection. We don\'t just detect anomaly scores, but deeply analyze the potential threats behind them.',
                'why.feature2.title': 'Intelligent Transformation from Data to Decisions',
                'why.feature2.desc': 'By importing real-time telemetry data from Wazuh EDR and NDR into the XDR data lake, the system automatically correlates events and builds threat graphs. SenseL can respond to analyst queries based on this graph and threat intelligence library (through RAG technology), or automatically summarize security incidents, providing guided investigation recommendations to improve SOC analyst efficiency.',
                'why.feature3.title': 'Comprehensive Attack and Defense Simulation Capabilities',
                'why.feature3.desc': 'Equipped with industry-leading AI-driven attack and defense simulation engines that can dynamically generate diverse attack paths. Our Avocado threat hunting platform integrates EDR/NDR/Syslog data to provide proactive threat hunting. Additionally, there are supply chain penetration simulation systems and security testing toolchains for ICS/SCADA.',
                'why.feature4.title': 'High Performance and High Cost-Effectiveness',
                'why.feature4.desc': 'We understand the budget considerations of small and medium enterprises. The design philosophy of ThreatCado XDR is to provide competitive pricing without requiring additional investment in expensive cybersecurity hardware or professionals. Through AI-driven automated analysis and response, we effectively shorten response times and quickly contain security incidents, truly achieving high performance and high cost-effectiveness.',
                
                // 合作夥伴
                'partnership.title': 'Cooperations',
                'partnership.subtitle': 'Strategic Partnership | Deep Technical Partnership with WNC Technology',
                'partnership.desc': 'Avocado.ai is committed to promoting innovation in cybersecurity technology through strong partnerships with industry leaders. We have signed a strategic technical cooperation agreement with the internationally renowned enterprise WNC Technology to jointly develop the ThreatCado XDR comprehensive cybersecurity protection platform. This cooperation proves our leading position and market potential in the field of AI threat analysis.',
                
                // 行動呼籲
                'cta.title.line1': 'Take Action Now!',
                'cta.title.line2': 'Want to learn more? We provide free consulting and trials,',
                'cta.title.line3': 'letting you experience the intelligent security protection that ThreatCado XDR brings!',
                'cta.btn.consult': 'Free Consultation',
                'cta.btn.details': 'Product Details',
                
                // 頁腳
                'footer.copyright': '&copy; 2024 Avocado AI. All rights reserved. Intelligent Cybersecurity Protection Platform',
                
                // 關於我們頁面
                'about.page.title': 'About Us - Avocado AI',
                'about.hero.title': 'Welcome to Avocado',
                'about.hero.desc1': 'ThreatCado XDR, a next-generation cybersecurity intelligent service platform, is tailor-made for small and medium enterprises. We combine comprehensive endpoint detection (EDR), precise network detection and response (NDR), and risk-driven threat low-level features to achieve efficient response and real-time incident response.',
                'about.hero.desc2': 'We are not just technology providers, so ThreatCado XDR not only provides integrated data, threat intelligence, and AI-driven defense mechanisms, but also enables cross-departmental support and data integration for users, including local threat intelligence guidance, global threat information synchronization and sharing, ensuring your enterprise can grasp the latest threats in real-time while enjoying the most intuitive and complete cybersecurity protection and support.',
                'about.company.title': 'Company Overview',
                'about.company.desc1': 'AvocadoAI Co., Ltd. was founded on December 27, 2024, as a technology team focused on AI cybersecurity solution integration applications, with core technologies combining industry AI behavior analysis, key protection management, and cross-platform XDR security integration.',
                'about.company.desc2': 'Our key products include:',
                'about.company.product1.title': 'ThreatCado XDR:',
                'about.company.product1.desc': 'Comprehensive XDR platform integrating SIEM, SOAR, and LLM threat analysis',
                'about.company.product2.title': 'SenseL Security Assistant:',
                'about.company.product2.desc': 'AI intelligent tool with situational awareness, risk prediction, and real-time response capabilities',
                'about.company.product1.name': 'ThreatCado XDR',
                'about.company.product1.subtitle': 'Integrated Cybersecurity Protection Platform',
                'about.company.product2.name': 'SenseL Security Assistant',
                'about.company.product2.subtitle': 'AI Intelligent Threat Analysis',
                'about.philosophy.title': 'About Us',
                'about.philosophy.quote': '【Simplicity in Complexity】',
                'about.philosophy.desc1': 'Finding simplicity in complexity, making everything more efficient.',
                'about.philosophy.desc2': 'Every enhanced feature, every design is based on your needs, making operations, maintenance, and collaboration smoother and more efficient.',
                'about.timeline.title': 'AvocadoAI Company Development Timeline',
                'about.timeline.subtitle': 'Growth journey from seed to fruition',
                'about.vision.title': 'Vision & Mission',
                'about.vision.quote': '"Let AI become the guardian of protection, achieving the next cybersecurity transformation"',
                'about.vision.desc1': 'Our mission is to create "smarter, more precise, and more flexible" defense strategies for enterprises, with particular emphasis on enhancing the cybersecurity defense capabilities of small and medium enterprises.',
                'about.vision.desc2': 'We believe that technology should be a partner fighting alongside people, not a cold tool. Through ThreatCado, we transform the warmth of technology into cybersecurity protection energy, ensuring that every user can grow safely and live freely in a more secure environment.',
                'about.team.title': 'Our Team',
                'about.team.group1': 'AI Information Analysis Technology Group',
                'about.team.group2': 'Cybersecurity Cloud Infrastructure Group',
                'about.team.group3': 'Cybersecurity Consulting Services Group',
                'about.team.member1': 'Senior AI Cybersecurity Engineer (Lead AI Security Engineer)',
                'about.team.member2': 'AI Research Engineer (AI Research Engineer)',
                'about.team.member3': 'AI Protection Engineer (Junior Engineer)',
                'about.team.member4': 'Cloud Backend Engineer (Cloud Backend Engineer)',
                'about.team.member5': 'Cloud Infrastructure Engineer (DevOps Engineer)',
                'about.team.member6': 'Development Intern Engineer (Junior Engineer)',
                'about.team.member7': 'Senior Solution Engineer (Senior Engineer)',
                'about.team.member8': 'Solution Engineer (Solution Engineer)',
                'about.team.member9': 'Assistant Engineer (Junior Engineer)',
                                 'about.footer.platform': 'Next-generation Cybersecurity Intelligent Service Platform',
                 'about.footer.home': 'Home',
                 'about.footer.products': 'Products',
                 'about.footer.about': 'About Us',
                 'about.footer.join': 'Join Us',
                 
                 // 時間線內容
                 'about.timeline.instruction': 'Click stage titles to view details',
                 'about.timeline.clear': 'Hide All Blocks',
                 'about.timeline.stage1.title': 'Seed Stage',
                 'about.timeline.stage1.subtitle': 'The Beginning of Problem Discovery',
                 'about.timeline.stage1.description': 'During cybersecurity assessment interviews with small and medium enterprise owners, we discovered that market-common monitoring systems are indispensable. "Should we develop our own XDR to integrate various cybersecurity functions?" The events happening behind the scenes are not coincidences but are being manipulated by someone. This is a universal market demand with strong market potential, and we decided to start from here.',
                 'about.timeline.stage2.title': 'Germination Stage',
                 'about.timeline.stage2.subtitle': 'Technical Prototype Formation',
                 'about.timeline.stage2.description': 'As ideas rapidly materialized, our prototype product emerged, launching the first generation "ThreatCado XDR" and AI intelligent assistant "SenseL". We introduced LLM (Large Language Model) and RAG technology, making SenseL not just respond to commands, but understand context, assist analysts in adjusting strategies, actively block threats, and become a true partner-type guardian.',
                 'about.timeline.stage3.title': 'Growth Stage',
                 'about.timeline.stage3.subtitle': 'Rapid Expansion',
                 'about.timeline.stage3.description': '2024 is our "milestone" year. This year, we brought our growth achievements to the world stage. We exhibited at the US CES Consumer Electronics Show, demonstrating the influence and integration capabilities of cross-border cybersecurity innovation. We were selected as representatives for the PITCH startup competition, competing alongside global AI cybersecurity startups.',
                 'about.timeline.stage4.title': 'Flowering Stage',
                 'about.timeline.stage4.subtitle': 'Entering Practice and Market Application',
                 'about.timeline.stage4.description': 'While accumulating experience, we simultaneously entered the market, implementing the concept of "cybersecurity popularization". Through the SBIR Small Business Innovation Research program, we actually brought cybersecurity protection into an industrial park in Hsinchu, and cooperated with the testing area to launch the ThreatCado system, implementing cross-platform port data integration.',
                 'about.timeline.stage5.title': 'Fruiting Stage',
                 'about.timeline.stage5.subtitle': 'Continuous Innovation and Growth',
                 'about.timeline.stage5.description': 'Looking to the future, we will continue to deepen our expertise in AI cybersecurity, continuously innovate technology and service models, provide better cybersecurity protection solutions for more enterprises, and become a leading intelligent cybersecurity service provider in the industry.',
                
                                 // 產品頁面
                 'products.page.title': 'Products - Avocado AI Intelligent Cybersecurity Protection Platform',
                 'products.back.home': '← Back to Home',
                'products.hero.title.line1': 'Cute on the',
                'products.hero.title.line2': 'Outside',
                'products.hero.title.line3': 'Powerful on',
                'products.hero.title.line4': 'the Inside',
                'products.hero.brand': 'Products',
                'products.main.title': 'Avocado Products',
                'products.overview.title': 'Product Overview',
                'products.overview.text': 'Facing increasingly complex and diverse cybersecurity threats, small and medium enterprises often cannot effectively respond due to limited budgets and shortage of professional cybersecurity personnel. This leads to increased risks of business interruption and operational suspension, causing significant impacts on enterprises. This solution is specifically designed for small and medium enterprises (such as manufacturing), providing a high-performance and cost-effective intelligent cybersecurity protection solution for enterprises with limited resources but high security requirements.',
                'products.overview.description': 'The next-generation cybersecurity intelligent service platform ThreatCado (XDR) is a high-performance extended detection and response (XDR) solution designed for small and medium enterprises, combining advanced endpoint detection and response (EDR) capabilities to help enterprises effectively identify, detect, and defend against various cyber attacks. Through AI (cybersecurity intelligent assistant SenseL) technology, it further enhances threat detection and risk management capabilities, providing automated and intelligent dynamic risk assessment functions to ensure enterprise security during operations. This solution can significantly improve the overall security of enterprises while achieving seamless integration in existing IT environments, not only meeting security protection needs but also helping enterprises effectively address cybersecurity challenges at lower costs, ensuring business continuity.',
                'products.features.title': 'Automated Cybersecurity Hunting Platform, Integrating EDR/NDR/SIEM<br>Combined with SenseX AI Intelligent Response Mechanism',
                                 'products.architecture.title': 'AI-Driven Threat Analysis Architecture',
                 'products.architecture.description': 'Integrated XDR with Multiple Cybersecurity Data Sources',
                 
                 // 售後服務區域
                 'products.services.title': 'After-Sales Service',
                 'products.services.deployment.title': 'Deployment Service',
                 'products.services.deployment.description': 'Professional deployment team ensures rapid system launch and stable operation, providing complete deployment documentation and training support.',
                 'products.services.monitoring.title': '7x24 Real-Time Monitoring Service',
                 'products.services.monitoring.description': '24/7 uninterrupted system monitoring, immediately detecting and handling potential threats, ensuring your cybersecurity protection is always effective.',
                 'products.services.update.title': 'Automatic Updates and Maintenance',
                 'products.services.update.description': 'Intelligent system update mechanism, automatically patching security vulnerabilities, maintaining the latest state of protection systems.',
                 'products.services.report.title': 'Security Report Optimization Recommendations',
                 'products.services.report.description': 'Regular provision of detailed security analysis reports, and personalized optimization recommendations based on enterprise needs.',
                 
                                  // 模組介紹區域
                'products.modules.title': 'Module Introduction',
                'products.modules.edr.title': 'EDR: Endpoint Detection and Response',
                'products.modules.edr.description': 'Aimed at real-time detection and discovery of endpoint malware and network attacks, and taking necessary response measures.',
                'products.modules.edr.feature1': 'Core Protection: Real-time Detection and Active Defense',
                'products.modules.edr.feature2': 'Easy Deployment: One-stop Endpoint Protection',
                'products.modules.ndr.title': 'NDR: Network Detection and Response',
                'products.modules.ndr.description': 'Responsible for integrating network-level protection, providing comprehensive network monitoring and response even in simplified environments.',
                'products.modules.ndr.feature1': 'Network-level Protection: Enhanced Visibility in Weak Environments',
                'products.modules.ndr.feature2': 'Behavioral Analysis and Real-time Risk Response',
                'products.modules.ndr.feature3': 'Automated Incident Response and Accelerated Investigation',
                
                // SenseL AI 區域
                'products.sensel.title': 'SenseL AI',
                'products.sensel.description': 'SenseL, as an AI security assistant embedded in the ThreatCado XDR platform, utilizes Large Language Model (LLM) and Retrieval-Augmented Generation (RAG) technologies to transform raw security data into actionable knowledge, greatly improving SOC analyst efficiency.',
                'products.sensel.feature1.title': 'Intelligent Threat Hunting<br>AI-Driven Threat Hunting',
                'products.sensel.feature2.title': 'Dynamic Risk Assessment<br>Dynamic Risk Assessment',
                'products.sensel.feature3.title': 'Self-learning & Optimization<br>Self-learning & Optimization',
                
                 // Dashboard 介紹
                'products.dashboard.subscribers': '15 subscribers',
                'products.dashboard.videos': '4 videos',
                'products.dashboard.subscribe': 'Subscribe',
                'products.dashboard.videos.title': 'Featured Videos',
                'products.dashboard.video1.title': 'ThreatCado XDR - Lateral Movement (Part1)',
                'products.dashboard.video1.stats': '23 views • 7 months ago',
                'products.dashboard.video2.title': 'ThreatCado XDR - Lateral Movement (Part2)',
                'products.dashboard.video2.stats': '18 views • 7 months ago',
                'products.dashboard.video3.title': 'ThreatCado XDR - Proactive Defense',
                'products.dashboard.video3.stats': '15 views • 7 months ago',
                'products.dashboard.video4.title': 'ThreatCado XDR - Account Creation & Agent Installation',
                'products.dashboard.video4.stats': '12 views • 7 months ago',
                'products.dashboard.view.all': 'View All Videos',
                
                // 加入我們頁面
                'join.page.title': 'Join Us - Avocado AI Intelligent Cybersecurity Protection Platform',
                'join.hero.title': 'Join Us',
                'join.hero.subtitle': 'Build the Future of Intelligent Cybersecurity Protection with Us',
                'join.jobs.title': 'Job Openings',
                'join.jobs.subtitle': 'Join Our Team and Create the Future of Cybersecurity Protection Together',
                'join.job1.title': 'Senior AI Cybersecurity Engineer',
                'join.job1.type': 'Full-time',
                'join.job1.location': 'Taipei City',
                'join.job1.description': 'Responsible for developing and maintaining AI-driven cybersecurity solutions, including threat detection, risk assessment, and automated response systems.',
                'join.job1.requirements': 'Requirements: 5+ years of cybersecurity development experience, familiar with machine learning and deep learning technologies, proficient in Python, TensorFlow, and other skills.',
                'join.job1.apply': 'Apply Now',
                'join.job2.title': 'Cloud Backend Engineer',
                'join.job2.type': 'Full-time',
                'join.job2.location': 'Taipei City',
                'join.job2.description': 'Responsible for designing and developing cloud infrastructure, ensuring high availability and security of systems.',
                'join.job2.requirements': 'Requirements: 3+ years of cloud development experience, familiar with AWS, Azure, and other platforms, proficient in microservice architecture design.',
                'join.job2.apply': 'Apply Now',
                'join.job3.title': 'Cybersecurity Consultant',
                'join.job3.type': 'Full-time',
                'join.job3.location': 'Taipei City',
                'join.job3.description': 'Provide cybersecurity consulting services to clients, including risk assessment, security strategy development, and technical implementation guidance.',
                'join.job3.requirements': 'Requirements: 5+ years of cybersecurity consulting experience, familiar with various cybersecurity standards and regulations, excellent communication skills.',
                'join.job3.apply': 'Apply Now',
                'join.culture.title': 'Company Culture',
                'join.culture.subtitle': 'We Believe in Innovation, Collaboration, and Continuous Learning',
                'join.culture.innovation': 'Innovation-Driven',
                'join.culture.innovation.desc': 'Encourage employees to explore new technologies and solutions, driving innovation in the cybersecurity field.',
                'join.culture.collaboration': 'Team Collaboration',
                'join.culture.collaboration.desc': 'Value teamwork, believing that collective intelligence can create greater value.',
                'join.culture.learning': 'Continuous Learning',
                'join.culture.learning.desc': 'Provide rich learning resources and training opportunities, supporting employee career development.',
                'join.cta.title': 'Ready to Join Us?',
                'join.cta.subtitle': 'Build the Future of Intelligent Cybersecurity Protection Together',
                'join.cta.button': 'View All Openings',
                
                                 // 聯絡我們頁面
                 'contact.page.title': 'Contact Us - Avocado AI',
                 'contact.hero.title': 'Contact Us',
                'contact.hero.subtitle': 'We are always ready to help you',
                'contact.info.title': 'Contact Information',
                'contact.info.address': 'Address',
                'contact.info.address.value': '7, Sec. 5, Xinyi Rd., Xinyi Dist., Taipei City',
                'contact.info.phone': 'Phone',
                'contact.info.phone.value': '+886-2-2345-6789',
                'contact.info.email': 'Email',
                'contact.info.email.value': 'info@avocado.ai',
                'contact.form.title': 'Contact Form',
                'contact.form.name': 'Name',
                'contact.form.name.placeholder': 'Please enter your name',
                'contact.form.email': 'Email',
                'contact.form.email.placeholder': 'Please enter your email',
                'contact.form.subject': 'Subject',
                'contact.form.subject.placeholder': 'Please enter subject',
                'contact.form.message': 'Message',
                'contact.form.message.placeholder': 'Please enter your message',
                'contact.form.submit': 'Send Message',
                'contact.newsletter.title': 'Subscribe to Newsletter',
                'contact.newsletter.subtitle': 'Get the latest cybersecurity information and product updates',
                'contact.newsletter.email': 'Email',
                'contact.newsletter.email.placeholder': 'Please enter your email',
                'contact.newsletter.subscribe': 'Subscribe',
                
                // 測試頁面
                'test.title': 'Language Switch Function Test',
                'test.subtitle': 'Test the Chinese-English switching function of the Avocado AI website',
                'test.current.lang': 'Current Language',
                'test.language.note': 'Click the language switch button in the top right corner of the navigation bar to test the function',
                'test.example.hero': 'Homepage Title Example',
                'test.example.products': 'Product Description Example',
                'test.example.about': 'About Us Example',
                'test.instructions.title': 'Test Instructions',
                'test.instructions.step1': 'Click the language switch button in the top right corner of the navigation bar',
                'test.instructions.step2': 'Observe whether the page content switches languages correctly',
                'test.instructions.step3': 'Check if the page title updates',
                'test.instructions.step4': 'Test the language switch function on different pages',
                'test.back.home': 'Back to Home'
            }
        };
        
        this.init();
    }
    
    init() {
        // 等待 DOM 完全載入
        if (document.readyState === 'loading') {
            document.addEventListener('DOMContentLoaded', () => {
                this.createLanguageButton();
                this.loadLanguage();
                this.translatePage();
            });
        } else {
            this.createLanguageButton();
            this.loadLanguage();
            this.translatePage();
        }
    }
    
    createLanguageButton() {
        // 創建語言切換按鈕
        const languageBtn = document.createElement('div');
        languageBtn.className = 'language-switcher';
        languageBtn.innerHTML = `
            <button class="lang-btn" onclick="languageSwitcher.toggleLanguage()">
                <span class="lang-text">${this.currentLang === 'zh-TW' ? '中文' : 'EN'}</span>
                <span class="lang-icon">🌐</span>
            </button>
        `;
        
        // 添加到導航欄
        const navContainer = document.querySelector('.nav-container');
        if (navContainer) {
            // 檢查是否已經有語言切換按鈕
            const existingBtn = navContainer.querySelector('.language-switcher');
            if (!existingBtn) {
                navContainer.appendChild(languageBtn);
            }
        } else {
            // 如果沒有找到 nav-container，延遲重試
            setTimeout(() => {
                this.createLanguageButton();
            }, 100);
        }
        
        // 添加樣式
        this.addStyles();
    }
    
    addStyles() {
        const style = document.createElement('style');
        style.textContent = `
            .language-switcher {
                margin-left: 20px;
                position: relative;
            }
            
            .lang-btn {
                background: linear-gradient(135deg, #8BBF9F 0%, #A39BBE 100%);
                border: 2px solid rgba(255, 255, 255, 0.3);
                color: #fff;
                padding: 12px 20px;
                border-radius: 25px;
                cursor: pointer;
                font-size: 16px;
                font-weight: 700;
                transition: all 0.3s ease;
                backdrop-filter: blur(10px);
                display: flex;
                align-items: center;
                gap: 10px;
                box-shadow: 0 4px 15px rgba(139, 191, 159, 0.3);
                text-shadow: 0 1px 3px rgba(0, 0, 0, 0.3);
                position: relative;
                overflow: hidden;
            }
            
            .lang-btn::before {
                content: '';
                position: absolute;
                top: 0;
                left: -100%;
                width: 100%;
                height: 100%;
                background: linear-gradient(90deg, transparent, rgba(255, 255, 255, 0.2), transparent);
                transition: left 0.5s;
            }
            
            .lang-btn:hover::before {
                left: 100%;
            }
            
            .lang-btn:hover {
                background: linear-gradient(135deg, #A39BBE 0%, #8BBF9F 100%);
                border-color: rgba(255, 255, 255, 0.6);
                transform: translateY(-2px) scale(1.05);
                box-shadow: 0 8px 25px rgba(163, 155, 190, 0.4);
            }
            
            .lang-btn:active {
                transform: translateY(0) scale(0.98);
            }
            
            .lang-icon {
                font-size: 18px;
                animation: rotate 2s linear infinite;
            }
            
            @keyframes rotate {
                from { transform: rotate(0deg); }
                to { transform: rotate(360deg); }
            }
            
            .navbar.scrolled .lang-btn {
                background: linear-gradient(135deg, #2E2E2E 0%, #4A4A4A 100%);
                border-color: rgba(0, 0, 0, 0.3);
                color: #fff;
                box-shadow: 0 4px 15px rgba(0, 0, 0, 0.2);
            }
            
            .navbar.scrolled .lang-btn:hover {
                background: linear-gradient(135deg, #4A4A4A 0%, #2E2E2E 100%);
                border-color: rgba(0, 0, 0, 0.5);
                box-shadow: 0 8px 25px rgba(0, 0, 0, 0.3);
            }
        `;
        document.head.appendChild(style);
    }
    
    toggleLanguage() {
        this.currentLang = this.currentLang === 'zh-TW' ? 'en' : 'zh-TW';
        this.saveLanguage();
        this.translatePage();
        this.updateButtonText();
    }
    
    saveLanguage() {
        localStorage.setItem('avocado-language', this.currentLang);
    }
    
    loadLanguage() {
        const savedLang = localStorage.getItem('avocado-language');
        if (savedLang && this.translations[savedLang]) {
            this.currentLang = savedLang;
        }
    }
    
    updateButtonText() {
        const langText = document.querySelector('.lang-text');
        if (langText) {
            langText.textContent = this.currentLang === 'zh-TW' ? '中文' : 'EN';
        }
    }
    
    translatePage() {
        const elements = document.querySelectorAll('[data-translate]');
        elements.forEach(element => {
            const key = element.getAttribute('data-translate');
            if (this.translations[this.currentLang][key]) {
                element.innerHTML = this.translations[this.currentLang][key];
            }
        });
        
        // 更新頁面語言屬性
        document.documentElement.lang = this.currentLang;
        
        // 更新頁面標題
        this.updatePageTitle();
    }
    
    updatePageTitle() {
        const currentPath = window.location.pathname;
        let title = '';
        
        if (this.currentLang === 'zh-TW') {
            if (currentPath.includes('index.html') || currentPath === '/') {
                title = 'Avocado AI - 智能資安防護平台';
            } else if (currentPath.includes('about-us.html')) {
                title = '關於我們 - Avocado AI';
            } else if (currentPath.includes('products.html')) {
                title = 'Products - Avocado AI 智能資安防護平台';
            } else if (currentPath.includes('join-us.html')) {
                title = 'Join Us - Avocado AI 智能資安防護平台';
            } else if (currentPath.includes('contact-us.html')) {
                title = '聯絡我們 - Avocado AI';
            }
        } else {
            if (currentPath.includes('index.html') || currentPath === '/') {
                title = 'Avocado AI - Intelligent Cybersecurity Protection Platform';
            } else if (currentPath.includes('about-us.html')) {
                title = 'About Us - Avocado AI';
            } else if (currentPath.includes('products.html')) {
                title = 'Products - Avocado AI Intelligent Cybersecurity Protection Platform';
            } else if (currentPath.includes('join-us.html')) {
                title = 'Join Us - Avocado AI Intelligent Cybersecurity Protection Platform';
            } else if (currentPath.includes('contact-us.html')) {
                title = 'Contact Us - Avocado AI';
            }
        }
        
        if (title) {
            document.title = title;
        }
    }
}

// 初始化語言切換器
const languageSwitcher = new LanguageSwitcher();

// 全局語言狀態管理
window.AvocadoLanguage = {
    getCurrentLanguage: () => languageSwitcher.currentLang,
    setLanguage: (lang) => {
        if (languageSwitcher.translations[lang]) {
            languageSwitcher.currentLang = lang;
            languageSwitcher.saveLanguage();
            languageSwitcher.translatePage();
            languageSwitcher.updateButtonText();
        }
    },
    translateElement: (element, key) => {
        const lang = languageSwitcher.currentLang;
        if (languageSwitcher.translations[lang] && languageSwitcher.translations[lang][key]) {
            element.innerHTML = languageSwitcher.translations[lang][key];
        }
    }
};

// 確保在頁面載入完成後重新檢查語言切換器
window.addEventListener('load', () => {
    // 如果語言切換按鈕沒有顯示，重新創建
    if (!document.querySelector('.language-switcher')) {
        languageSwitcher.createLanguageButton();
    }
});
