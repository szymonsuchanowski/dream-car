![Kanban Board App screenshot](/assets/multi-step-form-mockup.png "Multi Step Form App mockup")

&nbsp;

## 🔥 Live

Click to see live demo: [Multi Step Form](https://szymonsuchanowski.github.io/dream-car/)!

&nbsp;

## 🔍 Overview

### What is Multi Step Form?

In short, **Multi Step Form** (for virtual car rental company) allows you to **book your dream car** using a form consisting of several steps.

### Design brief

The challenge was to create a user interface **in line with the neumorphism trend** (to familarize with the concept of neumorphism, I recommend the following article: [Neumorphism in user interfaces](https://uxdesign.cc/neumorphism-in-user-interfaces-b47cef3bf3a6)) styled using **Styled Components**.

### Multi Step Form features

- **car booking** through a form consisting of the following steps:
    - welcome - displaying information for the user
    - personal data of the user
    - rental duration (date & time)
    - car & equipment selection
    - summary generated based on user input
- **all fields are validated** with custom data validator - the user **is kept informed about errors**
- **custom progress bar** showing the level of completing the form
- **dark & light theme** - selection with a custom switcher component

&nbsp;

## 👨‍💻 Built with

![React](https://img.shields.io/badge/React-20232A?style=for-the-badge&logo=react&logoColor=61DAFB)
![Styled Components](https://img.shields.io/badge/styled--components-DB7093?style=for-the-badge&logo=styled-components&logoColor=white)
![JavaScript](https://img.shields.io/badge/JavaScript-323330?style=for-the-badge&logo=javascript&logoColor=F7DF1E)
![HTML5](https://img.shields.io/badge/HTML5-E34F26?style=for-the-badge&logo=html5&logoColor=white)
![Webpack](https://img.shields.io/badge/Webpack-8DD6F9?style=for-the-badge&logo=Webpack&logoColor=white)
![Babel](https://img.shields.io/badge/Babel-F9DC3E?style=for-the-badge&logo=babel&logoColor=white)

&nbsp;
## ⚙️ Run Locally

The project uses [node](https://nodejs.org/en/) and [npm](https://www.npmjs.com/), follow the steps below to run it locally.

- Clone the project using

```bash
  git clone
```

- Go to the project directory and install dependencies

```bash
  npm i
```

- Start the server

```bash
  npm start
```

- Multi Step Form is ready at port 8080

```bash
  http://localhost:8080/
```
&nbsp;
## 🤔 Solutions provided in the project

- Multi Step Form uses **modern React features** (Hooks, Context API)
- custom hook `useForm` uses `useReducer` and `useState` hooks
    - `useReducer` to **control the form inputs** (entered values, marking fields filled in correctly/incorrectly, clearing the form)
    - `useState` to **store information about errors** when completing the form, which are then displayed to the user
- `<Survey />` component provides **context** which is consumed by other components (e.g. `<Dropdown />` which is consumer of `formContext`, in this case `useContext` hook is used)
- form fields are **rendered dynamically** according to the information stored in the data files (e.g. `step1Data.js`), e.g.

```javascript
const formFieldsStep3 = [
    {
        name: 'car',
        label: 'car class',
        type: 'dropdown',
        items: [
            { value: 'A', label: 'A (e.g. Fiat 500)' },
            { value: 'B', label: 'B (e.g. VW Polo)' },
            { value: 'C', label: 'C (e.g. Seat Leon)' },
            { value: 'D', label: 'D (e.g. VW Passat)' },
            { value: 'P', label: 'P (e.g. Audi A8)' },
        ],
        order: 2,
    },
    // ...
]
```

- all **form fields are validated** according to the rules saved in the `DataValidator.js` file (along with the error message and information whether the field is required), e.g.

```javascript
startTime = {
        regExp: /^((0[8-9]|1[0-9]):[0-5][0-9])$|^(20:00)$/,
        err: 'working hours 08:00 - 20:00',
        required: true,
    };
```

- the summary is generated on the basis of data entered by the user (summary generation logic separated in the `SummaryCreator.js` file) with the use of information contained in the `rentalData.js` file (such as, for example, price list, minimum rental length - **you can easily change it as needed**, e.g. update the price list)

```javascript
const rentalData = {
    minRentalLengthHours: 4,
    minStartDifferenceHours: 2,
    priceList: {
        car: {
            A: {
                prices: [
                    { min: 1, max: 3, price: 99 },
                    { min: 4, max: 20, price: 89 },
                    { min: 21, max: 60, price: 79 },
                    { min: 61, max: Infinity, price: 65 },
                ],
                deposit: 500,
            },
            //...
        }}}
```

- **custom hooks used**
    - `useForm` to control the form filling process
    - `useToggle` to handle `<Switcher />` (change of theme, selection of additional equipment) and `<Dropdown />` (car selection) 
    ```javascript
        const [isOpen, toggleDropdown] = useToggle();
    ```
- Multi Step Form styling
    - **RWD**
    - styles created using **Styled Components**
    - custom `<Switcher />` (checkbox) and `<Dropdown />` (similiar to `<select>` HTML element)
    - use `createGlobalStyle` to add reset and global styles along with variables
    - through the use of `ThemeProvider` and variables, the possibility of **choosing a theme** has been implemented (by clicking custom `<Switcher />`)
    - theme colors can be changed by editing the `themeStyle.js` file

&nbsp;
## 🔗 Useful resources

- [official React website](https://reactjs.org/docs/getting-started.html)
- [neumorphism CSS code generator](https://neumorphism.io/)
- [Neumorphism in user interfaces](https://uxdesign.cc/neumorphism-in-user-interfaces-b47cef3bf3a6)
- [Neumorphism: why it’s all the hype in UI design](https://www.justinmind.com/blog/neumorphism-ui/)
- [Neumorphism. The Next Big Thing In UI Design?](https://opengeekslab.com/blog/neumorphism-the-next-big-thing-ui-design/)
- [50 Gorgeous Color Schemes From Award-Winning Websites](https://visme-co.translate.goog/blog/website-color-schemes/?_x_tr_sl=en&_x_tr_tl=pl&_x_tr_hl=pl&_x_tr_pto=op,sc) - for design inspiration

&nbsp;
## 🥷 Author

Coded by **Szymon Suchanowski**.

Feel free to contact me:
- [LinkedIn](https://www.linkedin.com/in/suchanowski/)
- [GitHub](https://github.com/szymonsuchanowski)


&nbsp;
## 🙏 Special thanks

Special thanks to my [Mentor - devmentor.pl](https://devmentor.pl/) for providing me with the task and code review.