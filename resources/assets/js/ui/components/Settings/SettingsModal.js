import React, { PropTypes } from 'react'

import MainSettingsMenu from './MainSettingsMenu'
import ChoosePrimaryMenu from './ChoosePrimaryMenu'
import ChooseSecondaryMenu from './ChooseSecondaryMenu'
import ChooseCharacterMenu from './ChooseCharacterMenu'
import ControlsMenu from './ControlsMenu'

export default function SettingsModal({
    isOpen,
    onClose,
    defaultNicknameValue,
    defaultSoundEffectValue,
    onViewChange,
    onNicknameChange,
    onPrimaryGunClick,
    onSecondaryGunClick,
    onSoundEffectVolumeChange,
    player,
    settingsView,
    selectedPrimaryWeapon,
    selectedSecondaryWeapon
}) {
    function renderModalView() {
        switch (settingsView) {
        case 'choosePrimary':
            return (
                <ChoosePrimaryMenu
                    onPrimaryGunClick={ onPrimaryGunClick }
                    onViewChange={ onViewChange }
                    player={ player }
                />
            )

        case 'chooseSecondary':
            return (
                <ChooseSecondaryMenu
                    onSecondaryGunClick={ onSecondaryGunClick }
                    onViewChange={ onViewChange }
                    player={ player }
                />
            )

        case 'chooseCharacter':
            return (
                <ChooseCharacterMenu
                    onViewChange={ onViewChange }
                    player={ player }
                />
            )

        case 'controls':
            return (
                <ControlsMenu
                    onViewChange={ onViewChange }
                />
            )

        default:
            return (
                <MainSettingsMenu
                    defaultNicknameValue={ defaultNicknameValue }
                    defaultSoundEffectValue={ defaultSoundEffectValue }
                    onNicknameChange={ onNicknameChange }
                    onSoundEffectVolumeChange={ onSoundEffectVolumeChange }
                    onViewChange={ onViewChange }
                    selectedPrimaryWeapon={ selectedPrimaryWeapon }
                    selectedSecondaryWeapon={ selectedSecondaryWeapon }
                />
            )
        }
    }

    return (
        <div
            className="modal hud-settings-modal"
            style={ { display: isOpen ? 'block' : 'none' } }>
            <div className="modal-dialog">
                <div className="modal-content">
                    <div className="modal-header">
                        <button
                            className="close"
                            onClick={ onClose }
                            type="button"
                        >
                            <span>&times;</span>
                        </button>
                        <h4 className="modal-title">Ranger Steve</h4>
                    </div>
                    <div className="modal-body">
                        <div className="row">
                            <div className="col-sm-12">
                                <ul className="nav nav-pills" style={ { marginBottom: '15px' } }>
                                    <li className="active pointer">
                                        <a onClick={ onViewChange.bind(this, 'main') }>
                                            Main
                                        </a>
                                    </li>
                                    <li className="pointer">
                                        <a onClick={ onViewChange.bind(this, 'controls') }>
                                            Controls
                                        </a>
                                    </li>
                                </ul>
                            </div>
                        </div>
                        { renderModalView() }
                    </div>
                    <div className="modal-footer">
                        <button
                            className="btn btn-default"
                            onClick={ onClose }
                            type="button"
                        >
                            Close
                        </button>
                    </div>
                </div>
            </div>
        </div>
    )
}

SettingsModal.propTypes = {
    defaultNicknameValue: PropTypes.string,
    defaultSoundEffectValue: PropTypes.number,
    isOpen: PropTypes.bool,
    onClose: PropTypes.func,
    onNicknameChange: PropTypes.func,
    onPrimaryGunClick: PropTypes.func,
    onSecondaryGunClick: PropTypes.func,
    onSoundEffectVolumeChange: PropTypes.func,
    onViewChange: PropTypes.func,
    player: PropTypes.object,
    selectedPrimaryWeapon: PropTypes.string,
    selectedSecondaryWeapon: PropTypes.string,
    settingsView: PropTypes.string
}
