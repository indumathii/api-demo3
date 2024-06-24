const row_class = document.querySelector(".row_class")
console.log(row_class)
const submit_btn = document.querySelector(".btn1")
 // 
submit_btn.addEventListener("click", function (e) {
    e.preventDefault();
    row_class.innerHTML = " "
    const userinput_value = document.getElementById("userinput").value
    console.log(userinput_value)
    for (let i = 0; i < userinput_value; i++) {
        console.log("iteration", i)
        
        let url = 'https://randomuser.me/api/'
        fetch(url)
            .then(response => {
                return response.json();
            })
            .then(data => {
                console.log(data);
                let arrays = data.results;
                console.log(arrays);
                let first_name = arrays[0].name.first;
                const div_element = document.createElement("div")
                div_element.setAttribute("class", "card card-body col-12 col-sm-12 col-md-6 col-lg-4")
                div_element.style.background = 'lightblue'
                row_class.appendChild(div_element)
                const Name_element = document.createElement("div")
                //const question_element = document.createElement("div")

                Name_element.setAttribute("class", "name_element")
                const gender_element = document.createElement("div")
                div_element.appendChild(Name_element)
                div_element.appendChild(gender_element)
                Name_element.innerHTML = `Name: ${first_name}`;
                console.log(first_name)
                let url2 = `https://api.genderize.io?name=${first_name}`
                fetch(url2)
            .then(response2 => {
                return response2.json();
            })
            .then(data2 => {
                console.log(data2);
                let gender=data2.gender;
                gender_element.innerHTML = `Certainly 100% ${gender}`;
            })
            .catch (error2 => {
                console.error('Error fetching data:', error2);
            });  




            })
            .catch (error => {
                console.error('Error fetching data:', error);
            });
    }

    
})
const clear_btn = document.querySelector(".btn2")
clear_btn.addEventListener("click", function () {
    window.location.reload();
})