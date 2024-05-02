import { Box, Flex, Heading, Text, Button, Image, useBreakpointValue } from '@chakra-ui/react';
import { FaBars } from 'react-icons/fa';

const Index = () => {
  const isMobile = useBreakpointValue({ base: true, md: false });

  return (
    <Box>
      <Flex as="header" align="center" justify="space-between" p={4} borderBottom="1px" borderColor="gray.200">
        <Heading size="lg">YourBusinessName</Heading>
        <FaBars size="24px" display={{ md: 'none' }} />
        <Flex display={{ base: 'none', md: 'flex' }} gap={4}>
          <Button variant="ghost">Home</Button>
          <Button variant="ghost">About</Button>
          <Button variant="ghost">Services</Button>
          <Button variant="ghost">Contact</Button>
        </Flex>
      </Flex>
      <Flex direction="column" align="center" justify="center" h="calc(100vh - 64px)">
        <Heading as="h1" size="2xl" textAlign="center" mb={4}>
          Elevate Your Business with Our Solutions
        </Heading>
        <Text fontSize="lg" textAlign="center" mb={6}>
          We provide innovative and tailored solutions that drive success.
        </Text>
        <Button size="lg" colorScheme="blue">Get Started</Button>
      </Flex>
      <Flex as="footer" p={4} justifyContent="center" borderTop="1px" borderColor="gray.200">
        <Text fontSize="sm">© 2023 YourBusinessName. All rights reserved.</Text>
      </Flex>
    </Box>
  );
};

export default Index;