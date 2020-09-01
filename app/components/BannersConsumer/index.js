export default class BannersConsumer {
    constructor() {
        this.classMain = 'banner-consumer-cpnt'
        this.classAuxiliary = 'is-full'
        this.styleClassMain = `.${this.classMain}`
        this.bannersFound = document.querySelectorAll(this.styleClassMain)

        this.init()
    }

    bannerSettingsDefault() {
        return {
            selector: '',
            imageDesk: '',
            imageMobi: '',
            url: '#',
            target: '_self',
            magazineSubscribeBackground: '#fff',
        }
    }

    init() {
        if (!this.bannersFound || !window.glbBannersConsumer) return null

        this.addStyle()

        this.bannersFound.forEach((element) => {
            window.glbBannersConsumer.forEach((config) => {
                if (config.selector === element.dataset.bannerConsumerName) {
                    const finalConfig = {
                        ...this.bannerSettingsDefault(),
                        ...config,
                    }

                    this.magazineSubscribeParentBackground(element, finalConfig)

                    this.addBanner(element, finalConfig)
                }
            })
        })

        this.showConsole()
    }

    showConsole() {
        console.groupCollapsed('BannerConsumer Component')

        console.group('Constructor')
        console.table(this)
        console.groupEnd()

        console.group('glbBannersConsumer')
        console.table(window.glbBannersConsumer)
        console.groupEnd()

        console.groupEnd()
    }

    addBanner(element, config) {
        element.insertAdjacentHTML('beforeend', this.render(config))
    }

    addStyle() {
        const elBody = document.body
        elBody.insertAdjacentHTML('beforeend', this.style())
    }

    magazineSubscribeParentBackground(element, finalConfig) {
        if (
            element.dataset.name === 'banner-subscribe' &&
            finalConfig.magazineSubscribeBackground
        )
            element.parentElement.style.background =
                finalConfig.magazineSubscribeBackground
    }

    render(config) {
        return `
            <div class="${this.classMain} ${this.classAuxiliary}"
        >
            <a href="${config.url || '#'}" target="${config.target || ''}">
                <picture>
                    <source srcset="${
            config.imageDesk
            }" media='(min-width: 680px)' />
                    <source srcset="${config.imageMobi}" />
                    <img
                        className="${this.classMain}-image"
                        src="${config.imageMobi}"
                        alt=''
                    />
                </picture>
            </a>
        </div>
        `
    }

    style() {
        return `
        <style>
        ${this.styleClassMain} a, picture { 
            display: flex;
        }

        ${this.styleClassMain} a { 
            overflow: hidden;
            position: relative;
        }

        ${this.styleClassMain} img { 
            z-index: 1;
        }

          ${this.styleClassMain}.is-responsive img {
            max-width: 100%;
            height: auto; 
          }
        
          ${this.styleClassMain}.is-full a {
            justify-content: center;
          }
        </style>
        `
    }
}
