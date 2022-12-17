import { Box } from "@chakra-ui/react";
import Cards from "../components/cards/Card";
import styles from "../styles/Home.module.css";
import { cardData } from "../constants/constants";

import { useState } from "react";
export default function Home() {
  const [like, setLike] = useState(2);
  return (
    <div className={styles.container}>
      <Box display="flex" flexWrap="wrap" justifyContent="space-around">
        {cardData.map((item, index) => {
          return (
            <Cards
              key={index}
              id={item.id}
              setBid={item.setBid}
              price={item.price}
              image={item.image}
            />
          );
        })}
      </Box>
    </div>
  );
}
