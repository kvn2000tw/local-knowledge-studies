// 通用的按鈕切換和內容顯示邏輯
class ContentManager {
  constructor(contentData, defaultButtonId) {
    this.contentData = contentData;
    this.defaultButtonId = defaultButtonId;
    this.mainBtns = document.querySelectorAll('.main-btn');
    this.contentDisplay = this.createContentDisplay();
    this.init();
  }

  createContentDisplay() {
    let contentDisplay = document.getElementById('content-display');
    if (!contentDisplay) {
      contentDisplay = document.createElement('div');
      contentDisplay.id = 'content-display';
      contentDisplay.className = 'content-area';
      const footer = document.querySelector('footer');
      footer.parentNode.insertBefore(contentDisplay, footer);
    }
    return contentDisplay;
  }

  init() {
    this.setupEventListeners();
    this.showDefaultContent();
  }

  setupEventListeners() {
    this.mainBtns.forEach(btn => {
      btn.addEventListener('click', (e) => {
        e.preventDefault();
        this.switchButton(btn);
        this.showContent(btn.id);
      });
    });
  }

  switchButton(activeBtn) {
    this.mainBtns.forEach(b => b.classList.remove('active'));
    activeBtn.classList.add('active');
  }

  showContent(btnId) {
    if (this.contentData[btnId]) {
      this.contentDisplay.innerHTML = `
        <h3>${this.contentData[btnId].title}</h3>
        <div class="content-placeholder">
          ${this.contentData[btnId].content}
        </div>
      `;
      this.contentDisplay.classList.add('active');
    }
  }

  showDefaultContent() {
    this.showContent(this.defaultButtonId);
  }
} 