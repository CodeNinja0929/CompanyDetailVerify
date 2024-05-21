import React, { useState } from 'react';
import { Box, Heading, Spinner, VStack, Text } from '@chakra-ui/react';
import FileUpload from '../components/FileUpload';
import VerificationResult from '../components/VerificationResult';

const IndexPage: React.FC = () => {
  const [verificationResult, setVerificationResult] = useState<any[]>([]);
  const [isLoading, setIsLoading] = useState(false);

  const handleFileUpload = async (file: File) => {
    const formData = new FormData();
    formData.append('file', file);

    setIsLoading(true);

    try {
      const response = await fetch('https://1765-15-204-240-135.ngrok-free.app/api/verify', {
        method: 'POST',
        body: formData,
      });

      if (response.ok) {
        const data = await response.json();
        setVerificationResult(data);
      } else {
        console.error('Failed to verify descriptions');
      }
    } catch (error) {
      console.error('Error uploading file:', error);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <Box maxW="8xl" mx="auto" mt={8} p={4} bg="white" borderRadius="md" shadow="md">
      <Heading as="h1" size="xl" mb={6} textAlign="center">
        Company Detail Verification
      </Heading>
      <FileUpload onUpload={handleFileUpload} />
      {isLoading && (
        <VStack mt={6}>
          <Spinner size="xl" color="teal.500" />
          <Text>Loading...</Text>
        </VStack>
      )}
      {verificationResult.length > 0 && <VerificationResult result={verificationResult} />}
    </Box>
  );
};

export default IndexPage;
