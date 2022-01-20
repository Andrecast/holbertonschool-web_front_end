
# 0x07. Accessibility

## Concepts

_For this project, students are expected to look at this concept:_

-   [A Crash Course on Accessibility](https://intranet.hbtn.io/concepts/186)

## Resources

**Read or watch**:

-   [Accessibility is not a feature. — Ethan Marcotte](https://intranet.hbtn.io/rltoken/UTlxQ9qb213Y6SP7kuCsPQ "Accessibility is not a feature. — Ethan Marcotte")
-   [How to Meet WCAG (Quickref Reference](https://intranet.hbtn.io/rltoken/8c9nVrmNWVJ--pUn1dmKVQ "How to Meet WCAG (Quickref Reference")
-   [Web Accessibility Guidebook for Developers](https://intranet.hbtn.io/rltoken/l-XGxAh6sCv8_IahP5izxg "Web Accessibility Guidebook for Developers")
-   [Testing with assistive technologies - Service Manual - GOV.UK](https://intranet.hbtn.io/rltoken/bMm4g4OpeE-Iqxdtzlu0ig "Testing with assistive technologies - Service Manual - GOV.UK")
-   [A11Y Style Guide](https://intranet.hbtn.io/rltoken/1q0B-A6MYnUuTPZOdKgIsg "A11Y Style Guide")
-   [Building Pylon-Free Web Pages: An Intro to Web Accessibility](https://intranet.hbtn.io/rltoken/66RMpeHXTYIc7NgoMHPihQ "Building Pylon-Free Web Pages: An Intro to Web Accessibility")
-   [I Threw Away my Mouse - 24 Accessibility](https://intranet.hbtn.io/rltoken/8PcPbGbZvmBtnn9dTB2LLQ "I Threw Away my Mouse - 24 Accessibility")
-   [I Used a Switch Control for a Day - 24 Accessibility](https://intranet.hbtn.io/rltoken/B7CCmybCPdoR-vy0Ljf_Kw "I Used a Switch Control for a Day - 24 Accessibility")
-   [The Myths of Color Contrast Accessibility](https://intranet.hbtn.io/rltoken/RHFJ-QN-x6sBgYDHNmAmhg "The Myths of Color Contrast Accessibility")
-   [IAAP Certification](https://intranet.hbtn.io/rltoken/lEgyRyRG4A4RFaD6R-RT2A "IAAP Certification")
-   [Accessibility Blog | Deque Systems](https://intranet.hbtn.io/rltoken/F6MKiJDGC7oahx5l1PG4tA "Accessibility Blog | Deque Systems")
-   [Tink - Léonie Watson – On technology, food & life in the digital age](https://intranet.hbtn.io/rltoken/e2vhJAVwJgCSj_qWh5d9OA "Tink - Léonie Watson – On technology, food & life in the digital age")
-   [Articles » Simply Accessible](https://intranet.hbtn.io/rltoken/JMoCv9TlEIkMM6KGXcBIlA "Articles » Simply Accessible")
-   [Accessibility Weekly](https://intranet.hbtn.io/rltoken/46XM-mspubGF2aZaPLtlTQ "Accessibility Weekly")
-   [European label (Web Accessibility): Euracert - Home page](https://intranet.hbtn.io/rltoken/DsxGlFcMObADMOuJ6y8nDw "European label (Web Accessibility): Euracert - Home page")
-   [Section508.gov | GSA Government-wide IT Accessibility Program](https://intranet.hbtn.io/rltoken/bwPuWIeb6MMZCopmv5KJOA "Section508.gov | GSA Government-wide IT Accessibility Program")

## Learning Objectives

At the end of this project, you are expected to be able to  [explain to anyone](https://intranet.hbtn.io/rltoken/YPACVtPCGlM9EBt6TZoOug "explain to anyone"),  **without the help of Google**:

-   ARIA’s main purpose
-   WCAG conformance levels (A, AA and AAA)
-   The importance of Web Accessibility
-   Tools to use for Web Accessibility

## Requirements

-   Allowed editors:  `vi`,  `vim`,  `emacs`
-   A  `README.md`  at the root of the project directory is mandatory
-   HTML and CSS have been rendered on Chrome 78 or more.

## Quiz questions

Show

## Tasks

### 0. make the "works" card focus visible

mandatory

Score:  0.00%  (Checks completed: 0.00%)

Start with this  `00-styles.css`  file:

Click to expand/hide file contents

You can use it with this  `00-index.html`  file:

[Images archive](https://intranet-projects-files.s3.amazonaws.com/holbertonschool-webstack/601/images.zip "Images archive")

Let’s start by the “Work” section:

We have an issue with the focus (moving from one link to another with the  `TAB`  key) in the Desktop version. With the DevTools, you can active the focus on the  `<a>`  inside  `.card-title`  and nothing happen.

To solve it, we need to update the way we are managing the hover state of  `.card-title`:

-   In your  `keyboard/01-styles.css`  file, in the  `/* Card WORK`  section
    -   Remove  `opacity: 0`  inside  `.card-work .card-title`
    -   Remove  `.card-work:hover .card-inner`
    -   Remove  `.card-work:hover .card-title`
    -   Target the selector  `.card-work .card-title a`  and add an opacity to 0.
    -   For  `.card-work .card-title a`  with the  `a`  in state focus and  `.card-work:hover .card-title a`:
        -   Property:  `opacity`, Value:  `1`
        -   Property:  `height`, Value:  `100%`
        -   Property:  `background-color`, Value:  `rgba(0, 0, 0, 0.7)`

Now you use the keyboard to navigate, you should see the card with the title and the dark background like when you hover the card with your mouse.

All the other elements have a blue outline around.

**Repo:**

-   GitHub repository:  `holbertonschool-web_front_end`
-   Directory:  `0x07-accessibility`
-   File:  `keyboard/01-styles.css, keyboard/01-index.html`

Done?  Help  Check your code  Ask for a new correction  QA Review

### 1. add the skip-links

mandatory

Score:  0.00%  (Checks completed: 0.00%)

Using the  `00-index.html`  provided in the previous task, in your  `skip-links/01-index.html`  file, just after the  `<body>`  HTML open tag

-   Add the  `<!-- Skip links -->`  comment
-   Create a new  `<nav>`  tag with the  `aria-label`  attribute. Put the value  `Skip links`  inside it.
    -   Create a non ordered list of class  `off-screen`
        -   Create a first  `li`  with a link inside
            -   Href:  `#a11y-primary-nav`
            -   Class:  `skip-link`
            -   Text:  `Skip to primary navigation`
        -   Create a second  `li`  with a link inside
            -   Href:  `#a11y-main-content`
            -   Class:  `skip-link`
            -   Text:  `Skip to main content`
-   On the  `<nav class="navbar-menu">`, add an id with the text:  `a11y-primary-nav`  and a  `tabindex="-1"`
-   On the  `<main>`  tag, add an id with the text:  `a11y-main-content`, and  `tabindex="-1"`

`00-article.html`  is provided to you below to repeat the same changes in your  `skip-links/01-article.html`  file

```


The name of the ID can be anything but prefixing with a11y can help us to remember why we are using an ID. (I recommend reading  [this article](https://intranet.hbtn.io/rltoken/gjgmUmcJHo0_jxGm_fz_SA "this article")  about CSS namespacing by Harry Roberts)

Using the stylesheet from the previous task, in your  `skip-links/01-styles.css`  file, in the  `/* Helpers`  section, after the  `visually-hidden`  selector

-   Target the  `off-screen`  class
    -   Property:  `left`, Value:  `-100vw`
    -   Property:  `position`, Value:  `absolute`
-   Target the  `skip-link`  class
    -   Property:  `background`, Value: link to the  `color-black`  variable
    -   Property:  `color`, Value: link to the  `color-white`  variable
    -   Property:  `left`, Value:  `0`
    -   Property:  `padding`, Value:  `.7rem`
    -   Property:  `position`, Value:  `fixed`
    -   Property:  `opacity`, Value:  `0`
    -   Property:  `top`, Value:  `0`
    -   Property:  `z-index`, Value:  `10`
    -   Property:  `transform`, Value:  `translateY(-1rem)`
    -   Property:  `transition`, Value:  `transform .2s ease-in-out, opacity .2s ease-in-out`
-   Target the  `focus`  state of  `skip-link`  class
    -   Property:  `opacity`, Value:  `1`
    -   Property:  `transform`, Value:  `translateY(0)`

**Repo:**

-   GitHub repository:  `holbertonschool-web_front_end`
-   Directory:  `0x07-accessibility`
-   File:  `skip-links/01-index.html, skip-links/01-article.html, skip-links/01-styles.css`

Done?  Help  Check your code  Ask for a new correction  QA Review

### 2. Elements must have sufficient color contrast

mandatory

Score:  0.00%  (Checks completed: 0.00%)

You are given this  `fix-a11y/00-index.html`  starter file:

As you can see, the contrast is not good. The easy fix is simply to remove the  `body`  styles in the embed  `<style>`. Do this in your  `fix-a11y/01-index.html`  file. In a real case, you could use the  [Contrast Ratio](https://intranet.hbtn.io/rltoken/SzMTbTg_QJ35_Zl3pKOb6w "Contrast Ratio")  section of the Color Picker.

Check with Axe to ensure the issue is fixed.

**Rendering the page should display something like this**

![](https://holbertonintranet.s3.amazonaws.com/uploads/medias/2020/2/6ca4565a4d207b00f718.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Credential=AKIARDDGGGOU5BHMTQX4%2F20220120%2Fus-east-1%2Fs3%2Faws4_request&X-Amz-Date=20220120T174915Z&X-Amz-Expires=86400&X-Amz-SignedHeaders=host&X-Amz-Signature=781f32d247dbd7b484537beca84a022e5a41ee74fa6424f1b8ccf49485754862)

**Repo:**

-   GitHub repository:  `holbertonschool-web_front_end`
-   Directory:  `0x07-accessibility`
-   File:  `fix-a11y/01-index.html`

Done?  Help  Check your code  Ask for a new correction  QA Review

### 3. Documents must have <title> element to aid in navigation

mandatory

Score:  0.00%  (Checks completed: 0.00%)

Taking your code from the previous task, in your  `fix-a11y/02-index.html`  file

Add a title:  `Homepage - A fake website`

Check with Axe to ensure the issue is fixed

![](https://holbertonintranet.s3.amazonaws.com/uploads/medias/2020/2/4c0ba151685ae5b2c801.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Credential=AKIARDDGGGOU5BHMTQX4%2F20220120%2Fus-east-1%2Fs3%2Faws4_request&X-Amz-Date=20220120T174915Z&X-Amz-Expires=86400&X-Amz-SignedHeaders=host&X-Amz-Signature=31acc9deb8b61d065285cfadc03d73dbcc1966edc826be9b5006de17f8cb50d8)

**Repo:**

-   GitHub repository:  `holbertonschool-web_front_end`
-   Directory:  `0x07-accessibility`
-   File:  `fix-a11y/02-index.html`

Done?  Help  Check your code  Ask for a new correction  QA Review

### 4. <html> element must have a lang attribute

mandatory

Score:  0.00%  (Checks completed: 0.00%)

Taking your code from the previous task, in your  `fix-a11y/03-index.html`  file

On the  `html`  tag, add the attribute  `lang`  with the  `en`  value.

Check with Axe to ensure the issue is fixed.

**Repo:**

-   GitHub repository:  `holbertonschool-web_front_end`
-   Directory:  `0x07-accessibility`
-   File:  `fix-a11y/03-index.html`

Done?  Help  Check your code  Ask for a new correction  QA Review

### 5. Images must have alternate text

mandatory

Score:  0.00%  (Checks completed: 0.00%)

Taking your code from the previous task, in your  `fix-a11y/04-index.html`  file

-   Locate the  `img`  that points to the  `logo.png`
    -   Add an  `alt`  attribute with the text  `Name of the logo`
-   Locate the  `img`  that points to the  `hero-img.png`
    -   Add an empty  `alt`  (decorative image)

**Repo:**

-   GitHub repository:  `holbertonschool-web_front_end`
-   Directory:  `0x07-accessibility`
-   File:  `fix-a11y/04-index.html`

Done?  Help  Check your code  Ask for a new correction  QA Review

### 6. Form elements must have labels

mandatory

Score:  0.00%  (Checks completed: 0.00%)

Taking your code from the previous task, in your  `fix-a11y/05-index.html`  file, locate the  `form`

-   Add a  `label`  just before the  `input`
    -   Class:  `visually-hidden`
    -   For:  `email`
-   On the  `input`
    -   Add an  `id`:  `email`

Axe tells use that the issue is solved. But actually, some elements should be fixed for better accessibility and usability.

-   We can change the  `type`  from  `text`  to  `email`
-   Add the attribute  `autocomplete`  with the value  `email`
-   Add the  `required`  attribute and the  `aria-required="true"`
-   Change the  `a`  to be a  `button`
-   We can remove the  `placeholder`  as it doesn’t add any value

We don’t have any error handling in our example, that should exist on the front-end / back-end side.

**Repo:**

-   GitHub repository:  `holbertonschool-web_front_end`
-   Directory:  `0x07-accessibility`
-   File:  `fix-a11y/05-index.html`

Done?  Help  Check your code  Ask for a new correction  QA Review

### 7. Links must have discernible text

mandatory

Score:  0.00%  (Checks completed: 0.00%)

In your  `fix-a11y/06-index.html`  file

-   Locate the`facebook-icon`  and add an  `aria-label`  on the  `a`  with the text  `Facebook`
-   Locate the  `twitter-icon`  and add an  `aria-label`  on the  `a`  with the text  `Twitter`

Links should never be empty, in our case, we are using a font (like  [Font Awesome](https://intranet.hbtn.io/rltoken/naAyFVeKW8Jc-yaYsYts-g "Font Awesome")) to generate icons.

**Repo:**

-   GitHub repository:  `holbertonschool-web_front_end`
-   Directory:  `0x07-accessibility`
-   File:  `fix-a11y/06-index.html`

Done?  Help  Check your code  Ask for a new correction  QA Review

### 8. Zooming and scaling must not be disabled

mandatory

Score:  0.00%  (Checks completed: 0.00%)

In your  `fix-a11y/07-index.html`  file

Locate the  `meta`  viewport and remove  `user-scalable=no`

**Repo:**

-   GitHub repository:  `holbertonschool-web_front_end`
-   Directory:  `0x07-accessibility`
-   File:  `fix-a11y/07-index.html`

Done?  Help  Check your code  Ask for a new correction  QA Review

### 9. Heading levels should only increase by one and all page content must be contained by landmarks

mandatory

Score:  0.00%  (Checks completed: 0.00%)

You can install the  [headingsMap](https://intranet.hbtn.io/rltoken/8320--V0rlFEIlCP7JjoCA "headingsMap")  extension to have a visual representation of your headings.

Taking your code from the previous task, in your  `fix-a11y/08-index.html`  file

-   Like our Techium project, we are going to create an  `h1`  just after the  `<div class="header">`  closing tag. (The  `h1`  will be sibling to the  `<div class="header">`  div)
    -   Text:  `Homepage`
-   Change  `<h6>This is me</h6>`  to be  `<h2>This is me</h2>`
-   Change  `<h1>Philip Gilbert</h1>`  to be  `<span>Philip Gilbert</span>`
-   Change  `<h6>About Me</h6>`  to be  `<h2>About Me</h2>`
-   Change  `<h1>Personal Details</h1>`  to be  `<span>Personal Details</span>`
-   Change  `<h1>My Offered Services</h1>`  to be  `<h2>My Offered Services</h2>`
-   Change  `<h4>Web Design</h4>`  to be  `<h3>Web Design</h3>`
-   Change  `<h4>Web Development</h4>`  to be  `<h3>Web Development</h3>`
-   Change  `<h1 class="counter">2536</h1>`  to be  `<span class="counter">2536</span>`
-   Change  `<h1 class="counter">6784</h1>`  to be  `<span class="counter">6784</span>`
-   Change  `<h1>Client's Feedback About Me</h1>`  to be  `<h2>Client's Feedback About Me</h2>`
-   Change  `<h4>Harriet Maxwell</h4>`  to be  `<span>Harriet Maxwell</span>`
-   Change  `<h1>Choose Your Plan</h1>`  to be  `<h2>Choose Your Plan</h2>`
-   Change  `<h1>01</h1>`  to be  `<h3>01</h3>`
-   Change  `<h1>$199.00</h1>`  to be  `<span>$199.00</span>`
-   Change  `<h4>About Me</h4>`  to be  `<span>About Me</span>`
-   Change  `<h4>Newsletter</h4>`  to be  `<span>Newsletter</span>`
-   Change  `<h4>Follow Me</h4>`  to be  `<span>Follow Me</span>`

Fixing wrong  `headings`  is not an easy task. Headings represent the outline of your content. Like the table of contents in a book, headings should help to understand what is inside your page.

Always ask yourself if that word or sentence would make sense for anybody visiting your website.

**Repo:**

-   GitHub repository:  `holbertonschool-web_front_end`
-   Directory:  `0x07-accessibility`
-   File:  `fix-a11y/08-index.html`

Done?  Help  Check your code  Ask for a new correction  QA Review

### 10. Document must have one main landmark

mandatory

Score:  0.00%  (Checks completed: 0.00%)

You can install the  [Landmarks](https://intranet.hbtn.io/rltoken/3UQtcJ5reW3Wyt7mYBByfA "Landmarks")  extension to visually locate the landmarks on your pages.

Taking your code from the previous task, in your  `fix-a11y/09-index.html`  file

-   Locate the  `header`  class and convert that  `<div>`  into a  `<header>`  tag (only change the tag, no need to change or remove other attributes in the tag)
-   Convert the  `<div class='nav'>`  into a  `<nav>`  element (only change the tag, no need to change or remove other attributes in the tag)
-   Wrap everything from the  `<h1>Homepage</h1>`  to before the  `<div class="footer">`  in a  `<main>`  tag.
-   Locate the  `footer`  class and transform the  `div`  to a  `<footer>`  (only change the tag, no need to change or remove other attributes in the tag)
-   Locate all divs with the  `section`  class, and update divs to be  `<section>`  (only change the tag, no need to change or remove other attributes in the tag). Except the one with the  `Projects Completed`  text. Sections should have headings, we don’t have one anymore.

If you open the  `landmarks`  extension, you should see the landmarks showing.

Tip

Remember that  `header`,  `section`,  `footer`  etc contain a default role (=landmarks).

All automated issues are now solved! You fixed around 50% of accessibility issues. The rest are manual issues, tested using screen-reading tools or just reading the code.

**Repo:**

-   GitHub repository:  `holbertonschool-web_front_end`
-   Directory:  `0x07-accessibility`
-   File:  `fix-a11y/09-index.html`

Done?  Help  Check your code  Ask for a new correction  QA Review

### 11. More than 2 elements become list

mandatory

Score:  0.00%  (Checks completed: 0.00%)

Automated tools can’t always alert about elements that should exist as a list.

Taking your code from the previous task, in your  `fix-a11y/10-index.html`  file

-   Locate the  `nav`
    -   Transform the  `<div>`  in a  `<ul>`  and every  `<p>`  in an  `li`
-   Locate the div with  `package-list`  class
    -   Transform the children in an  `ul`  with the 3 spans being each an  `li`

**Repo:**

-   GitHub repository:  `holbertonschool-web_front_end`
-   Directory:  `0x07-accessibility`
-   File:  `fix-a11y/10-index.html`

Done?  Help  Check your code  Ask for a new correction  QA Review

Copyright © 2022 Holberton Inc, All rights reserved.