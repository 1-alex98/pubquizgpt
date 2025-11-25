
function decodeJsonDataCookie() {
    const cookieValue =  localStorage.getItem("jsonData");

    if (!cookieValue) {
        return null;
    }

    try {
        const decodedString = atob(cookieValue);
        const jsonData = JSON.parse(decodedString);
        return jsonData;
    } catch (error) {
        console.error("Error decoding jsonData cookie:", error);
        return null;
    }
}

function htmlEncode(str) {
    let tempDiv = document.createElement('div');
    tempDiv.innerText = str;
    return tempDiv.innerHTML;
}

let slidesList = decodeJsonDataCookie();
let slidesDiv = document.getElementById("slides");

for (const slideData of slidesList) {
    let wholeSection = document.createElement("section");
    let questionSection = document.createElement("section");
    questionSection.style.maxHeight = "100%";
    questionSection.style.height = "auto";
    questionSection.classList.add("slide");

    let number = 1;
    if (slideData.question.length >= 120) number = 2;
    let questionHtml = `
                <div>
                    <div class="parent" style="max-height: calc(var(--slide-height)*${slideData.options?0.4:0.6}); overflow: hidden; display: block">
                        <span class="text" style="">
                            ${htmlEncode(slideData.question)}
                        </span>
                    </div>
                    <p style="font-size: 0.5em; color: grey">${htmlEncode(slideData.category)} / ${htmlEncode(slideData.type)}</p>
				</div>
				<div style="flex-grow: 1;max-height: calc(var(--slide-height)*0.3)" class="${slideData.options? "parent": ""}" id="options-list">
					<ul class="text">`;
    if (slideData.options) {
        for (const option of slideData.options) {
            questionHtml += `<li class="text">${htmlEncode(option)}</li>`;
        }
    }
    questionHtml += `</ul></div></div>`;
    questionSection.innerHTML = questionHtml;

    wholeSection.appendChild(questionSection);

    // Add image slides if images array exists
    if(slideData.images && Array.isArray(slideData.images)) {
        for (const imageUrl of slideData.images) {
            let imageSection = document.createElement("section");
            imageSection.classList.add("slide");
            //imageSection.setAttribute("data-background-image", htmlEncode(imageUrl));
            imageSection.setAttribute("data-background-size", "contain");
            imageSection.setAttribute("data-background-position", "center");
            imageSection.innerHTML = `
                    <img src="${htmlEncode(imageUrl)}" style="max-width: 100%; max-height: 100vh; object-fit: contain;" alt="Quiz Image">
            `;
            wholeSection.appendChild(imageSection);
        }
    }

    if(slideData.answer) {
        let answerSection = document.createElement("section");
        answerSection.classList.add("slide");
        answerSection.innerHTML = `
					<h2>Answer</h2>
					<p><b>${htmlEncode(slideData.answer)}</b></p>
					<p><i>(${htmlEncode(slideData.explanation_answer)})</i></p>
				  `;

        wholeSection.appendChild(answerSection);
    }
    slidesDiv.appendChild(wholeSection);
}

let sectionEnd = document.createElement("section");
sectionEnd.innerHTML = `
			<a href="/index.html" class="btn btn-primary text-white">Play again</a>
			`;
slidesDiv.appendChild(sectionEnd);

Reveal.initialize({
    hash: true,
    plugins: [RevealMarkdown, RevealHighlight, RevealNotes]
});
