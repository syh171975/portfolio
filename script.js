// 현재 연도 표시
document.addEventListener("DOMContentLoaded", function () {
  const yearSpan = document.getElementById("year");
  const now = new Date();
  yearSpan.textContent = now.getFullYear();
});

// 맨 위로 이동 버튼
const backToTopBtn = document.getElementById("backToTop");
backToTopBtn.addEventListener("click", function () {
  window.scrollTo({ top: 0, behavior: "smooth" });
});

// 네비게이션 토글 (모바일)
const navToggle = document.getElementById("navToggle");
const navList = document.querySelector(".nav ul");

navToggle.addEventListener("click", function () {
  navList.classList.toggle("open");
});

// 폼 전송 예시 (실제 메일 전송은 X, 과제용 데모)
function handleSubmit(event) {
  event.preventDefault();

  const nameInput = document.getElementById("name");
  const emailInput = document.getElementById("email");
  const messageInput = document.getElementById("message");
  const formMessage = document.getElementById("formMessage");

  if (!nameInput.value || !emailInput.value || !messageInput.value) {
    formMessage.textContent = "모든 항목을 입력해 주세요.";
    formMessage.style.color = "red";
    return false;
  }

  formMessage.textContent =
    "메시지가 전송된 것처럼 처리되었습니다. (과제용 예시입니다.)";
  formMessage.style.color = "green";

  // 폼 초기화
  nameInput.value = "";
  emailInput.value = "";
  messageInput.value = "";

  return false;
}

// ========== 이미지 클릭 확대 Lightbox ==========
const modal = document.getElementById("imgModal");
const modalImg = document.getElementById("modalImg");
const modalCap = document.getElementById("modalCaption");
const closeBtn = document.querySelector(".close-modal");

document.querySelectorAll(".gallery-img").forEach(img => {
  img.addEventListener("click", () => {
    modal.style.display = "block";
    modalImg.src = img.src;
    modalCap.innerHTML = img.alt;
  });
});

// 닫기 버튼
closeBtn.onclick = () => {
  modal.style.display = "none";
};

// 모달 배경 클릭 시 닫기
modal.onclick = (e) => {
  if (e.target === modal) modal.style.display = "none";
};
