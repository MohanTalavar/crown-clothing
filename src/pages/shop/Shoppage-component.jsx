import React, { useEffect, useState } from "react";

import SHOP_DATA from "./ShopData";
import { CollectionPreview } from "../../components/collection-preview/CollectionPreview";

export const ShopPage = () => {
  const [collections, setCollections] = useState([]);

  useEffect(() => {
    setCollections(SHOP_DATA);
  }, []);

  console.log("ShopPage component rendered", collections);

  return (
    <div className="shop-page">
      {collections.map(({ id, title, items }) => (
        <CollectionPreview key={id} title={title} items={items} />
      ))}
    </div>
  );
};
