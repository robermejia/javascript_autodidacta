const parrafo = "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quaerat corrupti doloremque tempora nemo modi ipsam cum labore consequatur consectetur, unde exercitationem, ex repellendus aspernatur illum velit! Perspiciatis magni distinctio illum, minima nesciunt vero velit molestias porro quae rerum perferendis. Ipsa laudantium delectus itaque architecto nesciunt corporis est facere, quisquam laborum obcaecati enim voluptatibus provident iure illo reiciendis nostrum quis possimus ut dignissimos mollitia sit a adipisci maiores? Ipsa voluptatem quidem similique, voluptate officia eos nam laborum? Omnis, optio temporibus asperiores aperiam itaque, eveniet molestias nemo eaque doloribus amet magnam numquam animi, quo accusantium esse. Aspernatur corporis maiores accusantium minima nulla.";
// ===================== parrafo 1 ===========================
const PARRAFO = document.getElementById("id_parrafo");
let mayuscula = parrafo.toUpperCase();
PARRAFO.innerHTML = mayuscula;
// ===================== parrafo 2 ===========================
const PARRAFO2 = document.getElementById("id_parrafo2");
let primerCaracter = "🟢 "
PARRAFO2.innerText = primerCaracter + parrafo.slice(0)
