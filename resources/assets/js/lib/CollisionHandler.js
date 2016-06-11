import PlayerAndPlatforms from './Collisions/PlayerAndPlatforms'
import PlayerAndEnemyBullets from './Collisions/PlayerAndEnemyBullets'
import BulletsAndEnemyPlayers from './Collisions/BulletsAndEnemyPlayers'
import BulletsAndPlatforms from './Collisions/BulletsAndPlatforms'
import EnemyBulletsAndPlatforms from './Collisions/EnemyBulletsAndPlatforms'
// import FullBlastRadiusAndEnemyPlayers from './Collisions/FullBlastRadiusAndEnemyPlayers'
// import FullBlastRadiusAndPlayer from './Collisions/FullBlastRadiusAndPlayer'
// import PartialBlastRadiusAndEnemyPlayers from './Collisions/PartialBlastRadiusAndEnemyPlayers'
// import PartialBlastRadiusAndPlayer from './Collisions/PartialBlastRadiusAndPlayer'

export default function CollisionHandler() {
    const state = this.game.store.getState()

    if (state.game.state !== 'active') return

    PlayerAndPlatforms.call(this)
    PlayerAndEnemyBullets.call(this)
    BulletsAndEnemyPlayers.call(this)
    EnemyBulletsAndPlatforms.call(this)
    BulletsAndPlatforms.call(this)
    // FullBlastRadiusAndEnemyPlayers.call(this)
    // FullBlastRadiusAndPlayer.call(this)
    // PartialBlastRadiusAndEnemyPlayers.call(this)
    // PartialBlastRadiusAndPlayer.call(this)
}
