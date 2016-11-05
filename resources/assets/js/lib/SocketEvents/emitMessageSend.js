import { PropTypes } from 'react'

const propTypes = {
    roomId: PropTypes.string.isRequired,
    playerNickname: PropTypes.string.isRequired,
    playerId: PropTypes.string.isRequired,
    message: PropTypes.string.isRequired,
}

export default function(data) {
    window.socket.emit('message send', data)
}
