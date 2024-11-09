import { Link } from "react-router-dom";

const Home = () => {
  return (
    <div>
      <h1>Home Implementation</h1>
      <ul>
        <li>
          <Link to="/accordian">Accordian</Link>
        </li>
        <li>
          <Link to="/todo">TODO Application</Link>
        </li>
        <li>
          <Link to="/random-color-generator">Random COlor Generator</Link>
        </li>

        {/* Link to star rating */}
        <li>
          <Link to="/star-rating">Star Rating</Link>
        </li>

        {/* Link to star rating */}
        <li>
          <Link to="/image-carousel">Image Carousel</Link>
        </li>

        {/* Link to load-more-products */}
        <li>
          <Link to="/load-more-products">Load More Products</Link>
        </li>

        {/* Link to recursive-navigation-menu */}
        <li>
          <Link to="/recursive-navigation-menu">Recursive Navigation Menu</Link>
        </li>

        {/* Link to recursive-navigation-menu */}
        <li>
          <Link to="/tree-view">Tree View</Link>
        </li>

        {/* Link to qr-code-generator */}
        <li>
          <Link to="/qr-code-generator">QR Code Generator</Link>
        </li>

        {/* Link to qr-code-generator */}
        <li>
          <Link to="/light-dark-switcher">Light Dark Switcher</Link>
        </li>

        {/* Link to scroll-indicator */}
        <li>
          <Link to="/scroll-indicator">Scroll Indicator</Link>
        </li>

        {/* Link to tabs-switcher */}
        <li>
          <Link to="/tabs-switcher">Tabs Switcher</Link>
        </li>

        {/* Link to custom-modal */}
        <li>
          <Link to="/custom-modal">Custom Modal</Link>
        </li>
      </ul>
    </div>
  );
};

export default Home;
