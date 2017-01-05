// @flow
import React, { PureComponent } from 'react'
import autobind from 'react-autobind'
import storage from 'store'
import NameGenerator from '../../../lib/NameGenerator'
import GameConsts from 'lib/GameConsts'

export default class SettingsView extends PureComponent {
  constructor(props) {
    super(props)
    autobind(this)

    this.state = {
      autoRespawn: props.game.autoRespawn,
      nickname: props.player.nickname,
      sfxVolume: props.game.sfxVolume,
    }
  }

  state: Object

  props: {
        game: Object,
        onNicknameChange: Function,
        onSfxVolumeChange: Function,
        onViewChange: Function,
        player: Object,
    }

  handleGenerateName() {
    const nickname = NameGenerator()
    this.refs.nicknameInput.value = nickname
    this.setState({ nickname })
    this.props.onNicknameChange(nickname)
  }

  handleNicknameChange(evt) {
    if (this.state.nickname.length > 100) return
    const nickname = evt.target.value.slice(0, 100)
    this.setState({ nickname })
    this.props.onNicknameChange(nickname)
  }

  handleSoundEffectVolumeChange(evt) {
    this.props.onSfxVolumeChange(Number(evt.target.value))
  }

  handleRespawnChange(evt) {
    const autoRespawn = evt.target.checked
    this.setState({ autoRespawn })
    storage.set('autoRespawn', autoRespawn)
    this.props.onRespawnChange(autoRespawn)
  }

  render() {
    return (
            <div>
                <div className="row">
                    <div className="col-sm-8 col-sm-offset-2">
                        <div className="row">
                            <div className="col-sm-6">
                                <div className="form-group">
                                    <label>Nickname</label>
                                    <input
                                        className="form-control"
                                        defaultValue={ this.state.nickname }
                                        maxLength="25"
                                        onChange={ this.handleNicknameChange }
                                        ref="nicknameInput"
                                        type="text"
                                    />
                                </div>
                            </div>
                            <div className="col-sm-6">
                                <button
                                    className="btn btn-primary btn-sm btn-block"
                                    onClick={ this.handleGenerateName }
                                    style={ { marginTop: '25px' } }
                                >
                                    Random Nickname
                                </button>
                            </div>
                        </div>
                        <div className="checkbox">
                            <label>
                                <input
                                    checked={ this.state.autoRespawn }
                                    onClick={ this.handleRespawnChange }
                                    type="checkbox"
                                />
                                Auto respawn
                            </label>
                        </div>
                        <div className="form-group">
                            <label>Sound Effects Volume</label>
                            <input
                                defaultValue={ this.state.sfxVolume }
                                max=".13"
                                min="0"
                                onChange={ this.handleSoundEffectVolumeChange }
                                step=".01"
                                type="range"
                            />
                        </div>
                    </div>
                </div>
            </div>
        )
  }
}
