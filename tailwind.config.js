/** @type {import('tailwindcss').Config} */

module.exports = {
    content: [
        './pages/**/*.{js,ts,jsx,tsx}',
        './components/**/*.{js,ts,jsx,tsx}',
        './src/**/*.{js,ts,jsx,tsx}',
        'node_modules/flowbite-react/**/*.{js,jsx,ts,tsx}',
    ],
    theme: {
        extend: {
            colors: {
                'blue-pacific': '#008ad5',
                'dark-turquoise': '#2AD2C9',
                'eastern-blue': '#008fa1',
                'iris-blue': '#00bdc40a',
                'blue-dark-turquoise': '#00BCD4',
                gainsboro: '#DDDDDD',
                'dim-gray': '#5D5D5D',
                'white-smoke': '#F5F5F5',
                'blue-solitude': '#E3E8EC',
                'blue-aqua': '#06F6F7',
                solitude: '#EFF2F7',
                'slate-grey': '#727C8A',
                'blue-heather': '#BDC3CB',
            },
            boxShadow: {
                base: '0px 1px 4px 0px rgb(0, 0, 0, 0.25)',
                header: '0px 2px 4px -1px rgb(0 0 0 / 20%), 0px 4px 5px 0px rgb(0 0 0 / 14%), 0px 1px 10px 0px rgb(0 0 0 / 12%)',
            },
            height: {
                'right-layout': 'calc(100vh - 72px)',
                'left-sidebar': 'calc(100vh - 76px)',
            },
            width: {
                'right-layout': 'calc(100vw - 18rem)',
                'left-sidebar': 'calc(100% - 20px)',
            },
            minHeight: {
                'right-layout': 'calc(100vh - 148px)',
            },
            screens: {
                'bigger-desktop': '1370px',
            },
        },
    },
};
