const faker = require('faker')
const slugify = require('slugify')

faker.locale = 'id_ID'

module.exports = () => {
    const product = []

    for (let i = 1; i < 100; i += 1) {
        const images = []
        const colors = []
        const sizes = []

        for (let j = 0; j < faker.random.number({ min: 1, max: 3 }); j += 1) {
            images.push(`https://picsum.photos/420/320?image=${faker.random.number({ max: 1084 })}`)
        }
        for (let j = 0; j < faker.random.number({ min: 1, max: 5 }); j += 1) {
            colors.push(faker.commerce.color())
        }
        for (let j = 0; j < faker.random.number({ max: 8 }); j += 1) {
            sizes.push(faker.random.arrayElement(['XS', 'S', 'M', 'ML', 'L', 'XL', 'XXL', 'XXXL']))
        }

        const name = faker.commerce.productName()

        product.push({
            id: i,
            name,
            slug: slugify(name, { lower: true }),
            rate: faker.random.number({ max: 5 }),
            price: faker.commerce.price(50000, 10000000, 0),
            images,
            can_be_tried: faker.random.boolean(),
            description: faker.lorem.paragraph(),
            stocks: {
                colors,
                sizes,
            },
        })
    }

    return {
        product,
    }
}
