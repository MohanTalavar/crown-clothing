import React from "react";
import "./Preview.scss";
import { CollectionItem } from "../collection-item/collection-item-component";

export const CollectionPreview = ({ title, items }) => {
  return (
    <div className="collection-preview">
      <div className="title">{title.toUpperCase()}</div>
      <div className="preview">
        {items
          .filter((item, idx) => idx < 4)
          .map(({ id, name, price, imageUrl }) => (
            <CollectionItem
              key={id}
              name={name}
              price={price}
              imageUrl={imageUrl}
            >
              {name}
            </CollectionItem>
          ))}
      </div>
    </div>
  );
};
