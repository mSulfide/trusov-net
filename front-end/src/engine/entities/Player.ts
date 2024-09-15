import { GameObject } from "../structures";
import IDrawer from "../structures/IDrawer";

export default class Player extends GameObject {
    private time = 0;

    public update(deltaTime: number): void {
        this.time += deltaTime;

        const range = 5;
        this.position.x = Math.sin(this.time) * range;
        this.position.y = Math.cos(this.time) * range;
    }
    
    public draw(drawer: IDrawer): void {
        drawer.drawSprite(this.position);
    }
}