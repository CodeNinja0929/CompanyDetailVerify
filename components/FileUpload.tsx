import React, { useState } from 'react';
import { Box, Button, Input, VStack, Text } from '@chakra-ui/react';

const FileUpload: React.FC<{ onUpload: (file: File) => void }> = ({ onUpload }) => {
  const [selectedFile, setSelectedFile] = useState<File | null>(null);

  const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    setSelectedFile(file || null);
  };

  const handleVerify = () => {
    if (selectedFile) {
      onUpload(selectedFile);
    }
  };

  return (
    <VStack spacing={4} align="center" mt={4}>
      <Input 
        type="file" 
        accept=".xlsx" 
        onChange={handleFileChange} 
        p={2} 
        bg="white" 
        borderRadius="md"
        shadow="sm"
      />
      <Button 
        onClick={handleVerify} 
        disabled={!selectedFile} 
        colorScheme="teal" 
        size="lg"
      >
        Verify
      </Button>
      {selectedFile && (
        <Text fontSize="sm" color="gray.500">
          {selectedFile.name}
        </Text>
      )}
    </VStack>
  );
};

export default FileUpload;
