const myCatFact = document.getElementById("cat-facts");

const myCatFacts = {
    catFact: []
}

const catFact = async () => {
    const response = await fetch("https://catfact.ninja/fact");
    const jsonResponse = await response.json();
    
    myCatFact.textContent = jsonResponse.fact;
    
    return jsonResponse;
}

catFact();