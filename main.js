
// --- Data Array ---
const songData = [
    { image: "https://i.scdn.co/image/ab67616d0000b27337488c02c8a72693f5f63813", title: "Best of Me", description: "NEFFEX", songFile: "mp3/NEFFEX - Best of Me 🤘 [Copyright Free] No.23(MP3_160K).mp3" },
    { image: "https://i.scdn.co/image/ab67616d0000b273508ffdfe0e2457fe986c6a7e", title: "LET THE WORLD BURN", description: "Chris Grey", songFile: "mp3/Chris Grey - LET THE WORLD BURN (Official Lyric Video)(MP3_160K).mp3" },
    { image: "https://i.scdn.co/image/ab67616d0000b2731917a0f3f4152622a040913f", title: "Another Love", description: "Tom Odell", songFile: "mp3/Tom Odell - Another Love myfreemp3.vip .mp3" },
    { image: "https://i.scdn.co/image/ab67616d0000b273968e67b31e2bab06d738775a", title: "B3oda Ya Belady", description: "Wegz", songFile: "mp3/Wegz - B3oda Ya Belady (Lyrics Video) _ ويجز - بعودة يا بلادي (من فيلم كباتن الزعتري كاملة بالكلمات)(MP3_160K).mp3" },
    { image: "https://i.scdn.co/image/ab67616d0000b273d2f6f58c972fb4d50ea376a6", title: "SKERTY", description: "Wegz", songFile: "mp3/Wegz - SKERTY _ ويجز - سكرتي prod. DJ Totti(MP3_160K).mp3" },
    { image: "https://i.scdn.co/image/ab67616d0000b2736c92241a9c1dc74aaba48195", title: "Dynasty", description: "MIIA", songFile: "mp3/MIIA - Dynasty (Lyrics)(MP3_160K).mp3" },
    { image: "https://i.scdn.co/image/ab67616d0000b27371d62ea7ea8a5be92d3c1f62", title: "CHIHIRO", description: "Billie Eilish", songFile: "mp3/Billie Eilish - CHIHIRO myfreemp3.vip .mp3" },
    { image: "https://i.scdn.co/image/ab67616d0000b273ac4df8abcc6d30c12ea0a84d", title: "Unstoppable", description: "NEFFEX", songFile: "mp3/NEFFEX - Unstoppable 👊 (Copyright Free) No.30(MP3_160K).mp3" },
    { image: "https://i.scdn.co/image/ab67616d0000b273ea2b6a593fc90467318ed377", title: "ALWAYS BEEN YOU(With Josh Makazo)", description: "Chris Grey ,Josh Makazo", songFile: "mp3/CHRIS GREY - ALWAYS BEEN YOU myfreemp3.vip .mp3"},
    { image: "https://i.scdn.co/image/ab67616d0000b2735689814536767358e4ea3aee", title: "sam3ak", description: "Teefo", songFile: "mp3/Teefo - sam3ak I تيفو -سامعك (Official Audio) (Prod by RPK)( قلبي دا بيرن الو مين)(MP3_160K).mp3" },
    { image: "https://i.scdn.co/image/ab67616d0000b2736ef19ac05f79e8b07b63c51d", title: "Chance", description: "NEFFEX", songFile: "mp3/NEFFEX - Chance [Copyright Free] No.65(MP3_160K).mp3" },
    { image: "https://i.scdn.co/image/ab67616d0000b27358cd6595ed970f6862906ab8", title: "Timeless", description: "The Weeknd", songFile: "mp3/The Weeknd - Timeless myfreemp3.vip .mp3" },
    { image: "https://i.scdn.co/image/ab67616d0000b273fddfffec51b4580acae727c1", title: "End Of Beginning", description: "Djo", songFile: "mp3/Djo - End Of Beginning (Lyrics)(MP3_160K).mp3" },
    { image: "https://i.scdn.co/image/ab67616d0000b273335813c25b762d50c38b8f39", title: "Rehla", description: "Mond", songFile: "mp3/Rehla الرحله(MP3_160K).mp3" },
    { image: "https://i.scdn.co/image/ab67616d0000b273f082dcd1087e99de62fd0f9a", title: "Crown", description: "NEFFEX", songFile: "mp3/NEFFEX - Crown 👑 [Copyright Free] No.15(MP3_160K).mp3" },
    { image: "https://i.scdn.co/image/ab67616d0000b273646d96db3fdc0d2d4d8b2d57", title: "Headlock", description: "Imogen Heap", songFile: "mp3/Imogen Heap - Headlock myfreemp3.vip .mp3" },
    { image: "https://i.scdn.co/image/ab67616d0000b27328b0bdaae22a1219e23c5b90", title: "As You Fade Away", description: "NEFFEX", songFile: "mp3/NEFFEX - As You Fade Away ⏳ [Copyright-Free] No.150(MP3_160K).mp3" },
    { image: "https://i.scdn.co/image/ab67616d00001e0267f71c84b0b2dce314b08c0a", title: "Gigolo", description: "bbno$", songFile: "mp3/bbno - gigolo (Lyrics) - (192 Kbps).mp3" },
    { image: "https://i.scdn.co/image/ab67616d0000b273b420afbac5730216c510bffb", title: "Numb", description: "NEFFEX", songFile: "mp3/NEFFEX - Numb [Copyright Free] No.77(MP3_160K).mp3" },
    { image: "https://i.scdn.co/image/ab67616d0000b2738fef1984ab2f5d72acef359c", title: "Things Are Gonna Get Better", description: "NEFFEX", songFile: "mp3/NEFFEX - Things Are Gonna Get Better 👊  [Copyright Free] No.14(MP3_160K).mp3" },
    { image: "https://i.scdn.co/image/ab67616d0000b273502345ddf02b0fe85ad15830", title: "NOTHING'S NEW", description: "RIO ROMEO", songFile: "mp3/NOTHING_S NEW - RIO ROMEO(MP3_160K).mp3" },
    { image: "https://i.scdn.co/image/ab67616d0000b273607dfbd668cd06751f26094e", title: "Fight Back", description: "NEFFEX", songFile: "mp3/NEFFEX - Fight Back [Official Video] No.37(MP3_160K).mp3" },
    { image: "https://i.scdn.co/image/ab67616d0000b273b53a7abcb94222c494ae24aa", title: "Destiny", description: "NEFFEX", songFile: "mp3/NEFFEX - Destiny 🙌   [Copyright Free] No.8(MP3_160K).mp3" },
    { image: "https://i.scdn.co/image/ab67616d0000b273cc0f1cec82347e21854f36d2", title: "El Dunya Eh", description: "Wegz", songFile: "mp3/Wegz - El Dunya Eh (prod. Draganov) _ ويجز - الدنيا ايه Official Audio(MP3_160K).mp3" },
    { image: "https://i.scdn.co/image/ab67616d0000b273fc11250289b3b00325c27529", title: "Amira", description: "Wegz ,Ash", songFile: "mp3/Wegz X _ashmusicofficial  - Amira (Official Audio) _ ويجز و آش - أميره(MP3_160K).mp3" },
    { image: "https://i.scdn.co/image/ab67616d0000b27349b710c5d6a4d9ad3027eaf3", title: "ElWa3d", description: "Wegz", songFile: "mp3/Wegz - ElWa3d - الوعد(MP3_160K).mp3" },
    { image: "https://i.scdn.co/image/ab67616d0000b273e06c1525c488705c512884bd", title: "KEEP UP", description: "ODETARI", songFile: "mp3/ODETARI - KEEP UP (Lyrics)(MP3_160K).mp3" },
    { image: "https://i.scdn.co/image/ab67616d0000b273255ec9ddd8af81fd9aba2ced", title: "Espresso", description: "Sabrina Carpenter", songFile: "mp3/Sabrina Carpenter - Espresso myfreemp3.vip .mp3" },
    { image: "https://i.scdn.co/image/ab67616d0000b273f1706bc59a2a8ffd082ec542", title: "Bring Me Back To life", description: "Chris Grey ,Allegra Jordyn", songFile: "mp3/Chris Grey, Allegra Jordyn - BRING ME BACK TO LIFE myfreemp3.vip .mp3" },
    { image: "https://i.scdn.co/image/ab67616d0000b273bf3163d9950cab913dbc535e", title: "El Neyya", description: "Lege-Cy", songFile: "mp3/Lege-Cy - El Neyya _ ليجي-سي - النيه (Official Audio) - (192 Kbps).mp3" },
    { image: "https://i.scdn.co/image/ab67616d00001e020cf70d72827e4304c0e5a551", title: "Golden Brown (Slowed Down Version)", description: "The Stranglers", songFile: "mp3/The Stranglers - Golden Brown (Slowed Down Version) - (192 Kbps).mp3" },
    { image: "https://i.scdn.co/image/ab67616d0000b2736ca5c90113b30c3c43ffb8f4", title: "Without Me", description: "Eminem", songFile: "mp3/Eminem - Without Me (Lyrics) - (192 Kbps).mp3" },
    { image: "https://i.scdn.co/image/ab67616d0000b2735a46f2cd563cf90828a467d3", title: "3afareet El Asphalt", description: "Wegz", songFile: "mp3/Wegz - 3afareet El Asphalt (Audio) _ ويجز - عفاريت الأسفلت(MP3_160K).mp3" },
    { image: "https://i.scdn.co/image/ab67616d0000b27374b3bf7eefcc97a5d185a532", title: "1-800", description: "bbno$ ,Ironmouse", songFile: "mp3/bbno - 1-800 (ft. ironmouse) - (192 Kbps).mp3" },
    { image: "https://i.scdn.co/image/ab67616d0000b27320753d8abcc472e904ed9493", title: "ElBakht", description: "Wegz", songFile: "mp3/Wegz - ElBakht _ ويجز - البخت (Audio) prod. Rahal(MP3_160K).mp3" },
    { image: "https://i.scdn.co/image/ab67616d0000b273a47c0e156ea3cebe37fdcab8", title: "Judas", description: "Lady Gaga", songFile: "mp3/Lady Gaga - Judas (Lyrics)(MP3_160K).mp3" },
    { image: "https://i.scdn.co/image/ab67616d0000b27311e003b20312f85cc6a9e70c", title: "Statement", description: "NEFFEX", songFile: "mp3/NEFFEX - Statement 🚨[Copyright Free] No.138(MP3_160K).mp3" },
    { image: "https://i.scdn.co/image/ab67616d0000b273a4175c5bef771929f54f1fe5", title: "ALWAYS BEEN YOU", description: "Chris Grey", songFile: "mp3/Chris Grey - ALWAYS BEEN YOU myfreemp3.vip  (1).mp3"},
    { image: "https://i.scdn.co/image/ab67616d0000b27397e23f1e9d8d062612de6135", title: "Etnaset", description: "Muslim", songFile: "mp3/_Etnaset_مسلم_MuslimMUSliM - Etnaset _ Music Video - 2021 _ مسلم - اتنسيت(MP3_160K).mp3" },
    { image: "https://i.scdn.co/image/ab67616d0000b273ecf4daaed9f84a6d673249b9", title: "Failure", description: "NEFFEX", songFile: "mp3/NEFFEX- Failure 🔥 [Copyright Free] No.11(MP3_160K).mp3" },
    { image: "https://i.scdn.co/image/ab67616d0000b27346085aa1855bd888abc51a5a", title: "APT.", description: "ROSÉ ,Bruno Mars", songFile: "mp3/ROSÉ _ Bruno Mars - APT. (Official Music Video)(MP3_160K).mp3" },
    { image: "https://i.scdn.co/image/ab67616d0000b2737bce82d74dec788c98330053", title: "KEEP FOLLOWING", description: "Odetari", songFile: "mp3/Odetari - KEEP FOLLOWING (Official Audio)(MP3_160K).mp3" },
    { image: "https://i.scdn.co/image/ab67616d0000b27321b16ebe4817ca25ae8a99e3", title: "Asyad El Soot", description: "Wegz", songFile: "mp3/Wegz - Asyad El Soot (Audio) prod. LZHYMR  _ ويجز - اسياد الصوت(MP3_160K).mp3" },
    { image: "https://i.scdn.co/image/ab67616d0000b273ebc8cfac8b586bc475b04918", title: "Diet Mountain Dew", description: "Lana Del Rey", songFile: "mp3/Lana Del Rey - Diet Mountain Dew (Lyrics)(MP3_160K).mp3" },
    { image: "https://i.scdn.co/image/ab67616d0000b273f894be72a77b1488292672c7", title: "Summertime Sadness", description: "Lana Del Rey", songFile: "mp3/Lana Del Rey - Summertime Sadness (Official Music Video)(MP3_160K).mp3" },
    { image: "https://i.scdn.co/image/ab67616d0000b2730ffe90fafc7263ad847daa03", title: "Satamoni", description: "Shehab ,DJ Totti", songFile: "mp3/Shehab X DJ Totti - Satamoni [ Official Audio ] _ شهاب و دي جي توتي - ستاموني(MP3_160K).mp3" },
    { image: "https://i.scdn.co/image/ab67616d0000b2735b694f6e1112e6ddda678b41", title: "Nasy", description: "Tommyy", songFile: "mp3/Tommy Gun - Nasy (From The TV Series Ma Trah Lays Kama Ybdo).mp3" },
    { image: "https://i.scdn.co/image/ab67616d0000b27371d62ea7ea8a5be92d3c1f62", title: "WILDFLOWER", description: "Billie Eilish", songFile: "mp3/Billie Eilish - WILDFLOWER (Official Lyric Video) [l08Zw-RY__Q].mp3"},
    { image: "https://i.scdn.co/image/ab67616d0000b2735c0a43660d340fc821ac15fb", title: "Mesh Nadman", description: "Muslim", songFile: "mp3/MUSliM - Mesh Nadman _ Music Video - 2021 _ مسلم - مش ندمان(MP3_160K).mp3" },
    { image: "https://i.scdn.co/image/ab67616d0000b27369cc4d61e05c693a9bbf7a40", title: "Ana Hont Alek", description: "Houda Bondok", songFile: "mp3/Houda Bondok - Ana Hont Alek  [Official Lyric Video]_ حوده بندق - انا هونت عليك(MP3_160K).mp3" },
    { image: "https://i.scdn.co/image/ab67616d00001e0262a3dbeacbc116641ad04829", title: "3alam Kadaba", description: "Lege-Cy", songFile: "mp3/Lege-Cy - 3alam Kadaba (From The TV Series Ma Trah Lays Kama Ybdo) - (192 Kbps).mp3" },
    { image: "https://i.scdn.co/image/ab67616d0000b27382ea2e9e1858aa012c57cd45", title: "Die With A Smile", description: "Lady Gaga ,Bruno Mars", songFile: "mp3/Lady Gaga_ Bruno Mars - Die With A Smile (Official Music Video)(MP3_160K).mp3" },
    { image: "https://i.scdn.co/image/ab67616d0000b27302b4dcfbe9c5d609feb94690", title: "Dorak Gai", description: "Wegz ,Molotof", songFile: "mp3/Wegz x Molotof - Dorak Gai (Official Music Video) _ ويجز - دورك جي مع مولوتوف(MP3_160K).mp3" }
];

