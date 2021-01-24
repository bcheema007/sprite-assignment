class Pokeman
{
    constructor(game, x, y) // game refers to the game engine, x & y is the placement of the character
    {
        Object.assign(this, { game, x, y });
        this.spritesheet = ASSET_MANAGER.getAsset("./gZ3c5.png");
        this.state = 0; // 0 is the state where ninja is idle/not moving, 1 is walking
        this.size = 0; // 0 means ninja is small, 1 is big
        this.facing = 0; // 0 is facing right, 1 is facing left
        this.animations = [];
        this.loadAnimations();
    };

    loadAnimations()
    {
        for(let i = 0; i < 2; i++)
        {
            this.animations.push([]);
            
            for(let j = 0; j < 1; j++)
            {
                this.animations[i].push([]);
                
                for(let k = 0; k < 2; k++)
                {
                    this.animations[i][j].push([]);
                }
            }
        }

        //this.animations[0][0][0] = new Animator(this.spritesheet, 2, 4, 85, 125, 1, 0.33, 6, false, true);
        this.animations[0][0][0] = new Animator(this.spritesheet, 10, 10, 37, 55, 2, 0.20, 30, false, true);
    }

    update()
    {

    }

    draw(ctx)
    {
        this.animations[this.state][this.size][this.facing].drawFrame(this.game.clockTick, ctx, this.x, this.y, 1);
    }

}