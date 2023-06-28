function loading(percent) {
    let bar = '..........'

    let times = percent / 10

    let array = bar.split('')

    for (i = 0; i < times; i++) {
        array.splice(i, 1, '%')
    }

    if (percent == 100) {
        console.log('100% Complete!')
        console.log(`[${array.join('')}]`)
    } else {
        console.log(`${percent}% [${array.join('')}]`)
        console.log('Still loading...')
    }
}