// --- Global Player State ---
const playerAudio = new Audio();
let currentSongIndex = -1;
let isPlaying = false;
let currentlySelectedCard = null;
let isShuffled = false;
let songQueue = [...songData.keys()].filter(i => songData[i].songFile);
let isAnimating = false; // Animation lock
let replayState = 0; // 0: no-repeat, 1: repeat-queue, 2: repeat-one


// --- DOM Elements ---
const playlistsGrid = document.querySelector('.playlists-grid');
const musicPlayer = document.getElementById('music-player');
const playerAlbumArt = document.getElementById('player-album-art');
const playerSongTitle = document.getElementById('player-song-title');
const playerSongArtist = document.getElementById('player-song-artist');
const playerPlayBtn = document.getElementById('player-play-btn');
const progressBar = document.getElementById('progress-bar');
const currentTimeEl = document.getElementById('current-time');
const durationEl = document.getElementById('duration');
const volumeSlider = document.getElementById('volume-slider');
const prevBtn = document.getElementById('prev-btn');
const nextBtn = document.getElementById('next-btn');
const searchInput = document.getElementById('search-input');
const searchResultsContainer = document.getElementById('search-results');
const shuffleBtn = document.getElementById('shuffle-btn');
const replayBtn = document.getElementById('replay-btn');
const queueBtn = document.getElementById('queue-btn');
const songQueueSidebar = document.getElementById('song-queue-sidebar');
const nowPlayingCard = document.getElementById('now-playing-card');
const queueList = document.getElementById('queue-list');


