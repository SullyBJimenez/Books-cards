// import './books.js';

const React = require("react");

// window.addEventListener('load', () => {
//     createBookList();
// });

// async function createBookList(){
//     const response = await fetch('./books.json');
//     const json = await response.json();
//     const books = document.getElementById('books');

//     json.books.forEach((book) => {
//         const element = document.createElement('mit-book');
//         element.book = book;
//         books.appendChild(element);
        
//     });
// }

function App() {
    const [data, setData] = React.useState(null);
    const [loaded, setLoaded] = React.useState(false);

    React.useEffect(() => {
        async function getData(){
            const response = await fetch('./books.json');
            const json = await response.json();
            setData(json);
            setLoaded(true);
        }
        getData();
    }, []);
    console.log('loaded:', loaded, 'data:', data);

    return(<>
        {loaded && data.books.map((book, i) => <Book data={book} key={i}/>)}
        </>);
}

ReactDOM.render(
    <App/>,
    document.getElementById('root')
)