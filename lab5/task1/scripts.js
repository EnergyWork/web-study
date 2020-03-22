function publishReview() {
    let name = document.newreview.urN.value;
    let title = document.newreview.tR.value;
    let text = document.newreview.textofurreview.value;

    let newArticle = document.createElement('article');
    newArticle.style = "margin-left: 260px;";
    let newDiv = document.createElement('div');
    newDiv.classList = "review";
    ftt.append(newArticle);
    newArticle.appendChild(newDiv);

    let newP1 = document.createElement('p');
    let newB = document.createElement('b');
    newB.innerHTML = name;
    newP1.appendChild(newB);
    newDiv.appendChild(newP1);

    let newP2 = document.createElement('p');
    let newStrong = document.createElement('strong');
    newStrong.innerHTML = title;
    newP2.appendChild(newStrong);
    newDiv.appendChild(newP2);

    let newP3 = document.createElement('p');
    newP3.innerHTML = text;
    newDiv.appendChild(newP3);
}