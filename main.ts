scene.onHitWall(SpriteKind.Player, function (sprite, location) {
    if (200 < wallJumpingDumDum.vy && wallJumpingDumDum.isHittingTile(CollisionDirection.Bottom)) {
        info.changeLifeBy(-1)
    }
})
controller.A.onEvent(ControllerButtonEvent.Pressed, function () {
    if (wallJumpingDumDum.isHittingTile(CollisionDirection.Bottom) || wallJumpingDumDum.isHittingTile(CollisionDirection.Right) || wallJumpingDumDum.isHittingTile(CollisionDirection.Left)) {
        wallJumpingDumDum.vy = -250
    }
})
controller.left.onEvent(ControllerButtonEvent.Pressed, function () {
    wallJumpingDumDum.setImage(leftFacingImg)
})
scene.onOverlapTile(SpriteKind.Player, sprites.dungeon.chestClosed, function (sprite, location) {
    game.over(true, effects.slash)
})
controller.right.onEvent(ControllerButtonEvent.Pressed, function () {
    wallJumpingDumDum.setImage(rightFacingImg)
})
let wallJumpingDumDum: Sprite = null
let leftFacingImg: Image = null
let rightFacingImg: Image = null
info.setLife(3)
tiles.setTilemap(tilemap`level`)
let rightSwordOutImg = img`
    . . . . . . . f f . . . . . . . 
    . . . . f f f f 2 f f . . . . . 
    . . f f e e e e f 2 f f . . . . 
    . f f e e e e e f 2 2 f f . . . 
    . f e e e e f f e e e e f . . . 
    . f f f f f e e 2 2 2 2 e f . . 
    f f f e 2 2 2 f f f f e 2 f . . 
    f f f f f f f f e e e f f f . . 
    f e f e 4 4 e b f 4 4 e e f . . 
    . f e e 4 d 4 b f d d e f . . . 
    . . f e e e 4 d d d e e . c . . 
    . . . f 2 2 2 2 e e d d e c c c 
    . . . f 4 4 4 e 4 4 d d e c d d 
    . . . f f f f f e e e e . c c c 
    . . f f f f f f f f . . . c . . 
    . . f f f . . f f . . . . . . . 
    `
let leftSwordOutImg = img`
    . . . . . . . f f . . . . . . . 
    . . . . . f f 2 f f f f . . . . 
    . . . . f f 2 f e e e e f f . . 
    . . . f f 2 2 f e e e e e f f . 
    . . . f e e e e f f e e e e f . 
    . . f e 2 2 2 2 e e f f f f f . 
    . . f 2 e f f f f 2 2 2 e f f f 
    . . f f f e e e f f f f f f f f 
    . . f e e 4 4 f b e 4 4 e f e f 
    . . . f e d d f b 4 d 4 e e f . 
    . . c . e e d d d 4 e e e f . . 
    c c c e d d e e 2 2 2 2 f . . . 
    d d c e d d 4 4 e 4 4 4 f . . . 
    c c c . e e e e f f f f f . . . 
    . . c . . . f f f f f f f f . . 
    . . . . . . . f f . . f f f . . 
    `
rightFacingImg = img`
    . . . . . . . . . . . . . . . . 
    . . . . . f f f f f f . . . . . 
    . . . f f e e e e f 2 f . . . . 
    . . f f e e e e f 2 2 2 f . . . 
    . . f e e e f f e e e e f . . . 
    . . f f f f e e 2 2 2 2 e f . . 
    . . f e 2 2 2 f f f f e 2 f . . 
    . f f f f f f f e e e f f f . . 
    . f f e 4 4 e b f 4 4 e e f . . 
    . f e e 4 d 4 1 f d d e f . . . 
    . . f e e e e e d d d f . . . . 
    . . . . f 4 d d e 4 e f . . . . 
    . . . . f e d d e 2 2 f . . . . 
    . . . f f f e e f 5 5 f f . . . 
    . . . f f f f f f f f f f . . . 
    . . . . f f . . . f f f . . . . 
    `
leftFacingImg = img`
    . . . . . . . . . . . . . . . . 
    . . . . . f f f f f f . . . . . 
    . . . . f 2 f e e e e f f . . . 
    . . . f 2 2 2 f e e e e f f . . 
    . . . f e e e e f f e e e f . . 
    . . f e 2 2 2 2 e e f f f f . . 
    . . f 2 e f f f f 2 2 2 e f . . 
    . . f f f e e e f f f f f f f . 
    . . f e e 4 4 f b e 4 4 e f f . 
    . . . f e d d f 1 4 d 4 e e f . 
    . . . . f d d d e e e e e f . . 
    . . . . f e 4 e d d 4 f . . . . 
    . . . . f 2 2 e d d e f . . . . 
    . . . f f 5 5 f e e f f f . . . 
    . . . f f f f f f f f f f . . . 
    . . . . f f f . . . f f . . . . 
    `
wallJumpingDumDum = sprites.create(rightFacingImg, SpriteKind.Player)
wallJumpingDumDum.ay = 200
controller.moveSprite(wallJumpingDumDum, 200, 0)
scene.cameraFollowSprite(wallJumpingDumDum)
tiles.placeOnTile(wallJumpingDumDum, tiles.getTileLocation(1, 32))
game.onUpdateInterval(100, function () {
    if (wallJumpingDumDum.isHittingTile(CollisionDirection.Right) && wallJumpingDumDum.vy > 0) {
        wallJumpingDumDum.vy = 14.9
        wallJumpingDumDum.ay = 0
        wallJumpingDumDum.setImage(rightSwordOutImg)
    } else if (wallJumpingDumDum.isHittingTile(CollisionDirection.Left) && wallJumpingDumDum.vy > 0) {
        wallJumpingDumDum.vy = 14.9
        wallJumpingDumDum.ay = 0
        wallJumpingDumDum.setImage(leftSwordOutImg)
    } else {
        if (wallJumpingDumDum.image == rightSwordOutImg) {
            wallJumpingDumDum.setImage(rightFacingImg)
        }
        if (wallJumpingDumDum.image == leftSwordOutImg) {
            wallJumpingDumDum.setImage(leftFacingImg)
        }
        wallJumpingDumDum.ay = 500
    }
})
