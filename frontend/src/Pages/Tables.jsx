import { Alert, Table } from "flowbite-react";
import React, { useEffect, useState } from "react";
import axios from "axios";

const Tables = () => {
  const [companies, setCompanies] = useState([]);
  const [errorMessage, seterrorMessage] = useState("");
  const fetchData = async () => {
    try {
      const res = await axios.get("http://localhost:8000/data/");
      console.log(res.data);
      setCompanies(res.data.myjson);
      if (res.success === false) {
        seterrorMessage(res.message);
      }
    } catch (error) {
      console.log(error);
      seterrorMessage(error.message);
    }
  };
  useEffect(() => {
    fetchData();
  }, []);

  return (
    <div className="overflow-x-auto">
      {errorMessage && <Alert color="failure" className="max-w-xs mx-auto my-2">{errorMessage}</Alert>}
      <Table className="bg-transparent text-white">
        <Table.Head>
          <Table.HeadCell>Name</Table.HeadCell>
          <Table.HeadCell>Industry</Table.HeadCell>
          <Table.HeadCell>Founded</Table.HeadCell>
          <Table.HeadCell>HeadQuarters</Table.HeadCell>
          <Table.HeadCell>Employees</Table.HeadCell>
          <Table.HeadCell>Average Monthly Sale</Table.HeadCell>
          <Table.HeadCell>Revenue</Table.HeadCell>
        </Table.Head>
        <Table.Body className="divide-y">
          {companies.length > 0 &&
            companies.map((item, index) => {
              return (
                <Table.Row key={index} className="">
                  <Table.Cell className="whitespace-nowrap font-medium">
                    {item.name}
                  </Table.Cell>
                  <Table.Cell>{item.industry}</Table.Cell>
                  <Table.Cell>{item.founded}</Table.Cell>
                  <Table.Cell>
                    {item.headquarters.city}, {item.headquarters.country}
                  </Table.Cell>
                  <Table.Cell>{item.employees}</Table.Cell>
                  <Table.Cell>{item.averageMonthlySale}</Table.Cell>
                  <Table.Cell>{item.revenue}</Table.Cell>
                </Table.Row>
              );
            })}
        </Table.Body>
      </Table>
    </div>
  );
};

export default Tables;
