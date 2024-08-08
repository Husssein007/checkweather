const button = document.getElementById('displayBtn')
const list = document.getElementById('List')
const URLAPI = "https://fakestoreapi.com/products"
button.addEventListener('click',()=>{

    axios.get(URLAPI)
    .then((response)=>{
        const products =response.data
        products.forEach(element => {
            const item = document.createElement('li')
            item.textContent = element.title 
            list.appendChild(item)
        });
    })
    .catch(err=>{
        console.log(err)
    })
    

})