// Language translations
const translations = {
    en: {
        // Navbar
        home: "Home",
        couple: "Our Story",
        event: "Details",
        gallery: "Gallery",
        rsvp: "RSVP",

        // Wedding Details
        "details-title": "Wedding Details",
        "details-description":
            "We're excited to celebrate our special day with you. Here's everything you need to know.",
        "ceremony-title": "Bride's Family Reception",
        "ceremony-date": "Sunday, May 25, 2025",
        "ceremony-time": "10:30 AM",
        "ceremony-location": "Cau Am Hotel",
        "ceremony-address1": "9 Chu Van An Street",
        "ceremony-address2": "Ha Dong - Ha Noi",
        "reception-title": "Groom's Family Reception",
        "reception-date": "Sunday, June 1, 2025",
        "reception-time": "09:30 AM",
        "reception-location": "Groom's Family Home",
        "reception-address1": "Village 7, Chat Binh Commune",
        "reception-address2": "Kim Son - Ninh Binh",
        "view-map": "View Map",

        // Hero Section
        "save-the-date": "Save the Date",
        "wedding-date": "25/05/2025",
        "rsvp-button": "RSVP",
        "event-info-button": "Event Information",

        // Countdown
        "countdown-title": "Countdown to Our Special Day",
        days: "Days",
        hours: "Hours",
        minutes: "Minutes",
        seconds: "Seconds",

        // Our Story
        "our-story-title": "Our Love Story",
        "our-story-description":
            "We Cordially Invite You and Your Family to Our Wedding Celebration",
        "groom-title": "Trần Hòa (The Groom)",
        "groom-description":
            "Steady and sincere, Trần Hòa is the kind of man who loves with quiet strength. Behind every calm gaze is a heart full of devotion  to the woman he chose to walk beside for life. In her presence, he found not only love, but home.",
        "bride-title": "Kim Ngân (The Bride)",
        "bride-description":
            "She’s a full-time introvert, a part-time dreamer.Quiet mornings, cozy corners, and meows in her heart — She once wished to be a cat, soft and silent,Until love called her name, and now she purrs only for him.",

        // Timeline
        "first-met-title": "First Date",
        "first-met-date": "June 11, 2023",
        "first-met-description":
            "A cozy café called Wooden House Coffee. From the start, everything felt warm and easy, like finding something familiar yet new.",

        "love-confession-title": "Love Confession",
        "love-confession-date": "October 20, 2023",
        "love-confession-description":
            'At "Tui Mo To", he confessed his love. Our journey was gentle, steady—never shaken by hardships, always moving forward together.',

        "proposal-title": "The Proposal",
        "proposal-date": "April 13, 2025",
        "proposal-description":
            "Under a sky full of stars at astronomy park, he asked me the most beautiful question. A love written in constellations, a promise under the universe — We chose forever.",

        "engagement-title": "Official Engagement",
        "engagement-date": "April 16, 2025",
        "engagement-description":
            "Our families came together to celebrate our engagement and blessed our upcoming union with their love and support.",

        "planning-title": "Wedding Planning",
        "planning-date": "March 1, 2025",
        "planning-description":
            "We began planning our special day together, creating a celebration that would reflect our journey and love for each other.",

        // Quote
        "quote-text": "A Love Written in the Stars",

        // Schedule
        "schedule-title": "Schedule of Events",
        "day-title-1": "May 25, 2025",
        "day-title-2": "June 1, 2025",
        "schedule-vu-quy-title": "Engagement Ceremony",
        "schedule-vu-quy-details": "At bride's family home",
        "schedule-nha-gai-title": "Bride's Family Reception",
        "schedule-nha-gai-details":
            "Cau Am Hotel - At 9 Chu Van An St - Ha Dong",
        "schedule-xin-dau-title": "Bride Procession",
        "schedule-xin-dau-details": "80 Thanh Binh St - Mo Lao, Ha Noi",
        "schedule-don-dau-title": "Wedding Procession",
        "schedule-don-dau-details": "80 Thanh Binh St - Mo Lao, Ha Noi",
        "schedule-nha-trai-title": "Groom's Family Reception",
        "schedule-nha-trai-details": "Village 7, Chat Binh, Kim Son",

        // Gallery
        "gallery-title": "Our Gallery",
        "gallery-description":
            "Moments of love captured through our journey together.",

        // RSVP
        "rsvp-title": "RSVP",
        "rsvp-description":
            "Please confirm your attendance for Tran Hoa & Kim Ngan's wedding. This will help us prepare everything perfectly for your arrival. Thank you!",
        "first-name": "First Name",
        "last-name": "Full Name",
        email: "Email Address",
        phone: "Phone Number",
        "attending-question": "Will you be attending?",
        "attending-yes": "Yes, I will attend",
        "attending-no": "Sorry, I can't make it",
        guests: "Number of Guests",
        "guest-1": "I'm coming alone",
        "guest-2": "I'm coming with 1 person",
        "guest-3": "I'm coming with 2 people",
        "guest-4": "I'm coming with 3 people",
        dietary: "Dietary Restrictions",
        "dietary-placeholder":
            "Please list any dietary restrictions or allergies",
        message: "Message to the Couple (Optional)",
        "message-placeholder": "Message for the bride and groom",
        "send-rsvp": "Confirm",
        "view-invitation": "<< View Invitation",
        "wedding-gift": "Wedding Gift >>",

        // Gift Registry
        "registry-title": "Gift Registry",
        "registry-description":
            "Your presence at our wedding is the greatest gift. However, if you wish to honor us with a gift, we've registered at the following places.",
        "registry1-title": "Macy's",
        "registry1-description":
            "Traditional department store with a wide selection of home goods.",
        "registry2-title": "Crate & Barrel",
        "registry2-description":
            "Contemporary furnishings and decor for our new home.",
        "registry3-title": "Honeymoon Fund",
        "registry3-description":
            "Help us create memories on our dream honeymoon to Bali.",
        "view-registry": "View Registry",
        contribute: "Contribute",

        // Wedding Gift Modal
        "wedding-gift": "Wedding Gift",
        "gift-thanks": "Thank you for your kind wishes and generous gifts ♥",
        "gift-to-groom": "GIFT TO GROOM",
        "gift-to-bride": "GIFT TO BRIDE",
        "download-qr": "Download QR",
        "copy-account": "Copy Account",
        "send-gift-groom": "» Send gift confirmation to groom",
        "send-gift-bride": "» Send gift confirmation to bride",

        // Gift Box
        "gift-box-title": "Wedding Gift Box",
        "gift-box-description":
            "Thank you for all the love and warmth you've shown to Hoa & Ngan",

        // Footer
        "footer-date": "May 25, 2025 • Thanh Bình, Hà Đông",
        "footer-message":
            "Thank you for being an important part of our special day!",
        "thank-you-title": "Thank You",
        "thank-you-text":
            "We are deeply grateful for your presence at our wedding ceremony. Your attendance is an honor and a blessing for our families. Thank you sincerely!",
        "footer-quote":
            "Life is a journey, but only those who know where to stop will find true happiness.",
    },
    vi: {
        // Navbar
        home: "Trang Chủ",
        couple: "Câu Chuyện",
        event: "Sự Kiện",
        gallery: "Bộ Sưu Tập",
        rsvp: "Xác Nhận",

        // Wedding Details
        "details-title": "Chi Tiết Đám Cưới",
        "details-description":
            "Chúng tôi rất vui mừng được tổ chức ngày đặc biệt với sự hiện diện của bạn. Dưới đây là tất cả thông tin bạn cần biết.",
        "ceremony-title": "Tiệc Nhà Gái",
        "ceremony-date": "Chủ Nhật, 25 Tháng 5, 2025",
        "ceremony-time": "10:30 Sáng",
        "ceremony-location": "Khách Sạn Cầu Am",
        "ceremony-address1": "9 Đường Chu Văn An",
        "ceremony-address2": "Hà Đông - Hà Nội",
        "reception-title": "Tiệc Nhà Trai",
        "reception-date": "Chủ Nhật, 1 Tháng 6, 2025",
        "reception-time": "09:30 Sáng",
        "reception-location": "Nhà Trai",
        "reception-address1": "Xóm 7, Xã Chất Bình",
        "reception-address2": "Kim Sơn - Ninh Bình",
        "view-map": "Xem Bản Đồ",

        // Hero Section
        "save-the-date": "Save the date",
        "wedding-date": "25/05/2025",
        "rsvp-button": "Xác Nhận Tham Dự",
        "event-info-button": "Thông Tin Lễ Cưới",

        // Countdown
        "countdown-title": "Đếm Ngược Đến Ngày Đặc Biệt",
        days: "Ngày",
        hours: "Giờ",
        minutes: "Phút",
        seconds: "Giây",

        // Our Story
        "our-story-title": "Câu Chuyện Tình Yêu",
        "our-story-description":
            "Trân trọng kính mời quý vị và gia đình đến dự lễ cưới của chúng tôi",
        "groom-title": "Trần Hòa (Chú Rể)",
        "groom-description":
            "Steady and sincere, Trần Hòa is the kind of man who loves with quiet strength. Behind every calm gaze is a heart full of devotion to the woman he chose to walk beside for life. In her presence, he found not only love, but home.",
        "bride-title": "Kim Ngân (Cô Dâu)",
        "bride-description":
            "She's a full-time introvert, a part-time dreamer. Quiet mornings, cozy corners, and meows in her heart — She once wished to be a cat, soft and silent, until love called her name, and now she purrs only for him.",

        // Timeline
        "first-met-title": "Buổi Hẹn Đầu Tiên",
        "first-met-date": "11 Tháng 6, 2023",
        "first-met-description":
            "Tại một quán cà phê ấm cúng tên Wooden House Coffee. Ngay từ đầu, mọi thứ đều cảm thấy ấm áp và thoải mái, như tìm thấy điều gì đó vừa quen thuộc vừa mới mẻ.",

        "love-confession-title": "Tỏ Tình",
        "love-confession-date": "20 Tháng 10, 2023",
        "love-confession-description":
            'Tại "Tui Mơ To", anh đã bày tỏ tình cảm. Hành trình của chúng tôi nhẹ nhàng, vững vàng—không bao giờ bị lung lay bởi khó khăn, luôn tiến về phía trước cùng nhau.',

        "proposal-title": "Cầu Hôn",
        "proposal-date": "13 Tháng 4, 2025",
        "proposal-description":
            "Dưới bầu trời đầy sao tại công viên thiên văn, anh đã hỏi tôi câu hỏi đẹp nhất. Tình yêu được viết trong các chòm sao, một lời hứa dưới vũ trụ — Chúng tôi đã chọn mãi mãi.",

        "engagement-title": "Đính Hôn Chính Thức",
        "engagement-date": "16 Tháng 4, 2025",
        "engagement-description":
            "Gia đình hai bên đã tụ họp để chúc mừng lễ đính hôn và chúc phúc cho cuộc hôn nhân sắp tới với tình yêu và sự ủng hộ của họ.",

        "planning-title": "Lên Kế Hoạch Đám Cưới",
        "planning-date": "1 Tháng 3, 2025",
        "planning-description":
            "Chúng tôi bắt đầu lên kế hoạch cho ngày đặc biệt cùng nhau, tạo ra một lễ kỷ niệm phản ánh hành trình và tình yêu của chúng tôi dành cho nhau.",

        // Quote
        "quote-text": "Tình Yêu Viết Trên Những Vì Sao",

        // Schedule
        "schedule-title": "Lịch Trình Sự Kiện",
        "day-title-1": "Ngày 25 Tháng 5, 2025",
        "day-title-2": "Ngày 1 Tháng 6, 2025",
        "schedule-vu-quy-title": "Lễ Ăn Hỏi",
        "schedule-vu-quy-details": "Tại nhà gái",
        "schedule-nha-gai-title": "Tiệc Nhà Gái",
        "schedule-nha-gai-details": "Khách sạn Cầu Am - số 9 Chu Văn An",
        "schedule-xin-dau-title": "Lễ Xin Dâu",
        "schedule-xin-dau-details": "80 đường Thanh Bình - Mộ Lao - Hà Đông",
        "schedule-don-dau-title": "Lễ Đón Dâu",
        "schedule-don-dau-details": "80 đường Thanh Bình - Mộ Lao",
        "schedule-nha-trai-title": "Tiệc Nhà Trai",
        "schedule-nha-trai-details":
            "Tại gia đình nhà trai, Xóm 7 xã Chất Bình, Kim Sơn",

        // Gallery
        "gallery-title": "Bộ Sưu Tập",
        "gallery-description":
            "Những khoảnh khắc tình yêu được ghi lại qua hành trình bên nhau.",

        // RSVP
        "rsvp-title": "Xác Nhận Tham Dự",
        "rsvp-description":
            "Vui lòng xác nhận sự tham dự của bạn cho lễ cưới của Trần Hòa & Kim Ngân. Điều này sẽ giúp chúng tôi chuẩn bị mọi thứ thật hoàn hảo cho sự xuất hiện của bạn. Cảm ơn bạn!",
        "first-name": "Tên",
        "last-name": "Họ và Tên",
        email: "Địa Chỉ Email",
        phone: "Số Điện Thoại",
        "attending-question": "Bạn sẽ tham dự chứ?",
        "attending-yes": "Tôi sẽ tham dự",
        "attending-no": "Xin lỗi, tôi không thể tham dự",
        guests: "Số Lượng Khách",
        "guest-1": "Tôi đến một mình",
        "guest-2": "Tôi đến cùng 1 người",
        "guest-3": "Tôi đến cùng 2 người",
        "guest-4": "Tôi đến cùng 3 người",
        dietary: "Yêu Cầu Ăn Uống Đặc Biệt",
        "dietary-placeholder":
            "Vui lòng cho biết nếu bạn có yêu cầu ăn uống đặc biệt hoặc dị ứng",
        message: "Lời Nhắn Cho Cặp Đôi",
        "message-placeholder": "Lời nhắn cho cô dâu và chú rể",
        "send-rsvp": "Xác Nhận",
        "view-invitation": "<< Xem Thiệp Mời",
        "wedding-gift": "Quà Cưới >>",

        // Gift Registry
        "registry-title": "Đăng Ký Quà Tặng",
        "registry-description":
            "Sự hiện diện của bạn tại đám cưới là món quà lớn nhất. Tuy nhiên, nếu bạn muốn tặng chúng tôi một món quà, chúng tôi đã đăng ký tại các nơi sau.",
        "registry1-title": "Macy's",
        "registry1-description":
            "Traditional department store with a wide selection of home goods.",
        "registry2-title": "Crate & Barrel",
        "registry2-description":
            "Contemporary furnishings and decor for our new home.",
        "registry3-title": "Honeymoon Fund",
        "registry3-description":
            "Help us create memories on our dream honeymoon to Bali.",
        "view-registry": "Xem Đăng Ký",
        contribute: "Đóng Góp",

        // Wedding Gift Modal
        "wedding-gift": "Wedding Gift",
        "gift-thanks": "Thank you for your warm wishes and generous gift ♥",
        "gift-to-groom": "GIFT TO GROOM",
        "gift-to-bride": "GIFT TO BRIDE",
        "download-qr": "Download QR Code",
        "copy-account": "Copy Account Number",
        "send-gift-groom": "» Send gift confirmation to groom",
        "send-gift-bride": "» Send gift confirmation to bride",

        // Gift Box
        "gift-box-title": "Hộp mừng cưới",
        "gift-box-description":
            "Cảm ơn tất cả các tình cảm mà mọi người đã dành cho Hòa & Ngân",

        // Footer
        "footer-date": "25 Tháng 5, 2025 • Thanh Bình, Hà Đông",
        "footer-message":
            "Cảm ơn bạn đã là một phần quan trọng trong ngày đặc biệt của chúng tôi!",
        "thank-you-title": "Lời Cảm Ơn",
        "thank-you-text":
            "Chúng mình trân trọng cảm ơn sự hiện diện của quý vị và các bạn đã đến tham dự buổi lễ thành hôn. Sự hiện diện của quý vị và các bạn là niềm vinh hạnh và hạnh phúc của gia đình chúng mình. Xin chân thành cảm ơn!",
        "footer-quote":
            "Cuộc đời là những chuyến đi, nhưng chỉ những ai biết dừng lại đúng nơi, đúng chỗ mới tìm được hạnh phúc đích thực.",
    },
};

