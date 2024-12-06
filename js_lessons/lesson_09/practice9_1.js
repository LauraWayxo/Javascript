// # In this practice lesson, we will be utilizing the JSONPlaceholder API to practice AJAX. Feel free to use this API or another API of choice, some good options are the Cat API, OpenWeatherMap API, REST Countries or the Random User Generator API. ​
const apiUrl ="https://jsonplaceholder.typicode.com/comments"; 

// # Implement try/catch block into this function to send a GET request.
async function fetchData() {
  // # Send a GET request to the API and print out the response, make sure to use the fetch API. ​
  const response = await fetch(____);
  const data = await response.___();
  console.log(____);
}
// # Implement try/catch block into this function to send a POST request.
async function sendData(){
  // # Send a POST request to the API using the fetch() method and print out the response. 
  const payload = {};
  await fetch(____, {
    method: '',
    body: JSON.____(payload),
    headers: {
      'Content-Type': 'application/json',
    },
  });
  console.log('Data was succesfully sent');
};