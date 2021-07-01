const IrcbloqResourceServer = require('../index');

const resourceServer = new IrcbloqResourceServer();

// Test the upgrade funciton.
resourceServer.checkUpdate().then(updateInfo => {
    if (updateInfo){
        console.log('updateInfo:', updateInfo);
        resourceServer.upgrade(downloadInfo => {
            console.log(`phase: ${downloadInfo.phase}`);
        })
            .then(() => {
                console.log('upgrade finish');
            });
    } else {
        console.log('External-resources are the latest version');
    }
})
    .catch(err => {
        console.error('Error while checking for update: ', err);
    });
