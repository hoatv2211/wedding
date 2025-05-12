// QR Modal Functionality
document.addEventListener("DOMContentLoaded", function () {
    // Create modal HTML and append to body
    function createQRModal() {
        const modalHTML = `
            <div class="qr-modal-overlay" id="qrModalOverlay">
                <div class="qr-modal">
                    <button class="modal-close" id="closeQrModal">&times;</button>
                    <img src="images/gallery9.jpg" alt="Wedding Logo" class="modal-logo" style="border-radius: 50%;">
                    <h3 class="modal-title" data-translate="wedding-gift">Wedding Gift</h3>
                    <p class="modal-description" data-translate="gift-thanks">Thank you for your kind wishes and generous gifts ♥</p>
                    
                    <div class="qr-code-container">
                        <div class="qr-code-box">
                            <h4 class="qr-code-title" data-translate="gift-to-groom">GIFT TO GROOM</h4>
                            <div class="qr-code-content">
                                <img src="images/qr-groom-simple.png" alt="Groom QR Code" class="qr-code-image">
                                <p class="qr-bank-info">
                                    <span class="qr-bank-name">TPBANK</span><br>
                                    <span class="qr-account-number">0361 7283 333</span><br>
                                    TRAN VAN HOA
                                </p>
                                <div class="qr-buttons">
                                    <button class="qr-button" id="downloadGroomQR" data-translate="download-qr">Download QR</button>
                                    <button class="qr-button" id="copyGroomSTK" data-translate="copy-account">Copy Account</button>
                                </div>
                            </div>
                        </div>
                        
                        <div class="qr-code-box">
                            <h4 class="qr-code-title" data-translate="gift-to-bride">GIFT TO BRIDE</h4>
                            <div class="qr-code-content">
                                <img src="images/qr-bride-simple.png" alt="Bride QR Code" class="qr-code-image">
                                <p class="qr-bank-info">
                                    <span class="qr-bank-name">ACB</span><br>
                                    <span class="qr-account-number">23871937</span><br>
                                    NGUYEN KIM NGAN
                                </p>
                                <div class="qr-buttons">
                                    <button class="qr-button" id="downloadBrideQR" data-translate="download-qr">Download QR</button>
                                    <button class="qr-button" id="copyBrideSTK" data-translate="copy-account">Copy Account</button>
                                </div>
                            </div>
                        </div>
                    </div>
                    
                    <div class="qr-links">
                        <a href="#" class="qr-link" id="sendPhotoGroom" data-translate="send-gift-groom">» Send gift confirmation to groom</a>
                        <a href="#" class="qr-link" id="sendPhotoBride" data-translate="send-gift-bride">» Send gift confirmation to bride</a>
                    </div>
                </div>
            </div>
        `;

        // Append modal to the body
        document.body.insertAdjacentHTML("beforeend", modalHTML);

        // Setup event handlers
        setupModalEventHandlers();
    }

    // Setup event handlers for the modal
    function setupModalEventHandlers() {
        const modal = document.getElementById("qrModalOverlay");
        const closeButton = document.getElementById("closeQrModal");

        // Close modal when clicking the close button
        closeButton.addEventListener("click", function () {
            closeQRModal();
        });

        // Close modal when clicking outside the modal content
        modal.addEventListener("click", function (event) {
            if (event.target === modal) {
                closeQRModal();
            }
        });

        // Prevent clicks inside modal from closing it
        const modalContent = modal.querySelector(".qr-modal");
        modalContent.addEventListener("click", function (event) {
            event.stopPropagation();
        });

        // Copy account numbers to clipboard
        document
            .getElementById("copyGroomSTK")
            .addEventListener("click", function () {
                copyToClipboard("0361 7283 333");
                alert("Groom account number copied!");
            });

        document
            .getElementById("copyBrideSTK")
            .addEventListener("click", function () {
                copyToClipboard("23871937");
                alert("Bride account number copied!");
            });

        // Download QR code images
        document
            .getElementById("downloadGroomQR")
            .addEventListener("click", function () {
                downloadImage("images/qr-groom-simple.png", "QR_Groom.png");
            });

        document
            .getElementById("downloadBrideQR")
            .addEventListener("click", function () {
                downloadImage("images/qr-bride-simple.png", "QR_Bride.png");
            });

        // Handle send photo links
        document
            .getElementById("sendPhotoGroom")
            .addEventListener("click", function (e) {
                e.preventDefault();
                alert("Scan QR code to send gift confirmation to groom!");
            });

        document
            .getElementById("sendPhotoBride")
            .addEventListener("click", function (e) {
                e.preventDefault();
                alert("Scan QR code to send gift confirmation to bride!");
            });
    }

    // Open QR modal
    function openQRModal() {
        const modal = document.getElementById("qrModalOverlay");
        modal.classList.add("active");
        // Prevent body scrolling
        document.body.style.overflow = "hidden";
    }

    // Close QR modal
    function closeQRModal() {
        const modal = document.getElementById("qrModalOverlay");
        modal.classList.remove("active");
        // Restore body scrolling
        document.body.style.overflow = "";
    }

    // Utility function to copy text to clipboard
    function copyToClipboard(text) {
        const textarea = document.createElement("textarea");
        textarea.value = text;
        textarea.style.position = "fixed"; // Prevent scrolling to bottom
        document.body.appendChild(textarea);
        textarea.select();
        document.execCommand("copy");
        document.body.removeChild(textarea);
    }

    // Utility function to download an image
    function downloadImage(imageSrc, filename) {
        const link = document.createElement("a");
        link.href = imageSrc;
        link.download = filename;
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
    }

    // Setup modal link
    function setupQRLink() {
        // Find all elements that could be the gift registry link
        const giftLinks = document.querySelectorAll('a[href="#gallery"]');

        giftLinks.forEach((link) => {
            if (link.textContent.includes("Wedding Gift") || link.textContent.includes("Quà Cưới")) {
                // This is the wedding gift link
                link.addEventListener("click", function (event) {
                    event.preventDefault();
                    openQRModal();
                });
            }
        });
        
        // Setup gift box button
        const giftBoxButton = document.getElementById('giftBoxButton');
        if (giftBoxButton) {
            giftBoxButton.addEventListener('click', function(event) {
                event.preventDefault();
                openQRModal();
            });
        }
    }

    // Initialize
    createQRModal();
    setupQRLink();
});
