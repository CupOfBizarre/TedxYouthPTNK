var slideData = {
  "1": {
    "caption": "Event",
    "description": "TEDxYouth@PTNK 2025 trở lại với chủ đề “35MM” – một hành trình khai mở ký ức và kết nối thời gian qua ống kính phim hoài cổ. Lấy cảm hứng từ định dạng phim 35mm, sự kiện năm nay không chỉ mang tính nghệ thuật mà còn chứa đựng chiều sâu cảm xúc và góc nhìn mới mẻ về cuộc sống. Đây sẽ là nơi những câu chuyện, ý tưởng và khát vọng trẻ được thăng hoa trên sân khấu TEDx – nơi quá khứ, hiện tại và tương lai giao thoa qua từng khung hình.",
    "image": "1.jpg"
  },
  "2": {
    "caption": "Giới Thiệu Dự Án",
    "description": "TEDxYouth@PTNK là một dự án phi lợi nhuận theo mô hình quốc tế của TED, trực thuộc trường Phổ thông Năng khiếu, ĐHQG-HCM. Trải qua 3 năm thành lập và 2 năm hoạt động, dự án của chúng em đã không ngừng nỗ lực và tổ chức thành công chuỗi sự kiện thường niên, nổi bật với hai chủ đề: Crystal Unclear năm 2023 và Treble Clef năm 2024.",
    "image": "2.jpg"
  },
  "3": {
    "caption": "Thành Tựu Nổi Bật",
    "description": "Những thành tựu đáng chú ý bao gồm:\n• Thu hút hơn 200 người tham dự trong mỗi sự kiện, với phần lớn là học sinh cấp 3 tại TP. HCM.\n• Trở thành dự án đầu tiên thuộc trường công lập trên địa bàn TP.HCM được cấp quyền bởi TED.\n• Góp phần xây dựng một không gian khuyến khích tư duy cởi mở, thúc đẩy sáng tạo, và phát triển một cộng đồng học sinh năng động.",
    "image": "3.jpg"
  },
  "4": {
    "caption": "Giới Thiệu Sự Kiện “35MM”",
    "description": "Với chủ đề \"35mm\" sẽ đưa mỗi người vào hành trình khám phá sự kết nối giữa quá khứ, hiện tại và tương lai thông qua lăng kính của ký ức, nghệ thuật và công nghệ.",
    "image": "4.jpg"
  },
  "5": {
    "caption": "Biểu Tượng",
    "description": "Cùng hình ảnh phim 35mm – biểu tượng của những khoảnh khắc hoài niệm, sự kiện năm nay sẽ để mỗi người được phép nhìn lại quá khứ qua lăng kính xưa, dù đôi khi những ký ức ấy không hoàn toàn hoàn hảo.",
    "image": "5.jpg"
  },
  "6": {
    "caption": "Trải Nghiệm",
    "description": "Chính những hình ảnh của máy ảnh và những bức ảnh hoài cổ, người tham dự sẽ khám phá sức mạnh của nostalgia (hoài niệm) và cách mà nó có thể ảnh hưởng đến góc nhìn của mỗi người.",
    "image": "6.jpg"
  },
"7": {
  "caption": "Thông Tin Event",
  "description": "Địa điểm: 116-118 Nguyễn Thị Minh Khai, Bến Thành Ward, District 3, Ho Chi Minh City\n\nNgôn ngữ: Tiếng Anh\n\nThời gian sự kiện: 31/05/2025 16h đến 21h",
  "image": "7.jpg"
},

  "8": {
    "caption": "Thông Điệp",
    "description": "Thông điệp cuối cùng là khuyến khích người tham dự dám chấp nhận sự thay đổi, trân trọng hiện tại, đồng thời không ngừng phát triển, học hỏi và trưởng thành, dù qua bất kỳ thời gian nào.",
    "image": "8.jpg"
  }
};



var modalContainer;
var imageModal;
var descriptionModal;

window.onclick = function (event) {
  if (event.target === modalContainer) {
    modalContainer.style.display = "none";
    document.body.style.overflow = "auto";
  }
};

function openModal(imgId) {
  document.getElementById("caption").style.display = "none";
  window.scrollTo(0, 0);
  document.body.style.overflow = "hidden";

  modalContainer.style.display = "flex";

  imageModal.src = "pokemon/" + slideData[String(imgId)].image;
  descriptionModal.innerText = slideData[String(imgId)].description;
}

function hoverImage(imgId) {
  var caption = document.getElementById("caption");
  caption.innerText = slideData[String(imgId)].caption;
  caption.style.animation = "none";
  caption.style.display = "block";
  setTimeout(() => (caption.style.animation = "fadein 0.5s"), 100);
}
function hideCaption() {
  document.getElementById("caption").style.display = "none";
}

function openMobileModal(imgId) {
  const mobileImg = document.querySelector(`.mobile-img[data-id="${imgId}"]`);
  if (!mobileImg) return;

  const bg = mobileImg.style.backgroundImage;

  const overlay = document.createElement("div");
  overlay.className = "mobile-overlay";

  const expandedImg = document.createElement("div");
  expandedImg.className = "expanded-zoom";
  expandedImg.style.backgroundImage = bg;

  const captionBox = document.createElement("div");
  captionBox.className = "mobile-caption";
  captionBox.innerText = slideData[String(imgId)].description;

  expandedImg.appendChild(captionBox);
  overlay.appendChild(expandedImg);
  document.body.appendChild(overlay);

  requestAnimationFrame(() => overlay.classList.add("visible"));

  overlay.addEventListener("click", () => {
    overlay.classList.remove("visible");
    setTimeout(() => document.body.removeChild(overlay), 300);
  });
}

function loadSpeakers() {
  const container = document.getElementById("speaker-list");
  const speakers = [
    { name: "Đăng Phúc", image: "speakers/speaker1.png" },
    { name: "An Nhiên", image: "speakers/speaker2.png" },
    { name: "Lily", image: "speakers/speaker3.png" },
    { name: "Quang Khải", image: "speakers/speaker4.png" },
    { name: "TS. Lưu Phúc Lợi", image: "speakers/speaker5.png" },
    { name: "Sabrina Uyên Lưu", image: "speakers/speaker6.png" }
  ];

  speakers.forEach((speaker) => {
    const box = document.createElement("div");
    box.className = "speaker-box";
    box.innerHTML = `
      <div class="speaker-img-wrapper">
        <img src="${speaker.image}" alt="${speaker.name}" class="speaker-img"/>
      </div>
      <div class="speaker-name">
        <span class="main-text">${speaker.name}</span>
      </div>
    `;
    container.appendChild(box);
  });
}


window.onload = function () {
  loadSpeakers();
  
  modalContainer = document.getElementById("modal-container");
  imageModal = document.getElementById("imgid");
  descriptionModal = document.getElementById("modal-description");

  modalContainer.style.display = "none";
  imageModal.src = "";
  descriptionModal.innerText = "";
};
