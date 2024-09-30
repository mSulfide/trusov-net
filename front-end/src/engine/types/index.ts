export type TPoint = {
    x: number,
    y: number
}

export type TCircle = {
    position: TPoint;
    radius: number;
}

export type TDrawRequest = {
    viewCollider: TCircle;
};