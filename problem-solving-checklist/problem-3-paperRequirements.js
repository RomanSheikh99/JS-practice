// paper Requirements

function paperRequirements(firstBookCopys,secondBookCopys,thirdBookCopys){
    let firstBookPages = 100; let secondBookPages = 200; let thirdBookPages = 300;
    let totalPages = (firstBookCopys * firstBookPages) + (secondBookCopys * secondBookPages) + (thirdBookCopys * thirdBookPages);
    return totalPages;
}

let totalPagesNeed = paperRequirements(130,162,245);
console.log(totalPagesNeed);