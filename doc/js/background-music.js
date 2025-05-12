/**
 * Background Music Player
 * Adds background music functionality to the wedding website
 * Auto-plays the music file
 */
document.addEventListener('DOMContentLoaded', function() {
    console.log("Music script loaded");
    
    // DOM elements
    const audio = document.getElementById('background-music');
    const toggleButton = document.getElementById('music-toggle');
    const playIcon = document.getElementById('play-icon');
    const pauseIcon = document.getElementById('pause-icon');
    
    console.log("Audio element:", audio);
    console.log("Toggle button:", toggleButton);
    
    let isPlaying = false;
    let hasStarted = false;
    
    // Tự động phát nhạc khi trang tải xong
    function autoplayMusic() {
        if (audio) {
            // Nhiều trình duyệt chặn autoplay, nhưng chúng ta cố gắng phát
            audio.play().then(() => {
                console.log("Autoplay successful");
                isPlaying = true;
                hasStarted = true;
                if (playIcon && pauseIcon && toggleButton) {
                    playIcon.style.display = "none";
                    pauseIcon.style.display = "block";
                    toggleButton.classList.add("vibrating");
                }
            }).catch((e) => {
                console.log("Trình duyệt chặn autoplay:", e);
                // Sẽ cần click đầu tiên để phát nhạc
            });
        }
    }
    
    // Gọi hàm tự động phát
    autoplayMusic();
    
    // Khi click vào trang web lần đầu, tự động phát nhạc nếu autoplay bị chặn
    function startMusicOnFirstClick() {
        if (!hasStarted && audio) {
            console.log("First click detected, starting music");
            
            audio.play().then(() => {
                console.log("Music started playing successfully");
                isPlaying = true;
                hasStarted = true;
                if (playIcon && pauseIcon && toggleButton) {
                    playIcon.style.display = "none";
                    pauseIcon.style.display = "block";
                    toggleButton.classList.add("vibrating");
                }
            }).catch((e) => {
                console.log("Lỗi phát nhạc: ", e);
            });
        }
    }
    
    document.addEventListener("click", function(event) {
        startMusicOnFirstClick();
        // Chỉ thực hiện một lần
        document.removeEventListener("click", arguments.callee);
    });
    
    // Nút để bật/tắt nhạc khi click vào button
    if (toggleButton) {
        toggleButton.addEventListener("click", function(event) {
            console.log("Music toggle button clicked");
            event.stopPropagation(); // không lan sự kiện click
            
            if (!audio) {
                console.error("Audio element is not available");
                return;
            }
            
            if (isPlaying) {
                console.log("Pausing music");
                audio.pause();
                isPlaying = false;
                playIcon.style.display = "block";
                pauseIcon.style.display = "none";
                toggleButton.classList.remove("vibrating");
            } else {
                console.log("Starting music");
                audio.play().then(() => {
                    console.log("Music started successfully");
                    isPlaying = true;
                    playIcon.style.display = "none";
                    pauseIcon.style.display = "block";
                    toggleButton.classList.add("vibrating");
                }).catch(e => {
                    console.error("Error playing audio:", e);
                });
            }
        });
    } else {
        console.error("Music toggle button not found in the DOM");
    }
    
    // Nhận biết khi bài hát kết thúc để phát lại (loop)
    if (audio) {
        audio.addEventListener('ended', function() {
            console.log("Audio ended, replaying due to loop attribute");
            // Loop attribute should handle this, but just in case
            audio.currentTime = 0;
            audio.play().catch(e => console.error("Error replaying audio:", e));
        });
    }
});