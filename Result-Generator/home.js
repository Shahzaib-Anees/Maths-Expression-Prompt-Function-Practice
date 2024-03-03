
function result() {

    let subject1 = prompt("Tell me First Subject Name");
    let subject2= prompt(`Tell me Second Subject Name`);
    let subject3= prompt(`Tell me Third Subject Name`);
    alert(`Subject Names has been saved`);
    
    let total_marks = 100;
    alert(`Total Marks for each Subject assumed as 100`)
    let obtained_subject1 = +prompt(`Please tell me Obtained Marks of ${subject1}`);
    let obtained_subject2 = +prompt(`Please tell me Obtained Marks of ${subject2}`);
    let obtained_subject3 = +prompt(`Please tell me Obtained Marks of ${subject3}`);    
    let sub_total = 300;

    document.write(`<table id="result-table">
        <thead>Mark Sheet</thead>
        <tr>
        <th>Subject<th>
        <th>Total Marks<th>
        <th>Obtained Marks<th>
        <th>Percentage<th>
        </tr> 

        <tr>
        <th>${subject1}<th>
        <td>${total_marks}<td>
        <td>${obtained_subject1}<td>
        <td>${(obtained_subject1 * 100)/total_marks}%<td>
        </tr> 

        <tr>
        <th>${subject2}<th>
        <td>${total_marks}<td>
        <td>${obtained_subject2}<td>
        <td>${(obtained_subject2 * 100)/total_marks}%<td>
        </tr>

        <tr>
        <th>${subject3}<th>
        <td>${total_marks}<td>
        <td>${obtained_subject3}<td>
        <td>${(obtained_subject3 * 100)/total_marks}%<td>
        </tr> 
        </table>`);
}

