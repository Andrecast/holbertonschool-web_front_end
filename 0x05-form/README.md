# 0x05. Forms

![](https://holbertonintranet.s3.amazonaws.com/uploads/medias/2019/12/abbff2217b3cc83e050d.jpeg?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Credential=AKIARDDGGGOU5BHMTQX4%2F20211217%2Fus-east-1%2Fs3%2Faws4_request&X-Amz-Date=20211217T013401Z&X-Amz-Expires=86400&X-Amz-SignedHeaders=host&X-Amz-Signature=ea98a4e815d6f612409443e4910b77d624ccf7b86b9f26a62ce141131c7c2c22)

## Resources

**Read or watch**:

-   [An Extensive Guide To Web Form Usability — Smashing Magazine](https://intranet.hbtn.io/rltoken/L7JpxWt0F5VsUtwsDGaJYg "An Extensive Guide To Web Form Usability — Smashing Magazine")
-   [Forms - UX Movement](https://intranet.hbtn.io/rltoken/FaOz7GkGRSnrlYKL91sWYQ "Forms - UX Movement")
-   [Placeholders in Form Fields are Harmful (Video)](https://intranet.hbtn.io/rltoken/kkI4hp8L2xriaBiZ4aay5g "Placeholders in Form Fields are Harmful (Video)")
-   [The Anatomy of Accessible Forms: Best Practices | Deque](https://intranet.hbtn.io/rltoken/Suk4Imd1PwQWQfMARmUyOg "The Anatomy of Accessible Forms: Best Practices | Deque")
-   [Pure CSS Custom Error Messaging for Default Form Elements – Sarah Holley Design](https://intranet.hbtn.io/rltoken/mt7GbkQzlwq86rGgLXuKug "Pure CSS Custom Error Messaging for Default Form Elements – Sarah Holley Design")

**MDN resources:**

-   [HTML forms - Learn web development | MDN](https://intranet.hbtn.io/rltoken/FqmevqAf9FQJTCLzWHkR1g "HTML forms - Learn web development | MDN")
-   [form - HTML: Hypertext Markup Language | MDN](https://intranet.hbtn.io/rltoken/SSy7rj0I3adIOAdQYHZlTg "form - HTML: Hypertext Markup Language | MDN")
-   [fieldset: The Field Set element - HTML: Hypertext Markup Language | MDN](https://intranet.hbtn.io/rltoken/Dei_L42fLRZU_AJ6ZrEHYQ "fieldset: The Field Set element - HTML: Hypertext Markup Language | MDN")
-   [legend - HTML: Hypertext Markup Language | MDN](https://intranet.hbtn.io/rltoken/ZkZo0GMrr0swRR5qOAbZpA "legend - HTML: Hypertext Markup Language | MDN")
-   [label - HTML: Hypertext Markup Language | MDN](https://intranet.hbtn.io/rltoken/riHRpJYmDTPKnhEnmim8Og "label - HTML: Hypertext Markup Language | MDN")
-   [input: The Input (Form Input) element - HTML: Hypertext Markup Language | MDN](https://intranet.hbtn.io/rltoken/I-tvtRp2hlUSVkdNVuOkzQ "input: The Input (Form Input) element - HTML: Hypertext Markup Language | MDN")
-   [tabindex - HTML: Hypertext Markup Language | MDN](https://intranet.hbtn.io/rltoken/IVNFtpOTz5HH2hhPVirm1w "tabindex - HTML: Hypertext Markup Language | MDN")
-   [accesskey - HTML: Hypertext Markup Language | MDN](https://intranet.hbtn.io/rltoken/hpkb0GWg6d58CT3VbJBYUA "accesskey - HTML: Hypertext Markup Language | MDN")
-   [button: The Button element - HTML: Hypertext Markup Language | MDN](https://intranet.hbtn.io/rltoken/lWIyMaHK4ZXYyIftpFkydQ "button: The Button element - HTML: Hypertext Markup Language | MDN")
-   [select - HTML: Hypertext Markup Language | MDN](https://intranet.hbtn.io/rltoken/yW_Ov-o5Z5-WHRqOH1yrWQ "select - HTML: Hypertext Markup Language | MDN")
-   [optgroup - HTML: Hypertext Markup Language | MDN](https://intranet.hbtn.io/rltoken/fd435kOSi_vDQuxS9C_hzQ "optgroup - HTML: Hypertext Markup Language | MDN")
-   [datalist - HTML: Hypertext Markup Language | MDN](https://intranet.hbtn.io/rltoken/9zHNcNs_TijZGoXlSPE6UQ "datalist - HTML: Hypertext Markup Language | MDN")
-   [textarea - HTML: Hypertext Markup Language | MDN](https://intranet.hbtn.io/rltoken/ZI43Ei3OIRGmi0fdEm-Wfg "textarea - HTML: Hypertext Markup Language | MDN")
-   [Form Validation UX in HTML and CSS | CSS-Tricks](https://intranet.hbtn.io/rltoken/Wbg54wi7RUJX2_y7hrw6dQ "Form Validation UX in HTML and CSS | CSS-Tricks")
-   [Constraint validation - Developer guides | MDN](https://intranet.hbtn.io/rltoken/4jC9dQkx3ZT3yKR3hB8-vw "Constraint validation - Developer guides | MDN")
-   [:invalid - CSS: Cascading Style Sheets | MDN](https://intranet.hbtn.io/rltoken/7h8uLLpM8WxMQS7t6aAk7Q ":invalid - CSS: Cascading Style Sheets | MDN")
-   [:valid - CSS: Cascading Style Sheets | MDN](https://intranet.hbtn.io/rltoken/UKXa7S-Q_saLWXgrJeFRNg ":valid - CSS: Cascading Style Sheets | MDN")
-   [:optional - CSS: Cascading Style Sheets | MDN](https://intranet.hbtn.io/rltoken/Yw2FK8PGHmv5jgF8BOKJ9w ":optional - CSS: Cascading Style Sheets | MDN")

## Learning objectives

At the end of this project, you are expected to be able to  [explain to anyone](https://intranet.hbtn.io/rltoken/NUqw6EB7Z_757dU3CxETUQ "explain to anyone"),  **without the help of Google**:

-   How to create an HTML5 form
-   How to choose the right input type
-   How to constrain a form field with regular expressions
-   How to style inputs for invalid, valid, and required fields
-   How to build a a comment form
-   How to build a simple search form
-   How to create usable and accessible forms

## Requirements

-   Allowed editors:  `vi`,  `vim`,  `emacs`
-   A  `README.md`  at the root of the project directory is mandatory
-   HTML and CSS have been rendered on Chrome 78 or more.

## Quiz questions

Show

## Tasks

### 0. basic comment structure

mandatory

To ensure we start on the same foot, use these files:

`00-article.html`

`00-styles.css`

Click to expand/hide file contents

**In your  `01-article.html`  file**

-   Sibling to the  `<div class="post">`, create a new  `<section>`  with the class  `post-comments`
-   Inside the section create an  `header`
    -   In the  `<header>`  create a heading level 2 with class  `section-title`  and text:  `Leave a comment`
    -   under the level 2 heading create a paragraph with text:  `All fields are required.`
-   Create a  `form`  siblings to the header
    -   Action:  `#`
    -   Method:  `post`

**In your  `01-styles.css`  file**

After the  `Tag list`  styles, create a new comment

```
/*** FORM ***/
/* Comment section
    ============================= */

```

-   Target  `post-comments`  class
    -   Property:  `width`, Value:  `80%`
    -   Property:  `margin`, Value:  `10rem 0 0 auto`
    -   Property:  `padding-left`, Value:  `7rem`
-   Target the  `section-title`  class inside the  `post-comments`  class
    -   Property:  `font-variant`, Value:  `small-caps`
-   Add a new comment section

```
/* Basic form
    ============================= */

```

-   Target all  `form`
    -   Property:  `display`, Value:  `flex`
    -   Property:  `flex-direction`, Value:  `column`
    -   Property:  `padding`, Value:  `1rem 0`
    -   Property:  `margin`, Value:  `0`

**Final rendering**

![](https://holbertonintranet.s3.amazonaws.com/uploads/medias/2020/2/52dd25582638087db16c.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Credential=AKIARDDGGGOU5BHMTQX4%2F20211217%2Fus-east-1%2Fs3%2Faws4_request&X-Amz-Date=20211217T013401Z&X-Amz-Expires=86400&X-Amz-SignedHeaders=host&X-Amz-Signature=98f6fc8aa660c36dbec57bbfeec6e47b041c8c1cd131402f72b60f3d98012d09)

**Repo:**

-   GitHub repository:  `holbertonschool-web_front_end`
-   Directory:  `0x05-form`
-   File:  `01-article.html, 01-styles.css`

Done?  Help  Check your code

### 1. more comment basic structure

mandatory

**From  `01-article.html`, create  `02-article.html`**

-   In the  `form`  in the comment section
    -   Create a first  `fieldset`  with a  `legend`  that has the text  `Your personal information`  and the class  `visually-hidden`
        -   In the fieldset create a first  `div`  with the classes  `form-group`  and  `col-1-2`
        -   Sibling to the first div, create a second  `div`  with the classes  `form-group`  and  `col-1-2`
        -   Sibling to the 2 divs create a third  `div`  with the classes  `form-group`  and  `col-2-3`
    -   Sibling to the first fieldset, create a second  `fieldset`  with a  `legend`  that has the text  `Your comment`  and the class  `visually-hidden`
        -   In the second fieldset create a first  `div`  with the classes  `form-group`  and  `col-2-3`
        -   Sibling to the first div create a second  `div`  with the classes  `form-group`  and  `col-2-3`
        -   Sibling to the 2 divs create a third  `div`  with the class  `form-group`

**From  `01-styles.css`, create  `02-styles.css`**

-   Target all  `fieldset`  and set the following rules
    -   flex display
    -   direction of flex is column
    -   justify the content at  `flex-start`
    -   no border
    -   `0 0 2rem`  padding

**Final rendering**  (same as previously because  `<legend>`  tags are hidden by default)

![](https://holbertonintranet.s3.amazonaws.com/uploads/medias/2020/2/5ebdce8002b7f85c33ea.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Credential=AKIARDDGGGOU5BHMTQX4%2F20211217%2Fus-east-1%2Fs3%2Faws4_request&X-Amz-Date=20211217T013401Z&X-Amz-Expires=86400&X-Amz-SignedHeaders=host&X-Amz-Signature=648cd088039b0e746e697746cd069d415c45a0f34eec5d1731e294a1c3467b9e)

**Repo:**

-   GitHub repository:  `holbertonschool-web_front_end`
-   Directory:  `0x05-form`
-   File:  `02-article.html, 02-styles.css`

Done?  Help  Check your code

### 2. create labels and input container

mandatory

**From  `02-article.html`, create  `03-article.html`  and in the form which is in the comment section:**

-   In the first  `fieldset`
    -   In the first div (which has classes  `form-group`  and  `col-1-2`)
        -   Create a  `label`
            -   For:  `your-first-name`
            -   Text:  `First Name`
        -   Sibling to the  `label`, create a  `<div>`  with the class  `form-field`
            -   Create a  `span`  inside the div with the class  `form-field-container`
    -   In the second div (which has classes  `form-group`  and  `col-1-2`)
        -   Create a  `label`
            -   For:  `your-last-name`
            -   Text:  `Last Name`
        -   Sibling to the  `label`, create a  `<div>`  with the class  `form-field`
            -   Create a  `span`  inside the div with the class  `form-field-container`
    -   In the third div (which has classes  `form-group`  and  `col-2-3`)
        -   Create a  `label`
            -   For:  `your-email`
            -   Text:  `Email`
        -   Sibling to the  `label`, create a  `<div>`  with the class  `form-field`
            -   Create a  `span`  inside the div with the class  `form-field-container`
-   In the second  `fieldset`
    -   In the first div (which has classes  `form-group`  and  `col-2-3`)
        -   Create a  `label`
            -   For:  `your-title`
            -   Text:  `Title`
        -   Sibling to the  `label`, create a  `<div>`  with the class  `form-field`
            -   Create a  `span`  inside the div with the class  `form-field-container`
    -   In the second div (which has classes  `form-group`  and  `col-2-3`)
        -   Create a  `label`
            -   For:  `your-comment`
            -   Text:  `Comment`
        -   Sibling to the  `label`, create a  `<div>`  with the class  `form-field`
            -   Create a  `span`  inside the div with the class  `form-field-container`
    -   In the third div (which has class  `form-group`)
        -   Create a  `<button>`  with the classes  `button`  and  `button-primary`
            -   Text:  `Post my comment`

**From  `02-styles.css`, create  `03-styles.css`:**

-   Target all  `label`
    -   cursor should be pointer
    -   display as block element
    -   don’t wrap white space
    -   size of font should be  `1.4rem`
    -   set padding to  `0 0 .5rem`

**Final rendering**

![](https://holbertonintranet.s3.amazonaws.com/uploads/medias/2020/2/810944bb8fd8f5482ca0.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Credential=AKIARDDGGGOU5BHMTQX4%2F20211217%2Fus-east-1%2Fs3%2Faws4_request&X-Amz-Date=20211217T013401Z&X-Amz-Expires=86400&X-Amz-SignedHeaders=host&X-Amz-Signature=c0efaac083525227347cfd70a92d75064c9129f0b5c30fce489df04566954704)

**Final rendering with button in hover**

![](https://holbertonintranet.s3.amazonaws.com/uploads/medias/2020/2/04ceb82754349ba3c7b3.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Credential=AKIARDDGGGOU5BHMTQX4%2F20211217%2Fus-east-1%2Fs3%2Faws4_request&X-Amz-Date=20211217T013401Z&X-Amz-Expires=86400&X-Amz-SignedHeaders=host&X-Amz-Signature=60e0e01cd4200eddc11834740826cda016a12880a6769aa7fa1fd57d4fcb2138)

**Repo:**

-   GitHub repository:  `holbertonschool-web_front_end`
-   Directory:  `0x05-form`
-   File:  `03-styles.css, 03-article.html`

Done?  Help  Check your code

### 3. create the inputs

mandatory

**From  `03-article.html`, create  `04-article.html`:**

-   In the first  `fieldset`
    -   In the first span of  `form-field-container`  class, create an  `input`
        -   Type:  `text`
        -   Name:  `your-first-name`
        -   Id:  `your-first-name`
        -   Placeholder:  `e.g. Mike`
        -   Pattern:  `[A-Za-zÀ-ž\s]{3,}`  (we want to allow all characters with and without accents and spaces. We want to have at least 3 characters to make the  `input`  valid)
        -   Max length:  `35`
        -   Autocomplete is on
        -   Access Key:  `f`
        -   Required: true
    -   In the second span of  `form-field-container`  class, create an  `input`
        -   Type:  `text`
        -   Name:  `your-last-name`
        -   Id:  `your-last-name`
        -   Placeholder:  `e.g. Smith`
        -   Pattern:  `[A-Za-zÀ-ž\s]{3,}`  (we want to allow all characters with and without accents and spaces. We want to have at least 3 characters to make the  `input`  valid)
        -   Max length:  `40`
        -   Autocomplete is on
        -   Access Key:  `l`
        -   Required: true
    -   In the third span of  `form-field-container`  class, create an  `input`
        -   Type:  `email`
        -   Name:  `your-email`
        -   Id:  `your-email`
        -   Placeholder:  `e.g. youremail@gmail.com`
        -   Pattern:  `[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,}$`  (we want to ensure the correct format of the email)
        -   Max length:  `55`
        -   Autocomplete is on
        -   Access Key:  `e`
        -   Required: true
-   In the second  `fieldset`
    -   In the first  `span`  of  `form-field-container`  class, create an  `input`
        -   Type:  `text`
        -   Name:  `your-title`
        -   Id:  `your-title`
        -   Placeholder:  `e.g. I loved that article`
        -   Pattern:  `[A-Za-zÀ-ž\s]{4,}`  (we want to allow all characters with and without accents and spaces. We want to have at least 4 characters to make the  `input`  valid)
        -   Max length:  `75`
        -   Autocomplete is on
        -   Access Key:  `t`
        -   Required: true
    -   In the second  `span`  of  `form-field-container`  class, create a  `textarea`
        -   Name:  `your-comment`
        -   Id:  `your-comment`
        -   Placeholder:  `Write your comment here`
        -   Minimum length: 10
        -   Access Key:  `c`
        -   Required: true
        -   Columns: 30
        -   Rows: 6

**From  `03-styles.css`, create  `04-styles.css`, after the  `label`  selector:**

-   Target in one selector all  `input`  type  `text`, all  `input`  type  `email`, all  `textarea`
    -   Property:  `position`, Value:  `relative`
    -   Property:  `width`, Value:  `100%`
    -   Property:  `padding`, Value:  `1.2rem`
    -   Property:  `line-height`, Value:  `1`
    -   Property:  `border`, Value:  `.1rem solid`  point to the variable  `color-black`
    -   Property:  `background-color`, Value: point to the variable  `color-white`
    -   Property:  `box-shadow`, Value:  `none`
    -   Property:  `outline`, Value:  `0`
-   Target in one selector all  `input`  type  `text`, all  `input`  type  `email`
    -   Property:  `padding-right`, Value:  `3rem`
-   Target in one selector the focus state of all  `input`  type  `text`, the focus state of all  `input`  type  `email`, the focus state of all  `textarea`
    -   Property:  `border`, Value:  `.1rem solid`  point to the variable  `color-grey`
    -   Property:  `background-color`, Value: point to the  `color-light-grey`
-   Now target the  `placeholder`, it can be tricky so I’m gone give you the code to add to your stylesheet:

```
::placeholder {
  font-style: italic;
  font-size: var(--font-size-small);
}

```

**Final rendering**

![](https://holbertonintranet.s3.amazonaws.com/uploads/medias/2020/2/147954ddba159a99d0b2.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Credential=AKIARDDGGGOU5BHMTQX4%2F20211217%2Fus-east-1%2Fs3%2Faws4_request&X-Amz-Date=20211217T013401Z&X-Amz-Expires=86400&X-Amz-SignedHeaders=host&X-Amz-Signature=874e5c066e2a458658117ff7540b457155d172522211a7d44f4ae3ae297909cd)

**Final rendering when “Last name” field is focus**

![](https://holbertonintranet.s3.amazonaws.com/uploads/medias/2020/2/d8fbcb53ffafe396c0ed.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Credential=AKIARDDGGGOU5BHMTQX4%2F20211217%2Fus-east-1%2Fs3%2Faws4_request&X-Amz-Date=20211217T013401Z&X-Amz-Expires=86400&X-Amz-SignedHeaders=host&X-Amz-Signature=c09d6b0698030afaee02359b451d6e6c6617c5c1a984cb1d3e3c2c14050be853)

**Repo:**

-   GitHub repository:  `holbertonschool-web_front_end`
-   Directory:  `0x05-form`
-   File:  `04-article.html, 04-styles.css`

Done?  Help  Check your code

### 4. add help messages

mandatory

**From  `04-article.html`, create  `05-article.html`:**

-   In each span with  `form-field-container`  class that contains an  `input`
    -   After the input add an empty  `<i>`  with the class  `form-field-icon`
-   In the first  `fieldset`
    -   Inside the first div with  `form-field`  class, right after the closing  `span`  tag, add a paragraph
        -   Class:  `form-help`
        -   Text:  `First name should be at least 3 characters and only contains letters`
    -   Inside the second div with  `form-field`  class, right after the closing  `span`tag, add a paragraph
        -   Class:  `form-help`
        -   Text:  `Last name should be at least 3 characters and only contains letters`
    -   Nothing is added in the third  `form-field`
-   In the second  `fieldset`
    -   Inside the first div with  `form-field`  class, right after the closing  `span`  tag, add a paragraph
        -   Class:  `form-help`
        -   Text:  `Title should be at least 4 characters and only contains letters`
    -   Inside the second div with  `form-field`  class, right after the closing  `span`  tag, add a paragraph
        -   Class:  `form-help`
        -   Text:  `Comment should be at least 10 characters`

**From  `04-styles.css`, create  `05-styles.css`:**

-   Add a new separation
    
    ```
    /* Form group
    ============================= */
    
    ```
    
-   Target  `form-group`  class
    
    -   Property:  `padding`, Value:  `1rem`
    -   Property:  `margin`, Value:  `0`
    -   Property:  `background-color`, Value: point to the variable  `color-white`
-   Target the  `focus-within`  state of  `form-group`  class
    
    -   Property:  `background-color`, Value: point to the  `color-light-grey`  (if it was not done in the previous task)
    -   Property:  `transition`, Value:  `.3s`
-   Add a new separation
    
    ```
    /* Form field
    ============================= */
    
    ```
    
-   Target  `form-field-container`  class
    
    -   Property:  `position`, Value:  `relative`
-   Target  `form-field-icon`  class
    
    -   Property:  `font-style`, Value:  `normal`
-   Add a new separation
    
    ```
    /* Form help
    ============================= */
    
    ```
    
-   Target  `form-help`  class inside  `form-group`  class
    
    -   Property:  `margin`, Value:  `0`
    -   Property:  `line-height`, Value:  `1.3`
    -   Property:  `letter-spacing`, Value:  `.019rem`
    -   Property:  `color`, Value: point to the variable  `color-dark-grey`
    -   Property:  `font-size`, Value: point to the variable  `font-size-small`
    -   Property:  `max-height`, Value:  `0`
    -   Property:  `transition`, Value:  `.3s`
    -   Property:  `overflow`, Value:  `hidden`
-   Target  `form-help`  class when  `form-group`  class has a  `focus-within`  state
    
    -   Property:  `max-height`, Value:  `20rem`
    -   Property:  `margin`, Value:  `.4rem 0 0`

**Final rendering when “Last name” is focused**

![](https://holbertonintranet.s3.amazonaws.com/uploads/medias/2020/2/7d03c7365d5974440255.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Credential=AKIARDDGGGOU5BHMTQX4%2F20211217%2Fus-east-1%2Fs3%2Faws4_request&X-Amz-Date=20211217T013401Z&X-Amz-Expires=86400&X-Amz-SignedHeaders=host&X-Amz-Signature=f2d7e9056c99831bd2921037afd9f94132dfc2afcaaeb53edbea81de567c81a8)

**Repo:**

-   GitHub repository:  `holbertonschool-web_front_end`
-   Directory:  `0x05-form`
-   File:  `05-article.html, 05-styles.css`

Done?  Help  Check your code

### 5. add pure HTML / CSS error handling

mandatory

**From  `05-styles.css`, create  `06-styles.css`:**

-   In the variable section, after the  `color-dark-grey`  variable
    -   Create a custom property
        -   Name:  `color-red`, Value:  `#cd3e65`
    -   Create a custom property
        -   Name:  `color-green`, Value:  `#08805b`
-   After the  `text-color`  variable
    -   Create a custom property
        -   Name:  `valid-color`, Value: point to the`color-green`  variable
    -   Create a custom property
        -   Name:  `error-color`, Value: point to the  `color-red`  variable
-   At the end of the CSS file
    -   Add a new separation

```
/* Form error handling
============================= */

```

-   Add this code to your file. The code is given to you with comments to help you to understand, because it’s a little bit advanced but really powerful when correctly understood.

```
/* The following code is used to place the icon in the after pseudo element. Because after and before are not possible in an input, we need to use a span that will be positioned on the right of our input. */

input:not(:placeholder-shown) ~ .form-field-icon::after {
  height: 100%;
  right: 0;
  pointer-events: none;
  position: absolute;
  top: 0;
  width: 1.3em;
}

/* Because inputs are invalid by default, we need to be careful and show the icon when we are not in focus and when when the input is not empty (placeholder-shown). Careful with this one because it is not supported everywhere. */

input:required:invalid:not(:focus):not(:placeholder-shown) ~ .form-field-icon::after {
  content: '✘';
  color: var(--error-color);
}

input:required:valid ~ .form-field-icon::after {
  content: '✔';
  color: var(--valid-color);
}

/* We want to hide the helper text when we are not in focus. The tilte allows us to select a sibling element in CSS */

input:required:valid ~ .form-help {
  max-height: 0;
}

/* Showing a border in a different color is good but not enough. For accessibility purposes, we added an icon when the input is valid or invalid to have a visual distinction that is not only color based.*/

input:required:invalid:not(:focus):not(:placeholder-shown),
textarea:invalid:not(:focus):not(:placeholder-shown) {
  border: 0.1rem solid var(--error-color);
}

input:required:valid:not(:placeholder-shown),
textarea:valid:not(:placeholder-shown) {
  border: 0.1rem solid var(--valid-color);
}

```

-   In the  `/* Base`  section, after the hover state of the  `button`
    -   Target the  `button-primary`  class
        -   Property:  `color`, Value: point to the variable  `color-white`
        -   Property:  `background`, Value: point to the variable  `color-primary`
    -   Target the hover state of the  `button-primary`  class
        -   Property:  `color`, Value: point to the variable  `color-primary`
        -   Property:  `background`, Value: point to the variable  `color-white`

**Final rendering of validation layout**

![](https://holbertonintranet.s3.amazonaws.com/uploads/medias/2020/2/9aa6033da67ab8d3e787.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Credential=AKIARDDGGGOU5BHMTQX4%2F20211217%2Fus-east-1%2Fs3%2Faws4_request&X-Amz-Date=20211217T013401Z&X-Amz-Expires=86400&X-Amz-SignedHeaders=host&X-Amz-Signature=533430e230dd6b607d99791b9e1940976a21d6fe5d608db4cbb8c11a72db3c68)

**Repo:**

-   GitHub repository:  `holbertonschool-web_front_end`
-   Directory:  `0x05-form`
-   File:  `06-styles.css, 06-article.html`

Done?  Help  Check your code

### 6. add the search form

mandatory

**From  `06-article.html`, create  `07-article.html`:**

-   In the navigation, add a new  `<li>`  at the end. Also add the  `nav-item`  class on the  `li`.
    -   Create a new  `<form>`  inside the  `li`.
        -   Action attr:  `#`
        -   Method attr:  `post`
        -   Class:  `form-search`
        -   Create a new  `input`, type  `search`
            -   Name attr:  `q`  (it’s common to name the search q (=query))
            -   Id attr:  `search-input`
            -   Placeholder:  `Search...`
            -   `aria-label="Search through site content"`  (we will see in the accessibility module what is that attribute)
        -   Create a  `button`  with the class  `search-button`
            -   Copy and paste the following code inside your button

```
<svg viewbox="0 0 512 512" xmlns="http://www.w3.org/2000/svg" width="20" height="20" class="search-icon">
  <title>
    Search icon
  </title>
  <path d="M508.5 468.9L387.1 347.5c-2.3-2.3-5.3-3.5-8.5-3.5h-13.2c31.5-36.5 50.6-84 50.6-136C416 93.1 322.9 0 208 0S0 93.1 0 208s93.1 208 208 208c52 0 99.5-19.1 136-50.6v13.2c0 3.2 1.3 6.2 3.5 8.5l121.4 121.4c4.7 4.7 12.3 4.7 17 0l22.6-22.6c4.7-4.7 4.7-12.3 0-17zM208 368c-88.4 0-160-71.6-160-160S119.6 48 208 48s160 71.6 160 160-71.6 160-160 160z"/>
</svg>

```

**From  `06-styles.css`, create  `07-styles.css`:**

-   At the end of the file, create a new comment separation
    
    ```
    /*** SEARCH FORM ***/
    
    ```
    
-   Target the  `form-search`  class
    
    -   Property:  `display`, Value:  `block`
    -   Property:  `padding`, Value:  `.5rem 0`
    -   Property:  `position`, Value:  `relative`
-   Target the  `search-button`  class inside the  `form-search`  class
    
    -   Property:  `display`, Value:  `inline-block`
    -   Property:  `background`, Value:  `transparent`
    -   Property:  `border`, Value:  `0`
    -   Property:  `margin`  Value:  `0`
    -   Property:  `padding`, Value:  `0`
-   Target the  `search-icon`  class inside the  `search-button`  class
    
    -   Property:  `fill`, Value: point to the variable  `color-white`
    -   Property:  `width`, Value:  `1.5rem`
    -   Property:  `height`, Value:  `1.5rem`
-   Target the  `input`  type  `search`  inside the  `form-search`  class
    
    -   Property:  `display`, Value:  `inline-block`
    -   Property:  `color`, Value: point to the variable  `color-white`
    -   Property:  `padding-right`, Value:  `2rem`
    -   Property:  `height`, Value:  `3rem`
    -   Property:  `border`, Value:  `0`
    -   Property:  `outline`, Value:  `none`
    -   Property:  `position`, Value:  `absolute`
    -   Property:  `width`, Value:  `0`
    -   Property:  `right`, Value:  `0`
    -   Property:  `background`, Value:  `none`
    -   Property:  `cursor`, Value:  `pointer`
    -   Property:  `z-index`, Value:  `3`
    -   Property:  `transition`, Value:  `width .4s cubic-bezier(0, 0.795, 0, 1)`
-   Target the  `focus`  state of  `input`  type  `search`  inside the  `form-search`  class
    
    -   Property:  `position`, Value:  `relative`
    -   Property:  `width`, Value:  `15rem`
    -   Property:  `z-index`, Value:  `1`
    -   Property:  `border-bottom`, Value:  `.1rem solid var(--color-grey)`
    -   Property:  `padding`, Value:  `0`
    -   Property:  `cursor`, Value:  `text`
    -   Property:  `margin`, Value:  `0 1rem`

**Final rendering of the search button**

![](https://holbertonintranet.s3.amazonaws.com/uploads/medias/2020/2/18dbfc6da16fb3c9992b.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Credential=AKIARDDGGGOU5BHMTQX4%2F20211217%2Fus-east-1%2Fs3%2Faws4_request&X-Amz-Date=20211217T013401Z&X-Amz-Expires=86400&X-Amz-SignedHeaders=host&X-Amz-Signature=97a8530a75d16c961db6956f8215596e6e2dafb72b3b4ccb68b9f2315d5775c3)

**Final rendering of the search focus**

![](https://holbertonintranet.s3.amazonaws.com/uploads/medias/2020/2/4e17e62ca13e7e635d36.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Credential=AKIARDDGGGOU5BHMTQX4%2F20211217%2Fus-east-1%2Fs3%2Faws4_request&X-Amz-Date=20211217T013401Z&X-Amz-Expires=86400&X-Amz-SignedHeaders=host&X-Amz-Signature=210f87823b5ba5315019a4a53401cb05af0f6bee613b11707975001f2c9580f0)

**Final rendering of the search focus with text**

![](https://holbertonintranet.s3.amazonaws.com/uploads/medias/2020/2/ae899c60b1e4b1f97bcc.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Credential=AKIARDDGGGOU5BHMTQX4%2F20211217%2Fus-east-1%2Fs3%2Faws4_request&X-Amz-Date=20211217T013401Z&X-Amz-Expires=86400&X-Amz-SignedHeaders=host&X-Amz-Signature=bb5942b800103d3bf0aa6041e2caa2bd805cec396f5c7e0f97d7d5c93b506145)

**Repo:**

-   GitHub repository:  `holbertonschool-web_front_end`
-   Directory:  `0x05-form`
-   File:  `07-article.html, 07-styles.css`

