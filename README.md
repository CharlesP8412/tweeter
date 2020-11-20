# Tweeter Project

Tweeter is a simple, single-page Twitter clone.  

Front-end was artisinally hand crafted using HTML, AJAX, CSS, jQuery; 

Back-end provided by Lighthouse Labs using Node, Express and MongoDB. 

## Screenshots
!["Tweeter mobile view"](https://raw.githubusercontent.com/CharlesP8412/tweeter/master/docs/tweeter-mobileDisplay.png)
!["Tweeter in full display"](https://raw.githubusercontent.com/CharlesP8412/tweeter/master/docs/tweeter-lgDisplay.png)

## Getting Started

1. Fork this repository, then clone your fork of this repository.
2. Install dependencies using the `npm install` command.
3. Start the web server using the `npm run local` command. The app will be served at <http://localhost:8080/>.
4. Go to <http://localhost:8080/> in your browser.

## Server Dependencies

- Express
- Node 5.10.x or above
- Body-parser
- Chance

## Front-End (Called in HTML)

- Viewport
- JQuery
- fontAwesome
- Moment
- Google Font API

### Known Issues
- Tweet Actions (Flag, Re-Tweet, Like) are not operational.  Icons are in place and behave as buttons but no actions occur when clicked.

#### Features
- Single Page Application - No refresh required; all the information POST and GET are triggered within actions on the site.
- Responsive Design - Designed to support various display sizes, and transition between various sizes on the fly.


- Write a Tweet - Will open a text area and shift focus; the box will close as the user scrolls out of view (draft tweets will remain).
- Tweet Validation - Will not post empty tweets, or tweets over 140 characters.
- Tweet Character Counter - As the user types the couter will give automatically update with remaining characters. (Will show when past the limit)
- Scroll to Top Button will appear as the user start scrolling down.

