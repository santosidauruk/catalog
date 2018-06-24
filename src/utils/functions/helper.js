const Just = (value) => ({
    map: (f) => {
        try {
            return Just(f(value))
        } catch (e) {
            return Nothing()
        }
    },
    bind(f) {
        return this.map(f).join()
    },
    join: () => value,
    isJust: () => true,
    isNothing: () => false,
    orJust: () => (value ? value : false),
})

const Nothing = () => ({
    map: () => Nothing(),
    bind: () => Nothing(),
    join: () => Nothing(),
    isJust: () => false,
    isNothing: () => true,
    orJust: (v) => v,
})

// class Maybe {
//     static of(val) {
//         if (!val) return Nothing()
//         return Just(val)
//     }
// }

const Maybe = {
    of: (val) => (!val ? Nothing() : Just(val)),
}

export { Maybe, Just, Nothing }
