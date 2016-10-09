import GameConsts from '../GameConsts.js'

export default function() {
    this.rpgExplosions = this.game.add.group()
    this.rpgExplosions.createMultiple(15, 'rpgExplosion')
    this.rpgExplosions.forEach((rpgExplosion) => {
        rpgExplosion.animations.add('collision')
    })

    this.ricochets = this.game.add.group()
    this.ricochets.createMultiple(100, 'ricochet')
    this.ricochets.forEach((ricochet) => {
        ricochet.animations.add('collision')
    })

    this.playerDeaths = this.game.add.group()
    this.playerDeaths.createMultiple(15, 'player-death')
    this.playerDeaths.forEach((playerDeath) => {
        playerDeath.animations.add('death')
    })

    this.bullets = this.game.add.group()
    this.bullets.createMultiple(100, 'bullet')
    this.bullets.setAll('checkWorldBounds', true)
    this.bullets.setAll('outOfBoundsKill', true)

    this.physics.arcade.enable(this.bullets)
    this.game.slopes.enable(this.bullets)
    this.bullets.forEach(function(bullet) {
        bullet.body.height = 15
        bullet.body.width = 15
        bullet.height = 2
        bullet.width = 40

        // Define some shortcuts to some useful objects
        var body = bullet.body

        // Update player body properties
        body.drag.x = 0
        body.drag.y = 0
        body.bounce.x = 0
        body.bounce.y = 0
        body.gravity.y = GameConsts.BULLET_GRAVITY

        // Update player body Arcade Slopes properties
        body.slopes.friction.x = 0
        body.slopes.friction.y = 0
        body.slopes.preferY    = GameConsts.SLOPE_FEATURES.minimumOffsetY
    }, this)

    this.enemyBullets = this.game.add.group()
    this.enemyBullets.enableBody = true
    this.enemyBullets.createMultiple(100, 'bullet')
    this.enemyBullets.setAll('checkWorldBounds', true)
    this.enemyBullets.setAll('outOfBoundsKill', true)

    this.physics.arcade.enable(this.enemyBullets)
    this.enemyBullets.forEach(function(bullet) {
        bullet.body.height = 15
        bullet.body.width = 15
        bullet.height = 2
        bullet.width = 40
    }, this)
    this.game.slopes.enable(this.enemyBullets)
}