// --- Web Component Definition ---
class MusicCard extends HTMLElement {
    constructor() {
        super();
        this.attachShadow({ mode: 'open' });
        this.cardButtons = null;
        this.hoverTimeout = null;
    }

    connectedCallback() {
        this.render();
        const playButton = this.shadowRoot.querySelector('.btn-play');
        this.cardButtons = this.shadowRoot.querySelector('.card-buttons');

        // --- Definitive Click-Through and Card Click Fix ---

        // 1. Buttons are NOT clickable by default
        this.cardButtons.style.pointerEvents = 'none';

        // 2. On hover, wait for animation to finish, THEN make buttons clickable.
        this.addEventListener('mouseenter', () => {
            clearTimeout(this.hoverTimeout);
            this.hoverTimeout = setTimeout(() => {
                // Check if the mouse is still over the card before enabling clicks
                if (this.matches(':hover')) {
                    this.cardButtons.style.pointerEvents = 'auto';
                }
            }, 300); // Must match CSS transition duration
        });

        // 3. On mouse leave, IMMEDIATELY make buttons not clickable.
        this.addEventListener('mouseleave', () => {
            clearTimeout(this.hoverTimeout);
            this.cardButtons.style.pointerEvents = 'none';
        });

        // 4. This listener for the WHOLE card...
        this.addEventListener('click', (e) => {
            // ...STOPS if the click was on the button container.
            // This prevents the song from playing when you click the card body.
            if (this.cardButtons.contains(e.target)) {
                return;
            }
            
            if (currentlySelectedCard && currentlySelectedCard !== this) {
                currentlySelectedCard.deselect();
            }
            this.toggleSelect();
        });

        // 5. This listener is ONLY for the play button.
        playButton.addEventListener('click', (event) => {
            event.stopPropagation(); // Important: stops the card's own click listener
            const songIndex = parseInt(this.dataset.index, 10);
            const songFile = this.getAttribute('songFile');
            if (songFile) {
                togglePlayPause(songIndex);
            }
        });
        
        // Other listeners
        this.addEventListener('contextmenu', (e) => e.preventDefault());
        this.addEventListener('dragstart', (e) => e.preventDefault());
    }

