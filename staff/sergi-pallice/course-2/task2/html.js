
// async function fetchAsync () {
//     let response = await fetch("http://http://localhost:8000/pro-congress-117-senate.json");
//     let data = await response.json();
//     console.log(data);
//     return data;
// }

// fetchAsync()
//     .then(data => console.log(data))
//     .catch(reason => console.log(reason.message))


let members = []     // Empty variable to save our Senators

async function fetchAsync () {
   await fetch("http://localhost:8000/pro-congress-117-senate.json")
      .then( (response) => {
        return response.json();         // Saving response into JSON format (because we know)   
      })
      .then( (json)=> {
        members = json.results[0].members // This places itself in the array with all members
        console.log(members)
      })
     //.catch(reason => console.log(reason.message))
    
      // let members_names = []
      // for (var i=0; i<members.length; i++) {
      //   members_names.push(document.getElementById("congress").innerHTML = members[i]["first_name"] + ' ' +  members[i]["last_name"])
      // }
      
      build_table(members);

}

fetchAsync()


function build_table(members_array){
  document.getElementById("senate-data").innerHTML = ""; // Deletes previous data in div

  let table = document.getElementById("senate-data"); // We'll put the table inside div "senate-table"
  //-------------------------Header---------------------------//
  let thead = document.createElement('thead');
  //---------------Creates Header (Column) Cells--------------//
  let tr      = document.createElement('tr');
  let head_cell1 = document.createElement('th');
  let head_cell2 = document.createElement('th');
  let head_cell3 = document.createElement('th');
  let head_cell4 = document.createElement('th');
  let head_cell5 = document.createElement('th');
  //--------------Setting Column Names---------------// 
  let text_h1 = document.createTextNode("Full name");
  let text_h2 = document.createTextNode("Party (D, R, or I)");
  let text_h3 = document.createTextNode("State");
  let text_h4 = document.createTextNode("Seniority");
  let text_h5 = document.createTextNode("% votes");
  //Adding text to cells
  head_cell1.appendChild(text_h1);
  head_cell2.appendChild(text_h2);
  head_cell3.appendChild(text_h3);
  head_cell4.appendChild(text_h4);
  head_cell5.appendChild(text_h5);
  //Adding cells to row
  tr.appendChild(head_cell1);
  tr.appendChild(head_cell2);
  tr.appendChild(head_cell3);
  tr.appendChild(head_cell4);
  tr.appendChild(head_cell5);
  //Append format
  thead.appendChild(tr);
  table.appendChild(thead);

  /*------------------------LOOP VARS-------------------------- */
  let row = document.createElement('tr'); // Create Row Elements (tr=tablerow)
  let td =  document.createElement('td'); // Create Cell Elements (td=tabledata)
  let tbody = document.createElement("tbody");

  /*-------------------------LOOP------------------------------ */
  for (let i=0; i < members_array.length; i++) {
    let link1 = document.createElement("a");
      
    //We'll add 1 row and 5 cells (columns) per iteration
    let tr  =  document.createElement('tr');
    let td1 =  document.createElement('td');
    let td2 =  document.createElement('td');
    let td3 =  document.createElement('td');
    let td4 =  document.createElement('td');
    let td5 =  document.createElement('td');

    //Set attribute as link
    link1.setAttribute("href", members_array[i].url);

    //Define text to go into each cell from the "Nth (i)" row
    let linktext1 =  document.createTextNode(members_array[i].first_name + " " + (members_array[i].middle_name || "")  +" "+ members_array[i].last_name);
    let text2 =  document.createTextNode(members_array[i].party);
    let text3 =  document.createTextNode(members_array[i].state);
    let text4 =  document.createTextNode(members_array[i].seniority);
    let text5 =  document.createTextNode(members_array[i].votes_with_party_pct);
    //Append text to cells
    link1.appendChild(linktext1);
    td1.appendChild(link1);
    td2.appendChild(text2);
    td3.appendChild(text3);
    td4.appendChild(text4);
    td5.appendChild(text5);
    //Append cells to row
    tr.appendChild(td1);
    tr.appendChild(td2);
    tr.appendChild(td3);
    tr.appendChild(td4);
    tr.appendChild(td5);
    //Append row to table body
    tbody.appendChild(tr);
    //Add full row to table
    table.appendChild(tbody);
       }
}
