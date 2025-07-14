class Header {
    selectors = {  // Хранит селекторы по data-атрибутам
        root: '[data-js-header]',
        overlay: '[data-js-header-overlay]',
        burgerButton: '[data-js-header-burger-button]',
    }

    stateClasses = {  // Хранит селекторы по css-классам состояний
        isActive: 'is-active',
        isLock: 'is-lock', 
    }

    constructor() {  // Метод автоматически выполняет свой код при инициализации класса. Содержит переменные для доступа к DOM-элементам
        this.rootElement = document.querySelector(this.selectors.root)
        this.overlayElement = this.rootElement.querySelector(this.selectors.overlay)
        this.burgerButtonElement = this.rootElement.querySelector(this.selectors.burgerButton)
        this.bindEvents()
    }

    onBurgerButtonClick = () => {
        this.burgerButtonElement.classList.toggle(this.stateClasses.isActive)
        this.overlayElement.classList.toggle(this.stateClasses.isActive)
        document.documentElement.classList.toggle(this.stateClasses.isLock) // Для корневого элемента DOM-дерева – <html lang="en">
    }

    bindEvents() { // В этом методе делаются привязки к различным DOM-элементам
        this.burgerButtonElement.addEventListener('click', this.onBurgerButtonClick)

    }
}

export default Header