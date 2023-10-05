const fs = require("fs");

fs.readFile("data.json", "utf8", (err, data) => {
    if (err === null) {
        console.log('success!');

        const jsonString = JSON.parse(data);

        let value = Infinity;
        let minactive = null;

        for (const active of jsonString) {
            if (active.value < value) {
                value = active.value;
                minactive = active;
            }
        }

        fs.writeFile('output.txt', `${minactive.txt} : ${minactive.value}`, (err) => {
            if (err === null) {
                console.log("Successfully done!");
            } else {
                console.log(err);
            }
        });
    } else {
        console.log(err);
    }
});
