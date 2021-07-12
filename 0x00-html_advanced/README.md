<h1 align="center"> 0x00-html_advanced <h1>

# Welcome!!!

<p> In this project, you will learn how to use HTML tags to structure a web page. No CSS, no styling - don’t worry, the final page will be “ugly” it’s normal, it’s not the purpose of this project.</p>

# Resources
## Read or watch:
* [HTML 5.2](https://intranet.hbtn.io/rltoken/0qrWxRjFnohd-DMZwIakuA)
* [HTML: HyperText Markup Language | MDN](https://intranet.hbtn.io/rltoken/M-CcOLx8YG8znnc4qxSscg)
* [HTML Reference - A free guide to all HTML elements and attributes](https://intranet.hbtn.io/rltoken/5O-P-PsGJ5tXOOmKZwTNvg)
* [Can I use… Support tables for HTML5, CSS3, etc](https://intranet.hbtn.io/rltoken/qonyw8QCI9Bf8jjiib9tug)
* [HTML Cheat Sheet - WebsiteSetup](https://intranet.hbtn.io/rltoken/IL-IEL5JBB6FuDME5oZNRQ)

# Learning Objectives

## At the end of this project, you are expected to be able to explain to anyone, without the help of Google:

- Which guidelines to follow for HTML
- How to create the skeleton of an HTML5 page
- How to use semantic HTML tags to structure a web page
- Which use cases to use div vs span
- The semantic value’s of header, main, footer, article, nav, section, aside
- How to use headings (and why it’s important to follow the hierarchical order)
- How to make lists in HTML
- The differences between medias (SVG, GIF, PNG, JPG)
- How to structure data in a table
- How to integrate a video in a webpage
- How to integrate an audio file in a webpage
- How to embed external content
- How to correctly structure an HTML page

## Requirements
* A README.md file at the root of the folder of the project is mandatory
* Your code should be W3C compliant and validate with W3C-Validator
* Techium will be the name of the company we will use across our webpages.

## Sitemap of the project

<img src="img/1.png" alt="Sitemap of the project">

## Wireframe of Techium project

<img src="img/2.png" alt="Wireframe of Techium project">

# Tasks

## [0. Create your first webpage](0-index.html)


**Create your first HTML file 0-index.html with:**
  - Add the doctype on the first line (without any comment).
  - After the doctype, open and close a html tag.
  - Add the language tag, specify English for ISO language code and add the direction tag (ltr or rtl) on the html tag.
  - Open your file in your browser (the page should be blank).
###### **W3C won’t pass - you can ignore it.**

## [1. Structure your webpage](1-index.html)

Copy the content of 0-index.html into 1-index.html

**Create the head and body sections**

* inside the html tag, create the head and body tags (empty) in this order.
###### **W3C won’t pass - you can ignore it.**

## [2. The head - meta charset, viewport, title, description, favicons](2-index.html)
Copy the content of 1-index.html into 2-index.html

<img src="img/3.jpg" alt="The head meta charset, viewport, title, description, favicons">

### **Meta charset:**

* add a meta tag inside the head:  
  - add the charset attribute with the value utf-8

### **Viewport:**

* add a meta tag inside the head:  
  - add an attribute name on the tag and specify that it is the meta viewport  
  - add the key width with the value device-width  
  - add the key initial-scale with the value 1.0  
  - add the key viewport-fit with the value cover  

### **Title:**

* add the title tag just after the meta viewport with value: Homepage - Techium  

###  **Description:**

* add a meta tag inside the head section  
  - add an attribute name on the tag and specify that is the meta description
  - add another attribute called content
  - add the following description: Techium is a digital agency

### **Favicons:**

* download the image above to use as a favicon  
* Use the tool at https://realfavicongenerator.net/ to generate all the favicon formats  
* take the favicon.ico and favicon.png and place these at the root of your project directory, so that it is siblings with your [0-9]+-index.html files.  
* inside the head, create 2 link tags with these 3 attributes: rel, type, and href.  
  - the first link tag:  
    - rel: icon  
    - type: image/x-icon  
    - href: ./favicon.ico  
  - the second link tag:  
    - rel: icon  
    - type: image/png  
    - href: ./favicon.png  

## [3. Simple header, main, footer](3-index.html)

Copy the content of 2-index.html into 3-index.html

### **Header:**

* create the header of your page between the open and close body tag
* put the text Header inside the header

### **Main:**

* create the main tag after the header tag
* put the text Main content inside your main tags

### **Footer:**

* create the footer tag after the main tag
* put the text Footer inside the footer tags
