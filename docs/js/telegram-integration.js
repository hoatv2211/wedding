/**
 * Telegram Bot Integration for RSVP form
 * This script handles sending RSVP submissions to a Telegram bot
 */

// Telegram Bot Token - Already configured for Wedding RSVP
let telegramBotToken = '7502679143:AAFUjFczSWy-WnZSA8A05ta0k4vamXDyxbA';
// Telegram Chat ID - Already configured to receive messages
let telegramChatId = '859267157';

document.addEventListener('DOMContentLoaded', function() {
    // Check if we have the telegram bot credentials in localStorage
    // If no token in localStorage, keep using the predefined token
    if (localStorage.getItem('telegramBotToken')) {
        telegramBotToken = localStorage.getItem('telegramBotToken');
    }
    // If no chatId in localStorage, keep using the predefined chatId
    if (localStorage.getItem('telegramChatId')) {
        telegramChatId = localStorage.getItem('telegramChatId');
    }
    
    // Setup Telegram integration for the RSVP form
    setupTelegramRSVP();
});

/**
 * Setup Telegram integration for the RSVP form
 */
function setupTelegramRSVP() {
    const rsvpForm = document.getElementById('rsvp-form');
    
    if (rsvpForm) {
        rsvpForm.addEventListener('submit', async function(e) {
            e.preventDefault();
            
            // If we don't have the telegram chat ID, prompt for it
            if (!telegramChatId) {
                promptForTelegramCredentials();
                return;
            }
            
            // Get form data
            const formData = {
                fullName: document.getElementById('fullName').value,
                phone: document.getElementById('phone').value,
                event: document.getElementById('event').value,
                guests: document.getElementById('guests').value,
                attending: document.querySelector('input[name="attending"]:checked').value === 'true' ? 'Yes' : 'No',
                message: document.getElementById('message').value || 'No message'
            };
            
            // Show loading state
            const submitButton = rsvpForm.querySelector('button[type="submit"]');
            const originalText = submitButton.textContent;
            submitButton.textContent = '⏳ Sending...';
            submitButton.disabled = true;
            
            try {
                // Send to Telegram
                const success = await sendToTelegram(formData);
                
                if (success) {
                    // Show success message
                    submitButton.textContent = '✓ Sent Successfully';
                    submitButton.className = 'success-button';
                    
                    // Reset form after delay
                    setTimeout(() => {
                        rsvpForm.reset();
                        submitButton.textContent = originalText;
                        submitButton.className = '';
                        submitButton.disabled = false;
                        
                        // Show thank you alert
                        const thankYouMessage = document.documentElement.lang === 'vi' ? 
                            'Cảm ơn bạn đã xác nhận tham dự! Chúng tôi rất mong được gặp bạn.' : 
                            'Thank you for your RSVP! We look forward to seeing you.';
                        alert(thankYouMessage);
                    }, 2000);
                } else {
                    // Show error state
                    submitButton.textContent = '✗ Failed to Send';
                    submitButton.className = 'error-button';
                    
                    setTimeout(() => {
                        submitButton.textContent = originalText;
                        submitButton.className = '';
                        submitButton.disabled = false;
                    }, 2000);
                }
            } catch (error) {
                console.error('Error sending RSVP to Telegram:', error);
                submitButton.textContent = '✗ Error';
                submitButton.className = 'error-button';
                
                setTimeout(() => {
                    submitButton.textContent = originalText;
                    submitButton.className = '';
                    submitButton.disabled = false;
                }, 2000);
            }
        });
    }
}

/**
 * Send RSVP data to Telegram bot
 */
async function sendToTelegram(formData) {
    try {
        // Format message for Telegram
        const eventType = {
            'groom': 'Tiệc Nhà Trai',
            'bride': 'Tiệc Nhà Gái',
            'both': 'Cả hai tiệc'
        }[formData.event] || formData.event;
        
        const message = `🎊 NEW RSVP SUBMISSION 🎊\n\n` +
            `👤 Name: ${formData.fullName}\n` +
            `📱 Phone: ${formData.phone}\n` +
            `🎭 Event: ${eventType}\n` +
            `👥 Number of guests: ${formData.guests}\n` +
            `✅ Attending: ${formData.attending}\n` +
            `💬 Message: ${formData.message}\n\n` +
            `📅 Submitted: ${new Date().toLocaleString()}`;
        
        // Send to Telegram API
        const url = `https://api.telegram.org/bot${telegramBotToken}/sendMessage`;
        const response = await fetch(url, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                chat_id: telegramChatId,
                text: message,
                parse_mode: 'HTML'
            })
        });
        
        const data = await response.json();
        return data.ok === true;
    } catch (error) {
        console.error('Error sending to Telegram:', error);
        return false;
    }
}

/**
 * Prompt user for Telegram Chat ID if not available
 */
function promptForTelegramCredentials() {
    const isVietnamese = document.documentElement.lang === 'vi';
    
    // Prompt for chat ID only
    const chatIdPrompt = isVietnamese ? 
        'Vui lòng nhập Telegram Chat ID của bạn để nhận thông báo RSVP:' : 
        'Please enter your Telegram Chat ID to receive RSVP notifications:';
    telegramChatId = prompt(chatIdPrompt, '');
    
    // Save to localStorage if provided
    if (telegramChatId) {
        localStorage.setItem('telegramChatId', telegramChatId);
        
        // Notify that credentials are saved
        const savedMessage = isVietnamese ? 
            'Chat ID đã được lưu. Vui lòng gửi lại biểu mẫu RSVP.' : 
            'Chat ID saved. Please submit the RSVP form again.';
        alert(savedMessage);
    } else {
        // Notify that Chat ID is required
        const errorMessage = isVietnamese ? 
            'Bạn cần nhập Chat ID để nhận thông báo qua Telegram.' : 
            'You need to provide a Chat ID to receive notifications via Telegram.';
        alert(errorMessage);
    }
}

// Add some styles for the button states
document.addEventListener('DOMContentLoaded', function() {
    const style = document.createElement('style');
    style.textContent = `
        .success-button {
            background-color: #4CAF50 !important;
            border-color: #4CAF50 !important;
        }
        .error-button {
            background-color: #f44336 !important;
            border-color: #f44336 !important;
        }
    `;
    document.head.appendChild(style);
});