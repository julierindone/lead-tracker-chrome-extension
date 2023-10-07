//// resource: 
// https://www.geeksforgeeks.org/how-to-creating-html-list-from-javascript-array/

const inputBtn = document.getElementById("input-btn")
const inputEl = document.getElementById("input-el")
//// let data 
let myLeads = []
//// let list...  
const ulEl = document.getElementById("list-of-leads")

inputBtn.addEventListener("click", function () {
  myLeads.push(inputEl.value)

  let li = document.createElement('li')
  for (let i = 0; i < myLeads.length; i++) {
    li.innerText = myLeads[i]
  }
  ulEl.appendChild(li)
})


// Scrimba solution for printing list to dom, which is shorter than what I came up with:
// for (let i = 0; i < myLeads.length; i++) {
//   ulEl.innerHTML += "<li>" + myLeads[i] + "</li>"
// }