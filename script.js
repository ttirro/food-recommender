// 추천할 음식 리스트
const foodList = ["피자", "햄버거", "초밥", "라면", "파스타", "치킨", "떡볶이", "김밥", "샐러드", "스테이크"];

// 버튼 클릭 시 실행되는 함수
document.getElementById("recommend-btn").addEventListener("click", function() {
    const randomIndex = Math.floor(Math.random() * foodList.length); // 랜덤 인덱스 생성
    document.getElementById("result").textContent = `추천 음식: ${foodList[randomIndex]}`;
});
