import React, { PropTypes } from 'react'

export default function HudKillingSpree({
    killingSpreeCount
}) {
    function renderMessage() {
        let message = null

        if (killingSpreeCount === 3) {
            message = 'TRIPLE KILL'
        } else if (killingSpreeCount === 4) {
            message = 'MULTI KILL'
        } else if (killingSpreeCount === 6) {
            message = 'ULTRA KILL'
        } else if (killingSpreeCount === 8) {
            message = 'KILLING SPREE'
        } else if (killingSpreeCount === 10) {
            message = 'UNSTOPPABLE'
        } else if (killingSpreeCount === 12) {
            message = 'LUDICROUS KILL'
        } else if (killingSpreeCount === 14) {
            message = 'RAMPAGE'
        } else if (killingSpreeCount === 15) {
            message = 'MONSTER KILL'
        }

        return message
    }

    return (
        <div className="hud-killing-spree">
            { renderMessage() }
        </div>
    )
}

HudKillingSpree.defaultProps = {
    killingSpreeCount: 0
}

HudKillingSpree.propTypes = {
    killingSpreeCount: PropTypes.number.isRequired
}
