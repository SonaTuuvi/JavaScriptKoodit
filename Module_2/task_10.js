'use strict';

const candidates = [];

// Step 1: Ask for number of candidates
const candidateCount = parseInt(prompt('How many candidates?'));

// Step 2: Ask for candidate names and store them
for (let i = 0; i < candidateCount; i++) {
    const name = prompt(`Name for candidate ${i + 1}:`);
    candidates.push({ name: name.toLowerCase(), votes: 0 });
}

// Step 3: Ask for number of voters
const voterCount = parseInt(prompt('How many voters?'));

// Step 4: Collect votes
for (let i = 0; i < voterCount; i++) {
    const vote = prompt(`Voter ${i + 1}, who do you vote for?`);

    if (!vote) {// Empty vote → skip
        continue;
    }

    const voteName = vote.toLowerCase();

    // Find the candidate and increment vote
    const candidate = candidates.find(c => c.name === voteName);
    if (candidate) {
        candidate.votes += 1;
    } else {
        alert(`Invalid vote: ${vote} is not a listed candidate.`);
    }
}

// Step 5: Sort candidates by votes descending
candidates.sort((a, b) => b.votes - a.votes);

// Step 6: Display results
const winner = candidates[0];
console.log(`The winner is ${winner.name} with ${winner.votes} votes.`);
console.log('Results:');
for (const candidate of candidates) {
    console.log(`${candidate.name}: ${candidate.votes} votes`);
}