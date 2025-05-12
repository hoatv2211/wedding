/**
 * Wedding Soundtrack Generator
 * Creates personalized wedding playlists based on user preferences
 */

document.addEventListener('DOMContentLoaded', function() {
    // Get all required elements
    const soundtrackForm = document.getElementById('soundtrack-form');
    const soundtrackLoading = document.getElementById('soundtrack-loading');
    const soundtrackResults = document.getElementById('soundtrack-results');
    const playlistContainer = document.getElementById('playlist-container');
    const saveButton = document.querySelector('.btn-save');
    
    // Wedding song database - organized by genres and moods
    const weddingSongs = {
        // Pop songs
        pop: {
            romantic: [
                { title: "Perfect", artist: "Ed Sheeran", reason: "A beautiful declaration of finding your perfect match" },
                { title: "All of Me", artist: "John Legend", reason: "A heartfelt dedication to unconditional love" },
                { title: "A Thousand Years", artist: "Christina Perri", reason: "Expresses a love that has waited lifetimes" },
                { title: "Thinking Out Loud", artist: "Ed Sheeran", reason: "Celebrates enduring love that lasts through the years" },
                { title: "Love Me Like You Do", artist: "Ellie Goulding", reason: "A passionate declaration of deep love" }
            ],
            joyful: [
                { title: "Marry You", artist: "Bruno Mars", reason: "A fun, spontaneous celebration of love" },
                { title: "Sugar", artist: "Maroon 5", reason: "An upbeat celebration of sweetness in love" },
                { title: "Love On Top", artist: "Beyoncé", reason: "A joyful expression of victorious love" },
                { title: "Can't Stop the Feeling", artist: "Justin Timberlake", reason: "Pure happiness that makes everyone dance" },
                { title: "Happy", artist: "Pharrell Williams", reason: "The perfect soundtrack for celebration" }
            ],
            energetic: [
                { title: "Uptown Funk", artist: "Mark Ronson ft. Bruno Mars", reason: "Guaranteed to fill the dance floor" },
                { title: "Dance Monkey", artist: "Tones and I", reason: "A modern dance hit with infectious energy" },
                { title: "Can't Hold Us", artist: "Macklemore & Ryan Lewis", reason: "Powerful rhythm that energizes any celebration" },
                { title: "Shut Up and Dance", artist: "Walk The Moon", reason: "The perfect command for a wedding reception" },
                { title: "I Gotta Feeling", artist: "Black Eyed Peas", reason: "Sets the tone for an unforgettable night" }
            ]
        },
        
        // Rock songs
        rock: {
            romantic: [
                { title: "Nothing Else Matters", artist: "Metallica", reason: "A powerful ballad about what truly matters in life" },
                { title: "I Don't Want to Miss a Thing", artist: "Aerosmith", reason: "Intense devotion expressed in classic rock style" },
                { title: "November Rain", artist: "Guns N' Roses", reason: "An epic love story with beautiful instrumentation" },
                { title: "Wonderful Tonight", artist: "Eric Clapton", reason: "A tender tribute to beauty and love" },
                { title: "Yellow", artist: "Coldplay", reason: "A gentle rock declaration of shining devotion" }
            ],
            joyful: [
                { title: "You Make My Dreams", artist: "Hall & Oates", reason: "Classic feel-good rock about dreams coming true" },
                { title: "Brown Eyed Girl", artist: "Van Morrison", reason: "A joyful rock classic about beautiful memories" },
                { title: "Signed, Sealed, Delivered", artist: "Stevie Wonder", reason: "An upbeat commitment with a groove" },
                { title: "Walking on Sunshine", artist: "Katrina & The Waves", reason: "Pure rock joy for celebrating love" },
                { title: "Just Like Heaven", artist: "The Cure", reason: "Captures the magical feeling of perfect love" }
            ],
            energetic: [
                { title: "Don't Stop Believin'", artist: "Journey", reason: "The ultimate anthem of hope and perseverance" },
                { title: "Sweet Child O' Mine", artist: "Guns N' Roses", reason: "Iconic guitar and passionate lyrics" },
                { title: "Livin' on a Prayer", artist: "Bon Jovi", reason: "A powerful story of facing life's challenges together" },
                { title: "Summer of '69", artist: "Bryan Adams", reason: "Celebrates the best days of life and lasting memories" },
                { title: "I Love Rock 'n' Roll", artist: "Joan Jett", reason: "Gets everyone rocking on the dance floor" }
            ]
        },
        
        // R&B songs
        "r&b": {
            romantic: [
                { title: "At Last", artist: "Etta James", reason: "The classic expression of finding true love" },
                { title: "Adore", artist: "Prince", reason: "A passionate R&B devotion anthem" },
                { title: "Let's Stay Together", artist: "Al Green", reason: "A timeless plea for lasting love" },
                { title: "Endless Love", artist: "Luther Vandross & Mariah Carey", reason: "The definition of deep, everlasting affection" },
                { title: "Spend My Life With You", artist: "Eric Benét ft. Tamia", reason: "A beautiful promise of forever" }
            ],
            joyful: [
                { title: "Signed, Sealed, Delivered", artist: "Stevie Wonder", reason: "A joyful declaration of commitment" },
                { title: "Best Part", artist: "Daniel Caesar ft. H.E.R.", reason: "A sweet celebration of finding your best match" },
                { title: "This Will Be (An Everlasting Love)", artist: "Natalie Cole", reason: "Pure joy in finding true love" },
                { title: "Lovely Day", artist: "Bill Withers", reason: "The perfect soundtrack for a beautiful celebration" },
                { title: "You're the First, the Last, My Everything", artist: "Barry White", reason: "Classic R&B celebration of complete love" }
            ],
            energetic: [
                { title: "24K Magic", artist: "Bruno Mars", reason: "Modern R&B that guarantees a good time" },
                { title: "Treasure", artist: "Bruno Mars", reason: "Upbeat retro R&B celebrating your precious love" },
                { title: "PYT (Pretty Young Thing)", artist: "Michael Jackson", reason: "Classic dance floor filler with undeniable groove" },
                { title: "Crazy In Love", artist: "Beyoncé ft. Jay-Z", reason: "The perfect expression of passionate love" },
                { title: "Kiss", artist: "Prince", reason: "Funky, energetic and impossible not to dance to" }
            ]
        },
        
        // Jazz songs
        jazz: {
            romantic: [
                { title: "What a Wonderful World", artist: "Louis Armstrong", reason: "A timeless celebration of life's beauty" },
                { title: "The Way You Look Tonight", artist: "Frank Sinatra", reason: "Classic elegance for a special moment" },
                { title: "Unforgettable", artist: "Nat King Cole", reason: "The definition of timeless romance" },
                { title: "La Vie en Rose", artist: "Louis Armstrong", reason: "Sees life through the lens of love" },
                { title: "My Funny Valentine", artist: "Chet Baker", reason: "Celebrates loving someone completely" }
            ],
            joyful: [
                { title: "L-O-V-E", artist: "Nat King Cole", reason: "A playful, joyful spelling out of love" },
                { title: "Cheek to Cheek", artist: "Ella Fitzgerald & Louis Armstrong", reason: "Pure joy in dancing close together" },
                { title: "Fly Me to the Moon", artist: "Frank Sinatra", reason: "Swinging celebration of love's euphoria" },
                { title: "Beyond the Sea", artist: "Bobby Darin", reason: "A hopeful journey to happiness together" },
                { title: "It Had to Be You", artist: "Harry Connick Jr.", reason: "Celebrating the only one for you" }
            ],
            energetic: [
                { title: "Sing, Sing, Sing", artist: "Benny Goodman", reason: "Explosive big band energy for dancing" },
                { title: "Minnie the Moocher", artist: "Cab Calloway", reason: "Classic call and response to get everyone involved" },
                { title: "Take the A Train", artist: "Duke Ellington", reason: "Driving rhythm perfect for a celebration" },
                { title: "In the Mood", artist: "Glenn Miller Orchestra", reason: "The quintessential swing dance number" },
                { title: "Zoot Suit Riot", artist: "Cherry Poppin' Daddies", reason: "Modern swing with incredible energy" }
            ]
        },
        
        // Classical songs
        classical: {
            romantic: [
                { title: "Canon in D", artist: "Pachelbel", reason: "The timeless wedding processional choice" },
                { title: "Claire de Lune", artist: "Debussy", reason: "Ethereal beauty for a magical moment" },
                { title: "Air on the G String", artist: "Bach", reason: "Elegant, refined romance in musical form" },
                { title: "Nocturne Op. 9 No. 2", artist: "Chopin", reason: "Intimate piano expressing deep emotion" },
                { title: "Ave Maria", artist: "Schubert", reason: "Transcendent beauty for a sacred moment" }
            ],
            joyful: [
                { title: "Spring", artist: "Vivaldi", reason: "Captures the fresh beginning of a new journey" },
                { title: "Ode to Joy", artist: "Beethoven", reason: "The ultimate expression of celebration" },
                { title: "Wedding March", artist: "Mendelssohn", reason: "The classic joyful exit music" },
                { title: "Water Music", artist: "Handel", reason: "Stately celebration fit for royalty" },
                { title: "Arrival of the Queen of Sheba", artist: "Handel", reason: "Triumphant and majestic entrance music" }
            ],
            energetic: [
                { title: "William Tell Overture", artist: "Rossini", reason: "Dramatic and exciting musical journey" },
                { title: "Dance of the Knights", artist: "Prokofiev", reason: "Powerful and commanding presence" },
                { title: "Hungarian Dance No. 5", artist: "Brahms", reason: "Passionate and spirited celebration" },
                { title: "Ride of the Valkyries", artist: "Wagner", reason: "Epic and unforgettable musical statement" },
                { title: "Symphony No. 5", artist: "Beethoven", reason: "Iconic intensity and drama" }
            ]
        },
        
        // Country songs
        country: {
            romantic: [
                { title: "I Cross My Heart", artist: "George Strait", reason: "A beautiful promise of eternal devotion" },
                { title: "When I Said I Do", artist: "Clint Black", reason: "Heartfelt vows set to music" },
                { title: "To Make You Feel My Love", artist: "Garth Brooks", reason: "A powerful pledge of supportive love" },
                { title: "It's Your Love", artist: "Tim McGraw & Faith Hill", reason: "Celebrates the transformative power of love" },
                { title: "Remember When", artist: "Alan Jackson", reason: "Looks forward to growing old together" }
            ],
            joyful: [
                { title: "My Best Friend", artist: "Tim McGraw", reason: "Celebrates the joy of marrying your best friend" },
                { title: "Then", artist: "Brad Paisley", reason: "A joyful reflection on love growing stronger" },
                { title: "Love Story", artist: "Taylor Swift", reason: "A romantic fairy tale with a happy ending" },
                { title: "Bless the Broken Road", artist: "Rascal Flatts", reason: "Finding joy after a long journey" },
                { title: "Die a Happy Man", artist: "Thomas Rhett", reason: "Finding complete contentment in love" }
            ],
            energetic: [
                { title: "Chicken Fried", artist: "Zac Brown Band", reason: "Celebrating the simple joys of life together" },
                { title: "Wagon Wheel", artist: "Darius Rucker", reason: "Gets everyone singing along in celebration" },
                { title: "Save a Horse (Ride a Cowboy)", artist: "Big & Rich", reason: "Guaranteed to fill the dance floor" },
                { title: "Boot Scootin' Boogie", artist: "Brooks & Dunn", reason: "Classic line dance to get the party started" },
                { title: "Something Like That", artist: "Tim McGraw", reason: "Upbeat celebration of memorable moments" }
            ]
        },
        
        // Electronic songs
        electronic: {
            romantic: [
                { title: "Get Lucky", artist: "Daft Punk ft. Pharrell Williams", reason: "Modern romance with retro vibes" },
                { title: "Latch", artist: "Disclosure ft. Sam Smith", reason: "Electronic soul about holding on to love" },
                { title: "Midnight City", artist: "M83", reason: "Dreamy electronic landscape for special moments" },
                { title: "I Follow Rivers", artist: "Lykke Li", reason: "Haunting devotion with electronic beats" },
                { title: "Sunset Lover", artist: "Petit Biscuit", reason: "Beautiful electronic soundscape for romantic moments" }
            ],
            joyful: [
                { title: "One More Time", artist: "Daft Punk", reason: "Celebrating the joy of the moment" },
                { title: "Rather Be", artist: "Clean Bandit ft. Jess Glynne", reason: "There's no place I'd rather be than with you" },
                { title: "Spectrum", artist: "Zedd ft. Matthew Koma", reason: "Colorful celebration of love's different facets" },
                { title: "Feel So Close", artist: "Calvin Harris", reason: "Electro-pop about the intimacy of true connection" },
                { title: "This Is What You Came For", artist: "Calvin Harris ft. Rihanna", reason: "Made for celebration and dancing" }
            ],
            energetic: [
                { title: "Titanium", artist: "David Guetta ft. Sia", reason: "Powerful anthem of strength and resilience" },
                { title: "Wake Me Up", artist: "Avicii", reason: "Electronic-folk fusion about finding your path" },
                { title: "Levels", artist: "Avicii", reason: "Pure euphoric energy for the dance floor" },
                { title: "Lean On", artist: "Major Lazer & DJ Snake ft. MØ", reason: "Global dance hit about supporting each other" },
                { title: "Don't You Worry Child", artist: "Swedish House Mafia", reason: "Uplifting message with massive drops" }
            ]
        },
        
        // Folk songs
        folk: {
            romantic: [
                { title: "Harvest Moon", artist: "Neil Young", reason: "Gentle reflection on enduring love" },
                { title: "The First Time Ever I Saw Your Face", artist: "Roberta Flack", reason: "Intimate folk ballad about love at first sight" },
                { title: "Falling Slowly", artist: "Glen Hansard & Markéta Irglová", reason: "Academy Award-winning duet about falling in love" },
                { title: "Forever Young", artist: "Bob Dylan", reason: "A beautiful blessing for a lifetime together" },
                { title: "Bloom", artist: "The Paper Kites", reason: "Intimate folk love song with beautiful imagery" }
            ],
            joyful: [
                { title: "Ho Hey", artist: "The Lumineers", reason: "Folk anthem about finding where you belong" },
                { title: "Home", artist: "Edward Sharpe & The Magnetic Zeros", reason: "Joyful celebration of finding home in another person" },
                { title: "I Will Wait", artist: "Mumford & Sons", reason: "Upbeat promise of patient, enduring love" },
                { title: "Better Together", artist: "Jack Johnson", reason: "Simple, joyful affirmation of partnership" },
                { title: "Rivers and Roads", artist: "The Head and the Heart", reason: "Celebrating the journey of life with loved ones" }
            ],
            energetic: [
                { title: "Little Talks", artist: "Of Monsters and Men", reason: "Energetic folk duet about supporting each other" },
                { title: "Stubborn Love", artist: "The Lumineers", reason: "Passionate declaration of persistent love" },
                { title: "The Cave", artist: "Mumford & Sons", reason: "Powerful anthem about emerging stronger together" },
                { title: "Skinny Love", artist: "Bon Iver", reason: "Raw emotional energy in folk form" },
                { title: "Ophelia", artist: "The Lumineers", reason: "Foot-stomping rhythm with vintage charm" }
            ]
        },
        
        // Indie songs
        indie: {
            romantic: [
                { title: "First Day of My Life", artist: "Bright Eyes", reason: "Finding meaning through love" },
                { title: "Such Great Heights", artist: "Iron & Wine", reason: "Intimate indie celebration of perfect love" },
                { title: "Your Hand in Mine", artist: "Explosions in the Sky", reason: "Instrumental post-rock journey of emotion" },
                { title: "Sea of Love", artist: "Cat Power", reason: "A tender indie cover of a timeless love song" },
                { title: "Holocene", artist: "Bon Iver", reason: "Finding perspective and beauty in vulnerability" }
            ],
            joyful: [
                { title: "You Are the Best Thing", artist: "Ray LaMontagne", reason: "Soulful indie celebration of finding your person" },
                { title: "Dog Days Are Over", artist: "Florence + The Machine", reason: "Joyful release and celebration" },
                { title: "Home", artist: "Edward Sharpe & The Magnetic Zeros", reason: "Finding home in someone's heart" },
                { title: "Sweet Disposition", artist: "The Temper Trap", reason: "Euphoric indie anthem of moments that matter" },
                { title: "Always Remember Us This Way", artist: "Lady Gaga", reason: "Modern indie ballad about preserving love's memory" }
            ],
            energetic: [
                { title: "Electric Feel", artist: "MGMT", reason: "Electrifying indie dance track" },
                { title: "Tongue Tied", artist: "Grouplove", reason: "Indie pop burst of youthful celebration" },
                { title: "Float On", artist: "Modest Mouse", reason: "Upbeat anthem about enduring life's challenges" },
                { title: "Animal", artist: "Miike Snow", reason: "Energetic indie electronic track with a beat" },
                { title: "My Type", artist: "Saint Motel", reason: "Brass-heavy indie pop that demands movement" }
            ]
        }
    };
    
    // Era-specific song additions (limited entries for brevity)
    const eraSongs = {
        "60s": [
            { title: "Can't Help Falling in Love", artist: "Elvis Presley", genre: "pop", mood: "romantic" },
            { title: "My Girl", artist: "The Temptations", genre: "r&b", mood: "joyful" },
            { title: "God Only Knows", artist: "The Beach Boys", genre: "pop", mood: "romantic" }
        ],
        "70s": [
            { title: "Your Song", artist: "Elton John", genre: "pop", mood: "romantic" },
            { title: "Let's Stay Together", artist: "Al Green", genre: "r&b", mood: "romantic" },
            { title: "September", artist: "Earth, Wind & Fire", genre: "r&b", mood: "energetic" }
        ],
        "80s": [
            { title: "In Your Eyes", artist: "Peter Gabriel", genre: "pop", mood: "romantic" },
            { title: "Time After Time", artist: "Cyndi Lauper", genre: "pop", mood: "romantic" },
            { title: "Don't Stop Believin'", artist: "Journey", genre: "rock", mood: "energetic" }
        ],
        "90s": [
            { title: "I Don't Want to Miss a Thing", artist: "Aerosmith", genre: "rock", mood: "romantic" },
            { title: "Wonderwall", artist: "Oasis", genre: "rock", mood: "joyful" },
            { title: "All I Want Is You", artist: "U2", genre: "rock", mood: "romantic" }
        ],
        "00s": [
            { title: "You're Beautiful", artist: "James Blunt", genre: "pop", mood: "romantic" },
            { title: "Yellow", artist: "Coldplay", genre: "rock", mood: "romantic" },
            { title: "Hey Ya!", artist: "OutKast", genre: "pop", mood: "energetic" }
        ],
        "10s": [
            { title: "All of Me", artist: "John Legend", genre: "r&b", mood: "romantic" },
            { title: "Thinking Out Loud", artist: "Ed Sheeran", genre: "pop", mood: "romantic" },
            { title: "Marry You", artist: "Bruno Mars", genre: "pop", mood: "joyful" }
        ],
        "current": [
            { title: "Perfect", artist: "Ed Sheeran", genre: "pop", mood: "romantic" },
            { title: "Die With A Smile", artist: "Lady Gaga & Bruno Mars", genre: "pop", mood: "romantic" },
            { title: "Lover", artist: "Taylor Swift", genre: "pop", mood: "romantic" }
        ]
    };
    
    // Context-specific song sets
    const momentSongs = {
        "ceremony": [
            { title: "Canon in D", artist: "Pachelbel", genre: "classical", mood: "romantic" },
            { title: "A Thousand Years", artist: "Christina Perri", genre: "pop", mood: "romantic" },
            { title: "The Wedding Song", artist: "Kenny G", genre: "jazz", mood: "romantic" }
        ],
        "reception": [
            { title: "Sugar", artist: "Maroon 5", genre: "pop", mood: "joyful" },
            { title: "Signed, Sealed, Delivered", artist: "Stevie Wonder", genre: "r&b", mood: "joyful" },
            { title: "Celebration", artist: "Kool & The Gang", genre: "r&b", mood: "energetic" }
        ],
        "first-dance": [
            { title: "At Last", artist: "Etta James", genre: "jazz", mood: "romantic" },
            { title: "Thinking Out Loud", artist: "Ed Sheeran", genre: "pop", mood: "romantic" },
            { title: "Can't Help Falling in Love", artist: "Elvis Presley", genre: "pop", mood: "romantic" }
        ],
        "dinner": [
            { title: "The Way You Look Tonight", artist: "Frank Sinatra", genre: "jazz", mood: "romantic" },
            { title: "L-O-V-E", artist: "Nat King Cole", genre: "jazz", mood: "joyful" },
            { title: "What A Wonderful World", artist: "Louis Armstrong", genre: "jazz", mood: "romantic" }
        ],
        "party": [
            { title: "Uptown Funk", artist: "Mark Ronson ft. Bruno Mars", genre: "pop", mood: "energetic" },
            { title: "I Wanna Dance With Somebody", artist: "Whitney Houston", genre: "pop", mood: "energetic" },
            { title: "Don't Stop Me Now", artist: "Queen", genre: "rock", mood: "energetic" }
        ],
        "romantic": [
            { title: "All of Me", artist: "John Legend", genre: "r&b", mood: "romantic" },
            { title: "Make You Feel My Love", artist: "Adele", genre: "pop", mood: "romantic" },
            { title: "Endless Love", artist: "Luther Vandross & Mariah Carey", genre: "r&b", mood: "romantic" }
        ]
    };
    
    // Vietnamese songs for Vietnamese playlist
    const vietnameseSongs = {
        romantic: [
            { title: "Ánh Trăng Nói Hộ Lòng Tôi", artist: "Đặng Lệ Quân", reason: "Bài hát kinh điển về tình yêu đẹp như ánh trăng" },
            { title: "Đêm Tình Nhân", artist: "Quang Dũng", reason: "Lời ca lãng mạn như một lời thì thầm tình yêu" },
            { title: "Tình Nồng", artist: "Bằng Kiều", reason: "Nồng nàn và sâu lắng về tình yêu chân thành" },
            { title: "Ngày Xưa Anh Nói", artist: "Phan Mạnh Quỳnh", reason: "Chuyện tình nhẹ nhàng với lời ca chân thành" },
            { title: "Đừng Hỏi Em", artist: "Mỹ Tâm", reason: "Tình cảm sâu nặng không thể diễn tả bằng lời" }
        ],
        joyful: [
            { title: "Đám Cưới Tình Yêu", artist: "Trung Quân Idol", reason: "Vui tươi, ngọt ngào dành cho ngày trọng đại" },
            { title: "Sau Tất Cả", artist: "ERIK", reason: "Niềm vui khi tìm thấy nhau sau bao thử thách" },
            { title: "Ngày Cưới", artist: "Hồ Quang Hiếu", reason: "Không khí rộn ràng của ngày trọng đại" },
            { title: "Giữ Em Đi", artist: "Thùy Chi", reason: "Niềm vui khi tìm được mảnh ghép hoàn hảo của cuộc đời" },
            { title: "Mình Cưới Nhau Đi", artist: "Huỳnh James & Pjnboys", reason: "Vui nhộn và trẻ trung cho không khí lễ cưới" }
        ],
        energetic: [
            { title: "Vì Yêu Cứ Đâm Đầu", artist: "MIN", reason: "Sôi động và tràn đầy năng lượng về tình yêu" },
            { title: "Để Mị Nói Cho Mà Nghe", artist: "Hoàng Thùy Linh", reason: "Sức sống mạnh mẽ với âm hưởng dân gian hiện đại" },
            { title: "Hôn Anh", artist: "MIN", reason: "Giai điệu vui tươi, sôi động cho bầu không khí lễ cưới" },
            { title: "Người Hãy Quên Em Đi", artist: "Mỹ Tâm", reason: "Tiết tấu nhanh và đầy năng lượng" },
            { title: "Ghen", artist: "ERIK & MIN", reason: "Bài hát sôi động với giai điệu bắt tai" }
        ]
    };
    
    /**
     * Generate a playlist based on user preferences
     */
    function generatePlaylist(preferences) {
        const playlist = [];
        const selectedGenres = preferences.genres;
        const mood = preferences.mood;
        const selectedEras = preferences.eras;
        const moment = preferences.moment;
        
        // Step 1: Add songs from selected genres based on mood
        selectedGenres.forEach(genre => {
            if (weddingSongs[genre] && weddingSongs[genre][mood]) {
                // Add 2 songs from each selected genre
                const genreSongs = weddingSongs[genre][mood].slice(0, 2);
                playlist.push(...genreSongs);
            }
        });
        
        // Step 2: Add era-specific songs if selected
        selectedEras.forEach(era => {
            // Find songs from the selected era that match user's genres and mood
            const matchingEraSongs = eraSongs[era].filter(song => 
                selectedGenres.includes(song.genre) && song.mood === mood
            );
            
            // Add up to 1 song from each era
            if (matchingEraSongs.length > 0) {
                playlist.push(matchingEraSongs[0]);
            }
        });
        
        // Step 3: Add songs specific to the selected wedding moment
        if (momentSongs[moment]) {
            // Find moment songs that match user's genres and mood if possible
            const matchingMomentSongs = momentSongs[moment].filter(song => 
                selectedGenres.includes(song.genre) && song.mood === mood
            );
            
            // Add matching songs or default to the first song for that moment
            if (matchingMomentSongs.length > 0) {
                playlist.push(matchingMomentSongs[0]);
            } else {
                playlist.push(momentSongs[moment][0]);
            }
        }
        
        // Step 4: Add Vietnamese songs if requested
        if (preferences.includeVietnamese) {
            // Add 2 Vietnamese songs based on mood
            playlist.push(...vietnameseSongs[mood].slice(0, 2));
        }
        
        // Step 5: Add any special requested songs
        if (preferences.specialSongs && preferences.specialSongs.trim() !== '') {
            const specialSong = {
                title: "Your Special Request",
                artist: "Custom Selection",
                reason: "This song was personally requested by you"
            };
            playlist.push(specialSong);
        }
        
        // Step 6: Deduplicate playlist (in case of overlapping selections)
        const uniquePlaylist = [];
        const titles = new Set();
        
        playlist.forEach(song => {
            if (!titles.has(song.title)) {
                uniquePlaylist.push(song);
                titles.add(song.title);
            }
        });
        
        // Step 7: Limit to 10 songs
        return uniquePlaylist.slice(0, 10);
    }
    
    /**
     * Create a playlist item HTML element
     */
    function createPlaylistItem(song, index) {
        const item = document.createElement('div');
        item.className = 'playlist-item';
        
        item.innerHTML = `
            <div class="playlist-number">${index + 1}</div>
            <div class="playlist-info">
                <div class="song-title">${song.title}</div>
                <div class="song-artist">${song.artist}</div>
                <div class="song-reason">${song.reason}</div>
            </div>
            <div class="playlist-actions">
                <button class="btn-play" title="Preview on YouTube">
                    <i class="fas fa-play"></i>
                </button>
                <button class="btn-add" title="Add to Spotify">
                    <i class="fas fa-plus"></i>
                </button>
            </div>
        `;
        
        // Add YouTube search functionality to play button
        const playButton = item.querySelector('.btn-play');
        playButton.addEventListener('click', () => {
            const searchTerm = `${song.title} ${song.artist} official`;
            const searchUrl = `https://www.youtube.com/results?search_query=${encodeURIComponent(searchTerm)}`;
            window.open(searchUrl, '_blank');
        });
        
        // Add Spotify search functionality to add button
        const addButton = item.querySelector('.btn-add');
        addButton.addEventListener('click', () => {
            const searchTerm = `${song.title} ${song.artist}`;
            const searchUrl = `https://open.spotify.com/search/${encodeURIComponent(searchTerm)}`;
            window.open(searchUrl, '_blank');
        });
        
        return item;
    }
    
    /**
     * Handle form submission
     */
    if (soundtrackForm) {
        soundtrackForm.addEventListener('submit', function(e) {
            e.preventDefault();
            
            // Show loading state
            soundtrackLoading.classList.add('active');
            soundtrackResults.classList.remove('active');
            
            // Get form values
            const guestName = document.getElementById('guest-name').value;
            const moment = document.getElementById('wedding-moment').value;
            const moodValue = document.getElementById('mood-slider').value;
            
            // Map mood slider value to mood categories
            let mood;
            switch (moodValue) {
                case "1": mood = "romantic"; break;
                case "2": mood = "joyful"; break;
                case "3": mood = "energetic"; break;
                default: mood = "joyful";
            }
            
            // Get selected genres (limit to 3)
            const genreCheckboxes = document.querySelectorAll('input[name="genre"]:checked');
            const genres = [];
            genreCheckboxes.forEach((checkbox, index) => {
                if (index < 3) {
                    genres.push(checkbox.value);
                }
            });
            
            // If no genres selected, default to pop
            if (genres.length === 0) {
                genres.push('pop');
            }
            
            // Get selected eras
            const eraCheckboxes = document.querySelectorAll('input[name="era"]:checked');
            const eras = [];
            eraCheckboxes.forEach(checkbox => {
                eras.push(checkbox.value);
            });
            
            // Get special song requests
            const specialSongs = document.getElementById('special-songs').value;
            
            // Check current language to determine if Vietnamese songs should be included
            const includeVietnamese = document.documentElement.lang === 'vi';
            
            // Create preferences object
            const preferences = {
                guestName,
                genres,
                mood,
                moment,
                eras,
                specialSongs,
                includeVietnamese
            };
            
            // Generate playlist (with a small delay to show loading animation)
            setTimeout(() => {
                const playlist = generatePlaylist(preferences);
                
                // Clear previous results
                playlistContainer.innerHTML = '';
                
                // Add each song to the playlist container
                playlist.forEach((song, index) => {
                    const playlistItem = createPlaylistItem(song, index);
                    playlistContainer.appendChild(playlistItem);
                });
                
                // Hide loading state and show results
                soundtrackLoading.classList.remove('active');
                soundtrackResults.classList.add('active');
                
                // Customize result title based on guest name
                const resultTitle = document.querySelector('.result-title');
                if (guestName && guestName.trim() !== '') {
                    resultTitle.textContent = `${guestName}'s Wedding Playlist`;
                }
                
                // Scroll to results
                soundtrackResults.scrollIntoView({ behavior: 'smooth' });
                
            }, 1500); // Simulate processing time
        });
    }
    
    /**
     * Save playlist functionality
     */
    if (saveButton) {
        saveButton.addEventListener('click', function() {
            // Get playlist title
            const playlistTitle = document.querySelector('.result-title').textContent;
            
            // Get all playlist items
            const playlistItems = playlistContainer.querySelectorAll('.playlist-item');
            
            // Create text content for the playlist
            let playlistText = `${playlistTitle}\n`;
            playlistText += `Generated on ${new Date().toLocaleDateString()}\n\n`;
            
            // Add each song to the text
            playlistItems.forEach((item, index) => {
                const number = index + 1;
                const title = item.querySelector('.song-title').textContent;
                const artist = item.querySelector('.song-artist').textContent;
                const reason = item.querySelector('.song-reason').textContent;
                
                playlistText += `${number}. "${title}" by ${artist}\n`;
                playlistText += `   Why: ${reason}\n\n`;
            });
            
            // Create a hidden link to download the text file
            const element = document.createElement('a');
            element.setAttribute('href', 'data:text/plain;charset=utf-8,' + encodeURIComponent(playlistText));
            element.setAttribute('download', `${playlistTitle.replace(/\s+/g, '_')}.txt`);
            element.style.display = 'none';
            
            // Add to the document, click it, and remove it
            document.body.appendChild(element);
            element.click();
            document.body.removeChild(element);
        });
    }
    
    /**
     * Limit genre selection to 3 checkboxes
     */
    const genreCheckboxes = document.querySelectorAll('input[name="genre"]');
    genreCheckboxes.forEach(checkbox => {
        checkbox.addEventListener('change', function() {
            const checked = document.querySelectorAll('input[name="genre"]:checked');
            
            if (checked.length > 3) {
                this.checked = false;
                alert('Please select up to 3 genres only.');
            }
        });
    });
    
    /**
     * Create floating musical notes animation
     */
    function createFloatingNotes() {
        const notesContainer = document.querySelector('.musical-notes-container');
        if (!notesContainer) return;
        
        const notes = ['♪', '♫', '♩', '♬'];
        
        // Create 20 random notes
        for (let i = 0; i < 15; i++) {
            const noteElement = document.createElement('div');
            noteElement.className = 'musical-note';
            noteElement.textContent = notes[Math.floor(Math.random() * notes.length)];
            
            // Random position and animation
            noteElement.style.left = `${Math.random() * 100}%`;
            noteElement.style.top = `${Math.random() * 100}%`;
            noteElement.style.animationDelay = `${Math.random() * 15}s`;
            noteElement.style.fontSize = `${Math.random() * 1.5 + 1}rem`;
            noteElement.style.opacity = '0';
            
            notesContainer.appendChild(noteElement);
        }
    }
    
    createFloatingNotes();
});