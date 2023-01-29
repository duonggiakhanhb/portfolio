import {useState} from 'react';

const App = () => {
  const [isHovering, setIsHovering] = useState(false);

  const handleMouseOver = () => {
    setIsHovering(true);
  };

  const handleMouseOut = () => {
    setIsHovering(false);
  };

  return (
    <div style={{color: "#FFFFFF"}}>
      <div>
        <div
          onMouseEnter={handleMouseOver}
          onMouseLeave={handleMouseOut}
        >
          Hover over me
        </div>

        {isHovering && (
          <div>
            <h2>Only visible when hovering div</h2>
            <h2>bobbyhadz.com</h2>
          </div>
        )}
      </div>
    </div>
  );
};

export default App;
