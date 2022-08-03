const jokes = document.getElementById("joke");
const jokebtn = document.getElementById("joke-btn");

//*********API call Using async-await **********************//

const generatejoke = async () => {

    const setheader =  {
        headers : {
            Accept : "application/json"
        }
    }

    try{
        const res = await fetch("https://icanhazdadjoke.com/",setheader);
        const data = await res.json();
        jokes.innerHTML = data.joke;
    }
    catch(error) {
        console.log(error);
    }
    

}

jokebtn.addEventListener('click', generatejoke);
generatejoke();

//***************API CALL USING Promises************************//

// const getjoke = () => {

//     const setheader = {
//         headers : {
//             Accept : "application/json"
//         }
//     }

//     fetch("https://icanhazdadjoke.com/",setheader)
//     .then( (res) =>  res.json() )
//     .then((data) => {
//         jokes.innerHTML = data.joke;
//     })
//     .catch((error) => {
//         jokes.innerHTML = 'Oops...';
//     })
// }

// jokebtn.addEventListener('click', getjoke);
// getjoke();