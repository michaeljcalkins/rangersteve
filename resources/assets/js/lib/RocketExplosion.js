import { PropTypes } from 'react'

const propTypes = {
    bulletY: PropTypes.number.isRequired,
    bulletX: PropTypes.number.isRequired
}

export default function(data) {
    check(data, propTypes)

    let ricochet = this.add.sprite(data.bulletX, data.bulletY - 50, 'rocket')
    ricochet.scale.setTo(.5, .5)
    ricochet.anchor.setTo(.5, .5)
    ricochet.animations.add('collision', [0,1,2,3,4,5,6,7,8,9,10,11,12,13,14], 17, false, true)
    ricochet.animations.play('collision')
    ricochet.animations.currentAnim.killOnComplete = true

    // this.fullDamageBlastRadius.x = ricochet.x
    // this.fullDamageBlastRadius.y = ricochet.y
    // setTimeout(() => {
    //     this.fullDamageBlastRadius.kill()
    // }, 300)

    // this.partialDamageBlastRadius.x = ricochet.x
    // this.partialDamageBlastRadius.y = ricochet.y
    // setTimeout(() => {
    //     this.partialDamageBlastRadius.kill()
    // }, 200)
    // console.log(this.fullDamageBlastRadius)
    // console.log(this.partialDamageBlastRadius)
}
