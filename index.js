console.log("hello world");

async function main(){
const users = await fetch("http://www.omdbapi.com/?i=tt3896198&apikey=3a3dec69"),
const usersData = users.json();
console.log(userData)


}
main();
