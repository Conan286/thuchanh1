document.addEventListener("DOMContentLoaded", function () {
    const startQuizButton = document.getElementById("startQuizButton");
    const questionsContainer = document.getElementById("questions");
    const submitButton = document.getElementById("submit");
    const goHome = document.getElementById("goHome");

    startQuizButton.addEventListener("click", function () {
        if (isFormComplete()) {
            questionsContainer.style.display = "block";
        } else {
            alert("Vui lòng nhập đầy đủ thông tin trước khi bắt đầu làm bài.");
        }
    });

    submitButton.addEventListener("click", function (event) {
        event.preventDefault();
        if (confirm("Bạn có chắc chắn muốn nộp bài thi không?")) {
            submitTest();
        }
    });

    function isFormComplete() {
        var name = document.getElementById("name").value;
        var birth = document.getElementById("birth").value;
        var id = document.getElementById("id").value;
        var address = document.getElementById("class").value;

        return name !== "" && birth !== "" && id !== "" && address !== "";
    }

    function submitTest() {
        // Xử lý logic nộp bài thi

        // Hiển thị kết quả
        window.location.href = "result.html";
    }
  
   
});