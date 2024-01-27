const soundWorks = [
    {
        artist: 'yoto',
        release: 'levure',
        label: 'kit records',
        year: '2024',
        role: ['mixing'],
        link: 'https://yoto.bandcamp.com/album/levure'
    },
    {
        artist: 'aguja',
        release: 'música electrónica I',
        label: 'unun',
        year: '2023',
        role: ['production', 'mastering'],
        link: 'https://unun.bandcamp.com/album/un002-m-sica-electr-nica-i'
    },
    {
        artist: 'v/a',
        release: 'yapa rayada',
        label: 'volquete',
        year: '2023',
        role: ['mastering'],
        link: 'https://volquete.bandcamp.com/album/yapa-rayada'
    },
    {
        artist: 'cecila castro',
        release: 'intermonte',
        label: 'strlac records',
        year: '2022',
        role: ['mixing', 'mastering'],
        link: 'https://strlacrecords.bandcamp.com/album/intermonte'
    },
    {
        artist: 'v/a',
        release: 'ocelo',
        label: 'unun',
        year: '2022',
        role: ['mastering'],
        link: 'https://unun.link'
    },
    {
        artist: 'satira',
        release: 'OF​:​81702 EP',
        label: 'tvl rec',
        year: '',
        role: ['mixing', 'mastering'],
        link: 'https://tvlrec.bandcamp.com/album/tvl-050-of-81702-ep'
    },
    {
        artist: 'bosque sin árboles',
        release: 'bosque sin árboles',
        label: 'trrueno',
        year: '',
        role: ['mastering'],
        link: 'https://trrueno.bandcamp.com/album/bosque-sin-arboles-trr-16'
    },
    {
        artist: 'el pelele',
        release: 'amenaza',
        label: 'quantum natives',
        year: '',
        role: ['production', 'mixing', 'mastering'],
        link: 'https://soundcloud.com/quantum_natives/sets/el-pelele-amenaza'
    },
    {
        artist: 'astrosuka + sofja',
        release: 'nudos',
        label: 'self released',
        year: '',
        role: ['production', 'mixing', 'mastering'],
        link: 'https://astrosuka.bandcamp.com/album/nudos'
    },
    {
        artist: 'v/a',
        release: 'mecha03',
        label: 'trrueno',
        year: '',
        role: ['mixing', 'mastering'],
        link: 'https://trrueno.bandcamp.com/album/mecha03-trr-014'
    },
    {
        artist: 'o.l.i.v.i.a. feat maja',
        release: 'cnc',
        label: 'agva',
        year: '',
        role: ['mixing', 'mastering'],
        link: 'https://agvarcrds.bandcamp.com/track/cnc'
    },
    {
        artist: 'amaru & maja',
        release: 'joi',
        label: 'self released',
        year: '',
        role: ['mixing'],
        link: 'https://www.youtube.com/watch?v%3Dlz1Yxmr20qg'
    },
    {
        artist: 'o.l.i.v.i.a.',
        release: 'trampa',
        label: 'agva',
        year: '',
        role: ['production', 'mixing'],
        link: 'https://soundcloud.com/agvarecords/07-o-l-i-v-i-a-x-astrosuka'
    },
    {
        artist: 'catnap',
        release: 'destroy what i am',
        label: 'monkeytown records',
        year: '',
        role: ['mixing'],
        link: 'https://catnapp.bandcamp.com/track/destroy-what-i-am'
    },
    {
        artist: 'bungalovv',
        release: 'donde hubo fuego',
        label: 'infinite machine',
        year: '',
        role: ['mixing'],
        link: 'https://infinitemachine.bandcamp.com/album/im076-bungalovv-donde-hubo-fuego'
    },
    {
        artist: 'v/a',
        release: 'desarme',
        label: 'trrueno',
        year: '',
        role: ['production', 'mixing', 'mastering'],
        link: 'https://trrueno.bandcamp.com/album/desarme-trr-013'
    },
    {
        artist: 'el pelele',
        release: 'no querer perdonar',
        label: 'trrueno',
        year: '',
        role: ['production', 'mixing', 'mastering'],
        link: 'https://trrueno.bandcamp.com/track/no-querer-perdonar-trr-012'
    },
    {
        artist: 'maja',
        release: 'glaucoma',
        label: 'self released',
        year: '',
        role: ['mixing', 'mastering'],
        link: 'https://soundcloud.com/majjjjjja/glaucoma'
    },
    {
        artist: 'john debt',
        release: 'nevermind',
        label: 'napp records',
        year: '',
        role: ['mastering'],
        link: 'https://napp-records.bandcamp.com/album/john-debt-nevemrind-prod-x-yawwn'
    },
    {
        artist: 'candie',
        release: 'trauma trilogia',
        label: 'trrueno',
        year: '',
        role: ['mixing', 'mastering'],
        link: 'https://trrueno.bandcamp.com/album/trauma-trilog-a-trr-011'
    },
    {
        artist: 'ffx',
        release: 'crossroad',
        label: 'napp records',
        year: '',
        role: ['mixing', 'mastering'],
        link: 'https://ffxffxffx.bandcamp.com/album/crossroad'
    },
    {
        artist: 'astrosuka',
        release: 'с​​|​​т​​|​​р​​|​​у​​|​​к​​|​​т​​|​​у​​|​​р​​|​​ы',
        label: 'self released',
        year: '',
        role: ['production', 'mixing', 'mastering'],
        link: 'https://astrosuka.bandcamp.com/album/--5'
    },
    {
        artist: 'candie',
        release: 'mitlogik y _pagana',
        label: 'trrueno',
        year: '',
        role: ['production', 'mixing', 'mastering'],
        link: 'https://trrueno.bandcamp.com/album/mitologik-y-pagana-trr-009'
    },
    {
        artist: 'karma she',
        release: 'celestial bodies',
        label: 'self released',
        year: '',
        role: ['mastering'],
        link: 'https://www.youtube.com/watch?v=TREbjguTePI'
    },
    {
        artist: 'astrosuka',
        release: 'astrosuka',
        label: 'genome 6.66mbp/trrueno',
        year: '',
        role: ['production', 'mixing', 'mastering'],
        link: 'https://astrosuka.bandcamp.com/album/gnm008-trr-008-astrosuka-astrosuka?label%3D1120206595%26tab%3Dmusic'
    },
    {
        artist: 'v/a',
        release: 'devoiced remixed',
        label: 'trrueno',
        year: '',
        role: ['mastering'],
        link: 'https://trrueno.bandcamp.com/album/devoiced-remixed-trr-007'
    },
    {
        artist: 'catnapp',
        release: 'no cover',
        label: 'monkeytown records',
        year: '',
        role: ['mixing'],
        link: 'https://catnapp.bandcamp.com/album/no-cover'
    },
    {
        artist: 'la_muerte',
        release: 'la_muerte',
        label: 'trrueno',
        year: '',
        role: ['production', 'mixing', 'mastering'],
        link: 'https://trrueno.bandcamp.com/album/la-muerte-trr-666'
    },
    {
        artist: 'ornamenti d\'oro',
        release: 'mater tenebrarum',
        label: 'tension ritual',
        year: '',
        role: ['mastering'],
        link: 'https://tensionritual.bandcamp.com/album/ornamenti-doro-mater-tenebrarum'
    },
    {
        artist: 'bungalovv',
        release: 'luz mala',
        label: 'infinite machine',
        year: '',
        role: ['mixing'],
        link: 'https://infinitemachine.bandcamp.com/album/im055-bungalovv-luz-mala'
    },
    {
        artist: 'defensa',
        release: 'defensa',
        label: 'reverb plate',
        year: '',
        role: ['mixing'],
        link: 'https://defensa.bandcamp.com/album/defensa'
    },
    {
        artist: 'qeei',
        release: 'fluvial',
        label: 'trrueno',
        year: '',
        role: ['mastering'],
        link: 'https://trrueno.bandcamp.com/album/fluvial-trr-002'
    },
    {
        artist: 'v/a',
        release: 'mecha02',
        label: 'trrueno',
        year: '',
        role: ['mixing'],
        link: 'https://trrueno.bandcamp.com/album/mecha02-trr-003'
    },
    {
        artist: 'epiref',
        release: 'debil',
        label: 'mun discos',
        year: '',
        role: ['mixing', 'mastering'],
        link: 'https://mundiscos.bandcamp.com/album/d-e-b-i-l'
    },
    {
        artist: 'qeei',
        release: 'neempha',
        label: 'aural sects',
        year: '',
        role: ['mastering'],
        link: 'https://auralsects.bandcamp.com/album/neempha-ep'
    },
];

const worksListContainer = document.querySelector('.works');

for (let work of soundWorks){
    let listItem = document.createElement('li');

    let release = document.createElement('a');
    release.textContent = work.release;
    release.setAttribute('href', work.link);
    release.setAttribute('target', '_blank');

    let artist = document.createElement('span');
    artist.textContent = `${work.artist} - `;

    let label = document.createElement('span');
    label.textContent = ` (${work.label})`;

    let roles = document.createElement('ul');
    for (let i of work.role){
        let role = document.createElement('li');
        role.textContent = ` ${i}`
        roles.appendChild(role);
    }

    listItem.append(artist, release, label, roles);
    worksListContainer.appendChild(listItem);
}