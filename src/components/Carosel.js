import React, { useState, useCallback } from "react";
import "./Carousel.css";

const Item = ({ children }) => <div>{children}</div>;

const CAROUSEL_ITEM = "CAROUSEL_ITEM";
const Carousel = ({ cols = 1, gap = 10, children }) => {
  const [currentPage, setCurrentPage] = useState(0);
  const itemList = React.Children.toArray(children).filter(
    (child) => child.type.displayName === CAROUSEL_ITEM
  );

  const itemSetList = itemList.reduce((result, item, i) => {
    if (i % cols === 0) {
      result.push([<Item key={i}>{item}</Item>]);
    } else {
      result[result.length - 1].push(<Item key={i}>{item}</Item>);
    }

    return result;
  }, []);

  const page = Math.ceil(itemList.length / cols);

  const handlePrev = useCallback(() => {
    setCurrentPage((p) => p - 1);
  }, []);

  const handleNext = useCallback(() => {
    setCurrentPage((p) => p + 1);
  }, []);

  return (
    <div className="Carousel">
      <span
        className="Carousel__btn--prev"
        hidden={currentPage <= 0}
        onClick={handlePrev}
      />
      <div className="Carousel__railWrapper">
        <div
          className="Carousel__rail"
          style={{
            gridTemplateColumns: `repeat(${page}, 100%)`,
            left: `calc(${-100 * currentPage}% - ${gap * currentPage}px)`,
            gridColumnGap: `${gap}px`,
          }}
        >
          {itemSetList.map((set, i) => (
            <div
              key={i}
              className="Carousel__ItemSet"
              style={{
                display: "grid",
                gridTemplateColumns: `repeat(${cols}, 1fr)`,
                gridGap: `${gap}px`,
              }}
            >
              {set}
            </div>
          ))}
        </div>
      </div>
      <span
        className="Carousel__btn--next"
        hidden={currentPage === page - 1}
        onClick={handleNext}
      />
    </div>
  );
};

Carousel.Item = ({ children }) => children;
Carousel.Item.displayName = CAROUSEL_ITEM;
export default Carousel;