// Set default language
let currentLanguage = localStorage.getItem("wedding-lang") || "vi";

// Function to change the language
function changeLanguage(lang) {
    currentLanguage = lang;
    localStorage.setItem("wedding-lang", lang);
    translatePage();
    updateLanguageToggle();
}

// Function to translate the page
function translatePage() {
    document.querySelectorAll("[data-translate]").forEach((element) => {
        const key = element.getAttribute("data-translate");
        if (translations[currentLanguage][key]) {
            element.textContent = translations[currentLanguage][key];
        }
    });

    // Translate placeholders
    document
        .querySelectorAll("[data-translate-placeholder]")
        .forEach((element) => {
            const key = element.getAttribute("data-translate-placeholder");
            if (translations[currentLanguage][key]) {
                element.placeholder = translations[currentLanguage][key];
            }
        });
}

// Function to update language toggle button
function updateLanguageToggle() {
    const toggleButton = document.getElementById("language-toggle");
    if (toggleButton) {
        toggleButton.textContent = currentLanguage === "en" ? "VI" : "EN";
    }
}

// Initialize translation when DOM is loaded
document.addEventListener("DOMContentLoaded", () => {
    translatePage();
    updateLanguageToggle();

    // Add event listener to language toggle button
    const toggleButton = document.getElementById("language-toggle");
    if (toggleButton) {
        toggleButton.addEventListener("click", () => {
            const newLang = currentLanguage === "en" ? "vi" : "en";
            changeLanguage(newLang);
        });
    }
});
