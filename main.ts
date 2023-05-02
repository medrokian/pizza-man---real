enum ActionKind {
    Walking,
    Idle,
    Jumping,
    e
}
namespace SpriteKind {
    export const e = SpriteKind.create()
    export const pizza = SpriteKind.create()
}
controller.up.onEvent(ControllerButtonEvent.Pressed, function () {
    animation.setAction(mySprite, ActionKind.Walking)
})
controller.anyButton.onEvent(ControllerButtonEvent.Pressed, function () {
    controller.moveSprite(mySprite, 100, 100)
})
controller.down.onEvent(ControllerButtonEvent.Released, function () {
    animation.stopAnimation(animation.AnimationTypes.All, mySprite)
})
controller.left.onEvent(ControllerButtonEvent.Pressed, function () {
    animation.setAction(mySprite, ActionKind.Walking)
})
controller.right.onEvent(ControllerButtonEvent.Released, function () {
    animation.stopAnimation(animation.AnimationTypes.All, mySprite)
})
controller.left.onEvent(ControllerButtonEvent.Released, function () {
    animation.stopAnimation(animation.AnimationTypes.All, mySprite)
})
controller.right.onEvent(ControllerButtonEvent.Pressed, function () {
    animation.setAction(mySprite, ActionKind.Walking)
})
controller.up.onEvent(ControllerButtonEvent.Released, function () {
    animation.stopAnimation(animation.AnimationTypes.All, mySprite)
})
controller.down.onEvent(ControllerButtonEvent.Pressed, function () {
    animation.setAction(mySprite, ActionKind.Walking)
})
sprites.onOverlap(SpriteKind.Player, SpriteKind.Food, function (sprite, otherSprite) {
    sprites.destroy(mySprite2)
    music.play(music.createSoundEffect(WaveShape.Sawtooth, 553, 977, 60, 85, 90, SoundExpressionEffect.None, InterpolationCurve.Logarithmic), music.PlaybackMode.UntilDone)
    music.play(music.createSoundEffect(WaveShape.Sawtooth, 2704, 3004, 97, 0, 900, SoundExpressionEffect.None, InterpolationCurve.Logarithmic), music.PlaybackMode.UntilDone)
})
sprites.onOverlap(SpriteKind.Player, SpriteKind.pizza, function (sprite, otherSprite) {
    sprites.destroy(mySprite2, effects.fire, 500)
    info.changeScoreBy(1)
    music.play(music.createSoundEffect(WaveShape.Sawtooth, 553, 977, 60, 85, 90, SoundExpressionEffect.None, InterpolationCurve.Logarithmic), music.PlaybackMode.UntilDone)
    music.play(music.createSoundEffect(WaveShape.Sawtooth, 2704, 3004, 97, 0, 900, SoundExpressionEffect.None, InterpolationCurve.Logarithmic), music.PlaybackMode.UntilDone)
    mySprite2 = sprites.create(assets.image`coin_side1`, SpriteKind.pizza)
    anim.addAnimationFrame(assets.image`coin_side0`)
    anim.addAnimationFrame(assets.image`coin_side2`)
    anim.addAnimationFrame(assets.image`coin_front`)
    anim.addAnimationFrame(assets.image`coin_side3`)
    anim.addAnimationFrame(assets.image`coin_side4`)
    anim.addAnimationFrame(assets.image`coin_side1`)
    animation.attachAnimation(mySprite2, anim)
    tiles.placeOnRandomTile(mySprite2, sprites.dungeon.floorMixed)
})
sprites.onOverlap(SpriteKind.Player, SpriteKind.Enemy, function (sprite, otherSprite) {
    game.gameOver(false)
    game.setGameOverEffect(false, effects.smiles)
})
let anim: animation.Animation = null
let mySprite2: Sprite = null
let mySprite: Sprite = null
music.play(music.stringPlayable(music.convertRTTTLToMelody("s:d=4,o=4,b=125:16c#4,8c5,8c#4,16d4,8c5,8d4,8c#4,16c5,16d4,16c4,16c#5,8c4,8d4,16d#5,8c4,8d#4,8d5,16c4,8c#4,16c5,8c#,8c#,16c5,8d,8d#,16c5,32p,8c"), 125), music.PlaybackMode.LoopingInBackground)
tiles.setCurrentTilemap(tilemap`level0juhignyiuhgj`)
let mySprite4 = sprites.create(assets.image`pizza1`, SpriteKind.Projectile)
sprites.destroy(mySprite4)
mySprite4 = sprites.create(assets.image`pizza1`, SpriteKind.Projectile)
sprites.destroy(mySprite4)
tiles.placeOnRandomTile(mySprite4, sprites.dungeon.floorMixed)
let mySprite3 = sprites.create(assets.image`blue-2`, SpriteKind.Enemy)
mySprite3.setPosition(58, 64)
let anim3 = animation.createAnimation(ActionKind.e, 180)
anim3.addAnimationFrame(assets.image`blue-2`)
anim3.addAnimationFrame(assets.image`blue-3`)
animation.attachAnimation(mySprite3, anim3)
tiles.placeOnTile(mySprite3, tiles.getTileLocation(7, 17))
mySprite = sprites.create(assets.image`blue-1`, SpriteKind.Player)
mySprite.setPosition(112, 61)
let anim2 = animation.createAnimation(ActionKind.Walking, 180)
anim2.addAnimationFrame(assets.image`blue-1`)
anim2.addAnimationFrame(assets.image`blue-0`)
animation.attachAnimation(mySprite, anim2)
scene.cameraFollowSprite(mySprite)
mySprite2 = sprites.create(assets.image`coin_side1`, SpriteKind.pizza)
mySprite2.setPosition(76, 89)
anim = animation.createAnimation(ActionKind.e, 175)
mySprite3.follow(mySprite, 55)
anim.addAnimationFrame(assets.image`coin_side0`)
anim.addAnimationFrame(assets.image`coin_side2`)
anim.addAnimationFrame(assets.image`coin_front`)
anim.addAnimationFrame(assets.image`coin_side3`)
anim.addAnimationFrame(assets.image`coin_side4`)
anim.addAnimationFrame(assets.image`coin_side1`)
animation.attachAnimation(mySprite2, anim)
tiles.placeOnRandomTile(mySprite2, sprites.dungeon.floorMixed)
forever(function () {
    animation.setAction(mySprite2, ActionKind.e)
    animation.setAction(mySprite3, ActionKind.e)
})
forever(function () {
	
})
forever(function () {
	
})
game.onUpdateInterval(100, function () {
    if (info.score() == 1) {
        game.showLongText("ok that was easy but can you get more", DialogLayout.Bottom)
        info.changeScoreBy(1)
    }
})
game.onUpdateInterval(100, function () {
    if (info.score() == 10) {
        game.showLongText("ok that was good but you cant get past me", DialogLayout.Bottom)
        info.changeScoreBy(1)
        mySprite3.follow(mySprite, 65)
        tiles.setCurrentTilemap(tilemap`level0juhignyiuhgj3`)
        sprites.destroy(mySprite2)
        tiles.placeOnRandomTile(mySprite2, sprites.dungeon.floorMixed)
        sprites.destroy(mySprite2)
        tiles.placeOnRandomTile(mySprite2, sprites.dungeon.floorMixed)
    }
})
game.onUpdateInterval(100, function () {
    if (info.score() == 15) {
        game.showLongText("i believe there is a name for people like you mr.purple", DialogLayout.Bottom)
        game.showLongText("i would chose my next word carefully if i where you mr.yellow", DialogLayout.Bottom)
        game.showLongText("humu humu nuku nuku apuaʻa", DialogLayout.Bottom)
        info.changeScoreBy(1)
        mySprite3.follow(mySprite, 65)
        tiles.setCurrentTilemap(tilemap`level0juhignyiuhgj0`)
        sprites.destroy(mySprite2)
        tiles.placeOnRandomTile(mySprite2, sprites.dungeon.floorMixed)
    }
})