    deselect() {
        this.shadowRoot.querySelector('.card').classList.remove('selected');
        // If deselected, buttons become non-clickable unless re-hovered
        this.cardButtons.style.pointerEvents = 'none';
    }

    toggleSelect() {
        const cardElement = this.shadowRoot.querySelector('.card');
        const isSelected = cardElement.classList.toggle('selected');
        
        if (isSelected) {
            currentlySelectedCard = this;
            // When selected, make buttons immediately clickable.
            clearTimeout(this.hoverTimeout); // No need for hover timer
            this.cardButtons.style.pointerEvents = 'auto';
        } else {
            currentlySelectedCard = null;
            // When deselected, revert to default non-clickable state.
            this.cardButtons.style.pointerEvents = 'none';
        }
    }
    
    setPlayIcon(playing) {
        const icon = this.shadowRoot.querySelector('.btn-play i');
        icon.className = playing ? 'fas fa-pause' : 'fas fa-play';
    }

    render() {
        const imageSrc = this.getAttribute('image');
        const titleText = this.getAttribute('title');
        const descriptionText = this.getAttribute('description');
        const songFile = this.getAttribute('songFile');
        const finalImageSrc = imageSrc || 'https://storage.googleapis.com/gemini-codelab/placeholder.png';

        this.shadowRoot.innerHTML = `
            <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.5.2/css/all.min.css">
            <style>
                :host { display: block; }
                .card { background-color: #181818; border-radius: 8px; padding: 16px; text-align: left; transition: background-color 0.3s; cursor: pointer; height: 100%; display: flex; flex-direction: column; box-sizing: border-box; position: relative; overflow: visible; user-select: none; outline: none; }
                .card:hover { background-color: #282828; }
                .image-container { position: relative; width: 100%; padding-top: 100%; border-radius: 8px; margin-bottom: 16px; }
                .card img { position: absolute; top: 0; left: 0; width: 100%; height: 100%; object-fit: cover; transition: transform 0.3s; border-radius: 8px; }
                .card h3 { font-size: 16px; font-weight: bold; margin: 0 0 8px 0; color: #fff; white-space: nowrap; overflow: hidden; text-overflow: ellipsis; }
                .card p { font-size: 14px; color: #b3b3b3; margin: 0; white-space: nowrap; overflow: hidden; text-overflow: ellipsis; }
                
                .card-buttons { 
                    position: absolute; 
                    bottom: 25px; 
                    right: 25px; 
                    display: flex; 
                    flex-direction: column; 
                    align-items: center; 
                    gap: 10px; 
                    opacity: 0; 
                    transform: translateY(10px); 
                    transition: opacity 0.3s ease, transform 0.3s ease; 
                    z-index: 2;
                }
                .card:hover .card-buttons, .card.selected .card-buttons { 
                    opacity: 1; 
                    transform: translateY(0); 
                }

                .card.selected img { transform: scale(1.05); }
                .btn-play { background-color: #1DB954; color: white; border: none; border-radius: 50%; width: 52px; height: 52px; display: flex; align-items: center; justify-content: center; font-size: 22px; cursor: pointer; transition: transform 0.2s; box-shadow: 0 4px 10px rgba(0,0,0,0.5); }
                .btn-play:hover { transform: scale(1.1); }
                .btn-more { background-color: rgba(25, 25, 25, 0.7); border: none; border-radius: 50%; color: #e0e0e0; font-size: 18px; cursor: pointer; width: 32px; height: 32px; display: flex; align-items: center; justify-content: center; transition: background-color 0.2s, color 0.2s; }
                .btn-more:hover { background-color: rgba(40, 40, 40, 0.9); color: #fff; }
                .btn-play.hidden { display: none; }
            </style>
            <div class="card">
                <div class="image-container"><img src="${finalImageSrc}" alt="Album Art for ${titleText}"></div>
                <div><h3>${titleText}</h3><p>${descriptionText}</p></div>
                <div class="card-buttons">
                    <button class="btn-play ${songFile ? '' : 'hidden'}"><i class="fas fa-play"></i></button>
                    <button class="btn-more"><i class="fas fa-ellipsis-h"></i></button>
                </div>
            </div>
        `;
    }
}
customElements.define('music-card', MusicCard);

