import { PropTypes } from 'react'
import PlayerById from'../PlayerById'
import { playerFaceLeft, playerFaceRight } from '../RemotePlayerFaceHandler'
import GameConsts from '../GameConsts'

const propTypes = {
    id: PropTypes.string.isRequired,
    x: PropTypes.number.isRequired,
    y: PropTypes.number.isRequired,
    rightArmAngle: PropTypes.number.isRequired,
    leftArmAngle: PropTypes.number.isRequired,
    facing: PropTypes.string.isRequired,
    health: PropTypes.number.isRequired,
    weaponId: PropTypes.string.isRequired
}

export default function onMovePlayer(data) {
    check(data, propTypes)

    const store = this.game.store
    if (store.getState().game.state !== 'active') return

    if (data.id === ('/#' + window.socket.id)) return

    let movePlayer = PlayerById.call(this, data.id)

    if (! movePlayer || (store.getState().room !== null && store.getState().room.state === 'ended')) return

    if (movePlayer.meta.health <= 0) {
        return movePlayer.alpha = 0
    }

    // Update player position
    movePlayer.x = data.x
    movePlayer.y = data.y

    movePlayer.alpha = 1
    movePlayer.rightArmGroup.visible = true
    movePlayer.leftArmGroup.visible = true

    // Control jump jet visibility
    movePlayer.rightJumpjet.visible = data.flying
    movePlayer.leftJumpjet.visible = data.flying

    // Control muzzle flash visibility
    // movePlayer.muzzleFlash.visible = data.shooting

    // Update player angles
    movePlayer.rightArmGroup.angle = data.rightArmAngle
    movePlayer.leftArmGroup.angle = data.leftArmAngle

    if (data.facing === 'right') {
        playerFaceRight(movePlayer)
    } else {
        playerFaceLeft(movePlayer)
    }

    if (movePlayer.x > movePlayer.lastPosition.x && ! data.flying) {
        movePlayer.animations.play('right')
    } else if (movePlayer.x < movePlayer.lastPosition.x && ! data.flying) {
        movePlayer.animations.play('left')
    } else {
        movePlayer.animations.stop()

        if (movePlayer.facing === 'right') {
            movePlayer.frame = GameConsts.STANDING_RIGHT_FRAME
        } else {
            movePlayer.frame = GameConsts.STANDING_LEFT_FRAME
        }
    }

    movePlayer.lastPosition.x = movePlayer.x
    movePlayer.lastPosition.y = movePlayer.y
}
