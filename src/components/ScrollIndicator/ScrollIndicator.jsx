import { useEffect, useState } from "react";
import "./ScrollIndicator.css";

const ScrollIndicator = () => {
  // 1. We need to fetch the data from the API and render

  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(false);
  const [errorMessage, setErrorMessage] = useState(null);

  const [scrollPercentage, setScrollPercentage] = useState(0)

  const fetchData = async () => {
    try {
      setLoading(true);
      const response = await fetch("https://dummyjson.com/products?limit=100");
      const result = await response.json();

      if (result && result.products && result.products.length > 0) {
        setData(result.products);
      }

      setLoading(false);
    } catch (error) {
      console.log(error.message);
      setErrorMessage(error.message);
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  // 2. Calculate the scroll percentage

  useEffect(()=>{
    window.addEventListener('scroll', () =>{

        const scrollTopPosition = document.body.scrollTop || document.documentElement.scrollTop;
        const scrollableHeight = document.documentElement.scrollHeight - document.documentElement.clientHeight;

        console.log({
            bodyScrollTop: document.body.scrollTop,
            DEscrollTop: document.documentElement.scrollTop,
            DEscrollHeight: document.documentElement.scrollHeight,
            DEclientHeight: document.documentElement.clientHeight,
            scrollPercentage: (scrollTopPosition/ scrollableHeight) * 100
        })
       

        setScrollPercentage((scrollTopPosition/ scrollableHeight) * 100);

    })

    return ()=>{
        // TODO: Need to learn more about this. Why we are passing empty function from here.
        window.removeEventListener('scroll', ()=>{})
    }
  },[])

  // 3. Show the progress bar. - Done

  if(errorMessage){
    return <>Error... Please try after some time</>
  }


  if(loading){
    return <>Loading... Please Wait</>
  }

  return (
    <div>
        <header className="scroll-indicator-header">
            <h1>Scroll Indicator</h1>
            <div className="scroll-indicator-container">
                <div className="progress-bar" style={{
                    width: `${scrollPercentage}%`
                }}>

                </div>
            </div>
        </header>
      <section className="products-list-container">
        {data &&
          data.length > 0 &&
          data.map(({ id, title }) => {
            return <div key={id} className="product-list-item">{title}</div>;
          })}
      </section>
    </div>
  );
};

export default ScrollIndicator;
