import React from 'react';
import styled from 'styled-components';

const TableContainer = styled.div`
  overflow-x: auto;
  margin: 20px;
`;

const Table = styled.table`
  width: 100%;
  border-collapse: collapse;
  margin-top: 10px;
`;

const Th = styled.th`
  background-color: #007bff;
  color: white;
  padding: 15px;
  text-align: left;
`;

const Td = styled.td`
  padding: 15px;
  text-align: left;
  border: 1px solid #ddd;
`;

const ProductTable = () => {
  const products = [
    {
      model: 'H705A',
      title: 'Govee RGBIC Permanent Outdoor Lights',
      colors: 'RGBIC',
      length: '100ft (30m)',
      controlMethods: 'APP, Voice Control',
      voiceControl: 'Google Assistant & Alexa',
      waterproof: 'String Lights--IP67, Control Box & Adapter--IP65',
      voltage: '36V',
      wattage: '72W',
      lumens: '26 Lumen',
      appConnectivity: '2.4GHz Wi-Fi + Bluetooth',
      specialFeatures: 'Energy Efficient, Dimmable, Waterproof, Color Changing, Water Resistant',
    }
  ];


  return (
    <TableContainer>
      <Table>
        <thead>
          <tr>
            <Th>Model</Th>
            <Th>Product Title</Th>
            <Th>Colors</Th>
            <Th>Length</Th>
            <Th>Control Methods</Th>
            <Th>Voice Control</Th>
            <Th>Waterproof</Th>
            <Th>Voltage</Th>
            <Th>Wattage</Th>
            <Th>Lumens</Th>
            <Th>App Connectivity</Th>
            <Th>Special Features</Th>
          </tr>
        </thead>
        <tbody>
          {products.map((product, index) => (
            <tr key={index}>
              <Td>{product.model}</Td>
              <Td>{product.title}</Td>
              <Td>{product.colors}</Td>
              <Td>{product.length}</Td>
              <Td>{product.controlMethods}</Td>
              <Td>{product.voiceControl}</Td>
              <Td>{product.waterproof}</Td>
              <Td>{product.voltage}</Td>
              <Td>{product.wattage}</Td>
              <Td>{product.lumens}</Td>
              <Td>{product.appConnectivity}</Td>
              <Td>{product.specialFeatures}</Td>
            </tr>
          ))}
        </tbody>
      </Table>
    </TableContainer>
  );
};

export default ProductTable;
