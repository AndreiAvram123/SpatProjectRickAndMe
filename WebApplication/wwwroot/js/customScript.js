﻿//todo
//refactor this 
const highlightColor = "#A6E08E";
const table = document.getElementById("form-table");
if(table!=null){
const allHiddenInputs = table.getElementsByClassName("input-hidden");
const allRows = table.getElementsByTagName("tr");
//attach listeners to all columns 
}
if(allRows !==null) {
    for (let i = 0; i < allRows.length; i++) {
        let rubricsForCurrentRow = allRows[i].getElementsByClassName("rubric-item");
        for (let j = 0; j < rubricsForCurrentRow.length; j++) {
            rubricsForCurrentRow[j].addEventListener('click', () => {
                highlightRubric(rubricsForCurrentRow[j],
                    rubricsForCurrentRow);
                allHiddenInputs[0].value = j;
            })
        }
    }
}

function highlightRubric(rubric, allRubricsOnRow){
    //de highlight the other rubrics 
    for(let i =0;i < allRubricsOnRow.length;i++){
       allRubricsOnRow[i].style.background = ""
    }
    rubric.style.background = highlightColor;
}
