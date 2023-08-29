document.addEventListener("DOMContentLoaded", function () {
    const generateButton = document.getElementById("generate");
    const qrcodeContainer = document.getElementById("qrcode");
  
    generateButton.addEventListener("click", function () {
      chrome.tabs.query({ active: true, currentWindow: true }, function (tabs) {
        const currentUrl = tabs[0].url;
  
        // Generate QR code using qrcode-generator library
        const qr = new QRCode(qrcodeContainer, {
          text: currentUrl,
          width: 128,
          height: 128
        });
  
        // Clear previous QR code and display new one
        qrcodeContainer.style.display = "block";
      });
    });
  });
  