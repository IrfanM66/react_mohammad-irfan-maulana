import React, { useEffect, useState } from "react";
import TableRow from "./TableRow";
import { useSelector } from "react-redux";
import { AxiosError } from "axios";
import axios from "axios";

const Table = ({ lang }) => {
  const products = useSelector((state) => state.products.products);
  const language = useSelector((state) => state.language.form);

   const [data, setData] = useState([]);
  useEffect(() => {
const getDataTable = async() => {
  try {
    const result = await axios.get(
      "https://65224882f43b179384145be6.mockapi.io/products"
    );
    const data = await result.data;
    setData(data);
  } catch (err) {
    if (err instanceof AxiosError) {
      const {
        data: { error },
      } = err.response;
      throw new AxiosError(error);
    }
    throw new Error(err);
  }
};
getDataTable()
 }, []);
console.log(data)


  return (
    <div className="w-75 ms-auto me-auto">
      <table className="table table-striped" id="product_table">
        <thead>
          <tr>
            <th scope="col">ID</th>
            <th data-testid="table-name" scope="col">
              {language.productName[lang]}
            </th>
            <th scope="col">{language.productCategory[lang]}</th>
            <th scope="col">{language.productFreshness[lang]}</th>
            {/* <th scope="col">{productImage[lang]}</th> */}
            {/* <th scope="col">{productDescription[lang]}</th> */}
            <th scope="col">{language.productPrice[lang]}</th>
            <th scope="col">Action</th>
          </tr>
        </thead>
        <tbody>
          {data.map((row) => {
            return <TableRow key={row.id} data={row} />;
          })}
        </tbody>
      </table>
      <form action="">
        <input
          className="form-control w-25"
          type="text"
          placeholder="Search by product name"
        />
        <button className="btn btn-primary">Deletion</button>
        <button className="btn btn-outline-primary">Search</button>
      </form>
    </div>
  );
};

export default Table;
