export type TGames = 'street' | 'dro';
export type TGameFields = {
    name: string;
    img: string;
    alt: string;
}
export type TGameModel = Record<TGames, TGameFields>;
export const games: TGameModel = {
    street: {
        name: 'CarX Street',
        img: './street.png',
        alt: 'Street Logo'
    },
    dro: {
        name: 'Drift Racing Online',
        img: './dro.png',
        alt: 'Drift Racing Online Logo'
    }
}