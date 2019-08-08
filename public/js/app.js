/**
* demo.js
* http://www.codrops.com
*
* Licensed under the MIT license.
* http://www.opensource.org/licenses/mit-license.php
* 
* Copyright 2019, Codrops
* http://www.codrops.com
*/
{
    // helper functions
    const MathUtils = {
        // map number x from range [a, b] to [c, d]
        map: (x, a, b, c, d) => (x - a) * (d - c) / (b - a) + c,
        // linear interpolation
        lerp: (a, b, n) => (1 - n) * a + n * b
    };

    // body element
    const body = document.body;
    
    // calculate the viewport size
    let winsize;
    const calcWinsize = () => winsize = {width: window.innerWidth, height: window.innerHeight};
    calcWinsize();
    // and recalculate on resize
    window.addEventListener('resize', calcWinsize);

    // scroll position and update function
    let docScroll;
    const getPageYScroll = () => docScroll = window.pageYOffset || document.documentElement.scrollTop;
    window.addEventListener('scroll', getPageYScroll);

    // Item
    class Item {
        constructor(el) {
            // the .item element
            this.DOM = {el: el};
            // the inner image
            this.DOM.image = this.DOM.el.querySelector('.item__img');
            this.renderedStyles = {
                // here we define which property will change as we scroll the page and the items is inside the viewport
                // in this case we will be translating the image on the y-axis
                // we interpolate between the previous and current value to achieve a smooth effect
                innerTranslationY: {
                    // interpolated value
                    previous: 0, 
                    // current value
                    current: 0, 
                    // amount to interpolate
                    ease: 0.1,
                    // the maximum value to translate the image is set in a CSS variable (--overflow)
                    maxValue: parseInt(getComputedStyle(this.DOM.image).getPropertyValue('--overflow'), 10),
                    // current value setter
                    // the value of the translation will be:
                    // when the item's top value (relative to the viewport) equals the window's height (items just came into the viewport) the translation = minimum value (- maximum value)
                    // when the item's top value (relative to the viewport) equals "-item's height" (item just exited the viewport) the translation = maximum value
                    setValue: () => {
                        const maxValue = this.renderedStyles.innerTranslationY.maxValue;
                        const minValue = -1 * maxValue;
                        return Math.max(Math.min(MathUtils.map(this.props.top - docScroll, winsize.height, -1 * this.props.height, minValue, maxValue), maxValue), minValue)
                    }
                }
            };
            // set the initial values
            this.update();
            // use the IntersectionObserver API to check when the element is inside the viewport
            // only then the element translation will be updated
            this.observer = new IntersectionObserver((entries) => {
                entries.forEach(entry => this.isVisible = entry.intersectionRatio > 0);
            });
            this.observer.observe(this.DOM.el);
            // init/bind events
            this.initEvents();
        }
        update() {
            // gets the item's height and top (relative to the document)
            this.getSize();
            // sets the initial value (no interpolation)
            for (const key in this.renderedStyles ) {
                this.renderedStyles[key].current = this.renderedStyles[key].previous = this.renderedStyles[key].setValue();
            }
            // translate the image
            this.layout();
        }
        getSize() {
            const rect = this.DOM.el.getBoundingClientRect();
            this.props = {
                // item's height
                height: rect.height,
                // offset top relative to the document
                top: docScroll + rect.top 
            }
        }
        initEvents() {
            window.addEventListener('resize', () => this.resize());
        }
        resize() {
            // on resize rest sizes and update the translation value
            this.update();
        }
        render() {
            // update the current and interpolated values
            for (const key in this.renderedStyles ) {
                this.renderedStyles[key].current = this.renderedStyles[key].setValue();
                this.renderedStyles[key].previous = MathUtils.lerp(this.renderedStyles[key].previous, this.renderedStyles[key].current, this.renderedStyles[key].ease);
            }
            // and translates the image
            this.layout();
        }
        layout() {
            // translates the image
            this.DOM.image.style.transform = `translate3d(0,${this.renderedStyles.innerTranslationY.previous}px,0)`;
        }
    }

    // SmoothScroll
    class SmoothScroll {
        constructor() {
            // the <main> element
            this.DOM = {main: document.querySelector('main')};
            // the scrollable element
            // we translate this element when scrolling (y-axis)
            this.DOM.scrollable = this.DOM.main.querySelector('div[data-scroll]');
            // the items on the page
            this.items = [];
            [...this.DOM.main.querySelectorAll('.content > .item')].forEach(item => this.items.push(new Item(item)));
            // here we define which property will change as we scroll the page
            // in this case we will be translating on the y-axis
            // we interpolate between the previous and current value to achieve the smooth scrolling effect
            this.renderedStyles = {
                translationY: {
                    // interpolated value
                    previous: 0, 
                    // current value
                    current: 0, 
                    // amount to interpolate
                    ease: 0.1,
                    // current value setter
                    // in this case the value of the translation will be the same like the document scroll
                    setValue: () => docScroll
                }
            };
            // set the body's height
            this.setSize();
            // set the initial values
            this.update();
            // the <main> element's style needs to be modified
            this.style();
            // init/bind events
            this.initEvents();
            // start the render loop
            requestAnimationFrame(() => this.render());
        }
        update() {
            // sets the initial value (no interpolation) - translate the scroll value
            for (const key in this.renderedStyles ) {
                this.renderedStyles[key].current = this.renderedStyles[key].previous = this.renderedStyles[key].setValue();
            }   
            // translate the scrollable element
            this.layout();
        }
        layout() {
            // translates the scrollable element
            this.DOM.scrollable.style.transform = `translate3d(0,${-1*this.renderedStyles.translationY.previous}px,0)`;
        }
        setSize() {
            // set the heigh of the body in order to keep the scrollbar on the page
            body.style.height = `${this.DOM.scrollable.scrollHeight}px`;
        }
        style() {
            // the <main> needs to "stick" to the screen and not scroll
            // for that we set it to position fixed and overflow hidden 
            this.DOM.main.style.position = 'fixed';
            this.DOM.main.style.width = this.DOM.main.style.height = '100%';
            this.DOM.main.style.top = this.DOM.main.style.left = 0;
            this.DOM.main.style.overflow = 'hidden';
        }
        initEvents() {
            // on resize reset the body's height
            window.addEventListener('resize', () => this.setSize());
        }
        render() {
            // update the current and interpolated values
            for (const key in this.renderedStyles ) {
                this.renderedStyles[key].current = this.renderedStyles[key].setValue();
                this.renderedStyles[key].previous = MathUtils.lerp(this.renderedStyles[key].previous, this.renderedStyles[key].current, this.renderedStyles[key].ease);
            }
            // and translate the scrollable element
            this.layout();
            
            // for every item
            for (const item of this.items) {
                // if the item is inside the viewport call it's render function
                // this will update the item's inner image translation, based on the document scroll value and the item's position on the viewport
                if ( item.isVisible ) {
                    item.render();
                }
            }
            
            // loop..
            requestAnimationFrame(() => this.render());
        }
    }

    /***********************************/
    /********** Preload stuff **********/

    // Preload images
    const preloadImages = () => {
        return new Promise((resolve, reject) => {
            imagesLoaded(document.querySelectorAll('.item__img'), {background: true}, resolve);
        });
    };
    
    // And then..
    preloadImages().then(() => {
        // Remove the loader
        document.body.classList.remove('loading');
        // Get the scroll position
        getPageYScroll();
        // Initialize the Smooth Scrolling
        new SmoothScroll();
        animate();
    });
}



