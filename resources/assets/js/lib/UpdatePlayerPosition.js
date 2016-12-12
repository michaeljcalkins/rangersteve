import emitMovePlayer from '../lib/SocketEvents/emitMovePlayer'
import GameConsts from 'lib/GameConsts'

let lastPlayerData = {}

function isPlayerShooting(weaponId, rightArmSprite) {
    return GameConsts.WEAPONS[weaponId].shootingFrame === rightArmSprite.frame
}

export default function() {
    const state = this.game.store.getState()

    /**
     * Emit player's latest position on the map
     */
    if (
        ! state.room.id ||
        state.player.health <= 0 ||
        state.room.state !== 'active' ||
        state.player.facing === null
    ) return

    const currentWeaponId = state.player.currentWeapon === 'primaryWeapon'
        ? state.player.selectedPrimaryWeaponId
        : state.player.selectedSecondaryWeaponId

    const angle = (this.game.physics.arcade.angleToPointer(RS.player) * 180 / Math.PI) + 90

    let newPlayerData = {
        angle: angle,
        flying: RS.rightJumpjet.visible && RS.leftJumpjet.visible,
        shooting: isPlayerShooting(currentWeaponId, RS.rightArmSprite),
        weaponId: currentWeaponId,
        x: RS.player.x,
        y: RS.player.y,
    }

    if (JSON.stringify(lastPlayerData) === JSON.stringify(newPlayerData)) return

    emitMovePlayer.call(this, newPlayerData)
    lastPlayerData = newPlayerData
}
