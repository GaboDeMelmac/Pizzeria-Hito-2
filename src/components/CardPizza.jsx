import React from "react";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import ListGroup from "react-bootstrap/ListGroup";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEye, faPizzaSlice } from "@fortawesome/free-solid-svg-icons"; // Importa el ícono de pizza
import { faCartShopping } from "@fortawesome/free-solid-svg-icons/faCartShopping";

const CardPizza = ({ name, price, ingredients, img }) => {
  return (
    <div>
      <Card style={{ width: "80%" }}>
        <Card.Img variant="top" src={img} />
        <Card.Body>
          <Card.Title className="Titulo_card">{name}</Card.Title>
          <ListGroup className="list-group-flush">
            <ListGroup.Item className="Inrgedientes_text">
              Ingredientes:
            </ListGroup.Item>
            <ListGroup.Item className="Inrgedientes_text2">
              <FontAwesomeIcon
                icon={faPizzaSlice}
                style={{
                  marginRight: "5px",
                  color: "rgb(82, 26, 17)",
                  fontSize: "20px",
                }}
              />{" "}
              {ingredients.join(", ")}
            </ListGroup.Item>
            <ListGroup.Item className="Precio_card">
              Precio: ${price.toLocaleString("es-ES")}
            </ListGroup.Item>
          </ListGroup>

          <div className="botones_card">
            <Button className="boton_compra1" variant="primary">
              Ver Más
              <FontAwesomeIcon
                icon={faEye}
                style={{
                  marginLeft: "5px",
                  color: "rgb(33, 37, 41);",
                }}
              />
            </Button>
            <Button className="boton_compra2" variant="primary">
              Añadir
              <FontAwesomeIcon
                icon={faCartShopping}
                style={{ marginLeft: "5px", color: "rgb(33, 37, 41);" }}
              />
            </Button>
          </div>
        </Card.Body>
      </Card>
    </div>
  );
};

export default CardPizza;
