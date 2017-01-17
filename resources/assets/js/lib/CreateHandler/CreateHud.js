export default function() {
  const state = this.game.store.getState()

  RS.rightHudBg = this.game.add.sprite(this.camera.width - 400, this.camera.height - 45, 'rightHudBg')
  RS.rightHudBg.width = 500
  RS.rightHudBg.height = 100
  RS.rightHudBg.fixedToCamera = true

  const style = {
    font: "24px Keep Calm",
    fill: "#fff",
  }

  // Ammo
  const currentAmmoRemaining = state.player.currentWeapon === 'primaryWeapon'
    ? state.player.primaryAmmoRemaining
    : state.player.secondaryAmmoRemaining
  RS.hudAmmoText = this.game.add.text(this.camera.width - 230, this.camera.height - 39, currentAmmoRemaining, style)
  RS.hudAmmoText.smoothed = true
  RS.hudAmmoText.fixedToCamera = true

  RS.hudAmmoIcon = this.game.add.sprite(this.camera.width - 270, this.camera.height - 34,  'hudAmmoIcon')
  RS.hudAmmoIcon.fixedToCamera = true

    // Jump Jet
  var width = 100
  var height = 20
  var bmd = this.game.add.bitmapData(width, height);
  bmd.ctx.beginPath()
  bmd.ctx.rect(0, 0, width, height)
  bmd.ctx.fillStyle = '#ffffff'
  bmd.ctx.fill()
  RS.hudJumpJetBar = this.game.add.sprite(this.camera.width - 125, this.camera.height - 32, bmd)
  RS.hudJumpJetBar.fixedToCamera = true

  RS.hudJumpJetIcon = this.game.add.sprite(this.camera.width - 165, this.camera.height - 34,  'hudGasIcon')
  RS.hudJumpJetIcon.fixedToCamera = true

    // Kill confirmed
  RS.hudKillConfirmed = this.game.add.text(0, 0, '+10', {
    font: "24px Keep Calm",
    fill: "#fff",
  })
  RS.hudKillConfirmed.smoothed = true
  RS.hudKillConfirmed.fixedToCamera = true
  RS.hudKillConfirmed.stroke = '#000'
  RS.hudKillConfirmed.strokeThickness = 3
  RS.hudKillConfirmed.visible = false

  if (state.room.gamemode === 'TeamDeathmatch') {
    RS.redTeamScore = this.game.add.text(0, 0, state.room.redTeamScore, {
      font: "24px Keep Calm",
      fill: "#FF2525",
    })
    RS.redTeamScore.smoothed = true
    RS.redTeamScore.fixedToCamera = true
    RS.redTeamScore.stroke = '#000'
    RS.redTeamScore.strokeThickness = 1

    RS.blueTeamScore = this.game.add.text(0, 0, state.room.blueTeamScore, {
      font: "24px Keep Calm",
      fill: "#2578FF",
    })
    RS.blueTeamScore.smoothed = true
    RS.blueTeamScore.fixedToCamera = true
    RS.blueTeamScore.stroke = '#000'
    RS.blueTeamScore.strokeThickness = 1
  }
}
