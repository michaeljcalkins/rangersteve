import { PropTypes } from 'react'
import PlayerById from '../PlayerById'
import actions from '../../actions'

const propTypes = {
    damagedPlayerId: PropTypes.string.isRequired,
    health: PropTypes.number.isRequired
}

let damageTimeout = null
let healingInterval = null
let lastKnownHealth = null

export default function onPlayerDamaged(data) {
    check(data, propTypes)

    const store = this.game.store
    if (store.getState().game.state !== 'active') return

    if (data.damagedPlayerId !== ('/#' + window.socket.id)) {
        let damagedPlayer = PlayerById.call(this, data.damagedPlayerId)
        if (damagedPlayer) {
            damagedPlayer.meta.health = data.health

            if (damagedPlayer.meta.health <= 0) {
                damagedPlayer.rightArmGroup.visible = false
                damagedPlayer.leftArmGroup.visible = false
                damagedPlayer.headGroup.visible = false
                damagedPlayer.torsoGroup.visible = false
                damagedPlayer.animations.play('death')
            }
        }
        return
    }

    store.dispatch(actions.player.setHealth(data.health))

    if (store.getState().player.health > 55 && store.getState().player.health < 100) {
        clearTimeout(damageTimeout)
        damageTimeout = setTimeout(() => {
            // Player's health will fully regenerate
            window.socket.emit('player full health', {
                roomId: store.getState().room.id
            })
        }, 5000)
    }

    if (store.getState().player.health > 0 && store.getState().player.health <= 55) {
        // Wait 5 seconds to begin healing process
        clearTimeout(damageTimeout)
        clearInterval(healingInterval)
        damageTimeout = setTimeout(() => {
            lastKnownHealth = store.getState().player.health
            healingInterval = setInterval(() => {
                if (lastKnownHealth >= 100) {
                    clearInterval(healingInterval)
                }

                lastKnownHealth += 10

                // Increase player health by 10 every 1/2 a second
                window.socket.emit('player healing', {
                    roomId: store.getState().room.id
                })
            }, 500)
        }, 5000)
    }

    if (store.getState().player.health <= 0) {
        this.rightArmGroup.visible = false
        this.leftArmGroup.visible = false
        this.headGroup.visible = false
        this.torsoGroup.visible = false
        this.player.animations.play('death')
    }
}
