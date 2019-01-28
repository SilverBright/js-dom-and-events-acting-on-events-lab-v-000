function preventRefreshOnSubmit(){
    document.querySelector('form').addEventListener('submit', function(event){
      event.preventDefault()
    })
}

preventRefreshOnSubmit()

const input = document.querySelector('input')

function retrieveEmployeeInformation() {
  return document.querySelector('input').value
}

function addNewElementAsLi() {
  return document.querySelector('ul').innerHTML
}