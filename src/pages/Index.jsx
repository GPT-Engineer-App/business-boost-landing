import { Box, Flex, Heading, Text, Button, Image, useBreakpointValue, VStack, SimpleGrid, Icon } from '@chakra-ui/react';
import { FaBars, FaRegAddressCard, FaBriefcase, FaPhone } from 'react-icons/fa';

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
      <VStack spacing={4} p={8} alignItems="center">
        <Icon as={FaRegAddressCard} w={10} h={10} />
        <Heading as="h2" size="lg">About Us</Heading>
        <Text textAlign="center">We are dedicated to delivering outstanding service and tailored solutions to elevate your business.</Text>
      </VStack>
      <SimpleGrid columns={{ base: 1, md: 3 }} spacing={10} py={10} px={5}>
        <VStack spacing={3}>
          <Icon as={FaBriefcase} w={8} h={8} />
          <Text fontWeight="bold">Consulting</Text>
          <Text textAlign="center">Professional advice to optimize your business operations and strategy.</Text>
        </VStack>
        <VStack spacing={3}>
          <Icon as={FaBriefcase} w={8} h={8} />
          <Text fontWeight="bold">Development</Text>
          <Text textAlign="center">Custom software solutions to meet your business needs.</Text>
        </VStack>
        <VStack spacing={3}>
          <Icon as={FaBriefcase} w={8} h={8} />
          <Text fontWeight="bold">Support</Text>
          <Text textAlign="center">Ongoing support and maintenance for all our services and solutions.</Text>
        </VStack>
      </SimpleGrid>
      <VStack spacing={4} p={8} alignItems="center" bg="gray.100">
        <Icon as={FaPhone} w={10} h={10} />
        <Heading as="h2" size="lg">Contact</Heading>
        <Text textAlign="center">Reach out to us for any inquiries or support needs you might have.</Text>
      </VStack>
      <Flex as="footer" p={4} justifyContent="center" borderTop="1px" borderColor="gray.200">
        <Text fontSize="sm">© 2023 YourBusinessName. All rights reserved.</Text>
      </Flex>
    </Box>
  );
};

export default Index;