const Product = require('./model/product')

class FakeDb {

  constructor() {
    this.products = [
      {
        coverImage: './assets/img/phone-cover.jpg',
        name: 'Phone XL',
        price: 799,
        description: '9インチの大画面',
        productDate: '2022/12/3',
        heading1: 'デザイン',
        heading2: '機能',
        heading3: 'カメラ性能',
        headingtext1: 'デザインについての説明文',
        headingtext2: '機能についての説明文',
        headingtext3: 'カメラ性能についての説明文'
      },
      {
        coverImage: './assets/img/phone-cover.jpg',
        name: 'Phone Mini',
        price: 699,
        description: '6インチの小画面',
        productDate: '2022/12/3',
        heading1: 'デザイン',
        heading2: '機能',
        heading3: 'カメラ性能',
        headingtext1: 'デザインについての説明文',
        headingtext2: '機能についての説明文',
        headingtext3: 'カメラ性能についての説明文'
      },
      {
        coverImage: './assets/img/phone-cover.jpg',
        name: 'Phone Standard',
        price: 299,
        description: '7インチの標準画面',
        productDate: '2022/12/3',
        heading1: 'デザイン',
        heading2: '機能',
        heading3: 'カメラ性能',
        headingtext1: 'デザインについての説明文',
        headingtext2: '機能についての説明文',
        headingtext3: 'カメラ性能についての説明文'
      },
      {
        coverImage: './assets/img/phone-cover.jpg',
        name: 'Phone Ultra',
        price: 1299,
        description: '11インチの特大画面',
        productDate: '2023/1/23',
        heading1: 'デザイン',
        heading2: '機能',
        heading3: 'カメラ性能',
        headingtext1: 'デザインについての説明文',
        headingtext2: '機能についての説明文',
        headingtext3: 'カメラ性能についての説明文'
      }
    ]
  }

  async initDb() {
    await this.cleanDb()
    this.pushProductsToDb()
  }

  async cleanDb() {
    await Product.deleteMany({})
  }

  pushProductsToDb() {
    this.products.forEach(
      (product) => {
        const newProduct = new Product(product)
        newProduct.save()
      }
    )
  }
}

module.exports = FakeDb