// --- Shuffle Function (Fisher-Yates) ---
function shuffle(array) {
    let currentIndex = array.length, randomIndex;
    while (currentIndex !== 0) {
        randomIndex = Math.floor(Math.random() * currentIndex);
        currentIndex--;
        [array[currentIndex], array[randomIndex]] = [array[randomIndex], array[currentIndex]];
    }
    return array;
}

// --- Central Animation Logic (FLIP) ---
function animateQueueTransition(updateStateAndRender) {
    if (isAnimating) return;
    isAnimating = true;

    const firstPositions = new Map();
    const oldItems = [...nowPlayingCard.children, ...queueList.children];
    oldItems.forEach(item => {
        if (item.dataset.index) {
            firstPositions.set(item.dataset.index, item.getBoundingClientRect());
        }
    });

    updateStateAndRender();

    const newItems = [...nowPlayingCard.children, ...queueList.children];
    const newItemsIndices = new Set(newItems.map(item => item.dataset.index));

    // Animate items that MOVED or APPEARED
    newItems.forEach(item => {
        const index = item.dataset.index;
        const firstPos = firstPositions.get(index);
        
        if (firstPos) { // Item MOVED
            const lastPos = item.getBoundingClientRect();
            const deltaX = firstPos.left - lastPos.left;
            const deltaY = firstPos.top - lastPos.top;

            if (Math.abs(deltaX) < 1 && Math.abs(deltaY) < 1) return;

            item.style.transform = `translate(${deltaX}px, ${deltaY}px)`;
            item.style.transition = 'transform 0s';

            requestAnimationFrame(() => {
                item.style.transform = 'translate(0, 0)';
                item.style.transition = 'transform 0.45s cubic-bezier(0.645, 0.045, 0.355, 1)';
            });
        } else { // Item APPEARED
            const lastPos = item.getBoundingClientRect();
            item.style.transform = `translateY(-${lastPos.height}px) scale(0.95)`;
            item.style.opacity = '0';
            item.style.transition = 'none';

            requestAnimationFrame(() => {
                item.style.transform = 'translateY(0) scale(1)';
                item.style.opacity = '1';
                item.style.transition = 'transform 0.45s cubic-bezier(0.25, 0.46, 0.45, 0.94), opacity 0.4s ease-out';
            });
        }
    });

    // Animate items that DISAPPEARED (Ghosts)
    firstPositions.forEach((pos, index) => {
        if (!newItemsIndices.has(index)) {
            const oldSong = songData[parseInt(index, 10)];
            if (!oldSong) return;

            const ghost = createQueueItem(oldSong, parseInt(index, 10));
            document.body.appendChild(ghost);
            ghost.style.position = 'fixed';
            ghost.style.boxSizing = 'border-box';
            ghost.style.left = `${pos.left}px`;
            ghost.style.top = `${pos.top}px`;
            ghost.style.width = `${pos.width}px`;
            ghost.style.height = `${pos.height}px`;
            ghost.style.margin = '0';
            ghost.style.zIndex = '500';
            ghost.style.transition = 'transform 0.45s cubic-bezier(0.55, 0.085, 0.68, 0.53), opacity 0.45s ease-in';

            requestAnimationFrame(() => {
                ghost.style.transform = `translateY(-${pos.height}px) scale(0.95)`;
                ghost.style.opacity = '0';
                ghost.addEventListener('transitionend', () => ghost.remove());
            });
        }
    });
    
    setTimeout(() => {
        isAnimating = false;
    }, 500);
}

