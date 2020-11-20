
function text(total, add, del) {
    return ((1 - (add + del) / total) * 100).toFixed(2) + "%"
}

console.log(text(1709, 53, 572));


function ran() {
    for (var i = 0; i < 2; i++) {
        console.log(parseInt(Math.random() * 10));
    }
}

ran()