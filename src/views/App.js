import '../styles/App.scss';
import Header from './header/header';
import SliderMain from './slider/slider_main';
import Body from './body/body';
import Footer from './body/footer/footer';

const users = [
  { username: "admin", password: "admin123" },
  { username: "a", password: "b" },
];

localStorage.setItem("users", JSON.stringify(users));

const App = () => {
  return (
    <body>
      <Header/>
      <SliderMain/>
      <Body/>
      <Footer/>
    </body>
  );
}

export default App;
