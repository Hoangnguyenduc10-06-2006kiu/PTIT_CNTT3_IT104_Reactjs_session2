function formatData(value) {
    let dateValue = new  Date(value)

    let day = dateValue.getDate()
    let month = dateValue.getMonth() + 1;
    let year = dateValue.getFullYear();
    
   return `${day < 10 ? "0" + day : day}/${
     month < 10 ? "0" + month : month
   }/${year}`;

}
export { formatData };