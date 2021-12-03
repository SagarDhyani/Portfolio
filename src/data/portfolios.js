import css1 from '../img/portImages/cv_css.png';
import p1 from '../img/portImages/1.png';
import p2 from '../img/portImages/2.png';
import p3 from '../img/portImages/3.png';
import p4 from '../img/portImages/4.png';
import p5 from '../img/portImages/5.png';
import p6 from '../img/portImages/6.png';
import p7 from '../img/portImages/7.png';

const portfolios = [
    {
        id: 1,
        // category: 'Web Application',
        image: css1,
        link1: 'https://github.com/SagarDhyani/courseraClone',
        link2: 'https://coursera-cloning.herokuapp.com/',
        title: 'Coursera Clone',
        text: 'A web application to provide online degrees and courses by top universities around the world.',
        stack: "TECH STACK: HTML | CSS | JAVASCRIPT | MongoDB",
    },
    
    {
        id: 2,
        // category: 'Booking Platform',
        image: p1,
        link1: 'https://github.com/SagarDhyani/TravelTech',
        link2: 'https://aazadi-traveltech.vercel.app/',
        title: 'TravelTech',
        text: 'A web application to provide RV rentals. RV rental is simple, safe and secure with Aazady India. The choice is yours',
        stack: "TECH STACK: React.js | Bootstrap | MongoDb-Atlas | Node.js | Express | Mongoose ",
        
    },
    
]

export default portfolios;
