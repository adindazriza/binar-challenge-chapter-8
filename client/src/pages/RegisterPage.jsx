import { useFormik } from "formik";
import {
  Box,
  Button,
  Flex,
  FormControl,
  FormLabel,
  Input,
  Select,
  Text,
  useToast,
  Image,
  VStack
} from "@chakra-ui/react";

export default function RegisterPage() {
    const formik = useFormik({
        initialValues: {
          username: '',
          email: '',
          password: '',
          gender: '',
          bod: '',
        },
        onSubmit: values => {
          console.log(values, 'ini dari on submit formik');
        },
      });
    
  return (
    <Flex bg="gray.100" align="center" justify="center" h="100vh">
      <Box bg="white" p={100} rounded="md">
        <form onSubmit={formik.handleSubmit}>
          <VStack spacing={4} align="flex-start">
            <Image
              borderRadius='full'
              boxSize='150px'
              src='https://bit.ly/dan-abramov' 
              alt='Dan Abramov'
            />
            <FormControl>
              <FormLabel htmlFor="email">Email Address</FormLabel>
              <Input
                id="email"
                name="email"
                type="email"
                variant="filled"
                onChange={formik.handleChange}
                value={formik.values.email}
              />
            </FormControl>
            <FormControl>
              <FormLabel htmlFor="username">Username</FormLabel>
              <Input
                id="username"
                name="username"
                type="text"
                variant="filled"
                onChange={formik.handleChange}
                value={formik.values.username}
              />
            </FormControl>
            <FormControl>
              <FormLabel htmlFor="password">Password</FormLabel>
              <Input
                id="password"
                name="password"
                type="password"
                variant="filled"
                onChange={formik.handleChange}
                value={formik.values.password}
              />
            </FormControl>
            <FormControl>
              <FormLabel htmlFor="bod">Date of Birth</FormLabel>
              <Input
                id="bod"
                type="date"
                variant="filled"
                onChange={formik.handleChange}
                value={formik.values.bod}
              />
            </FormControl>
            <FormControl>
              <FormLabel htmlFor="gender">Gender</FormLabel>
              <Select
                id="gender"
                name="gender"
                placeholder="Gender"
                variant="filled"
                onChange={formik.handleChange}
                value={formik.values.gender}
              >
                <option>Male</option>
                <option>Female</option>
              </Select>                
            </FormControl>                      
            <Button type="submit" colorScheme="pink" isFullWidth>
              Register
            </Button>
            <Button mt="3" colorScheme="gray" as="a" href="/" >
              Back
            </Button>
          </VStack>
        </form>
      </Box>
    </Flex>
  );
}