// --- Queue and Player Functions ---
function actuallyRenderQueue() {
    nowPlayingCard.innerHTML = '';
    queueList.innerHTML = '';

    if (currentSongIndex === -1) {
        nowPlayingCard.innerHTML = '<p class="queue-message">No song is currently playing.</p>';
        return;
    }

    const nowPlayingSong = songData[currentSongIndex];
    const nowPlayingItem = createQueueItem(nowPlayingSong, currentSongIndex, true);
    nowPlayingCard.appendChild(nowPlayingItem);

    const currentQueueIndex = songQueue.indexOf(currentSongIndex);
    if (currentQueueIndex !== -1) {
        const fragment = document.createDocumentFragment();
        for (let i = currentQueueIndex + 1; i < songQueue.length; i++) {
            const songIndex = songQueue[i];
            const song = songData[songIndex];
            if(song) {
                const queueItem = createQueueItem(song, songIndex);
                fragment.appendChild(queueItem);
            }
        }
        queueList.appendChild(fragment);
    }
}

function createQueueItem(song, songIndex, isNowPlaying = false) {
    const item = document.createElement('div');
    item.className = `queue-item ${isNowPlaying ? 'playing' : ''}`;
    item.dataset.index = songIndex;
    item.innerHTML = `
        <img src="${song.image || 'https://storage.googleapis.com/gemini-codelab/placeholder.png'}" alt="${song.title}">
        <div class="queue-item-details">
            <div class="queue-item-title">${song.title}</div>
            <div class="queue-item-artist">${song.description}</div>
        </div>
    `;
    item.addEventListener('click', () => {
        if (songIndex !== currentSongIndex) {
             togglePlayPause(songIndex);
        }
    });
    return item;
}

function loadSong(songIndex) {
    const song = songData[songIndex];
    if (!song || !song.songFile) return;
    currentSongIndex = songIndex;
    
    playerAlbumArt.src = song.image || 'https://storage.googleapis.com/gemini-codelab/placeholder.png';
    playerSongTitle.textContent = song.title;
    playerSongArtist.textContent = song.description;
    playerAudio.src = song.songFile;
    playerPlayBtn.disabled = false;

    updateAllCardIcons();
}

function showPlayer() {
    if (musicPlayer.classList.contains('show')) return;
    document.documentElement.style.setProperty('--player-height', '80px');
    musicPlayer.classList.add('show');
}

function hidePlayer() {
    if (!musicPlayer.classList.contains('show')) return;
    document.documentElement.style.setProperty('--player-height', '0px');
    musicPlayer.classList.remove('show');
    if (songQueueSidebar.classList.contains('show')) {
        songQueueSidebar.classList.remove('show');
    }
}

