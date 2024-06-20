document.addEventListener("DOMContentLoaded", () => {
    const departmentCardsContainer = document.getElementById("department-cards");
    const searchResultsContainer = document.getElementById("search-results");

    const departmentData = {
        "H&S": ["H&S Sem 1.json"],
        "AI&DS": ["AI&DS Sem 3.json", "AI&DS Sem 4.json"],
        "CME": ["CME Sem 3.json", "CME Sem 4.json"],
        "CSE": ["CSE Sem 3.json", "CSE Sem 4.json"],
        "ECE": ["ECE Sem 3.json", "ECE Sem 4.json"],
        "EEE": ["EEE Sem 3.json", "EEE Sem 4.json", "EEE Sem 5.json", "EEE Sem 6.json"],
        "IT": ["IT Sem 3.json", "IT Sem 4.json", "IT Sem 6.json"]
    };

    departmentCardsContainer.addEventListener("click", (event) => {
        if (event.target.classList.contains("department-card")) {
            const selectedDepartment = event.target.getAttribute("data-department");
            console.log("Selected Department: ", selectedDepartment);
            displaySemesterCards(selectedDepartment);
        }
    });

    const displaySemesterCards = (department) => {
        searchResultsContainer.innerHTML = "";
        const semesters = departmentData[department];
        const semesterSection = document.createElement("div");
        semesterSection.classList.add("semester-section");

        semesters.forEach((semester) => {
            const semesterCard = document.createElement("div");
            semesterCard.classList.add("semester-card");
            semesterCard.textContent = semester.replace(".json", "");
            semesterCard.setAttribute("data-semester", semester);
            semesterCard.setAttribute("data-department", department);

            semesterCard.addEventListener("click", () => {
                console.log("Selected Semester: ", semester);
                displaySubjects(department, semester);
            });

            semesterSection.appendChild(semesterCard);
        });

        searchResultsContainer.appendChild(semesterSection);
    };

    const displaySubjects = async (department, semester) => {
        searchResultsContainer.innerHTML = "";
        try {
            const response = await fetch(`/assets/data/${department}/${semester}`);
            if (!response.ok) {
                throw new Error(`HTTP error! Status: ${response.status}`);
            }
            const data = await response.json();
            console.log("Fetched Data: ", data);

            data.Sheet1.forEach((entry) => {
                const subjectName = entry.Subject;
                const books = entry.Books;
                if (subjectName && books) {
                    const subjectCard = document.createElement("div");
                    subjectCard.classList.add("subject-card");

                    const subjectTitle = document.createElement("h4");
                    subjectTitle.textContent = subjectName;

                    const bookList = document.createElement("ul");
                    books.forEach((book) => {
                        const bookItem = document.createElement("li");
                        bookItem.textContent = book;
                        bookList.appendChild(bookItem);
                    });

                    subjectCard.appendChild(subjectTitle);
                    subjectCard.appendChild(bookList);

                    searchResultsContainer.appendChild(subjectCard);
                }
            });
        } catch (error) {
            console.error('Error fetching or parsing data:', error);
            searchResultsContainer.innerHTML = "<p>Error loading subjects. Please try again later.</p>";
        }
    };
});