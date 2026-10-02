import { Routes } from '@angular/router';
import { Home } from './component/home/home';

export const routes: Routes = [
    // static routes
    { path: '', component: Home, title: 'Home' },
    { 
        path: 'movies', 
        loadComponent: () => import('./component/movie-list/movie-list')
            .then(m => m.MovieList),
        title: 'Movies' 
    },
    {
        path: 'movies/:id',
        loadComponent: () => import('./component/movie-card-detail/movie-card-detail')
            .then(m => m.MovieCardDetail)
    },
    { 
        path: 'movie-card-1', 
        loadComponent: () => import('./component/movie-card-1/movie-card-1')
            .then(m => m.MovieCard1),
        title: 'MovieCard1' 
    },
    { 
        path: 'counter-1', 
        loadComponent: () => import('./component/counter-1/counter-1')
            .then(m => m.Counter1),
        title: 'Counter 1' 
    },
    { 
        path: 'counter-2', 
        loadComponent: () => import('./component/counter-2/counter-2')
            .then(m => m.Counter2),
        title: 'Counter 2' 
    },
];
