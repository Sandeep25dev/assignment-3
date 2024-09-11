import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { fetchItems } from "../api";

interface Item {
  id: number;
  title: string;
  completed: boolean;
}

const ItemList: React.FC = () => {
  const [items, setItems] = useState<Item[]>([]);
  const [loading, setLoading] = useState<boolean>(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const data = await fetchItems();
        setItems(data.slice(0, 10));
        setLoading(false);
      } catch (error) {
        console.error("Error fetching data:", error);
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  return (
    <Container>
      {loading ? (
        <p>Loading items...</p>
      ) : (
        items.map((item) => (
          <ListItem key={item.id} completed={item.completed}>
            {item.title}
          </ListItem>
        ))
      )}
    </Container>
  );
};

export default ItemList;

const Container = styled.div`
  padding: 20px;
  background-color: #f5f5f5;
  border-radius: 10px;
`;

const ListItem = styled.div<{ completed: boolean }>`
  padding: 10px;
  background-color: ${(props) => (props.completed ? "#d4edda" : "#f8d7da")};
  border: 1px solid ${(props) => (props.completed ? "#c3e6cb" : "#f5c6cb")};
  margin-bottom: 10px;
  border-radius: 5px;
  font-size: 18px;
`;
