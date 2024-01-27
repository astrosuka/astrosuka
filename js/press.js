const pressMentions = [
    {
        title: 'Otherworldly experimental club tracks with a high-end production quality',
        publisher: 'Resident Advisor',
        description: '',
        date: '',
        link: 'https://ra.co/reviews/23105',
    },
    {
        title: '“The 34th Ljubljana Biennale of Graphic Arts: ISKRA DELTA” at International Centre of Graphic Arts - MGLC, various locations in Ljubljana',
        publisher: 'Mousse Magazine',
        description: '',
        date: '',
        link: 'https://www.moussemagazine.it/magazine/the-34th-ljubljana-biennale-of-graphic-arts-iskra-delta-at-international-centre-of-graphic-arts-mglc-various-locations-in-ljubljana',
    },
    {
        title: 'تراك جديد لـ أستروسوكا | بث حصري على معازف',
        publisher: 'ma3azef',
        description: '',
        date: '',
        link: 'https://ma3azef.com/%D8%A3%D8%B3%D8%AA%D8%B1%D9%88%D8%B3%D9%88%D9%83%D8%A7-%D8%AD%D8%B5%D8%B1%D9%8A',
    },
    {
        title: 'Lección de Anatomía. Offsite show by TRRUENO & Underground Flower in Buenos Aires',
        publisher: 'OFLUXO',
        description: '',
        date: '',
        link: 'https://www.ofluxo.net/leccion-de-anatomia-by-trrueno-underground-flower',
    },
    {
        title: 'Lección de Anatomía by TRRUENO & Underground Flower / Buenos Aires',
        publisher: 'Daily Lazy',
        description: '',
        date: '',
        link: 'https://www.daily-lazy.com/2020/05/leccion-de-anatomia-by-trrueno.html',
    },
    {
        title: `'Lección de Anatomía' by TRRUENO & Underground Flower, Buenos Aires`,
        publisher: 'Tzvetnik',
        description: '',
        date: '',
        link: 'https://tzvetnik.online/article/leccion-de-anatomia-by-trrueno-underground-flower-buenos-aires',
    },
    {
        title: 'OCTOBER: SIX ARTISTS YOU NEED TO CHECK OUT THIS MONTH',
        publisher: 'Mixmag',
        description: '',
        date: '',
        link: 'https://mixmag.net/feature/october-2018-six-artists-you-need-to-check-out-this-month',
    },
    {
        title: '"Buenos Aires is a beautiful and complex place" - We talk to Russian-born experimentalist Astrosuka...',
        publisher: 'Musicmap',
        description: '',
        date: '',
        link: 'https://musicmap.global/article/astrosuka-argentina-interview',
    },
    {
        title: `DJ Mag's labels to watch in 2020`,
        publisher: 'DJ Mag',
        description: '',
        date: '',
        link: 'https://djmag.com/longreads/dj-mags-labels-watch-2020',
    },
    {
        title: 'Las 100 mejores canciones argentinas de los 2010',
        publisher: 'Indie Hoy',
        description: '',
        date: '',
        link: 'https://indiehoy.com/listas/las-100-mejores-canciones-argentinas-de-los-2010',
    },
    {
        title: 'Astrosuka por Eric Olsen',
        publisher: 'Revista Otra Parte',
        description: '',
        date: '',
        link: 'https://www.revistaotraparte.com/musica/astrosuka',
    },
    {
        title: 'SOUL FEEDING ISSUE #2',
        publisher: 'Soul Feeder',
        description: '',
        date: '',
        link: 'https://soulfeederweb.com/blog/soul-feeding-issue-2-ash-koosha-tim-hecker-burial-kode-9',
    },
    {
        title: 'How To DIY, Collectively',
        publisher: 'Red Bull Music Academy',
        description: '',
        date: '',
        link: 'https://daily.redbullmusicacademy.com/2019/04/diy-collectives-feature',
    },
    {
        title: 'TRRUENO: FIGHTING AND DANCING IN A POST-HUMAN BAROQUE ANTI-OPERA',
        publisher: 'PAYNOMINDTOUS',
        description: '',
        date: '',
        link: 'https://www.paynomindtous.it/trrueno-interview-mixtape',
    },
    {
        title: 'Reggaetón, música electrónica y política. Conoce el futuro según TRRUENO',
        publisher: 'Vice',
        description: '',
        date: '',
        link: 'https://www.vice.com/es/article/9b7zz8/trrueno-entrevista-mixtape-noisey-1805',
    },
    {
        title: 'El último movimiento del errorismo electrónico',
        publisher: 'Pagina 12',
        description: '',
        date: '',
        link: 'https://www.pagina12.com.ar/diario/suplementos/no/12-8819-2016-09-01.html',
    },
    {
        title: '2018: Favorite Labels. From hypermodern visionaries & scattered Asian voices to idiosyncratic club & reenvisioned ambient music',
        publisher: 'Tiny Mix Tapes',
        description: '',
        date: '',
        link: 'https://www.tinymixtapes.com/features/2018-favorite-labels',
    },
    {
        title: 'Hyperspecific: Dance Music For October Reviewed By Jaša Bužinel',
        publisher: 'The Quietus',
        description: '',
        date: '',
        link: 'https://thequietus.com/articles/30720-buttechno-eris-drew-salamanda-warhorse-review',
    },
    {
        title: `There's a New Digital Art Gallery in the 50th Street Station in Times Square`,
        publisher: 'Hypebeast',
        description: '',
        date: '',
        link: 'https://hypebeast.com/2022/5/public-works-administration-in-transit-inaugural-exhibition',
    },
    {
        title: 'ENERGY, CHAOS, AND ASTROSUKA FOR FELT ZINE 71',
        publisher: 'Felt Zine',
        description: '',
        date: '',
        link: 'https://news.feltzine.us/2022/07/09/astrosuka-for-felt-zine-71/',
    }
]



const pressListContainer = document.querySelector('.press');

for (let mention of pressMentions){
    let listItem = document.createElement('li');

    let title = document.createElement('a');
    title.textContent = mention.title;
    title.setAttribute('href', mention.link);
    title.setAttribute('target', '_blank');

    let publisher = document.createElement('span');
    publisher.textContent = ` - ${mention.publisher}`;
    listItem.append(title, publisher);

    pressListContainer.appendChild(listItem);
}