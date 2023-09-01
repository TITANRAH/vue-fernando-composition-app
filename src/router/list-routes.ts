// creo la interfaz con los campos que llevaran los datos 
// mando a llamar router links

export interface RouterLink {
    name: string;
    path: string;
    title: string;
}

export const routerLinks: RouterLink[] = [

    { path: '/', name: 'home', title: 'Home' },
    { path: '/about', name: 'about', title: 'About' },
    { path: '/counter', name: 'counter', title: 'Counter' },
    { path: '/pokemons', name: 'pokemons', title: 'Pokemons' }
];