/**
 * Function related to google Analytics
*/
import ReactGA from 'react-ga4';

//the tracking ID value for google Analytics
const TRACKING_ID = "G-EDGC6T8YR3";

// initialization fucntion for google Analytics
export function initializeGA() {
    ReactGA.initialize(TRACKING_ID);
}

// fucntion to record visit to page
export function recordGAPage(message){
    ReactGA.send(message);
    // ReactGA.pageview(message); // ga verison ga4 should use send
}

//Fucntion to record a specific event withg more details
export function recordGAEvent(label, action, category){
    ReactGA.event({
        category: category,
        action: action,
        label: label 
     });
}