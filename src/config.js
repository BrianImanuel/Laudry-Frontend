const baseUrl = "http://localhost:8000/api"
const formatNumber = (num) => {
    return parseFloat(num).toFixed(0).toString().replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1.')
}

// untuk menambahkan header authorization berupa bearer token
const authorization = {
     headers: {
         Authorization: `Bearer ${localStorage.getItem("token")}`
     }
 }

export {
    baseUrl, formatNumber, authorization
}