import './App.css';

function App() {
  const basic_projects = [
    {
      name: 'Menu',
      image: '/images/menu.png',
      url: 'https://basic-project-menu.netlify.app/',
    },
    {
      name: 'Slider',
      image: '/images/slider.png',
      url: 'https://basic-project-slide.netlify.app/',
    },
    {
      name: 'Grocety Bud',
      image: '/images/grocery-bud.png',
      url: 'https://basic-project-grocery-bud.netlify.app/',
    },
    {
      name: 'Cart',
      image: '/images/cart.png',
      url: 'https://basic-project-cart.netlify.app/',
    },
    {
      name: 'Search',
      image: '/images/search.png',
      url: 'https://basic-project-search.netlify.app/',
    },
    {
      name: 'ChatApp - firebase',
      image: '/images/React-App.png',
      url: 'https://chatappreactjs123.netlify.app/',
    },
  ];
  const handleClickUrl = (url) => {
    window.open(url)
  }
  return (
    <>
      <section className='section'>
        <div className='title'>
          <h2>Basic Projects</h2>
          <div className='title-underline'></div>
        </div>
        <div className='section-center'>
          {
            basic_projects.map((value, index) => {
              const { name, url, image } = value;
              return <div href='/' key={index} onClick={() => handleClickUrl(url)}>
                <div className='img-container'>
                  <img src={image} alt="" />
                </div>
                <footer>
                  <h5>{name}</h5>
                </footer>
              </div>
            })
          }
        </div>
      </section>
    </>
  );
}

export default App;
