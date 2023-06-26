import "./styles.css";

const rn = Math.floor(Math.random() * 101);

document.getElementById("app").innerHTML = `
<h1>Rix space</h1>
<div>
Random number:   
<b>${rn}</b>
<br>
<i>#codelife</i>

</div>
`;
