import axios from 'axios';

let response = await axios.get("https://epl.delfi.ee/artikkel/120363687/juhtkiri-hey-guys-let-s-talk-eesti-keelest");
console.log(response);