# Vastra Saree Atelier

Build a premium, animated, single-page website for a luxury saree brand called "VASTRA" (replace with my brand name). Use HTML, CSS and vanilla JS (or React + GSAP/Framer Motion). It must be fully responsive and look as good on mobile as on desktop.

STYLE
- Palette: deep wine #6e1a26, dark maroon-black #1b0709, cream #f4ead8, paper #f8f1e3, antique gold #c9a063.
- Fonts: Cormorant Garamond (headings, large and elegant) and Jost light (body, small caps with wide letter-spacing).
- Mood: heirloom, cinematic, warm, editorial. Lots of whitespace on the cream sections.

SECTIONS AND ANIMATIONS (in order)
1. Intro screen: full-screen waving red silk fabric (looping video or WebGL/canvas ripple) with a circular cream logo badge floating in the centre. After about 3 seconds the whole screen slides up to reveal the site, and the navbar fades down.
2. Hero: dark maroon background with a photo of two models in sarees on the right and a warm floral and brass-lamp scene on the left. Small caps text "SAREES WOVEN WITH", then a huge serif "CULTURE" with a gold hand-drawn underline swoosh that draws itself with stroke-dashoffset. Below that, "HEIRLOOM DRAPES FOR MODERN STORIES" and an outlined pill button "EXPLORE THE COLLECTION →". At the bottom, a strip: "The Vastra Signature: Finest Fabrics, Heritage Craftsmanship, Enduring Elegance". Staggered fade-up on the text and a slide-in on the models. Add a slow parallax on the images.
3. Navbar: logo circle on the left, links HOME, NEW ARRIVALS, CATEGORIES, SHOP BY COLOR, BEST SELLER, CONTACT with an underline-grow hover. It starts transparent and becomes cream with a blur after scrolling. On mobile it becomes a MENU button that opens a full-screen overlay with large serif links.
4. New Arrivals (cream, pinned horizontal scroll): left column has the small caps label "NEW ARRIVALS", the heading "Fresh Weaves, Timeless Grace", a short paragraph and a wine button "DISCOVER NEW ARRIVALS →". On the right, tall portrait photo cards (pink, coral, lavender, yellow, green, blue sarees). The section pins to the screen and the cards slide sideways as the user scrolls down, with a thin progress bar. Alternate cards sit slightly lower. Image zoom on hover.
5. Shop by Color: a huge heading "SHOP BY COLOR" in wine. Below it is a row of tall arch-shaped cards (rounded top) for Red, Green, Yellow, Blue, Pink and Purple. Each has a vertical gradient from its colour to a soft cream, a serif colour name, a tiny caps tagline (Love & ritual, Abundance & grace, and so on) and a circular arrow button at the bottom. Cards rise in with a stagger and lift on hover. The row scrolls horizontally on mobile.
6. Best Sellers: left side has "OUR MOST LOVED" and the heading "Best Sellers", a paragraph and "EXPLORE ALL ●". On the right, arch-shaped photo cards of models in sarees, with the saree name at the bottom and a lift on hover.
7. Contact: split layout with the heading "We'd Love to Hear From You" on the left and a full-height photo of two smiling women in sarees on the right. Below that, three columns: contact info with round icons (email, phone, studio address, GET DIRECTIONS button), a minimal underline-style form (name, email, message, send button), and a maroon gradient quote panel with italic serif text: "Every message is a thread — woven into who we become."
8. Footer: centred small caps copyright.

GENERAL
- Reveal-on-scroll (fade and translate-up) on every block, with smooth easing (cubic-bezier .2,.8,.2,1).
- Smooth scrolling, hover micro-interactions, and a lazy-loaded image placeholder for each photo.
- Use the image files listed below, or placeholder paths I can swap: hero-models.jpg, hero-florals.jpg, silk-intro.mp4 (or silk.jpg), arrival-1…6.jpg, bestseller-1…5.jpg, contact-duo.jpg.
2. Image prompts (Midjourney, Firefly, Ideogram, etc.)
Use --ar 3:4 for portrait shots and --ar 16:9 for the hero.
HERO MODELS: Two elegant Indian women in luxury silk sarees (one deep red with gold zari, one black with embroidered florals), seated and standing together in a dark moody studio, warm cinematic lighting, brass lamps and marigold garlands, editorial fashion photography, shallow depth of field, 16:9

HERO FLORALS: Close-up of marigolds, roses and jasmine garlands beside a brass urn in warm candlelight, soft bokeh, dark maroon background, cinematic, 16:9

SILK INTRO: Macro shot of flowing deep-red Banarasi silk fabric with gold zari patterns, soft folds waving, dramatic warm light, ultra detailed, 9:16

NEW ARRIVALS (make six, changing the colour): Portrait of an Indian woman wearing a [hot pink / coral / lavender / yellow / sage green / sky blue] hand-painted floral silk saree, soft natural window light, pastel set with flowers, fashion editorial, 3:4

BEST SELLERS (make five): Full-length portrait of an Indian woman in a [yellow / lavender / pink / green / blue] organza saree with floral embroidery, standing in a sunlit courtyard with an arched doorway, elegant pose, 2:3

CONTACT: Two smiling young Indian women in pastel silk sarees, close together, warm golden-hour light, soft background of flowers, candid editorial portrait, 4:3
Tips
Generate every image at a high resolution, and use the same lighting words across the set so they look like one shoot.
Real product photos of your own sarees will look better than AI images for the New Arrivals and Best Sellers sections. Use AI images only for the hero, the florals and the intro.
If you want the exact silk-wave intro, use a short looping video or a WebGL shader, not a static image. use realistic saree images with women wearing them - finish the job within credit limit

This project was built with [Lovable](https://lovable.dev).

## Build with Lovable

Continue developing this project in the [Lovable editor](https://lovable.dev/projects/48bc389e-a2ce-47f3-beb7-62337a3839fe).

- **Ship faster**: describe what you want to build and Lovable handles the code.
- **Stay in sync**: every change made in Lovable is committed straight to this repository.
- **Full ownership**: this code is yours. Push to `main` on GitHub and your changes sync back into Lovable, ready for your next prompt.

## Development

Prefer working locally? You need Node.js and npm — [install with nvm](https://github.com/nvm-sh/nvm#installing-and-updating).

```sh
git clone <this-repository-url>
cd <repository-name>
npm i
npm run dev
```