function playAudio() {
    if (playerPlayBtn.disabled) return;
    isPlaying = true;
    playerAudio.play();
    showPlayer();
    updateAllCardIcons();
    playerPlayBtn.innerHTML = '<i class="fas fa-pause-circle"></i>';
}

function pauseAudio() {
    isPlaying = false;
    playerAudio.pause();
    updateAllCardIcons();
    playerPlayBtn.innerHTML = '<i class="fas fa-play-circle"></i>';
}


function togglePlayPause(songIndex) {
    if (isAnimating) return;
    if (songIndex === -1) return;

    if (songIndex === currentSongIndex) {
        isPlaying ? pauseAudio() : playAudio();
    } else {
        animateQueueTransition(() => {
            loadSong(songIndex);
            actuallyRenderQueue();
        });
        playAudio();
    }
}

function playNext() {
    if (isAnimating || songQueue.length <= 1) return;

    animateQueueTransition(() => {
        const currentQueueIndex = songQueue.indexOf(currentSongIndex);
        let nextSongIndexInQueue = currentQueueIndex + 1;
        if (nextSongIndexInQueue >= songQueue.length) {
            nextSongIndexInQueue = 0; // Loop back to start
        }
        const nextSongIndex = songQueue[nextSongIndexInQueue];
        loadSong(nextSongIndex);
        actuallyRenderQueue();
    });
    playAudio();
}

function playPrev() {
    if (isAnimating || songQueue.length <= 1) return;

    animateQueueTransition(() => {
        const currentQueueIndex = songQueue.indexOf(currentSongIndex);
        let prevSongIndexInQueue = currentQueueIndex - 1;
        if (prevSongIndexInQueue < 0) {
            prevSongIndexInQueue = songQueue.length - 1; // Loop to the end
        }
        const prevSongIndex = songQueue[prevSongIndexInQueue];
        loadSong(prevSongIndex);
        actuallyRenderQueue();
    });
    playAudio();
}


function updateAllCardIcons() {
    const cards = playlistsGrid.querySelectorAll('music-card');
    cards.forEach((card, index) => {
        const isThisCardPlaying = (index === currentSongIndex && isPlaying);
        card.setPlayIcon(isThisCardPlaying);
    });
}

function formatTime(seconds) {
    const minutes = Math.floor(seconds / 60);
    const secs = Math.floor(seconds % 60);
    return `${minutes}:${secs < 10 ? '0' : ''}${secs}`;
}

// --- Search Function ---
function handleSearch() {
    const searchTerm = searchInput.value.toLowerCase();
    searchResultsContainer.innerHTML = '';

    if (searchTerm) {
        const filteredSongs = songData.filter(song => song.title && song.description && (song.title.toLowerCase().includes(searchTerm) || song.description.toLowerCase().includes(searchTerm)));

        if (filteredSongs.length > 0) {
            searchResultsContainer.style.display = 'block';
            filteredSongs.forEach(song => {
                const songIndex = songData.indexOf(song);
                const resultItem = document.createElement('div');
                resultItem.classList.add('search-result-item');
                resultItem.dataset.index = songIndex;
                resultItem.innerHTML = `
                    <img src="${song.image || 'https://storage.googleapis.com/gemini-codelab/placeholder.png'}" alt="${song.title}">
                    <div class="search-result-details">
                        <div class="search-result-title">${song.title}</div>
                        <div class="search-result-artist">${song.description}</div>
                    </div>
                `;
                resultItem.addEventListener('click', () => {
                    togglePlayPause(songIndex);
                    searchResultsContainer.style.display = 'none';
                    searchInput.value = '';
                });
                searchResultsContainer.appendChild(resultItem);
            });
        } else {
            searchResultsContainer.style.display = 'none';
        }
    } else {
        searchResultsContainer.style.display = 'none';
    }
}

function updateReplayButtonState() {
    // Ensure the icon is always there, creating it if it doesn't exist.
    if (!replayBtn.querySelector('i')) {
        replayBtn.innerHTML = '<i class="fa-sharp fa-solid fa-repeat"></i>';
    }

    // Remove any existing badge first to avoid duplicates.
    const existingBadge = replayBtn.querySelector('.replay-badge');
    if (existingBadge) {
        existingBadge.remove();
    }

    // Set the loop property on the audio element based on the state.
    playerAudio.loop = (replayState === 2);

    // Manage the 'active' class for visual feedback.
    if (replayState === 1 || replayState === 2) {
        replayBtn.classList.add('active');
    } else {
        replayBtn.classList.remove('active');
    }

    // Add the badge only for the 'repeat-one' state.
    if (replayState === 2) {
        const badge = document.createElement('span');
        badge.className = 'replay-badge';
        badge.textContent = '1';
        replayBtn.appendChild(badge);
    }
}


// --- Event Listeners ---
playerPlayBtn.addEventListener('click', () => {
    if (!playerPlayBtn.disabled) {
        togglePlayPause(currentSongIndex);
    }
});
nextBtn.addEventListener('click', playNext);
prevBtn.addEventListener('click', playPrev);
searchInput.addEventListener('input', handleSearch);

