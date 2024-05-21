import React from 'react';
import { Box, Table, Thead, Tbody, Tr, Th, Td, Heading } from '@chakra-ui/react';

interface VerificationResultProps {
  result: any[];
}

const VerificationResult: React.FC<VerificationResultProps> = ({ result }) => {
  return (
    <Box mt={8} maxW="full" overflowX="auto">
      <Heading as="h2" size="lg" mb={4} textAlign="center">
        Verification Results
      </Heading>
      <Box maxH="500px" overflowY="auto">
        <Table variant="striped" colorScheme="teal" size="sm">
          <Thead>
            <Tr>
              <Th>Company Name</Th>
              {/* <Th>Alias</Th> */}
              <Th>Post Text</Th>
              <Th>Is About Company</Th>
              <Th>Is About Wellbeing</Th>
            </Tr>
          </Thead>
          <Tbody>
            {result.map((item, index) => (
              <Tr key={index}>
                <Td>{item['Company Name Alias']}</Td>
                {/* <Td>{item['Alias']}</Td> */}
                <Td>{item['Post Text']}</Td>
                <Td>{item['is_about_company']}</Td>
                <Td>{item['is_about_wellbeing']}</Td>
              </Tr>
            ))}
          </Tbody>
        </Table>
      </Box>
    </Box>
  );
};

export default VerificationResult;