function animate(){


    const hero = document.querySelector('.hero');
const slider = document.querySelector('.slider');
const logo = document.querySelector('#logo');
const hamburger = document.querySelector('.hamburger');
const headline = document.querySelector('.headline');

// const aboutimg = document.querySelector('.aboutimg');
// const aboutp = document.querySelector('.about-p');
// const abouth2 = document.querySelector('.abouth2');
// const sola = document.querySelector('.second-section');



var tl = new TimelineMax({});

tl.fromTo(hero, 1 , {height: "0%"}, {height: "80%", ease: Power2.easeInOut})
.fromTo(hero, 1.2, {width: "100%"}, {width: "80%", ease: Power2.easeInOut})
.fromTo(slider, 1.2, {x: "-100%"}, {x: "0%", ease: Power2.easeInOut}, "-=1.2")
.fromTo(logo, 0.5, {opacity: 0, x: 30}, {opacity: 1, x: 0}, "-=0.5")
.fromTo(hamburger, 0.5, {opacity:0, x: 30}, {opacity:1, x: 0}, "-=0.5" )

// .fromTo(sola, 0.5, {opacity:0}, {opacity:1}, "-=1.2" )
// .fromTo(aboutimg, 0.5, {opacity:0, x: 30}, {opacity:1, x: 0}, "-=0.5" )
// .fromTo(aboutp, 0.5, {opacity:0, x: 30}, {opacity:1, x: 0}, "-=0.5" )
// .fromTo(abouth2, 0.5, {opacity:0, x: 30}, {opacity:1, x: 0}, "-=0.5" )

}



var typed = new Typed('#work', {
    strings: ["ghost programmer", "software developer", "freelancer", "computer technician"],
	
		// typing speed
		typeSpeed: 100,
        backSpeed: 20,

        loop: true,
    
        backDelay: 4000,
	
		// show cursor
        showCursor: false,
        
        fadeOut: true,
	

	
});


(function() {
	var triggerBttn = document.getElementById( 'trigger-overlay' ),
		overlay = document.querySelector( 'div.overlay' ),
		closeBttn = overlay.querySelector( 'button.overlay-close' );
		transEndEventNames = {
			'WebkitTransition': 'webkitTransitionEnd',
			'MozTransition': 'transitionend',
			'OTransition': 'oTransitionEnd',
			'msTransition': 'MSTransitionEnd',
			'transition': 'transitionend'
		},
		transEndEventName = transEndEventNames[ Modernizr.prefixed( 'transition' ) ],
		support = { transitions : Modernizr.csstransitions };

	function toggleOverlay() {
		if( classie.has( overlay, 'open' ) ) {
			classie.remove( overlay, 'open' );
			classie.add( overlay, 'close' );
			var onEndTransitionFn = function( ev ) {
				if( support.transitions ) {
					if( ev.propertyName !== 'visibility' ) return;
					this.removeEventListener( transEndEventName, onEndTransitionFn );
				}
				classie.remove( overlay, 'close' );
			};
			if( support.transitions ) {
				overlay.addEventListener( transEndEventName, onEndTransitionFn );
			}
			else {
				onEndTransitionFn();
			}
		}
		else if( !classie.has( overlay, 'close' ) ) {
			classie.add( overlay, 'open' );
		}
	}

	triggerBttn.addEventListener( 'click', toggleOverlay );
	closeBttn.addEventListener( 'click', toggleOverlay );
})();


var secondsection = document.getElementById("second-section");
  

$('#facebook').click(function(){

    $("#overlay-close").trigger( "click");
    
});

$('#github').click(function(){

    $("#overlay-close").trigger( "click");
    
});