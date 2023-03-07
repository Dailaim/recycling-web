import React, { useEffect, useState } from "react";
import { Accordion, Form, Row, Col } from "react-bootstrap";
import years from "./filtros/years";
import Rines from "./filtros/rines";
import materials from "./filtros/material";
import Brands from "./filtros/brands";
import size from "./filtros/size";
import category from "./filtros/category";
import subcategory from "./filtros/subcategory";
import citys from "./filtros/citys";
import Frenos from "./filtros/frenos";
import { filtersState } from "context/Filters/filtersState";

export default function Filtro() {
  const setFilters = filtersState((state) => state.setFilters);

  const [selectedFilters, setSelectedFilters] = useState({
    city: [],
    category: [],
    subcategory: [],
    size: [],
    brands: [],
    materials: [],
    frenos: [],
    rine: [],
    years: [],
    minPrice: null,
    maxPrice: null,
  });

  const Iters = (data, category) => {
    return (
      <>
        {data.map((option, index) => {
          return (
            <Form.Check
              key={index}
              type={"checkbox"}
              id={option.id + "-checkbox"}
              label={option.label}
              value={option.id}
              onChange={(e) => {
                setSelectedFilters((prevFilters) => {
                  let filters = { ...prevFilters };
                  if (e.target.checked) {
                    filters[category] = [...filters[category], option.id];
                  } else {
                    filters[category] = filters[category].filter(
                      (filter) => filter !== option.id
                    );
                  }
                  setFilters(filters);
                  return filters;
                });
              }}
            />
          );
        })}
      </>
    );
  };

  return (
    <div className="separador">
      <Accordion defaultActiveKey={["1", "9"]} flush alwaysOpen>
        {/* Start - País */}
        <Accordion.Item eventKey="0">
          <Accordion.Header className="py-0">
            <h5 className="fw-bolder fs-6">País</h5>
          </Accordion.Header>
          <Accordion.Body>{Iters(citys, "city")}</Accordion.Body>
        </Accordion.Item>
        {/* End - País */}

        {/* Start - Categoría */}
        <Accordion.Item eventKey="1">
          <Accordion.Header className="py-0">
            <h5 className="fw-bolder fs-6">Categoría</h5>
          </Accordion.Header>
          <Accordion.Body>{Iters(category, "category")}</Accordion.Body>
        </Accordion.Item>
        {/* End - Categoría */}

        {/* Start - Subcategoría */}
        <Accordion.Item eventKey="2">
          <Accordion.Header>
            <h5 className="fw-bolder fs-6">Subcategorías</h5>
          </Accordion.Header>
          <Accordion.Body>{Iters(subcategory, "subcategory")}</Accordion.Body>
        </Accordion.Item>
        {/* End - Subcategoría */}

        {/* Start - Talla */}
        <Accordion.Item eventKey="3">
          <Accordion.Header>
            <h5 className="fw-bolder fs-6">Talla</h5>
          </Accordion.Header>
          <Accordion.Body>{Iters(size, "size")}</Accordion.Body>
        </Accordion.Item>
        {/* End - Talla */}

        {/* Start - Marca */}
        <Accordion.Item eventKey="4">
          <Accordion.Header>
            <h5 className="fw-bolder fs-6">Marca</h5>
          </Accordion.Header>
          <Accordion.Body>
            {Iters(Brands, "brands")}

            {/* Agregar Mostrar las 132 Marcas */}
          </Accordion.Body>
        </Accordion.Item>
        {/* End - Marca */}

        {/* Start - Material del marco */}
        <Accordion.Item eventKey="5">
          <Accordion.Header>
            <h5 className="fw-bolder fs-6">Material del marco</h5>
          </Accordion.Header>
          <Accordion.Body>{Iters(materials, "materials")}</Accordion.Body>
        </Accordion.Item>
        {/* End - Material del marco */}

        {/* Start - Frenos */}
        <Accordion.Item eventKey="6">
          <Accordion.Header>
            <h5 className="fw-bolder fs-6">Frenos</h5>
          </Accordion.Header>
          <Accordion.Body>{Iters(Frenos, "frenos")}</Accordion.Body>
        </Accordion.Item>
        {/* End - Frenos */}

        {/* Start - Rines */}
        <Accordion.Item eventKey="7">
          <Accordion.Header>
            <h5 className="fw-bolder fs-6">Rines</h5>
          </Accordion.Header>
          <Accordion.Body>{Iters(Rines, "rine")}</Accordion.Body>
        </Accordion.Item>
        {/* End - Rines */}

        {/* Start - Año */}
        <Accordion.Item eventKey="8">
          <Accordion.Header>
            <h5 className="fw-bolder fs-6">Año</h5>
          </Accordion.Header>
          <Accordion.Body>{Iters(years, "years")}</Accordion.Body>
        </Accordion.Item>
        {/* End - Año */}

        {/* Start - Precio */}
        <Accordion.Item eventKey="9">
          <Accordion.Header>
            <h5 className="fw-bolder fs-6">Precio</h5>
          </Accordion.Header>
          <Accordion.Body>
            <Row className="mb-3 d-flex align-items-end">
              <Form.Group as={Col} controlId="formGridEmail">
                <Form.Label>Mínimo</Form.Label>
                <Form.Control
                  type="number"
                  placeholder="$ 0.00"
                  className="px-2"
                  onChange={(e) => {
                    let minPrice;
                    if (e.target.value === "") {
                      minPrice = 0;
                    } else {
                      minPrice = parseInt(e.target.value);
                    }

                    setSelectedFilters((prevFilters) => {
                      setFilters({ minPrice: minPrice });
                      return { ...prevFilters, minPrice: minPrice };
                    });
                  }}
                />
              </Form.Group>
              <Col sm="auto" className="py-2 px-0">
                <span className="fw-bolder text-secondary d-none d-sm-block">
                  -
                </span>
              </Col>
              <Form.Group as={Col} controlId="formGridPassword">
                <Form.Label>Máximo</Form.Label>
                <Form.Control
                  type="number"
                  placeholder="$"
                  onChange={(e) =>
                    setSelectedFilters((prevFilters) => {
                      let maxPrice;
                      if (e.target.value === "") {
                        maxPrice = Infinity;
                      } else {
                        maxPrice =  parseInt(e.target.value);
                      }

                      setFilters({ maxPrice: maxPrice });
                      return { ...prevFilters, maxPrice };
                    })
                  }
                />
              </Form.Group>
            </Row>
          </Accordion.Body>
        </Accordion.Item>
        {/* End - Precio */}
      </Accordion>
    </div>
  );
}
