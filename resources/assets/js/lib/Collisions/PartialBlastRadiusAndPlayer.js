import emitPlayerDamaged from '../SocketEvents/emitPlayerDamaged'

export default function() {
    // if (! this.partialDamageBlastRadius) {
    //     return
    // }

    // Did your blast radius hit you
    this.physics.arcade.overlap(this.player, this.partialDamageBlastRadius, function(player, bullet) {
        // if (this.player.meta.health <= 0 || this.player.y < 3900) return

        emitPlayerDamaged.call(this, {
            roomId: this.roomId,
            damage: 30,
            weaponId: bullet.weaponId,
            damagedPlayerId: '/#' + this.socket.id,
            attackingPlayerId: null
        })
    }, null, this)
}