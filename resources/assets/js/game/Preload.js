export default function Preload() {
    this.load.image('ground', '/images/platform.png')
    this.load.image('bullet', '/images/bullet.png')
    this.load.image('leftHudBg', '/images/leftHudBg.png')
    this.load.image('rightHudBg', '/images/rightHudBg.png')
    this.load.image('centerHudBg', '/images/centerHudBg.png')
    this.load.image('hudHealthIcon', '/images/icons/cross-24.png')
    this.load.image('hudAmmoIcon', '/images/icons/ammo-tin-24.png')
    this.load.image('hudGasIcon', '/images/icons/gas-24.png')
    this.load.image('left-arm', '/images/body/left-arm.png')
    this.load.image('player-placeholder', '/images/player-placeholder.png')

    this.load.spritesheet('hurt-border', '/images/hurt-border.png')
    this.load.spritesheet('jumpjet', '/images/jumpjet.png', 214, 418)
    this.load.spritesheet('blood', '/images/blood.png', 440, 256)
    this.load.spritesheet('player', '/sprites/player.png', 62, 62)
    this.load.spritesheet('right-arm-and-weapons', '/sprites/right-arm-and-weapons.png', 370, 80)

    this.load.atlas('rpgExplosion', '/sprites/rpgExplosion.png', '/sprites/rpgExplosion.json', Phaser.Loader.TEXTURE_ATLAS_JSON_HASH)
    this.load.atlas('ricochet', '/sprites/ricochet.png', '/sprites/ricochet.json', Phaser.Loader.TEXTURE_ATLAS_JSON_HASH)

    this.load.audio('jumpjet', '/audio/jumpjet.mp3')

    this.load.audio('AK47', '/audio/AK47.mp3')
    this.load.audio('M500', '/audio/M500.mp3')
    this.load.audio('Skorpion', '/audio/Skorpion.mp3')
    this.load.audio('AUG', '/audio/AUG.mp3')
    this.load.audio('G43', '/audio/G43.mp3')
    this.load.audio('P90', '/audio/P90.mp3')
    this.load.audio('M4A1', '/audio/M4A1.mp3')
    this.load.audio('Barrett', '/audio/BarrettM90.mp3')

    this.load.audio('DesertEagle', '/audio/DesertEagle.mp3')
    this.load.audio('SilverBaller', '/audio/SilverBaller.mp3')
    this.load.audio('RPG', '/audio/RPG.mp3')
    this.load.audio('RPG-explosion-sound', '/audio/RPGExplosion.mp3')

    this.load.audio('triplekill', '/audio/killingSpree/triplekill_ultimate.mp3')
    this.load.audio('multikill', '/audio/killingSpree/multikill_ultimate.mp3')
    this.load.audio('ultrakill', '/audio/killingSpree/ultrakill_ultimate.mp3')
    this.load.audio('killingspree', '/audio/killingSpree/killingspree_ultimate.mp3')
    this.load.audio('unstoppable', '/audio/killingSpree/unstoppable_ultimate.mp3')
    this.load.audio('ludicrouskill', '/audio/killingSpree/ludicrouskill_ultimate.mp3')
    this.load.audio('rampagekill', '/audio/killingSpree/rampage_ultimate.mp3')
    this.load.audio('monsterkill', '/audio/killingSpree/monsterkill_ultimate.mp3')
}
