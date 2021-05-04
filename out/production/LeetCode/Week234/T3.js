var evaluate = function(s, knowledge) {
    Object.values(knowledge).forEach(([key, value]) => {
        const reg = new RegExp('\\(' + key + '\\)', 'g');
        s = s.replace(reg, value);
    })
    s = s.replace(/\(\w+\)/g, '?');
    return s;
};