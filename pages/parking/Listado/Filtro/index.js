import React, { useEffect, useState } from "react";
import { Accordion, Form, Row, Col, Button } from "react-bootstrap";

import brands from "components/parking/filtros/brands";
import category from "components/parking/filtros/category";
import country from "components/parking/filtros/country";
import frenos from "components/parking/filtros/frenos";
import materials from "components/parking/filtros/material";
import rines from "components/parking/filtros/rines";
import size from "components/parking/filtros/size";
import subcategory from "components/parking/filtros/subcategory";
import suspension from "components/parking/filtros/suspension";
import years from "components/parking/filtros/years";

import { filtersState } from "context/Filters/filtersState";
import { useRouter } from "next/router";
import { useHydrate } from "hooks/hydrate/hydrate";

export default function Filtro() {
	const router = useRouter();

	const setFilters = filtersState((state) => state.setFilters);
	const filters = filtersState((state) => state.filters);
	const ClearFilters = filtersState((state) => state.ClearFilters);

	const hydrate = useHydrate();

	const Iters = (data, category) => {
		return (
			<>
				{data.map((option) => {
					// Verificar si la opción pertenece a la categoría seleccionada
					if (
						filters?.category?.length === 0 ||
						option?.category?.some((c) => filters?.category?.includes(c)) ||
						option.all
					) {
						return (
							<Form.Check
								key={`${option.id}-checkbox-${category}`}
								type={"checkbox"}
								id={`${option.id}-checkbox-${category}`}
								name={`${option.id}-checkbox-${category}`}
								label={option.label}
								value={option.id}
								defaultChecked={filters[category]?.includes(option.id)}
								onChange={(e) => {
									setFilters((prevFilters) => {
										const filters = { ...prevFilters };
										if (e.target.checked) {
											filters[category] = [...filters[category], option.id];
										} else {
											filters[category] = filters[category].filter(
												(filter) => filter !== option.id,
											);
										}
										return filters;
									});
								}}
							/>
						);
					} else {
						return null; // Omitir la opción si no pertenece a la categoría seleccionada
					}
				})}
			</>
		);
	};

	return (
		<div className="separador">
			<div className="sticky-bottom d-grid gap-2">
				<Button
					className="d-none d-xl-block"
					onClick={() => {
						ClearFilters();
						router.reload();
					}}
				>
					Limpiar
				</Button>
			</div>
			<Accordion defaultActiveKey={["1", "10"]} flush alwaysOpen>
				{/* Start - País */}
				<Accordion.Item eventKey="0">
					<Accordion.Header className="py-0">
						<h5 className="fw-bolder fs-6">País</h5>
					</Accordion.Header>

					<Accordion.Body>
						{hydrate && Iters(country, "country")}
					</Accordion.Body>
				</Accordion.Item>
				{/* End - País */}

				{/* Start - Categoría */}
				<Accordion.Item eventKey="1">
					<Accordion.Header className="py-0">
						<h5 className="fw-bolder fs-6">Categoría</h5>
					</Accordion.Header>
					<Accordion.Body>
						{hydrate && Iters(category, "category")}
					</Accordion.Body>
				</Accordion.Item>
				{/* End - Categoría */}

				{/* Start - Subcategoría */}
				<Accordion.Item eventKey="2">
					<Accordion.Header>
						<h5 className="fw-bolder fs-6">Subcategorías</h5>
					</Accordion.Header>
					<Accordion.Body>
						{hydrate && Iters(subcategory, "subcategory")}
					</Accordion.Body>
				</Accordion.Item>
				{/* End - Subcategoría */}

				{/* Start - Talla */}
				<Accordion.Item eventKey="3">
					<Accordion.Header>
						<h5 className="fw-bolder fs-6">Talla</h5>
					</Accordion.Header>
					<Accordion.Body>{hydrate && Iters(size, "size")}</Accordion.Body>
				</Accordion.Item>
				{/* End - Talla */}

				{/* Start - Marca */}
				<Accordion.Item eventKey="4">
					<Accordion.Header>
						<h5 className="fw-bolder fs-6">Marca</h5>
					</Accordion.Header>
					<Accordion.Body>
						{hydrate && Iters(brands, "brands")}

						{/* Agregar Mostrar las 132 Marcas */}
					</Accordion.Body>
				</Accordion.Item>
				{/* End - Marca */}

				{/* Start - Material del marco */}
				<Accordion.Item eventKey="5">
					<Accordion.Header>
						<h5 className="fw-bolder fs-6">Material del marco</h5>
					</Accordion.Header>
					<Accordion.Body>
						{hydrate && Iters(materials, "materials")}
					</Accordion.Body>
				</Accordion.Item>
				{/* End - Material del marco */}

				{/* Start - Suspension */}
				<Accordion.Item eventKey="6">
					<Accordion.Header>
						<h5 className="fw-bolder fs-6">Suspensión</h5>
					</Accordion.Header>
					<Accordion.Body>
						{hydrate && Iters(suspension, "suspension")}
					</Accordion.Body>
				</Accordion.Item>
				{/* End - Suspension */}

				{/* Start - Frenos */}
				<Accordion.Item eventKey="7">
					<Accordion.Header>
						<h5 className="fw-bolder fs-6">Frenos</h5>
					</Accordion.Header>
					<Accordion.Body>{hydrate && Iters(frenos, "frenos")}</Accordion.Body>
				</Accordion.Item>
				{/* End - Frenos */}

				{/* Start - Rines */}
				<Accordion.Item eventKey="8">
					<Accordion.Header>
						<h5 className="fw-bolder fs-6">Rines</h5>
					</Accordion.Header>
					<Accordion.Body>{hydrate && Iters(rines, "rines")}</Accordion.Body>
				</Accordion.Item>
				{/* End - Rines */}

				{/* Start - Año */}
				<Accordion.Item eventKey="9">
					<Accordion.Header>
						<h5 className="fw-bolder fs-6">Año</h5>
					</Accordion.Header>
					<Accordion.Body>{hydrate && Iters(years, "years")}</Accordion.Body>
				</Accordion.Item>
				{/* End - Año */}

				{/* Start - Precio */}
				<Accordion.Item eventKey="10">
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
									defaultValue={filters?.minPrice ?? ""}
									onChange={(e) => {
										let minPrice;
										if (e.target.value === "") {
											minPrice = null;
										} else if (e.target.value === "0") {
											e.target.value = "";
										} else {
											minPrice = parseInt(e.target.value);
										}

										setFilters((prevFilters) => {
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
									placeholder="$ 0.00"
									defaultValue={filters?.maxPrice ?? ""}
									onChange={(e) =>
										setFilters((prevFilters) => {
											let maxPrice;
											if (e.target.value === "") {
												maxPrice = Infinity;
											} else if (e.target.value === "0") {
												e.target.value = "";
											} else {
												maxPrice = parseInt(e.target.value);
											}

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