replayBtn.addEventListener('click', () => {
    replayState = (replayState + 1) % 3;
    updateReplayButtonState();
});

document.addEventListener('click', (e) => {
    if (!searchResultsContainer.contains(e.target) && e.target !== searchInput) {
        searchResultsContainer.style.display = 'none';
    }

    const clickedOnCard = e.target.closest('music-card');
    if (currentlySelectedCard && !clickedOnCard) {
        currentlySelectedCard.deselect();
        currentlySelectedCard = null;
    }
});

shuffleBtn.addEventListener('click', () => {
    if (isAnimating) return;

    animateQueueTransition(() => {
        isShuffled = !isShuffled;
        shuffleBtn.classList.toggle('active', isShuffled);

        if (isShuffled) {
            // --- Logic to turn Shuffle ON ---
            if (currentSongIndex !== -1) {
                // Filter out the current song, shuffle the rest, then add the current song to the front.
                const otherSongs = songQueue.filter(index => index !== currentSongIndex);
                const shuffledPart = shuffle(otherSongs);
                songQueue = [currentSongIndex, ...shuffledPart];
            } else {
                // If nothing is playing, just shuffle the whole list.
                songQueue = shuffle([...songQueue]);
            }
        } else {
            // --- Logic to turn Shuffle OFF ---
            // Simply restore the queue to its original, sorted order.
            // The `actuallyRenderQueue` function will correctly display the "Next Up" list 
            // starting from the song after the `currentSongIndex`.
            songQueue = [...songData.keys()].filter(i => songData[i] && songData[i].songFile);
        }
        
        // Re-render the queue with the new order.
        actuallyRenderQueue();
    });
});

queueBtn.addEventListener('click', () => {
    songQueueSidebar.classList.toggle('show');
});

volumeSlider.addEventListener('input', (e) => {
    playerAudio.volume = e.target.value;
});

progressBar.addEventListener('input', (e) => {
    const { duration } = playerAudio;
    if (duration) {
        const newTime = (e.target.value / 100) * duration;
        playerAudio.currentTime = newTime;
    }
    // Update the visual representation of the progress immediately.
    document.documentElement.style.setProperty('--progress-percent', `${e.target.value}%`);
});


playerAudio.addEventListener('timeupdate', () => {
    const { duration, currentTime } = playerAudio;
    if (duration) {
        const progressPercent = (currentTime / duration) * 100;
        progressBar.value = progressPercent;
        document.documentElement.style.setProperty('--progress-percent', `${progressPercent}%`);
        currentTimeEl.textContent = formatTime(currentTime);
    } else {
        progressBar.value = 0;
        document.documentElement.style.setProperty('--progress-percent', '0%');
        currentTimeEl.textContent = '0:00';
    }
});


playerAudio.addEventListener('loadedmetadata', () => {
    durationEl.textContent = formatTime(playerAudio.duration);
});

playerAudio.addEventListener('ended', () => {
    if (replayState === 1) { // Repeat queue
        playNext();
    } else if (replayState === 0) { // No repeat
        const currentQueueIndex = songQueue.indexOf(currentSongIndex);
        if (currentQueueIndex < songQueue.length - 1) {
            playNext();
        } else {
            // Last song finished, and no-repeat is on
            hidePlayer();
            pauseAudio(); // Reset player state
            currentSongIndex = -1; // No song is active
            updateAllCardIcons();
            actuallyRenderQueue(); // Clear the queue UI
        }
    }
    // If replayState is 2 (repeat-one), the 'loop' attribute on the audio element handles it automatically.
});

// --- Initial Load ---
document.addEventListener('DOMContentLoaded', () => {
    playerPlayBtn.disabled = true;
    updateReplayButtonState(); // Set initial state of the replay button

    const leftPane = document.getElementById('left-pane');
    if (leftPane) {
        setTimeout(() => {
            leftPane.style.transition = 'width 0.5s cubic-bezier(0.4, 0, 0.2, 1)';
        }, 10);
    }

    if (playlistsGrid) {
        songData.forEach((song, index) => {
            if (!song.title) return; // Do not render empty cards
            const card = document.createElement('music-card');
            card.dataset.index = index;
            card.setAttribute('image', song.image || 'https://storage.googleapis.com/gemini-codelab/placeholder.png');
            card.setAttribute('title', song.title);
            card.setAttribute('description', song.description);
            if (song.songFile) {
                card.setAttribute('songFile', song.songFile);
            }
            playlistsGrid.appendChild(card);
        });
    }

    const collapseBtn = document.getElementById('collapse-btn');
    if (collapseBtn && leftPane) {
        collapseBtn.addEventListener('click', (event) => {
            event.stopPropagation();
            leftPane.classList.toggle('collapsed');
        });
    }
    actuallyRenderQueue(); // Initial render of the queue
});
