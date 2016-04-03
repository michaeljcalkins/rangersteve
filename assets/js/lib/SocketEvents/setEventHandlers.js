'use strict'

import EventHandler from '../EventHandler'

module.exports = function () {
    this.socket.on('connect', this.onSocketConnected.bind(this))
    this.socket.on('disconnect', this.onSocketDisconnect.bind(this))

    this.socket.on('update players', this.onUpdatePlayers.bind(this))
    this.socket.on('move player', this.onMovePlayer.bind(this))
    this.socket.on('remove player', this.onRemovePlayer.bind(this))

    this.socket.on('player respawn', this.onPlayerRespawn.bind(this))
    this.socket.on('player damaged', this.onPlayerDamaged.bind(this))

    this.socket.on('bullet fired', this.onBulletFired.bind(this))
    this.socket.on('bullet removed', this.onBulletRemoved.bind(this))

    EventHandler.on('player update nickname', (data) => {
        this.socket.emit('player update nickname', {
            roomId: this.roomId,
            nickname: data.nickname
        })
    })
}
