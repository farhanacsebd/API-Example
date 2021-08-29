const loadBuddies = () => {
    fetch('https://randomuser.me/api/?results=5')
        .then(res => res.json())
        .then(data => displayBuddy(data));
}
loadBuddies();
const displayBuddy = data => {
    const buddies = data.results;
    // console.log(data.results)
    const buddiesdiv = document.getElementById('buddies');
    for (const buddy of buddies) {
        // console.log(buddy.name.first, buddy.name.last)
        const p = document.createElement('p');
        p.innerText = `Name: ${buddy.name.title} ${buddy.name.first}${buddy.name.last}  Email: ${buddy.email}`;
        buddiesdiv.appendChild(p);
    }
}