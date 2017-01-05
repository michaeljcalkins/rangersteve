import React, { PureComponent, PropTypes } from 'react'

import HudNewChatMessage from './HudNewChatMessage'

export default class HudChatHistory extends PureComponent {
  renderMessages() {
    const { messages, isOpen, newChatMessageCharacter } = this.props

        // Array: [nickname, message]
    const formattedMessages = messages.map((message, index) => {
      return (
                <li className="dont-break-out" key={ 'chat-message' + index }>
                    <strong>{ message[0] }:</strong> { message[1] }
                </li>
            )
    })

    if (! isOpen) {
      formattedMessages.push((
                <li>Press { String.fromCharCode(newChatMessageCharacter) } to chat</li>
            ))
    }

    return formattedMessages
  }

  render() {
    const { isOpen, onSendMessage } = this.props

    return (
            <div className="hud-chat no-pointer-events">
                <ul className="list-unstyled">
                    { this.renderMessages() }
                    { isOpen &&
                        <HudNewChatMessage
                            onSendMessage={ onSendMessage }
                        />
                    }
                </ul>
            </div>
        )
  }
}

HudChatHistory.defaultProps = {
  messages: [],
}

HudChatHistory.propTypes = {
  isOpen: PropTypes.bool,
  messages: PropTypes.array,
  newChatMessageCharacter: PropTypes.number,
  onSendMessage: PropTypes.func,
}
