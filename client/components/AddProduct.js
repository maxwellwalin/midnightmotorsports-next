import { useMutation, useQuery } from "@apollo/client";

import gql from "graphql-tag";
import Router from "next/router";
import useForm from "../lib/useForm";
import Form from "./styles/Form.js";
import DisplayError from "./ErrorMessage.js";
import React, { Component } from "react";
import Select from "react-select";

const CREATE_PRODUCT_MUTATION = gql`
  mutation CREATE_PRODUCT_MUTATION($data: PartCreateInput!) {
    createPart(data: $data) {
      id
      label: name
      __typename
    }
  }
`;

export default function AddProduct({ categories, models }) {
  const { inputs, handleChange, clearForm, resetForm } = useForm({
    name: "Test part",
    description: "Test description",
    firstYear: "2020",
    lastYear: "2021",
    price: 1234,
    quantity: 2,
    categories: { value: "61ce38a870a8de22b465ba84", label: "engine" },
    partNumber: "12345",
    //model
  });

  const [createProduct, { loading, error, data }] = useMutation(
    CREATE_PRODUCT_MUTATION,
    {
      variables: {
        data: {
          name: "test part delete",
          description: "asdfasdfasdf",
          year: {
            create: {
              beginningYear: 2001,
              endYear: 2005,
            },
          },
          images: {
            connect: [
              {
                id: "61ce3b7170a8de22b465bbc4",
              },
            ],
          },
          price: 123,
          quantity: 3,
          categories: {
            connect: [
              {
                id: "61ce38a870a8de22b465ba84",
              },
            ],
          },
          partNumber: "asdfasdf",
          model: {
            connect: {
              id: "61ce2a457a81206778bf3e5c",
            },
          },
        },
      },
    }
  );

  const categoryOptions = categories.map((category) => {
    return {
      value: category.name,
      label: category.name,
      type: "category",
      id: category.id,
    };
  });

  const modelOptions = models.map((model) => {
    return {
      value: model.name,
      label: model.name,
      type: "model",
      id: model.id,
    };
  });

  return (
    <Form
      onSubmit={async (e) => {
        e.preventDefault();
        const res = await createProduct();
        console.log(res);
        clearForm();
        // Go to the products page
        // Router.push({
        //   pathname: `/product/${res.data.createProduct.id}`,
        // });
      }}
    >
      <DisplayError error={error} />
      <fieldset disabled={loading} aria-busy={loading}>
        <label htmlFor="name">
          Name
          <input
            type="text"
            name="name"
            id="name"
            placeholder="name"
            value={inputs.name}
            onChange={handleChange}
          />
        </label>
        <label htmlFor="partNumber">
          Part Number
          <input
            type="text"
            name="partNumber"
            id="partNumber"
            placeholder="partNumber"
            value={inputs.partNumber}
            onChange={handleChange}
          />
        </label>
        <label htmlFor="description">
          Description
          <textarea
            name="description"
            id="description"
            placeholder="Description"
            value={inputs.description}
            onChange={handleChange}
          />
        </label>
        <label htmlFor="firstYear">
          First Year
          <input
            type="number"
            name="firstYear"
            id="firstYear"
            placeholder="firstYear"
            value={inputs.firstYear}
            onChange={handleChange}
          />
        </label>
        <label htmlFor="lastYear">
          First Year
          <input
            type="number"
            name="lastYear"
            id="lastYear"
            placeholder="lastYear"
            value={inputs.lastYear}
            onChange={handleChange}
          />
        </label>
        <label htmlFor="image">
          Image
          <input
            required
            type="file"
            name="image"
            id="image"
            onChange={handleChange}
          />
        </label>
        <label htmlFor="price">
          Price
          <input
            type="number"
            name="price"
            id="price"
            placeholder="Price"
            value={inputs.price}
            onChange={handleChange}
          />
        </label>
        <label htmlFor="quantity">
          Quantity
          <input
            type="number"
            name="quantity"
            id="quantity"
            placeholder="quantity"
            value={inputs.quantity}
            onChange={handleChange}
          />
        </label>
        <label htmlFor="category">
          Category
          <Select
            options={categoryOptions}
            name="category"
            id="category"
            onChange={handleChange}
            value={inputs.category}
          />
        </label>
        <label htmlFor="model">
          Model
          <Select
            options={modelOptions}
            name="model"
            id="model"
            onChange={handleChange}
            value={inputs.model}
          />
        </label>

        <button type="submit">+ Add Product</button>
      </fieldset>
    </Form>
  );
}
