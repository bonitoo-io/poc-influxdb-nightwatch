const chromedriver = require('chromedriver');
const glob = require('glob')
const fs = require('fs')
//const geckodriver = require('geckodriver');

//globbing to make it easier to add dynamic page structure
const base_page_glob = "pages/**/*"
const page_obj_array = Array()

glob.sync(base_page_glob).forEach(function(file, index){
    if(fs.lstatSync(file).isDirectory()){
        page_obj_array.push(file)
    }
})

console.log("DEBUG glob: " + page_obj_array)

module.exports = {
    silent: !process.env.NIGHTWATCH_VERBOSE,
//    page_objects_path: ["./pages/basic","./pages/special"],
    page_objects_path: page_obj_array,
    test_settings: {
        default: {
            webdriver: {
                start_process: true,
                port: 4444
            },
            screenshots: {
                enabled: true,
                path: 'screenshots'
            }
        },
        chromeHeadless: {
            webdriver: {
                server_path: chromedriver.path,
                cli_args: ['--port=4444']
            },
            desiredCapabilities: {
                browserName: 'chrome',
                javascriptEnabled: true,
                acceptSslCerts: true,
                chromeOptions: {
                    args: ['headless', 'disable-gpu']
                }
            }
        },
        chrome: {
            webdriver: {
                server_path: chromedriver.path,
                cli_args: ['--port=4444']
            },
            desiredCapabilities: {
                browserName: 'chrome',
                javascriptEnabled: true,
                acceptSslCerts: true,
                chromeOptions: {
                    args: ['disable-gpu']
                }
            }
        },
        /* firefox: {
            webdriver: {
                server_path: geckodriver.path,
                cli_args: ['--port', '4444', '--log', 'debug']
            },
            desiredCapabilities: {
                browserName: 'firefox',
                javascriptEnabled: true,
                acceptSslCerts: true,
                marionette: true
            }
        } */
    }
};
