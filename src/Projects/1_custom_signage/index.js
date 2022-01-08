const computeCost = () => {
    // Load elements
    let name = document.getElementById('name').value.trim();
    let errorLabel = document.getElementById('errorLabel');
    let name_length = name.length;

    // Verify that there's a value
    if(!(name_length > 0)) {
        errorLabel.textContent = "Please enter a name below...";
        return;
    }

    // Tell the user their cost
    alert(`Your cost: $${name_length * 5}`);
}
