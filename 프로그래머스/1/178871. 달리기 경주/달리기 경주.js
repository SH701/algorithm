function solution(players, callings) {
    const map = new Map();
    players.forEach((name, i) => map.set(name, i));

    for (const name of callings) {
        const idx = map.get(name);       
        const front = players[idx - 1];  
        players[idx - 1] = name;
        players[idx] = front;
        map.set(name, idx - 1);
        map.set(front, idx);
    }

    return players;
}