const path = require("path");
const exec = require("child_process").exec;
const express = require("express");
const app = express(); // create express app

app.use('/', express.static('build/'))
app.use('/img', express.static('build/img'))

app.get("/*", (req, res) => {
    res.sendFile(path.join(__dirname, "build", "index.html"));
});

// start express server on port 5000
app.listen(1026, () => {
    console.log("Docs Server Listening on port: 1026");
});

update()

async function update() {
    exec(`git pull origin master`, (error, stdout) => {
        let response = error || stdout;
        if (!error) {
            if (response.includes("Already up to date.")) {
                console.log('Docs already up to date. No changes since last pull')
            } else {

                exec(`npm install`, (error1, stdout1) => {

                    if (stdout1) {

                        exec(`npm run build`, (error2, stdout2) => {

                            if (stdout2) {
                                setTimeout(() => {
                                    process.exit();
                                }, 1000);
                            }

                        })

                    }

                })
            }
        }
    });
}

setInterval(function () {
    update()
}, 30 * 1000);