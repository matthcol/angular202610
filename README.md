# Angular

### JavaScript / ECMAScript
Documentation MDN: https://developer.mozilla.org/

**1995 - Naissance**
- Brendan Eich crée JavaScript en 10 jours chez Netscape
- Langage de script pour navigateurs

**1997 - ECMAScript 1**
- Standardisation par l'ECMA International

**1999 - ES3**
- Expressions régulières, try/catch, amélioration du traitement des chaînes

**2009 - ES5**
- `strict mode`, méthodes JSON, méthodes d'array (map, filter, forEach)
- Longue période de stagnation avant cette version

**2015 - ES6/ES2015** (révolution majeure)
- Classes, modules (import/export)
- Arrow functions, template literals
- let/const, destructuring
- Promises, for...of
- Passage à un cycle de release annuel

**2016-2024 - Évolution continue**
- **ES2016** : `**` (exponentiation), Array.includes
- **ES2017** : async/await, Object.entries/values
- **ES2018** : rest/spread pour objets, async iteration
- **ES2019** : flat/flatMap, Object.fromEntries
- **ES2020** : optional chaining (`?.`), nullish coalescing (`??`)
- **ES2021** : Promise.any, replaceAll
- **ES2022** : top-level await, private fields (#)
- **ES2023** : `findLast`, `toSorted`
- **ES2024** : `groupBy`, `Promise.withResolvers`
- **ES2025** : Set methods, Iterator helpers, import attributes, `RegExp.escape`
- **ES2026** : `using`/`await using`, `Iterator.concat`, `Uint8Array` base64/hex
- **ES2027** (future) : Decorators avancés, Pattern matching, Temporal

### TypeScript
https://www.typescriptlang.org/

**2012 - Lancement**
- Microsoft développe TypeScript (Anders Hejlsberg)
- Superset de JavaScript avec typage statique

**2014 - TypeScript 1.0**
- Version stable pour la production

**2016 - TypeScript 2.0**
- Non-nullable types, readonly
- Adoption croissante (Angular 2 l'adopte)

**2018 - TypeScript 3.0**
- Project references, tuples
- Popularité explosive

**2020-2026 - Maturité**
- **TS 4.0+** : Variadic tuples, template literal types
- **TS 4.5+** : Awaited type, import assertions
- **TS 5.0** (2023) : Decorators, const type parameters
- **TS 6.0** (2025) : dernière version du compilateur historique (écrit en TypeScript/JS)
- **TS 7.0** (2026) : réécriture native du compilateur en Go (projet "tsgo"), gains de perf ~10x

## Angular
https://angular.dev/

**2010 - AngularJS**
- Créé par Google (Misko Hevery), framework MVC pour navigateurs

**2016 - Angular 2** (réécriture complète)
- Passage à TypeScript, architecture par composants
- Abandon d'AngularJS, versioning sémantique (release majeure ~tous les 6 mois)

**2016-2021 - v2 à v13**
- **Angular Universal** (SSR, package séparé) dès Angular 2/4
- **v9** (2020) : Ivy (nouveau moteur de rendu) par défaut
- **v13** (2021) : suppression de l'ancien moteur (View Engine)

**2022-2023 - Standalone & Signals**
- **v14** (2022) : standalone (preview)
- **v15** (2022) : standalone (API stable)
- **v16** (2023) : Signals, hydration SSR (preview)
- **v17** (2023) : new control flow (`@if`/`@for`/`@switch`), deferrable views, SSR (CLI + hydratation)
  → **standalone devient le standard par défaut** (`ng new` génère du standalone, NgModules optionnels)

**2024-2026 - Zoneless & maturité**
- **v18-19** : zoneless (preview), hydratation incrémentale
- **v20-22** : Signals (signal forms, signal queries), zoneless stable, Angular ARIA

## Start Angular Project
```
npm install @angular/cli      # local, latest
npm install -g @angular/cli   # global, latest
npm install @angular/cli@18

# si global
ng --version
ng version
ng new cinema

# si local
npx ng --version
npx ng version
npx ng new cinema
```

Reouvrir VSCode dans le dossier du projet :)

Si projet cloné :
```
npm install   # resolution de dépendances
npm ci        # utilise les version de dépendances résolues package-lock.json
```

Lancement du projet en mode dev
```
npx ng serve  # en local
ng serve  # en global
```

## 1er composants Angular
```
ng g component component/counter-1
ng g c component/counter-1
```

## Modèle de données
```
ng generate interface model/movie
ng g i model/movie
```

## Template HTML
- Dans un noeud de type texte : `{{ expression JS [+pipe] }}`
- Dans un attribut : `[src]="expression JS [+pipe]"`
- Structures de contrôle: `@if`/`@else`, `@for`, `@switch`
- Event handler : `(click)="action JS"`

## Pipes
```
ng g pipe pipe/datetime-dmy
ng g p pipe/hour-minute
```

## Services
```
ng g service service/movie-mock
ng g s service/movie-mock
```

## Mock API avec JSON-Server
```
npm install json-server --save-dev
npm run api        # avec script dans package.json
```

Exemples routes
```
GET http://localhost:3000/movies
GET http://localhost:3000/movies/7666
GET http://localhost:3000/movies?_sort=-year
GET http://localhost:3000/movies?_page=5&_per_page=10
```

## Résumé ng generate
| Schematic | Commande longue | Raccourci consacré | Exemple |
|---|---|---|---|
| Component | `ng generate component` | `ng g c` | `ng g c component/movie-detail` |
| Pipe | `ng generate pipe` | `ng g p` | `ng g p pipe/duration` |
| Service | `ng generate service` | `ng g s` | `ng g s service/movie` |
| Directive | `ng generate directive` | `ng g d` | `ng g d directive/highlight` |
| Guard | `ng generate guard` | `ng g g` | `ng g g guard/auth` |
| Interface | `ng generate interface` | `ng g i` | `ng g i model/movie` |
| Module | `ng generate module` | `ng g m` | `ng g m feature/admin` |
| Class | `ng generate class` | `ng g cl` | `ng g cl model/movie` |
| Enum | `ng generate enum` | `ng g e` | `ng g e model/genre` |
| Resolver | `ng generate resolver` | `ng g r` | `ng g r resolver/movie` |

## À  voir : signal query 
Permettent à la partie typescrupt d'agir sur le DOM:
  - éléments classiques : `div`, `p`, `img`, etc.
  - composants enfants : `app-card`

Fonctions signal: `viewChildren()` et `viewChild()`

## Résumé signaux
https://angular.dev/guide/signals

| Thème | Fonction | Rôle |
|---|---|---|
| Création | `signal()` | État mutable (`.set()`/`.update()`) |
| Création | `computed()` | Valeur dérivée, recalculée automatiquement |
| Création | `linkedSignal()` | Signal réinitialisable, dépendant d'une autre source |
| Création | `resource()` / `rxResource()` / `httpResource()` | Donnée asynchrone (API, Observable) sous forme de signal |
| I/O composant | `input()` | Donnée reçue du parent |
| I/O composant | `output()` | Événement émis vers le parent |
| I/O composant | `model()` | Binding bidirectionnel (`[(ngModel)]`-like) |
| DOM | `viewChild()` / `viewChildren()` | Accès depuis le TS à un élément/composant enfant du template |
| Réaction | `effect()` | Exécute du code à chaque changement d'un signal lu |

### `computed()` vs `linkedSignal()`

| | `computed()` | `linkedSignal()` |
|---|---|---|
| Écriture | ❌ pas de `.set()`/`.update()` | ✅ `.set()`/`.update()` comme un `signal()` |
| Recalcul | Toujours réévalué depuis la formule | Réinitialisé depuis la formule **seulement quand la source change** |
| Usage typique | Valeur dérivée pure (ex: `hourMinute`) | Brouillon modifiable qui doit se réinitialiser si la donnée source change |

Exemple ([movie-card-detail.ts](src/app/component/movie-card-detail/movie-card-detail.ts#L56-L60)) :
```ts
movie = computed(() => this.movieService.getMovie(this.id()) ?? MOVIE_404)
movieDraftTemplate = linkedSignal(() => ({...this.movie()}))
```
`movie` n'est jamais modifiable directement. `movieDraftTemplate` peut être édité (formulaire), mais se réinitialise automatiquement si `movie()` change (ex: navigation vers un autre film), écrasant le brouillon en cours.

