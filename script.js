// 나이 자동 계산
const birthYear = 2006;
const birthMonth = 2;
const birthDay = 2;

function calculateAge() {
  const today = new Date();
  let age = today.getFullYear() - birthYear;
  const m = today.getMonth() + 1;
  const d = today.getDate();
  if (m < birthMonth || (m === birthMonth && d < birthDay)) age--;
  document.getElementById("age").textContent = age;
}
calculateAge();

// 부드러운 스크롤 이동
function scrollToSection(id) {
  document.getElementById(id).scrollIntoView({ behavior: "smooth" });
}

