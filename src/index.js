module.exports = function reverse(n) {
    return Number(
        String(n)
            .split("")
            .reverse()
            .filter((num) => num !== "-")
            .join("")
    );
};
